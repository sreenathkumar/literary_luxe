import React from 'react'
import SocialIcons from './SocialIcons'
import { cn } from '@/lib/utils'

function FooterBottom() {
    return (
        <div className={cn("self-stretch mt-12 py-6 border-t border-neutral-800 flex flex-wrap gap-6 justify-center md:justify-between")}>
            <div className="justify-start items-center gap-6 flex">
                <span className={cn('text-sm text-neutral-200')}>© 2024 LiteraryLuxe. All rights reserved.</span>
                <div className="justify-start items-start gap-2 flex">
                    <div className="text-white/80 text-sm font-normal font-['Roboto'] underline leading-tight">Privacy Policy</div>
                    <div className="text-white/80 text-sm font-normal font-['Roboto'] underline leading-tight">Terms of Service</div>
                    <div className="text-white/80 text-sm font-normal font-['Roboto'] underline leading-tight">Cookies Settings</div>
                </div>
            </div>
            <SocialIcons className="flex gap-4 self-center" />
        </div>
    )
}

export default FooterBottom