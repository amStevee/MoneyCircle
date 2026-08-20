export interface User {
  id: string;
  email: string;
  phone: string;
  password_hash?: string;
  first_name: string;
  last_name: string;
  avatar_url?: string;
  email_verified_at?: Date;
  status?: Status;
  created_at?: Date;
  updated_at?: Date;
}

enum Status {
  PENDING,
  VERIFIED,
  UNSUBSCRIBED,
}
