import React from 'react'
import Logo from './ui/Logo'
import Menu from './ui/Menu'


function Header() {
    return (
        <header className='p-4 sticky'>
            <div className="md:container flex items-center justify-between">
                <Logo text='LiteraryLuxe' />
                <div className="flex gap-10">
                    <Menu />
                </div>
            </div>
        </header>
    )
}

export default Header