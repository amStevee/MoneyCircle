type  ContributionFrequency = "WEEKLY" | "MONTHLY"| "YEARLY";

function calculateCircleDueDate(startDate: Date, frequency: ContributionFrequency, cycle_number: number): Date {
    if (cycle_number < 1) {
        throw new Error("Cycle number must be greater than or equal to 1");
    }

    const dueDate = new Date(startDate);
    switch (frequency) {
        case "WEEKLY":
            dueDate.setDate(dueDate.getDate() + (cycle_number - 1) * 7);
            break;
        case "MONTHLY":
            dueDate.setMonth(dueDate.getMonth() + (cycle_number - 1));
            break;
        case "YEARLY":
            dueDate.setFullYear(dueDate.getFullYear() + (cycle_number - 1));
            break;
    }

    return dueDate;
}

export { calculateCircleDueDate };