import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiEyeOff } from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";
import { supabase } from "../../supabaseClient";
import { categoryLabel } from "../../lib/categories";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("projects")
      .select("id, slug, title_ar, category, images, published, created_at")
      .order("created_at", { ascending: false });
    setProjects(data || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("هل أنت متأكد من حذف هذا المشروع؟")) return;
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) return alert("تعذّر الحذف: " + error.message);
    setProjects((p) => p.filter((x) => x.id !== id));
  };

  const togglePublished = async (project) => {
    const { error } = await supabase
      .from("projects")
      .update({ published: !project.published })
      .eq("id", project.id);
    if (error) return alert("تعذّر التحديث: " + error.message);
    load();
  };

  return (
    <AdminLayout title="المشاريع">
      <div className="flex justify-end mb-6">
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-brand-dark font-bold hover:bg-brand-secondary hover:text-white transition-colors"
        >
          <FiPlus /> مشروع جديد
        </Link>
      </div>

      {loading ? (
        <p className="text-brand-gray/60">جاري التحميل...</p>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 text-brand-gray/60">
          لا توجد مشاريع بعد. أضف أول مشروع.
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 bg-brand-black/40 border border-brand-gray/15 rounded-xl p-3"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-brand-dark flex-shrink-0">
                {p.images?.[0] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.images[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-gray/30 font-bold">
                    B
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-brand-gray truncate">
                  {p.title_ar}
                </p>
                <p className="text-sm text-brand-gray/50">
                  {categoryLabel(p.category, "ar")}
                  {!p.published && (
                    <span className="mr-2 text-amber-400">• مخفي</span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => togglePublished(p)}
                  className="p-2 rounded-lg text-brand-gray/60 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors"
                  title={p.published ? "إخفاء" : "نشر"}
                >
                  {p.published ? <FiEye /> : <FiEyeOff />}
                </button>
                <Link
                  href={`/admin/projects/${p.id}`}
                  className="p-2 rounded-lg text-brand-gray/60 hover:text-brand-primary hover:bg-brand-primary/10 transition-colors"
                  title="تعديل"
                >
                  <FiEdit2 />
                </Link>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                  title="حذف"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
