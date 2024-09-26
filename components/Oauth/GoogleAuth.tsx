'use client'
import { useParams } from 'next/navigation'
import { Button } from '../shadcn/button'
import { signIn } from 'next-auth/react'

function GoogleAuth() {
    const params = useParams();
    const returnTo = params?.returnTo;

    // Handle the case when it's an array, a string, or undefined
    const returnToString = Array.isArray(returnTo)
        ? returnTo.join('/')  // Convert array to string if it's an array
        : returnTo || '';     // Use empty string if undefined


    const handleLogin = async () => {
        if (returnTo) {
            await signIn('google', { redirectTo: returnToString })
        }
        else {
            await signIn('google', { redirectTo: '/dashboard' })
        }
    }
    return (
        <Button className="gap-2 bg-accent-900 border-accent-900" onClick={handleLogin}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0354 10.7281C20.0363 10.0466 19.9782 9.3664 19.862 8.69482H10.3662V12.546H15.805C15.6937 13.1611 15.4581 13.7475 15.1125 14.2697C14.7669 14.792 14.3183 15.2393 13.7939 15.5848V18.0846H17.0398C18.9404 16.3444 20.0354 13.771 20.0354 10.7281Z" fill="#4285F4" />
                <path d="M10.3662 20.5C13.0834 20.5 15.3714 19.6139 17.0398 18.0862L13.7939 15.5864C12.8905 16.1947 11.7269 16.5419 10.3662 16.5419C7.73979 16.5419 5.51058 14.7836 4.71344 12.4143H1.36963V14.9906C2.2077 16.6467 3.4928 18.0389 5.08144 19.0118C6.67008 19.9847 8.49975 20.4999 10.3662 20.5Z" fill="#34A853" />
                <path d="M4.71336 12.414C4.29194 11.1724 4.29194 9.82793 4.71336 8.58639V6.01013H1.36955C0.664536 7.40333 0.297363 8.94096 0.297363 10.5002C0.297363 12.0594 0.664536 13.597 1.36955 14.9902L4.71336 12.414Z" fill="#FBBC04" />
                <path d="M10.3662 4.45879C11.8021 4.43549 13.1896 4.97429 14.2288 5.95872L17.1027 3.10469C15.2804 1.40488 12.8661 0.471659 10.3662 0.500656C8.49975 0.500741 6.67008 1.01598 5.08144 1.98886C3.4928 2.96174 2.2077 4.35397 1.36963 6.0101L4.71344 8.58636C5.51058 6.21704 7.73979 4.45879 10.3662 4.45879Z" fill="#EA4335" />
            </svg>
            <span className="text-sm text-neutral">Google</span>
        </Button>
    )
}

export default GoogleAuth