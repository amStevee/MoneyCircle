import { NextResponse } from "next/server"
import api from "@/lib/apiAxios"

export async function GET(request: Request) {
  try {
    const authorization = request.headers.get("authorization")

    const response = await api.get("/api/v1/users/me", {
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

export async function PATCH(request: Request) {
  try {
    const authorization = request.headers.get("authorization")
    const body = await request.json()

    const response = await api.patch("/api/v1/users/me", body, {
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

export async function DELETE(request: Request) {
  try {
    const authorization = request.headers.get("authorization")

    const response = await api.delete("/api/v1/users/me", {
      headers: authorization ? { Authorization: authorization } : {},
    })

    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json(
      // Forward the whole body: a 409 carries `groups` (owned groups that
      // need resolving) which the profile page uses to refresh its list.
      {
        error: error.response?.data?.message || "Server Error",
        ...(error.response?.data ?? {}),
      },
      { status: error.response?.status || 500 }
    )
  }
}
