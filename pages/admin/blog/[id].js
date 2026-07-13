import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiSave, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import AdminLayout from "../../../components/admin/AdminLayout";
import ImageUploader from "../../../components/admin/ImageUploader";
import { supabase } from "../../../supabaseClient";
import { CATEGORIES } from "../../../lib/categories";
import { slugify } from "../../../lib/content";

const EMPTY = {
  title_ar: "",
  title_en: "",
  excerpt_ar: "",
  excerpt_en: "",
  content_ar: "",
  content_en: "",
  category: "digital_marketing",
  cover_image: "",
  slug: "",
  meta_title_ar: "",
  meta_title_en: "",
  meta_description_ar: "",
  meta_description_en: "",
  keywords: "",
  published: true,
};

export default function PostEditor() {
  const router = useRouter();
  const { id } = router.query;
  const isNew = id === "new";

  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    if (!router.isReady || isNew) return;
    (async () => {
      const { data, error: e } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      if (e || !data) {
        setError("تعذّر تحميل المقال.");
      } else {
        setForm({ ...EMPTY, ...data });
        setSlugTouched(true);
      }
      setLoading(false);
    })();
  }, [router.isReady, id, isNew]);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const onTitleEn = (value) => {
    setForm((f) => ({
      ...f,
      title_en: value,
      slug: slugTouched ? f.slug : slugify(value || f.title_ar),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.title_ar || !form.title_en) {
      setError("عنوان المقال بالعربية والإنجليزية مطلوب.");
      return;
    }
    const slug = slugify(form.slug || form.title_en || form.title_ar);
    if (!slug) {
      setError("الرابط (slug) غير صالح.");
      return;
    }

    setSaving(true);
    const payload = { ...form, slug };
    delete payload.id;
    delete payload.created_at;
    delete payload.updated_at;

    let resErr;
    if (isNew) {
      ({ error: resErr } = await supabase.from("posts").insert([payload]));
    } else {
      ({ error: resErr } = await supabase
        .from("posts")
        .update(payload)
        .eq("id", id));
    }
    setSaving(false);

    if (resErr) {
      setError(
        resErr.code === "23505"
          ? "الرابط (slug) مستخدم بالفعل، اختر رابطاً آخر."
          : "تعذّر الحفظ: " + resErr.message
      );
      return;
    }
    router.push("/admin/blog");
  };

  if (loading) {
    return (
      <AdminLayout title="تعديل مقال">
        <p className="text-brand-gray/60">جاري التحميل...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={isNew ? "مقال جديد" : "تعديل مقال"}>
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-2 text-brand-gray/60 hover:text-brand-primary mb-6 text-sm"
      >
        <FiArrowRight /> العودة للمدونة
      </Link>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <ImageUploader
          bucket="posts"
          images={form.cover_image ? [form.cover_image] : []}
          onChange={(imgs) => update("cover_image", imgs[0] || "")}
          max={1}
          label="صورة الغلاف"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="العنوان (عربي)" required>
            <input
              className={inputCls}
              value={form.title_ar}
              onChange={(e) => update("title_ar", e.target.value)}
              required
            />
          </Field>
          <Field label="العنوان (إنجليزي)" required dir="ltr">
            <input
              className={inputCls}
              value={form.title_en}
              onChange={(e) => onTitleEn(e.target.value)}
              dir="ltr"
              required
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="القسم">
            <select
              className={inputCls}
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c.key} value={c.key}>
                  {c.ar}
                </option>
              ))}
            </select>
          </Field>
          <Field label="الرابط (slug)" dir="ltr">
            <input
              className={inputCls}
              value={form.slug}
              onChange={(e) => {
                setSlugTouched(true);
                update("slug", e.target.value);
              }}
              dir="ltr"
              placeholder="post-title"
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="مقتطف (عربي)">
            <textarea
              className={inputCls}
              rows={3}
              value={form.excerpt_ar}
              onChange={(e) => update("excerpt_ar", e.target.value)}
            />
          </Field>
          <Field label="مقتطف (إنجليزي)" dir="ltr">
            <textarea
              className={inputCls}
              rows={3}
              value={form.excerpt_en}
              onChange={(e) => update("excerpt_en", e.target.value)}
              dir="ltr"
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="المحتوى (عربي)">
            <textarea
              className={inputCls}
              rows={12}
              value={form.content_ar}
              onChange={(e) => update("content_ar", e.target.value)}
            />
          </Field>
          <Field label="المحتوى (إنجليزي)" dir="ltr">
            <textarea
              className={inputCls}
              rows={12}
              value={form.content_en}
              onChange={(e) => update("content_en", e.target.value)}
              dir="ltr"
            />
          </Field>
        </div>

        {/* SEO */}
        <details className="bg-brand-black/30 border border-brand-gray/15 rounded-xl p-4">
          <summary className="cursor-pointer font-semibold text-brand-gray">
            إعدادات SEO (اختياري)
          </summary>
          <div className="mt-4 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="عنوان Meta (عربي)">
                <input
                  className={inputCls}
                  value={form.meta_title_ar}
                  onChange={(e) => update("meta_title_ar", e.target.value)}
                />
              </Field>
              <Field label="عنوان Meta (إنجليزي)" dir="ltr">
                <input
                  className={inputCls}
                  value={form.meta_title_en}
                  onChange={(e) => update("meta_title_en", e.target.value)}
                  dir="ltr"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="وصف Meta (عربي)">
                <textarea
                  className={inputCls}
                  rows={2}
                  value={form.meta_description_ar}
                  onChange={(e) => update("meta_description_ar", e.target.value)}
                />
              </Field>
              <Field label="وصف Meta (إنجليزي)" dir="ltr">
                <textarea
                  className={inputCls}
                  rows={2}
                  value={form.meta_description_en}
                  onChange={(e) => update("meta_description_en", e.target.value)}
                  dir="ltr"
                />
              </Field>
            </div>
            <Field label="الكلمات المفتاحية (مفصولة بفواصل)">
              <input
                className={inputCls}
                value={form.keywords}
                onChange={(e) => update("keywords", e.target.value)}
                placeholder="تسويق, علامة تجارية, ..."
              />
            </Field>
          </div>
        </details>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => update("published", e.target.checked)}
            className="w-5 h-5 accent-brand-primary"
          />
          <span className="text-brand-gray">منشور (ظاهر في الموقع)</span>
        </label>

        {error && (
          <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-brand-dark font-bold hover:bg-brand-secondary hover:text-white transition-colors disabled:opacity-60"
        >
          <FiSave /> {saving ? "جاري الحفظ..." : "حفظ المقال"}
        </button>
      </form>
    </AdminLayout>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-lg bg-brand-dark border border-brand-gray/25 text-brand-gray focus:outline-none focus:border-brand-primary transition-colors";

function Field({ label, required, dir, children }) {
  return (
    <div dir={dir}>
      <label className="block text-sm font-semibold text-brand-gray mb-2">
        {label}
        {required && <span className="text-brand-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}
