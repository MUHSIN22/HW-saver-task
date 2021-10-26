import React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'

export default function Header() {
    return (
        <header className="pc-header">
            <h1 className="logo">MYLOGO</h1>
            <div className="user-and-logout">
                <p>UserName <AiOutlineCaretDown/></p>
            </div>
        </header>
    )
}
