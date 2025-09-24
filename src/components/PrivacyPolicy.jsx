import React from "react";
import SEOWrapper from "./SEOWrapper.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

function PrivacyPolicy({ lang }) {
  return (
    <>
      <SEOWrapper
        title={
          lang === "ar"
            ? "سياسة الخصوصية - BrandExCo | حماية بياناتك الشخصية"
            : "Privacy Policy - BrandExCo | Protecting Your Personal Data"
        }
        description={
          lang === "ar"
            ? "تعرف على كيفية حماية BrandExCo لبياناتك الشخصية وخصوصيتك. سياسة شاملة توضح كيفية جمع واستخدام وحماية معلوماتك."
            : "Learn how BrandExCo protects your personal data and privacy. Comprehensive policy explaining how we collect, use, and protect your information."
        }
        keywords={
          lang === "ar"
            ? "سياسة الخصوصية, حماية البيانات, الخصوصية الرقمية, براندكسكو"
            : "privacy policy, data protection, digital privacy, brandexco"
        }
        url="https://brandexco.com/privacy-policy"
        image="https://brandexco.com/privacy-policy-og-image.jpg"
        schemaType="webpage"
        schemaData={{
          name: lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
          description:
            lang === "ar"
              ? "سياسة خصوصية شاملة لحماية بيانات المستخدمين"
              : "Comprehensive privacy policy for user data protection",
        }}
      />
      <Breadcrumbs lang={lang} />
      <div className="min-h-screen bg-brand-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-gray mb-6">
                {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </h1>
              <p className="text-xl text-brand-gray/80">
                {lang === "ar"
                  ? "آخر تحديث: اغسطس 2025"
                  : "Last Updated: Augest 2025"}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "مقدمة" : "Introduction"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-6">
                  {lang === "ar"
                    ? "نحن في BrandExCo نلتزم بحماية خصوصيتك وبياناتك الشخصية. هذه السياسة توضح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية عند استخدام خدماتنا."
                    : "At BrandExCo, we are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect your personal information when using our services."}
                </p>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "البيانات التي نجمعها" : "Data We Collect"}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar"
                        ? "المعلومات الشخصية"
                        : "Personal Information"}
                    </h3>
                    <ul className="text-brand-gray/80 space-y-2 ml-6">
                      <li>
                        {lang === "ar"
                          ? "الاسم والبريد الإلكتروني"
                          : "Name and email address"}
                      </li>
                      <li>{lang === "ar" ? "رقم الهاتف" : "Phone number"}</li>
                      <li>
                        {lang === "ar"
                          ? "معلومات الشركة"
                          : "Company information"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "تفضيلات الخدمة"
                          : "Service preferences"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar" ? "بيانات الاستخدام" : "Usage Data"}
                    </h3>
                    <ul className="text-brand-gray/80 space-y-2 ml-6">
                      <li>{lang === "ar" ? "عنوان IP" : "IP address"}</li>
                      <li>{lang === "ar" ? "نوع المتصفح" : "Browser type"}</li>
                      <li>
                        {lang === "ar"
                          ? "صفحات الموقع المزارة"
                          : "Pages visited"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "وقت ومدة الزيارة"
                          : "Visit time and duration"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar"
                    ? "كيفية استخدام البيانات"
                    : "How We Use Your Data"}
                </h2>
                <ul className="text-brand-gray/80 space-y-3">
                  <li>
                    {lang === "ar"
                      ? "تقديم وتحسين خدماتنا"
                      : "Providing and improving our services"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "التواصل معك حول مشاريعك"
                      : "Communicating with you about your projects"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "إرسال تحديثات مهمة"
                      : "Sending important updates"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "تحليل استخدام الموقع"
                      : "Analyzing website usage"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "تحسين تجربة المستخدم"
                      : "Improving user experience"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "حماية البيانات" : "Data Protection"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "نحن نستخدم تقنيات أمان متقدمة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير."
                    : "We use advanced security technologies to protect your personal data from unauthorized access, modification, disclosure, or destruction."}
                </p>
                <ul className="text-brand-gray/80 space-y-2">
                  <li>
                    {lang === "ar"
                      ? "تشفير البيانات أثناء النقل والتخزين"
                      : "Data encryption during transmission and storage"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الوصول المقيد للبيانات"
                      : "Restricted access to data"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "مراقبة الأمان المستمرة"
                      : "Continuous security monitoring"}
                  </li>
                  <li>
                    {lang === "ar" ? "نسخ احتياطية منتظمة" : "Regular backups"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "مشاركة البيانات" : "Data Sharing"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "نحن لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:"
                    : "We do not sell or rent your personal data to third parties. We may only share your information in the following cases:"}
                </p>
                <ul className="text-brand-gray/80 space-y-2">
                  <li>
                    {lang === "ar"
                      ? "بموافقتك الصريحة"
                      : "With your explicit consent"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "للموردين الموثوقين الذين يساعدوننا في تقديم الخدمات"
                      : "With trusted vendors who help us provide services"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "عندما يتطلب القانون ذلك"
                      : "When required by law"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "لحماية حقوقنا أو حقوق الآخرين"
                      : "To protect our rights or the rights of others"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "حقوقك" : "Your Rights"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "لديك الحقوق التالية فيما يتعلق ببياناتك الشخصية:"
                    : "You have the following rights regarding your personal data:"}
                </p>
                <ul className="text-brand-gray/80 space-y-2">
                  <li>
                    {lang === "ar"
                      ? "الحق في الوصول إلى بياناتك"
                      : "Right to access your data"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الحق في تصحيح البيانات غير الدقيقة"
                      : "Right to correct inaccurate data"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الحق في حذف بياناتك"
                      : "Right to delete your data"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الحق في تقييد معالجة البيانات"
                      : "Right to restrict data processing"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الحق في نقل البيانات"
                      : "Right to data portability"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الحق في الاعتراض على المعالجة"
                      : "Right to object to processing"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "ملفات تعريف الارتباط (Cookies)" : "Cookies"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك."
                    : "We use cookies to improve your experience on our website. You can control cookies through your browser settings."}
                </p>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "التواصل معنا" : "Contact Us"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو تريد ممارسة أي من حقوقك، يرجى التواصل معنا:"
                    : "If you have any questions about this privacy policy or want to exercise any of your rights, please contact us:"}
                </p>
                <div className="space-y-2 text-brand-gray/80">
                  <p>
                    <strong className="text-brand-primary">
                      {lang === "ar" ? "البريد الإلكتروني:" : "Email:"}
                    </strong>{" "}
                    info@brandexco.com
                  </p>
                  <p>
                    <strong className="text-brand-primary">
                      {lang === "ar" ? "الهاتف:" : "Phone:"}
                    </strong>{" "}
                    <span dir="ltr">+966-530-986-725</span>
                  </p>
                </div>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "تحديثات السياسة" : "Policy Updates"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed">
                  {lang === "ar"
                    ? "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو من خلال إشعار على موقعنا."
                    : "We may update this privacy policy from time to time. We will notify you of any significant changes via email or through a notice on our website."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
