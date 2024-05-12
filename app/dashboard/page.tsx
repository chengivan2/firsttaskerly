import React from 'react'
import { createClient } from "@/utils/supabase/server";
import Todoform from './addtodos/todoform';
import Link from 'next/link';

export default async function page() {
    const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return ( user?
    <Todoform /> :
    <div>You need to <Link href="/login">Sign In</Link></div>)
}
