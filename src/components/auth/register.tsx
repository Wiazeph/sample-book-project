'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
// shadcn/ui
import { cn } from '@/lib/utils'
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
import { useToast } from '@/components/ui/use-toast'
// shadcn/ui
import { useTransition } from 'react'
import { redirect } from 'next/navigation'
import { RegisterWithEmailAndPassword } from '@/utils/supabase/actions/auth'

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
  const [isPending, startTransition] = useTransition()

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: '',
      full_name: '',
      username: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
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

      if (!result?.error) {
        form.reset()

        toast({
          title: 'Successfully Register',
          description:
            'You have successfully registered. You can verify with the e-mail sent to the address you entered.',
        })

        redirect('/')
      } else {
        toast({
          variant: 'destructive',
          title: 'Registration Failed!',
          description: 'There was an error during registration.',
        })
      }
    })
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

        <Button type="submit" className="w-full flex gap-x-2">
          Get Started
          <div
            className={cn(
              'inline-block w-5 h-5 border-[3px] border-white/100 border-t-zinc-600 rounded-full animate-spin',
              { hidden: !isPending }
            )}
          ></div>
        </Button>
      </form>
    </Form>
  )
}
