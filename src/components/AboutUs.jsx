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
} from "react-icons/fi";

function AboutUs({ lang }) {
  return (
    <section id="about" className="relative py-20 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-6">
            {lang === "ar" ? "من نحن" : "About Us"}
          </h2>
          <p className="text-brand-gray/80 text-lg max-w-3xl mx-auto">
            {lang === "ar"
              ? "نحن فريق من الخبراء المتفانين في مجال التسويق الرقمي وتطوير البرمجيات، نسعى لمساعدة الشركات على النمو والوصول إلى جمهورها المستهدف"
              : "We are a team of dedicated experts in digital marketing and software development, committed to helping businesses grow and reach their target audience"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <FiTarget className="text-brand-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-2">
                    {lang === "ar" ? "رؤيتنا" : "Our Vision"}
                  </h3>
                  <p className="text-brand-gray/70">
                    {lang === "ar"
                      ? "نسعى لأن نكون الشريك الموثوق للشركات في رحلتها الرقمية، ونقدم حلول مبتكرة تساعد على تحقيق النمو المستدام"
                      : "We strive to be the trusted partner for companies in their digital journey, providing innovative solutions that help achieve sustainable growth"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                  <FiZap className="text-brand-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-2">
                    {lang === "ar" ? "مهمتنا" : "Our Mission"}
                  </h3>
                  <p className="text-brand-gray/70">
                    {lang === "ar"
                      ? "تقديم خدمات عالية الجودة ومخصصة تلبي احتياجات كل عميل، مع التركيز على النتائج الملموسة والرضا الكامل"
                      : "To provide high-quality, customized services that meet each client's needs, focusing on tangible results and complete satisfaction"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-green-1/20 flex items-center justify-center flex-shrink-0">
                  <FiStar className="text-brand-green-1 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-gray mb-2">
                    {lang === "ar" ? "قيمنا" : "Our Values"}
                  </h3>
                  <p className="text-brand-gray/70">
                    {lang === "ar"
                      ? "الشفافية، الابتكار، الجودة العالية، والالتزام بمواعيد التسليم. نضع مصلحة العميل في المقام الأول"
                      : "Transparency, innovation, high quality, and commitment to deadlines. We put the client's interest first"}
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
                <div className="text-3xl font-bold text-brand-green-1 mb-2">
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
                  <div className="w-16 h-16 rounded-full bg-brand-green-1/20 flex items-center justify-center mx-auto mb-3">
                    <FiImage className="text-brand-green-1 text-2xl" />
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
  );
}

export default AboutUs;
