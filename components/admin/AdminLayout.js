import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  FiGrid,
  FiFolder,
  FiEdit3,
  FiMail,
  FiLogOut,
  FiMenu,
  FiX,
  FiExternalLink,
} from "react-icons/fi";
import { supabase } from "../../supabaseClient";
import { useAdminAuth } from "../../lib/useAdminAuth";

const NAV = [
  { href: "/admin", label: "لوحة التحكم", icon: FiGrid, exact: true },
  { href: "/admin/projects", label: "المشاريع", icon: FiFolder },
  { href: "/admin/blog", label: "المدونة", icon: FiEdit3 },
  { href: "/admin/messages", label: "الرسائل", icon: FiMail },
];

export default function AdminLayout({ children, title = "لوحة التحكم" }) {
  const { loading, isAdmin, session } = useAdminAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  const isActive = (item) =>
    item.exact
      ? router.pathname === item.href
      : router.pathname.startsWith(item.href);

  if (loading || !isAdmin) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-brand-gray/70">
          <div className="w-10 h-10 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin" />
          <span>جاري التحقق...</span>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-brand-dark text-brand-gray">
      <Head>
        <title>{`${title} - BrandExCo`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Mobile top bar */}
      <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between bg-brand-black/90 backdrop-blur border-b border-brand-gray/10 px-4 py-3">
        <span className="font-extrabold text-brand-primary">BRANDEXCO</span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-lg border border-brand-gray/20"
          aria-label="القائمة"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            open ? "block" : "hidden"
          } lg:block fixed lg:sticky top-0 z-30 w-64 h-screen bg-brand-black/60 border-l border-brand-gray/10 p-5 flex-shrink-0`}
        >
          <div className="flex items-center gap-2 mb-8 px-2">
            <span className="text-xl font-extrabold text-brand-primary">
              BRANDEXCO
            </span>
          </div>

          <nav className="space-y-1">
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand-primary text-brand-dark"
                      : "text-brand-gray/80 hover:bg-brand-primary/10 hover:text-brand-primary"
                  }`}
                >
                  <Icon className="text-lg" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-brand-gray/10 space-y-1">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-brand-gray/70 hover:text-brand-primary transition-colors"
            >
              <FiExternalLink className="text-lg" />
              عرض الموقع
            </a>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <FiLogOut className="text-lg" />
              تسجيل الخروج
            </button>
          </div>

          {session?.user?.email && (
            <p className="mt-6 px-2 text-xs text-brand-gray/40 break-all">
              {session.user.email}
            </p>
          )}
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 p-5 sm:p-8">
          <h1 className="text-2xl font-extrabold text-brand-gray mb-6">
            {title}
          </h1>
          {children}
        </main>
      </div>
    </div>
  );
}
