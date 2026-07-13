import { useEffect, useState } from "react";
import Link from "next/link";
import { FiFolder, FiEdit3, FiMail, FiPlus } from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";
import { supabase } from "../../supabaseClient";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    posts: 0,
    messages: 0,
    unread: 0,
  });

  useEffect(() => {
    async function load() {
      const [projects, posts, messages, unread] = await Promise.all([
        supabase.from("projects").select("*", { count: "exact", head: true }),
        supabase.from("posts").select("*", { count: "exact", head: true }),
        supabase.from("messages").select("*", { count: "exact", head: true }),
        supabase
          .from("messages")
          .select("*", { count: "exact", head: true })
          .eq("is_read", false),
      ]);
      setStats({
        projects: projects.count || 0,
        posts: posts.count || 0,
        messages: messages.count || 0,
        unread: unread.count || 0,
      });
    }
    load();
  }, []);

  const cards = [
    {
      label: "المشاريع",
      value: stats.projects,
      icon: FiFolder,
      href: "/admin/projects",
      color: "text-brand-primary",
    },
    {
      label: "المقالات",
      value: stats.posts,
      icon: FiEdit3,
      href: "/admin/blog",
      color: "text-brand-secondary",
    },
    {
      label: "الرسائل",
      value: stats.messages,
      icon: FiMail,
      href: "/admin/messages",
      color: "text-brand-primary",
      badge: stats.unread > 0 ? `${stats.unread} غير مقروءة` : null,
    },
  ];

  return (
    <AdminLayout title="لوحة التحكم">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.label}
              href={c.href}
              className="bg-brand-black/40 border border-brand-gray/15 rounded-2xl p-6 hover:border-brand-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className={`text-3xl ${c.color}`} />
                {c.badge && (
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                    {c.badge}
                  </span>
                )}
              </div>
              <p className="text-3xl font-extrabold text-brand-gray">
                {c.value}
              </p>
              <p className="text-brand-gray/60 text-sm mt-1">{c.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-brand-dark font-bold hover:bg-brand-secondary hover:text-white transition-colors"
        >
          <FiPlus /> مشروع جديد
        </Link>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-brand-gray/25 text-brand-gray font-bold hover:border-brand-primary hover:text-brand-primary transition-colors"
        >
          <FiPlus /> مقال جديد
        </Link>
      </div>
    </AdminLayout>
  );
}
