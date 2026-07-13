import { useEffect, useState } from "react";
import Link from "next/link";
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiEyeOff } from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";
import { supabase } from "../../supabaseClient";
import { categoryLabel } from "../../lib/categories";

export default function AdminBlog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("posts")
      .select("id, slug, title_ar, category, cover_image, published, created_at")
      .order("created_at", { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("هل أنت متأكد من حذف هذا المقال؟")) return;
    const { error } = await supabase.from("posts").delete().eq("id", id);
    if (error) return alert("تعذّر الحذف: " + error.message);
    setPosts((p) => p.filter((x) => x.id !== id));
  };

  const togglePublished = async (post) => {
    const { error } = await supabase
      .from("posts")
      .update({ published: !post.published })
      .eq("id", post.id);
    if (error) return alert("تعذّر التحديث: " + error.message);
    load();
  };

  return (
    <AdminLayout title="المدونة">
      <div className="flex justify-end mb-6">
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-primary text-brand-dark font-bold hover:bg-brand-secondary hover:text-white transition-colors"
        >
          <FiPlus /> مقال جديد
        </Link>
      </div>

      {loading ? (
        <p className="text-brand-gray/60">جاري التحميل...</p>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 text-brand-gray/60">
          لا توجد مقالات بعد. أضف أول مقال.
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 bg-brand-black/40 border border-brand-gray/15 rounded-xl p-3"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-brand-dark flex-shrink-0">
                {p.cover_image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.cover_image}
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
                  href={`/admin/blog/${p.id}`}
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
