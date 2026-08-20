import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")

    const response = await api.get(`/api/v1/auth/signup-context`, {
      params: { token },
    })

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

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")
    const body = await request.json()

    const response = await api.post(`/api/v1/auth/signup`, body, {
      params: { token },
    })

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
