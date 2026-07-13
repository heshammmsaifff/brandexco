import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../supabaseClient";

// Guards admin pages: ensures there is a logged-in session AND that the
// user is a registered admin (checked against the `admins` table via RLS).
export function useAdminAuth({ redirectTo = "/admin/login" } = {}) {
  const router = useRouter();
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function check(currentSession) {
      if (!currentSession) {
        if (active) {
          setSession(null);
          setIsAdmin(false);
          setLoading(false);
          router.replace(redirectTo);
        }
        return;
      }
      // Verify admin membership. RLS only returns a row for real admins.
      const { data, error } = await supabase
        .from("admins")
        .select("email")
        .eq("email", currentSession.user.email)
        .maybeSingle();

      if (!active) return;
      if (error || !data) {
        await supabase.auth.signOut();
        setSession(null);
        setIsAdmin(false);
        setLoading(false);
        router.replace(redirectTo);
        return;
      }
      setSession(currentSession);
      setIsAdmin(true);
      setLoading(false);
    }

    supabase.auth.getSession().then(({ data }) => check(data.session));

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      check(s);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { session, isAdmin, loading };
}
