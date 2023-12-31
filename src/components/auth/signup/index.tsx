'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
// shadcn/ui
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

import { supabase } from '@/utils/supabase/client'

const formSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email.',
    }),

    full_name: z
      .string()
      .min(3, {
        message: 'Full name must be at least 3 characters',
      })
      .max(25, {
        message: 'Full name must be less than 32 characters',
      }),

    username: z
      .string()
      .min(4, {
        message: 'Username must be at least 2 characters',
      })
      .max(25, {
        message: 'Username must be less than 25 characters',
      }),

    password: z
      .string()
      .min(6, {
        message: 'Password must be at least 6 characters',
      })
      .max(32, {
        message: 'Password must be less than 32 characters',
      }),

    confirm: z
      .string()
      .min(6, {
        message: 'Password must be at least 6 characters',
      })
      .max(32, {
        message: 'Password must be less than 32 characters',
      }),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Password cannot be different from the confirmation',
    path: ['confirm'],
  })

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      full_name: '',
      username: '',
      password: '',
      confirm: '',
    },
  })

  const { toast } = useToast()

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'You submitted following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })

    supabase.auth.signUp({
      ...values,
      options: {
        data: {
          username: values.username,
          full_name: values.full_name,
        },
      },
    })
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="Sign-Up Form max-w-80 space-y-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please enter your password"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Confirm</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Please enter your password again"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Get Started
          </Button>
        </form>
      </Form>
    </>
  )
}
