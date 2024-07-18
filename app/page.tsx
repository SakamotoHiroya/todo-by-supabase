import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Index() {

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  //If not logged in, redirect to /login
  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      hoge
    </div>
  );
}
