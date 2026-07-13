import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { supabase } from "../../supabaseClient";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // If already signed in as admin, skip the login screen.
  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      if (!data.session) return;
      const { data: admin } = await supabase
        .from("admins")
        .select("email")
        .eq("email", data.session.user.email)
        .maybeSingle();
      if (admin) router.replace("/admin");
    });
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: signInError } =
      await supabase.auth.signInWithPassword({ email, password });

    if (signInError) {
      setError("بيانات الدخول غير صحيحة.");
      setLoading(false);
      return;
    }

    // Confirm the account is an authorized admin.
    const { data: admin } = await supabase
      .from("admins")
      .select("email")
      .eq("email", data.user.email)
      .maybeSingle();

    if (!admin) {
      await supabase.auth.signOut();
      setError("هذا الحساب غير مصرّح له بالدخول إلى لوحة التحكم.");
      setLoading(false);
      return;
    }

    router.replace("/admin");
  };

  return (
    <>
      <Head>
        <title>تسجيل الدخول - لوحة تحكم BrandExCo</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div
        dir="rtl"
        className="min-h-screen bg-brand-dark flex items-center justify-center px-4"
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="text-3xl font-extrabold text-brand-primary">
              BRANDEXCO
            </span>
            <p className="text-brand-gray/60 mt-2">لوحة التحكم</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-brand-black/50 border border-brand-gray/15 rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-brand-gray mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-gray/25 text-brand-gray focus:outline-none focus:border-brand-primary transition-colors"
                placeholder="admin@brandexco.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-gray mb-2">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-gray/25 text-brand-gray focus:outline-none focus:border-brand-primary transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-brand-primary text-brand-dark font-bold hover:bg-brand-secondary hover:text-white transition-colors disabled:opacity-60"
            >
              {loading ? "جاري الدخول..." : "تسجيل الدخول"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
