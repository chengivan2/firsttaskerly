import { createClient } from "@supabase/supabase-js";

export default async function GetIncompleteTodos() {
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
    <div>I can see the page.
        {data?
        data?.map((todo) => (
            <div key={todo.todoId}>
              <h2>{todo.todoname}</h2>
              <p>{todo.tododescription}</p>
              <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
              <p>Added on: {new Date(todo.timeadded).toLocaleString()}</p>
            </div>
          )):
          <p>Go pee yourself!</p>}
    </div>
  )
}
