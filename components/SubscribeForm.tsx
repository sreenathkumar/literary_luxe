'use client'

import { FormEvent, useState } from "react"
import { Button } from "./ui/shadcn/button"
import { Input } from "./ui/shadcn/input"
import { subscribeToNewsLetter } from "@/actions/newsletter";
import { cn } from "@/lib/utils";

function SubscribeForm() {
  const [status, setStatus] = useState<null | { status: string, message: string }>(null);

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const response = await subscribeToNewsLetter(formData);
    setStatus(response);
  }
  return (
    <form onSubmit={subscribe} className={cn('flex flex-col gap-2')}>
      {status && <p className={cn(`${status.status === 'success' ? 'text-green-500' : 'text-red-500'} text-xs`)}>{status.message}</p>}
      <div onSubmit={subscribe} className={("self-stretch justify-start items-start gap-4 inline-flex")}>
        <Input type="email" name="email" required placeholder="Enter your email" className="text-neutral" />
        <Button variant='outline' type="submit" className="border-accent text-accent px-6 py-4">Subscribe</Button>
      </div>
    </form>

  )
}

export default SubscribeForm