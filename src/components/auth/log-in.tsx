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
import { LogInWithEmailAndPassword } from '@/types/actions'

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
  const [isPending, startTransition] = useTransition()

  const { toast } = useToast()

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
          title: 'Log In Failed!',
          description: (
            <>
              <div>
                There was an issue with your login. Please check your
                credentials and try again.
              </div>
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">Error: {error.message}</code>
              </pre>
            </>
          ),
        })
      } else {
        form.reset()

        toast({
          title: 'Successfully Log In',
          description:
            'You have successfully logged in, you are redirected to your profile.',
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
              'inline-block w-5 h-5 border-[3px] border-white/100 border-t-zinc-600 rounded-full animate-spin',
              { hidden: !isPending }
            )}
          ></div>
        </Button>
      </form>
    </Form>
  )
}
