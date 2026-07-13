# BRANDEXCO

موقع وكالة براندكسكو للتسويق الرقمي — Next.js (Pages Router) + Supabase، ثنائي اللغة (عربي/إنجليزي) مع لوحة تحكم إدارية.

## المزايا

- **الموقع العام** ثنائي اللغة (AR/EN) مع حفظ اللغة المفضّلة.
- **المدونة** و**معرض الأعمال (المشاريع)** يُدَاران من قاعدة البيانات ويُعرَضان بنظام SSG/ISR لأفضل فهرسة في محركات البحث.
- **لوحة تحكم إدارية** (`/admin`) بالعربية فقط، محمية بنظام مصادقة كامل (Supabase Auth) مخصّص للأدمن.
- **نموذج تواصل** يحفظ الرسائل مباشرة في قاعدة البيانات (بديل EmailJS) وقسم في اللوحة لاستقبالها.
- **SEO**: خريطة موقع ديناميكية (`/sitemap.xml`)، وسوم meta/OG/canonical لكل صفحة، وبيانات منظّمة (Schema.org).

## التقنيات

- Next.js 15 (Pages Router) — SSR/ISR على Netlify عبر `@netlify/plugin-nextjs`.
- Supabase (Postgres + Auth + Storage) مع سياسات RLS.
- Tailwind CSS 4، Framer Motion، react-icons.

## الإعداد المحلي

1. أنشئ ملف `.env.local` (انظر `.env.example`):
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   NEXT_PUBLIC_SITE_URL=https://brandexco.com
   ```
2. `npm install`
3. `npm run dev` ثم افتح http://localhost:3000

## إنشاء حساب الأدمن

لوحة التحكم متاحة فقط للحسابات المسجّلة في جدول `admins` (تمّت تهيئته بالبريد `heshamsaif856@gmail.com`).

لإنشاء الحساب:

1. من Supabase Dashboard → **Authentication → Users → Add user**.
2. أدخل البريد `heshamsaif856@gmail.com` وكلمة مرور قوية، وفعّل **Auto Confirm**.
3. سجّل الدخول عبر `/admin/login`.

لإضافة أدمن آخر لاحقاً: أضف بريده إلى جدول `admins` ثم أنشئ له مستخدماً في Authentication.

## النشر على Netlify

اضبط متغيّرات البيئة في **Site settings → Environment variables**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL`

يتكفّل `netlify.toml` + `@netlify/plugin-nextjs` بتشغيل SSR/ISR تلقائياً (`publish = ".next"`).

## بنية قاعدة البيانات

- `posts` — مقالات المدونة (حقول ثنائية اللغة، أقسام، SEO).
- `projects` — المشاريع (حتى 5 صور، حقول ثنائية اللغة، أقسام).
- `messages` — رسائل التواصل.
- `admins` — قائمة البريد المصرّح له بالدخول.

الأقسام الأربعة: `creative_design` / `web_solutions` / `digital_marketing` / `brand_strategy`.
