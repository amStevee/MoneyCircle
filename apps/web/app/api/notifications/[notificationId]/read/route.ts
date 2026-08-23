import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ notificationId: string }> }
) {
  try {
    const { notificationId } = await params
    const authorization = request.headers.get("authorization")

    const response = await api.patch(
      `/api/v1/notifications/${notificationId}/read`,
      {},
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
