import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ groupId: string }> }
) {
  try {
    const { groupId } = await params
    const authorization = request.headers.get("authorization")

    const response = await api.get(`/api/v1/groups/${groupId}/invitations`, {
      headers: authorization ? { Authorization: authorization } : {},
    })

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data?.message || "Server Error" },
      { status: error.response?.status || 500 }
    )
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ groupId: string }> }
) {
  try {
    const { groupId } = await params
    const authorization = request.headers.get("authorization")
    const body = await request.json()

    const response = await api.post(
      `/api/v1/groups/${groupId}/invitations`,
      body,
      {
        headers: authorization ? { Authorization: authorization } : {},
      }
    )

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json(
      { error: error.response?.data?.message || "Server Error" },
      { status: error.response?.status || 500 }
    )
  }
}
