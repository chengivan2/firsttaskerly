import { createClient } from "@supabase/supabase-js";

export default async function getIncompleteTodos() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl!, supabaseKey!);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const taskerly_userId = user?.id;
  let { data, error } = await supabase
    .from("current_todos")
    .select("*")
    .eq("todouserId", taskerly_userId)
    .eq("completed", false);

    console.log(await data)

  if (error) {
    console.error("Error fetching todos:", error);
  } else {
    console.log("Fetched todos:", data);
  }

  return(
    <div>I can see the page.</div>
  )
}
