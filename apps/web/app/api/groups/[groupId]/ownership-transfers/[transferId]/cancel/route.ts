import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function POST(
  request: Request,
  { params }: { params: Promise<{ groupId: string; transferId: string }> }
) {
  try {
    const authorization = request.headers.get("authorization")
    const { groupId, transferId } = await params
    const response = await api.post(
      `/api/v1/groups/${groupId}/ownership-transfers/${transferId}/cancel`,
      {},
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
