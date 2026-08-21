import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function POST(request: Request) {
  try {
    const authorization = request.headers.get("authorization")
    const body = await request.json()

    const response = await api.post(
      "/api/v1/payments/contributions/initialize",
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
