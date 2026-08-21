"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useUserStore } from "@/store/useUserStore"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import axios from "axios"

interface SignupFormState {
  email: string
  first_name: string
  last_name: string
  password: string
  confirm_password: string
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [formData, setFormData] = useState<SignupFormState>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  })

  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const [loading, setLoading] = useState(false)
  const [contextLoading, setContextLoading] = useState(!!token)
  const router = useRouter()
  const setSession = useUserStore((state) => state.setSession)

  useEffect(() => {
    if (!token) return

    let cancelled = false

    async function getSignupContext() {
      setContextLoading(true)
      try {
        const { data } = await axios.get("/api/signup", {
          params: { token },
        })

        if (!cancelled) {
          setFormData((prevData) => ({
            ...prevData,
            email: data?.data?.email ?? "",
          }))
        }
      } catch (error: any) {
        if (!cancelled) {
          toast.error(
            error.response?.data?.error || "Invalid or expired signup invitation"
          )
        }
      } finally {
        if (!cancelled) {
          setContextLoading(false)
        }
      }
    }

    getSignupContext()

    return () => {
      cancelled = true
    }
  }, [token])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match")
      return
    }

    setLoading(true)

    try {
      const { data } = await axios.post(
        "/api/signup",
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
        },
        {
          params: {
            token,
          },
        }
      )

      const { user, token: authToken } = data.data
      setSession(user, authToken)
      toast.success("Account created successfully")
      router.push("/dashboard")
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Signup failed")
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
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Fill in the form below to create your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="first_name">Firstname</FieldLabel>
          <Input
            id="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="John"
            required
            className="bg-background"
            name="first_name"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="last_name">Lastname</FieldLabel>
          <Input
            id="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Doe"
            required
            className="bg-background"
            name="last_name"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          {token ? (
            <Input
              id="email"
              type="email"
              value={formData.email}
              placeholder={contextLoading ? "Loading..." : "m@example.com"}
              required
              className="bg-background"
              name="email"
              readOnly
              disabled={contextLoading}
            />
          ) : (
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
          )}
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email
            with anyone else.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
            className="bg-background"
            name="password"
          />
          <FieldDescription>
            Must be at least 8 characters long.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm_password">Confirm Password</FieldLabel>
          <Input
            id="confirm_password"
            type="password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
            minLength={8}
            className="bg-background"
            name="confirm_password"
          />
          <FieldDescription>Please confirm your password.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" disabled={loading || contextLoading}>
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </Field>
        <FieldSeparator />
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <a href="/login">Sign in</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
