WITH latest_schedules AS (
  SELECT DISTINCT ON ("circle_id") *
  FROM "savings_schedules"
  ORDER BY "circle_id", "created_at" DESC
)
INSERT INTO "contributions" (
  "id",
  "circle_id",
  "circle_member",
  "cycle_number",
  "amount",
  "due_date",
  "status",
  "updated_at"
)
SELECT
  gen_random_uuid()::text,
  schedule."circle_id",
  member."user_id",
  cycle.number,
  schedule."contribution_amount",
  CASE schedule."frequency"
    WHEN 'WEEKLY' THEN schedule."start_date" + make_interval(days => (cycle.number - 1) * 7)
    WHEN 'MONTHLY' THEN schedule."start_date" + make_interval(months => cycle.number - 1)
    WHEN 'YEARLY' THEN schedule."start_date" + make_interval(years => cycle.number - 1)
  END,
  'PENDING',
  CURRENT_TIMESTAMP
FROM latest_schedules AS schedule
JOIN "savings_circles" AS circle
  ON circle."id" = schedule."circle_id"
JOIN "circle_members" AS member
  ON member."circle_id" = schedule."circle_id"
CROSS JOIN LATERAL generate_series(1, schedule."total_cycles") AS cycle(number)
WHERE member."status" = 'ACTIVE'
  AND circle."status" <> 'ARCHIVED'
ON CONFLICT ("circle_id", "circle_member", "cycle_number") DO NOTHING;
