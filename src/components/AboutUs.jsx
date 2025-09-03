import React from "react";
import {
  FiTarget,
  FiZap,
  FiStar,
  FiCode,
  FiTrendingUp,
  FiUsers,
  FiImage,
  FiBarChart,
  FiHeart,
  FiEye,
  FiShield,
  FiAward,
} from "react-icons/fi";
import SEOWrapper from "./SEOWrapper.jsx";

function AboutUs({ lang }) {
  return (
    <>
      <SEOWrapper
        title={
          lang === "ar"
            ? "من نحن - BrandExCo | وكالة تسويق رقمي متخصصة في السعودية"
            : "About Us - BrandExCo | Professional Digital Marketing Agency in Saudi Arabia"
        }
        description={
          lang === "ar"
            ? "تعرف على BrandExCo، وكالة تسويق رقمي متخصصة في السعودية. نقدم حلول تسويقية إبداعية وشاملة لبناء علامات تجارية قوية."
            : "Learn about BrandExCo, a specialized digital marketing agency in Saudi Arabia. We provide creative and comprehensive marketing solutions to build strong brands."
        }
        keywords={
          lang === "ar"
            ? "من نحن, وكالة تسويق, تسويق رقمي, براندكسكو, السعودية, الرياض, بناء علامات تجارية"
            : "about us, marketing agency, digital marketing, brandexco, saudi arabia, riyadh, brand building"
        }
        url="https://brandexco.com/about"
        image="https://brandexco.com/about-og-image.jpg"
        schemaType="organization"
        schemaData={{
          name: "BrandExCo",
          url: "https://brandexco.com",
          description:
            lang === "ar"
              ? "وكالة تسويق رقمي متخصصة في السعودية"
              : "Specialized digital marketing agency in Saudi Arabia",
        }}
      />
      <section id="about" className="relative py-20 bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-6">
              {lang === "ar" ? "عن الشركة" : "About Us"}
            </h2>
            <p className="text-brand-gray/80 text-lg max-w-3xl mx-auto">
              {lang === "ar"
                ? "براندكسكو ليست مجرد وكالة تسويق، نحن شركاؤك في رحلة بناء الهوية"
                : "BRANDEXCO is more than a marketing agency; we are your partners in identity-building"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <FiEye className="text-brand-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "رؤيتنا" : "Our Vision"}
                    </h3>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "أن نكون الرواد في تمكين العلامات التجارية العربية والعالمية لتحقيق أقصى إمكاناتها في السوق الرقمية والتقليدية"
                        : "To be the pioneers in empowering Arab and global brands to reach their fullest potential in both digital and traditional markets"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                    <FiTarget className="text-brand-secondary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "مهمتنا" : "Our Mission"}
                    </h3>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "تقديم استراتيجيات تسويقية مبتكرة ومخصصة تعتمد على البيانات، تركز على تحقيق أعلى عائد على الاستثمار (ROI) لعملائنا وبناء شراكات طويلة الأمد تقوم على الثقة والنتائج"
                        : "We deliver innovative, data-driven marketing strategies designed to maximize ROI and foster long-term partnerships built on trust and proven results"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="relative">
              <div className="bg-brand-black/50 rounded-2xl p-8 border border-brand-gray/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-brand-gray mb-4">
                    {lang === "ar" ? "براندكسكو" : "BRANDEXCO"}
                  </h3>
                  <p className="text-brand-gray/70">
                    {lang === "ar"
                      ? "نقدم حلولاً تسويقية إبداعية وشاملة مصممة خصيصًا لتحويل رؤيتك إلى واقع ملموس وبناء علامة تجارية قوية تترسخ في أذهان عملائك وتنمو بشكل مستمر"
                      : "We provide creative, comprehensive marketing solutions tailored to transform your vision into a tangible reality and build a powerful brand that resonates with your audience and grows consistently"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-6">
                {lang === "ar" ? "قيمنا" : "OUR VALUES"}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-4">
                  <FiStar className="text-brand-primary text-2xl" />
                </div>
                <h4 className="font-semibold text-brand-gray mb-2">
                  {lang === "ar"
                    ? "الإبداع والابتكار"
                    : "Creativity & Innovation"}
                </h4>
                <p className="text-sm text-brand-gray/70">
                  {lang === "ar"
                    ? "نحن لا نتبع القاعدة، بل نصنعها"
                    : "We don't follow the rules, we create them"}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <FiShield className="text-brand-secondary text-2xl" />
                </div>
                <h4 className="font-semibold text-brand-gray mb-2">
                  {lang === "ar" ? "الشفافية والثقة" : "Transparency & Trust"}
                </h4>
                <p className="text-sm text-brand-gray/70">
                  {lang === "ar"
                    ? "نؤمن بالشراكة الواضحة حيث يكون العميل على اطلاع دائم"
                    : "We believe in transparent partnerships where the client is always kept informed"}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-4">
                  <FiTarget className="text-brand-primary text-2xl" />
                </div>
                <h4 className="font-semibold text-brand-gray mb-2">
                  {lang === "ar" ? "التركيز على النتائج" : "Results-Driven"}
                </h4>
                <p className="text-sm text-brand-gray/70">
                  {lang === "ar"
                    ? "نجاحك هو مقياس نجاحنا الوحيد"
                    : "Your success is our only measure of success"}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-4">
                  <FiUsers className="text-brand-primary text-2xl" />
                </div>
                <h4 className="font-semibold text-brand-gray mb-2">
                  {lang === "ar" ? "العمل الجماعي" : "Collaboration"}
                </h4>
                <p className="text-sm text-brand-gray/70">
                  {lang === "ar"
                    ? "نحن فريق واحد، أنت ونحن"
                    : "We are one team — you and us"}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <FiTrendingUp className="text-brand-secondary text-2xl" />
                </div>
                <h4 className="font-semibold text-brand-gray mb-2">
                  {lang === "ar" ? "التعلم المستمر" : "Continuous Learning"}
                </h4>
                <p className="text-sm text-brand-gray/70">
                  {lang === "ar"
                    ? "نواكب أحدث TRENDS وأدوات التسويق لنمنحك الأفضل دائمًا"
                    : "We keep up with the latest trends and marketing tools to always deliver the best for you"}
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-6">
                {lang === "ar" ? "لماذا تختارنا" : "WHY CHOOSE US"}
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "نهج متكامل" : "Integrated Approach"}
                    </h4>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "لا نقدم خدمات منعزلة، بل ندمجها في استراتيجية واحدة متماسكة"
                        : "We don't offer isolated services; we merge them into one cohesive strategy"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "فريق خبراء" : "Expert Team"}
                    </h4>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "فريقنا مكون من متخصصين في كل مجال (استراتيجيين، مصممين، كتاب، مسوقين)"
                        : "Our team consists of specialists in every field (strategists, designers, writers, marketers)"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "شفافية تامة" : "Full Transparency"}
                    </h4>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "تقارير أداء دورية واضحة توضح كل التفاصيل وقياس النتائج"
                        : "Clear, regular performance reports that show every detail and measure results"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "مرونة في التعامل" : "Flexibility"}
                    </h4>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "نقدم باقات تناسب مختلف الميزانيات والاحتياجات"
                        : "Packages tailored to fit different budgets and needs"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-brand-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "شغف بالتفاصيل" : "Passion for Details"}
                    </h4>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "نعتقد أن التفاصيل الصغيرة هي التي تصنع الفارق الكبير"
                        : "We believe the smallest details make the biggest difference"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                    <FiCode className="text-brand-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-gray mb-2">
                      {lang === "ar" ? "فريقنا المتميز" : "Our Expert Team"}
                    </h3>
                    <p className="text-brand-gray/70">
                      {lang === "ar"
                        ? "نفخر بفريقنا من الخبراء المختصين في مختلف المجالات الرقمية"
                        : "We are proud of our team of experts specialized in various digital fields"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    50+
                  </div>
                  <div className="text-brand-gray/70">
                    {lang === "ar" ? "مشروع مكتمل" : "Completed Projects"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-secondary mb-2">
                    30+
                  </div>
                  <div className="text-brand-gray/70">
                    {lang === "ar" ? "عميل سعيد" : "Happy Clients"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    5+
                  </div>
                  <div className="text-brand-gray/70">
                    {lang === "ar" ? "سنوات خبرة" : "Years Experience"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">
                    24/7
                  </div>
                  <div className="text-brand-gray/70">
                    {lang === "ar" ? "دعم فني" : "Support"}
                  </div>
                </div>
              </div>
            </div>

            {/* Team/Image Section */}
            <div className="relative">
              <div className="bg-brand-black/50 rounded-2xl p-8 border border-brand-gray/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-brand-gray mb-4">
                    {lang === "ar" ? "فريقنا المتميز" : "Our Expert Team"}
                  </h3>
                  <p className="text-brand-gray/70">
                    {lang === "ar"
                      ? "نفخر بفريقنا من الخبراء المختصين في مختلف المجالات الرقمية"
                      : "We are proud of our team of experts specialized in various digital fields"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-brand-dark/50">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-3">
                      <FiCode className="text-brand-primary text-2xl" />
                    </div>
                    <h4 className="font-semibold text-brand-gray mb-1">
                      {lang === "ar" ? "مطورين" : "Developers"}
                    </h4>
                    <p className="text-sm text-brand-gray/70">
                      {lang === "ar"
                        ? "مطورون محترفون"
                        : "Professional Developers"}
                    </p>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-brand-dark/50">
                    <div className="w-16 h-16 rounded-full bg-brand-secondary/20 flex items-center justify-center mx-auto mb-3">
                      <FiTrendingUp className="text-brand-secondary text-2xl" />
                    </div>
                    <h4 className="font-semibold text-brand-gray mb-1">
                      {lang === "ar" ? "مسوقين" : "Marketers"}
                    </h4>
                    <p className="text-sm text-brand-gray/70">
                      {lang === "ar"
                        ? "استراتيجيون تسويقيون"
                        : "Marketing Strategists"}
                    </p>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-brand-dark/50">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-3">
                      <FiImage className="text-brand-primary text-2xl" />
                    </div>
                    <h4 className="font-semibold text-brand-gray mb-1">
                      {lang === "ar" ? "مصممين" : "Designers"}
                    </h4>
                    <p className="text-sm text-brand-gray/70">
                      {lang === "ar" ? "مصممون مبدعون" : "Creative Designers"}
                    </p>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-brand-dark/50">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto mb-3">
                      <FiBarChart className="text-brand-primary text-2xl" />
                    </div>
                    <h4 className="font-semibold text-brand-gray mb-1">
                      {lang === "ar" ? "محللين" : "Analysts"}
                    </h4>
                    <p className="text-sm text-brand-gray/70">
                      {lang === "ar"
                        ? "محللون استراتيجيون"
                        : "Strategic Analysts"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
