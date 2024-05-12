import Link from 'next/link'
import React from 'react'

export default function Logout() {
  return (
    <div>
        <p>You've been logged out.</p>
        <p><Link href="/login">Sign In</Link></p>
        <p><Link href="/">Home Page</Link></p>
    </div>
  )
}
