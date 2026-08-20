import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await api.post(`/api/v1/auth/login`, body)

    return NextResponse.json({ success: true, data: response.data })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.response?.data?.message || "Server Error",
      },
      { status: error.response?.status || 500 }
    )
  }
}
