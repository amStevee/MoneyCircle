import api from "./apiAxios"

export interface ApiGroup { id: string; name: string; description: string; contributionAmount: number; currency: string; frequency: string; memberCount: number; memberLimit: number; contributionsMade: number; status: string; startDate: string }
export interface ApiPayment { id: string; reference: string; groupId: string | null; groupName: string; amount: number; currency: string; date: string; status: string; type: string; cycle: number | null }
export interface DueContribution { id: string; groupId: string; groupName: string; amount: number; currency: string; cycle: number; dueDate: string; status: string }

export const apiClient = {
  dashboard: () => api.get("/dashboard").then(r => r.data),
  groups: () => api.get<ApiGroup[]>("/groups").then(r => r.data),
  group: (id: string) => api.get(`/groups/${id}`).then(r => r.data),
  createGroup: (data: unknown) => api.post("/groups", data).then(r => r.data),
  payments: () => api.get<ApiPayment[]>("/payments").then(r => r.data),
  payment: (id: string) => api.get(`/payments/${id}`).then(r => r.data),
  dueContributions: () => api.get<DueContribution[]>("/payments/due").then(r => r.data),
  payContribution: (contributionId: string) => api.post("/payments/contributions/initialize", { contributionId }).then(r => r.data),
  me: () => api.get("/users/me").then(r => r.data),
  updateMe: (data: { first_name: string; last_name: string; phone: string | null }) => api.patch("/users/me", data).then(r => r.data),
  logout: () => api.post("/auth/logout"),
}
