'use client'

import { useParams } from "next/navigation";
import { Button } from "../shadcn/button";
import { signIn } from "next-auth/react";

function FacebookAuth() {
  const params = useParams();
  const returnTo = params?.returnTo;


  // Handle the case when it's an array, a string, or undefined
  const returnToString = Array.isArray(returnTo)
    ? returnTo.join('/')  // Convert array to string if it's an array
    : returnTo || '';     // Use empty string if undefined


  const handleLogin = async () => {
    if (returnTo) {
      await signIn('facebook', { redirectTo: returnToString })
    }
    else {
      await signIn('facebook', { redirectTo: '/dashboard' })
    }
  }
  return (
    <Button className="gap-2 bg-accent-900 border-accent-900" onClick={handleLogin}>
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 10.5C20.5 4.97658 16.0234 0.5 10.5 0.5C4.97658 0.5 0.5 4.97658 0.5 10.5C0.5 15.4922 4.15625 19.6289 8.9375 20.3789V13.3906H6.39842V10.5H8.9375V8.29688C8.9375 5.791 10.4297 4.40625 12.7148 4.40625C13.8086 4.40625 14.9531 4.60156 14.9531 4.60156V7.0625H13.6914C12.4492 7.0625 12.0625 7.834 12.0625 8.625V10.5H14.8359L14.3926 13.3906H12.0625V20.3789C16.8438 19.6289 20.5 15.4922 20.5 10.5Z" fill="#1877F2" />
        <path d="M14.3926 13.3906L14.8359 10.5H12.0625V8.625C12.0625 7.834 12.4492 7.0625 13.6914 7.0625H14.9531V4.60156C14.9531 4.60156 13.8086 4.40625 12.7149 4.40625C10.4297 4.40625 8.93752 5.791 8.93752 8.29687V10.5H6.39844V13.3906H8.93752V20.3789C9.44727 20.459 9.96877 20.5 10.5 20.5C11.0313 20.5 11.5528 20.459 12.0625 20.3789V13.3906H14.3926Z" fill="white" />
      </svg>

      <span className="text-sm text-neutral">Facebook</span>
    </Button>
  )
}

export default FacebookAuth