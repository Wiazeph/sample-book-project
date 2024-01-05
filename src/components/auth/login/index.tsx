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
import { useTransition } from 'react'
import { cn } from '@/lib/utils'
import { LogInWithEmailAndPassword } from '@/types/actions'
import { redirect } from 'next/navigation'

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),

  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters',
    })
    .max(32, {
      message: 'Password must be less than 32 characters',
    }),
})

export default function LogInForm() {
  const [isLoading, startTransition] = useTransition()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await LogInWithEmailAndPassword({
        email: values.email,
        password: values.password,
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
              <code className="text-white">Successfully Log In</code>
            </pre>
          ),
        })

        redirect('/profile')
      }
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="Log-In Form max-w-80 space-y-4"
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
        <Button type="submit" className="w-full flex gap-x-2">
          Log In
          <div
            className={cn(
              'inline-block w-6 h-6 border-4 border-white/100 border-t-zinc-600 rounded-full animate-spin',
              { hidden: !isLoading }
            )}
          ></div>
        </Button>
      </form>
    </Form>
  )
}
