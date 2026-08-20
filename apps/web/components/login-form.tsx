"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, useState } from "react"
import { useUserStore } from "@/store/useUserStore"
import { useRouter } from "next/navigation"
import { toast } from "react-toastify"
import axios from "axios"

interface LoginFormState {
  email: string
  password: string
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const setSession = useUserStore((state) => state.setSession)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    try {
      const { data } = await axios.post("/api/login", formData)

      const { user, token: authToken } = data.data
      setSession(user, authToken)
      toast.success("Logged in successfully")
      router.push("/dashboard")
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="m@example.com"
            required
            className="bg-background"
            name="email"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="bg-background"
            name="password"
          />
        </Field>
        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </Field>
        <Field>
          <FieldDescription className="px-6 text-center">
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
