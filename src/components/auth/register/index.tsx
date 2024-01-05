'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
// shadcn/ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
// shadcn/ui
import { RegisterWithEmailAndPassword } from '@/types/actions'

const formSchema = z
  .object({
    email: z.string().email({
      message: 'Please enter a valid email.',
    }),

    full_name: z
      .string()
      .min(2, {
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

export default function RegisterForm() {
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await RegisterWithEmailAndPassword({
      email: values.email,
      password: values.password,
      confirm: values.confirm,
      options: {
        data: {
          full_name: values.full_name,
          username: values.username,
        },
      },
    })

    const { error } = JSON.parse(result)

    if (error?.message) {
      toast({
        variant: 'destructive',
        title: 'You submitted following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{error.message}</code>
          </pre>
        ),
      })
    } else {
      form.reset()

      toast({
        title: 'You submitted following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">Successfully Register</code>
          </pre>
        ),
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="Register Form max-w-80 space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Please enter your email"
                  {...field}
                  type="email"
                />
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
  )
}