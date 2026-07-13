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
  description_ar: "",
  description_en: "",
  category: "creative_design",
  images: [],
  slug: "",
  published: true,
};

export default function ProjectEditor() {
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
        .from("projects")
        .select("*")
        .eq("id", id)
        .maybeSingle();
      if (e || !data) {
        setError("تعذّر تحميل المشروع.");
      } else {
        setForm({ ...EMPTY, ...data, images: data.images || [] });
        setSlugTouched(true);
      }
      setLoading(false);
    })();
  }, [router.isReady, id, isNew]);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  // Auto-derive the slug from the title until the user edits it manually.
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
      setError("عنوان المشروع بالعربية والإنجليزية مطلوب.");
      return;
    }
    const slug = slugify(form.slug || form.title_en || form.title_ar);
    if (!slug) {
      setError("الرابط (slug) غير صالح.");
      return;
    }

    setSaving(true);
    const payload = {
      title_ar: form.title_ar,
      title_en: form.title_en,
      description_ar: form.description_ar,
      description_en: form.description_en,
      category: form.category,
      images: form.images,
      slug,
      published: form.published,
    };

    let resErr;
    if (isNew) {
      ({ error: resErr } = await supabase.from("projects").insert([payload]));
    } else {
      ({ error: resErr } = await supabase
        .from("projects")
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
    router.push("/admin/projects");
  };

  if (loading) {
    return (
      <AdminLayout title="تعديل مشروع">
        <p className="text-brand-gray/60">جاري التحميل...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={isNew ? "مشروع جديد" : "تعديل مشروع"}>
      <Link
        href="/admin/projects"
        className="inline-flex items-center gap-2 text-brand-gray/60 hover:text-brand-primary mb-6 text-sm"
      >
        <FiArrowRight /> العودة للمشاريع
      </Link>

      <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
        <ImageUploader
          bucket="projects"
          images={form.images}
          onChange={(imgs) => update("images", imgs)}
          max={5}
          label="صور المشروع (حتى 5 صور)"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="عنوان المشروع (عربي)" required>
            <input
              className={inputCls}
              value={form.title_ar}
              onChange={(e) => update("title_ar", e.target.value)}
              required
            />
          </Field>
          <Field label="عنوان المشروع (إنجليزي)" required dir="ltr">
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
              placeholder="project-name"
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="وصف المشروع (عربي)">
            <textarea
              className={inputCls}
              rows={6}
              value={form.description_ar}
              onChange={(e) => update("description_ar", e.target.value)}
            />
          </Field>
          <Field label="وصف المشروع (إنجليزي)" dir="ltr">
            <textarea
              className={inputCls}
              rows={6}
              value={form.description_en}
              onChange={(e) => update("description_en", e.target.value)}
              dir="ltr"
            />
          </Field>
        </div>

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
          <FiSave /> {saving ? "جاري الحفظ..." : "حفظ المشروع"}
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
