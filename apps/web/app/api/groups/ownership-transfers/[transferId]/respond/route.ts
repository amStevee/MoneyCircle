import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function POST(
  request: Request,
  { params }: { params: Promise<{ transferId: string }> }
) {
  try {
    const authorization = request.headers.get("authorization")
    const { transferId } = await params
    const body = await request.json()
    const response = await api.post(
      `/api/v1/groups/ownership-transfers/${transferId}/respond`,
      body,
      { headers: authorization ? { Authorization: authorization } : {} }
    )

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data?.message || "Server Error" },
      { status: error.response?.status || 500 }
    )
  }
}
