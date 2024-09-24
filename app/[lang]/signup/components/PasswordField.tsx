'use client';

import { Input } from "@/components/shadcn/input";
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";




function PasswordField() {
    const [fieldType, setFieldType] = useState('password');
    return (
        <div className="relative">
            <Input id="password" type={fieldType} placeholder="create a password" name="password" required className='border-accent-200 p-4 text-base text-neutral placeholder:text-neutral-300' />
            {
                fieldType === 'password' ? <EyeIcon onClick={() => setFieldType('text')} className='absolute right-4 top-5 text-neutral-300' /> : <EyeOff onClick={() => setFieldType('password')} className='absolute right-4 top-5 text-neutral-300' />
            }
        </div>
    )
}


export default PasswordField