import React from 'react'
import { createClient } from "@/utils/supabase/server";
import Todoform from './addtodos/todoform';

export default async function page() {
    const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return ( user?
    <Todoform /> :
    <div>page</div>)
}
