export interface User {
  email: string;
  phone?: string;
  password_hash?: string;
  first_name: string;
  last_name: string;
  avatar_url?: string;
  email_verified_at?: Date;
  status?: Status;
}

export interface SafeUser {
  id: string;
  email: string;
  phone: string | null;
  first_name: string;
  last_name: string;
  avatar_url: string | null;
  status: Status;
}

enum Status {
  PENDING,
  VERIFIED,
  UNSUBSCRIBED,
}
