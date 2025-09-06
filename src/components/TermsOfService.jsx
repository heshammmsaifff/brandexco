import React from "react";
import SEOWrapper from "./SEOWrapper.jsx";
import Breadcrumbs from "./Breadcrumbs.jsx";

function TermsOfService({ lang }) {
  return (
    <>
      <SEOWrapper
        title={
          lang === "ar"
            ? "شروط الاستخدام - BrandExCo | الشروط والأحكام"
            : "Terms of Service - BrandExCo | Terms and Conditions"
        }
        description={
          lang === "ar"
            ? "تعرف على شروط وأحكام استخدام خدمات BrandExCo. الشروط التي تحكم استخدام موقعنا وخدماتنا الرقمية."
            : "Learn about the terms and conditions for using BrandExCo services. The terms that govern the use of our website and digital services."
        }
        keywords={
          lang === "ar"
            ? "شروط الاستخدام, الشروط والأحكام, قوانين الموقع, براندكسكو"
            : "terms of service, terms and conditions, website terms, brandexco"
        }
        url="https://brandexco.com/terms-of-service"
        image="https://brandexco.com/terms-og-image.jpg"
        schemaType="webpage"
        schemaData={{
          name: lang === "ar" ? "شروط الاستخدام" : "Terms of Service",
          description:
            lang === "ar"
              ? "شروط وأحكام استخدام خدمات BrandExCo"
              : "Terms and conditions for using BrandExCo services",
        }}
      />
      <Breadcrumbs lang={lang} />
      <div className="min-h-screen bg-brand-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-brand-gray mb-6">
                {lang === "ar" ? "شروط الاستخدام" : "Terms of Service"}
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
                    ? "مرحباً بك في BrandExCo. هذه الشروط والأحكام تحكم استخدامك لموقعنا وخدماتنا. باستخدام موقعنا أو خدماتنا، فإنك توافق على الالتزام بهذه الشروط."
                    : "Welcome to BrandExCo. These terms and conditions govern your use of our website and services. By using our website or services, you agree to be bound by these terms."}
                </p>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "قبول الشروط" : "Acceptance of Terms"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "باستخدام موقعنا أو خدماتنا، فإنك تؤكد أنك:"
                    : "By using our website or services, you confirm that you:"}
                </p>
                <ul className="text-brand-gray/80 space-y-2">
                  <li>
                    {lang === "ar"
                      ? "تقرأ وفهمت هذه الشروط"
                      : "Have read and understood these terms"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "توافق على الالتزام بها"
                      : "Agree to be bound by them"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "لديك السلطة القانونية للقبول"
                      : "Have the legal authority to accept them"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "تتجاوز سن 18 عاماً أو لديك موافقة الوالدين"
                      : "Are over 18 years old or have parental consent"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "الخدمات المقدمة" : "Services Provided"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "نحن نقدم الخدمات التالية:"
                    : "We provide the following services:"}
                </p>
                <ul className="text-brand-gray/80 space-y-2">
                  <li>
                    {lang === "ar"
                      ? "تصميم وتطوير المواقع الإلكترونية"
                      : "Website design and development"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "التسويق الرقمي وإدارة وسائل التواصل الاجتماعي"
                      : "Digital marketing and social media management"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "تصميم الجرافيك والهوية البصرية"
                      : "Graphic design and visual identity"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "تطوير التطبيقات والبرمجيات"
                      : "App and software development"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الاستشارات التسويقية والتقنية"
                      : "Marketing and technical consultancy"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "استخدام الموقع" : "Website Usage"}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar" ? "الاستخدام المسموح" : "Permitted Use"}
                    </h3>
                    <ul className="text-brand-gray/80 space-y-2 ml-6">
                      <li>
                        {lang === "ar"
                          ? "استخدام الموقع للأغراض القانونية فقط"
                          : "Use the website for lawful purposes only"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "احترام حقوق الملكية الفكرية"
                          : "Respect intellectual property rights"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "عدم إلحاق الضرر بالموقع أو المستخدمين الآخرين"
                          : "Not harm the website or other users"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar" ? "الاستخدام المحظور" : "Prohibited Use"}
                    </h3>
                    <ul className="text-brand-gray/80 space-y-2 ml-6">
                      <li>
                        {lang === "ar"
                          ? "نشر محتوى غير قانوني أو ضار"
                          : "Publishing illegal or harmful content"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "محاولة اختراق أو تعطيل الموقع"
                          : "Attempting to hack or disable the website"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "استخدام الموقع لأغراض تجارية غير مصرح بها"
                          : "Using the website for unauthorized commercial purposes"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "انتهاك خصوصية المستخدمين الآخرين"
                          : "Violating other users' privacy"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "الملكية الفكرية" : "Intellectual Property"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "جميع المحتويات الموجودة على موقعنا محمية بحقوق الطبع والنشر والملكية الفكرية. يشمل ذلك:"
                    : "All content on our website is protected by copyright and intellectual property rights. This includes:"}
                </p>
                <ul className="text-brand-gray/80 space-y-2">
                  <li>
                    {lang === "ar"
                      ? "النصوص والصور والتصاميم"
                      : "Texts, images, and designs"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الشعارات والعلامات التجارية"
                      : "Logos and trademarks"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "الكود المصدري والبرمجيات"
                      : "Source code and software"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "المحتوى الإبداعي والتسويقي"
                      : "Creative and marketing content"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar"
                    ? "الدفع والشروط المالية"
                    : "Payment and Financial Terms"}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar" ? "الأسعار والدفع" : "Pricing and Payment"}
                    </h3>
                    <ul className="text-brand-gray/80 space-y-2 ml-6">
                      <li>
                        {lang === "ar"
                          ? "الأسعار قابلة للتغيير دون إشعار مسبق"
                          : "Prices are subject to change without prior notice"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "الدفع مطلوب وفقاً للجدول الزمني المتفق عليه"
                          : "Payment is required according to the agreed schedule"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "الرسوم الإضافية قد تنطبق على خدمات معينة"
                          : "Additional fees may apply for certain services"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar"
                        ? "الإلغاء والاسترداد"
                        : "Cancellation and Refunds"}
                    </h3>
                    <ul className="text-brand-gray/80 space-y-2 ml-6">
                      <li>
                        {lang === "ar"
                          ? "يمكن إلغاء الخدمات وفقاً للشروط المتفق عليها"
                          : "Services can be cancelled according to agreed terms"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "الاسترداد يخضع لسياسة الاسترداد المحددة"
                          : "Refunds are subject to the specified refund policy"}
                      </li>
                      <li>
                        {lang === "ar"
                          ? "الخدمات المكتملة غير قابلة للاسترداد"
                          : "Completed services are non-refundable"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar"
                    ? "الضمانات والمسؤولية"
                    : "Warranties and Liability"}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar" ? "ضمانات الخدمة" : "Service Warranties"}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed">
                      {lang === "ar"
                        ? "نحن نضمن تقديم خدماتنا بأعلى معايير الجودة والاحترافية. ومع ذلك، لا نضمن النتائج المحددة أو النجاح التجاري."
                        : "We guarantee to provide our services with the highest standards of quality and professionalism. However, we do not guarantee specific results or business success."}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-primary mb-3">
                      {lang === "ar"
                        ? "حدود المسؤولية"
                        : "Limitation of Liability"}
                    </h3>
                    <p className="text-brand-gray/80 leading-relaxed">
                      {lang === "ar"
                        ? "مسؤوليتنا محدودة بقيمة الخدمات المدفوعة. لن نكون مسؤولين عن الأضرار غير المباشرة أو العرضية أو التبعية."
                        : "Our liability is limited to the value of paid services. We will not be liable for indirect, incidental, or consequential damages."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "إنهاء الخدمة" : "Service Termination"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "يمكن لأي من الطرفين إنهاء الخدمة في الحالات التالية:"
                    : "Either party may terminate the service in the following cases:"}
                </p>
                <ul className="text-brand-gray/80 space-y-2">
                  <li>
                    {lang === "ar"
                      ? "انتهاك شروط الاستخدام"
                      : "Violation of terms of service"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "عدم الدفع في الوقت المحدد"
                      : "Non-payment within the specified time"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "طلب إنهاء الخدمة من العميل"
                      : "Client request to terminate service"}
                  </li>
                  <li>
                    {lang === "ar"
                      ? "ظروف قاهرة أو قوة قاهرة"
                      : "Force majeure or unforeseen circumstances"}
                  </li>
                </ul>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "القانون المطبق" : "Governing Law"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed">
                  {lang === "ar"
                    ? "هذه الشروط تحكمها وتفسرها قوانين المملكة العربية السعودية. أي نزاعات ستخضع لاختصاص المحاكم السعودية."
                    : "These terms are governed by and interpreted in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes will be subject to the jurisdiction of Saudi courts."}
                </p>
              </div>

              <div className="bg-brand-black/90 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-bold text-brand-gray mb-6">
                  {lang === "ar" ? "التواصل معنا" : "Contact Us"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed mb-4">
                  {lang === "ar"
                    ? "إذا كان لديك أي أسئلة حول شروط الاستخدام هذه، يرجى التواصل معنا:"
                    : "If you have any questions about these terms of service, please contact us:"}
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
                  {lang === "ar" ? "تحديثات الشروط" : "Terms Updates"}
                </h2>
                <p className="text-brand-gray/80 leading-relaxed">
                  {lang === "ar"
                    ? "نحتفظ بالحق في تحديث هذه الشروط في أي وقت. سيتم إشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو من خلال إشعار على موقعنا."
                    : "We reserve the right to update these terms at any time. You will be notified of any significant changes via email or through a notice on our website."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsOfService;
