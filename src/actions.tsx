"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const subscribe = async ({ email }: { email: string }) => {
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase
    .from("subscribers")
    .insert({ email, list_identifier: "COACHING_PLATFORM" });

  console.log(data, error);
  return { data, error };
};
