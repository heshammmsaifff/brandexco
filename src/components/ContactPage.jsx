import React, { useState, useEffect } from "react";
import { FiMail, FiSmartphone, FiMapPin } from "react-icons/fi";
import { initEmailJS, sendEmail } from "../config/emailjs";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function ContactPage({ lang }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // تهيئة EmailJS
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    lang === "ar" ? "التصميم الإبداعي" : "Creative Design",
    lang === "ar" ? "حلول الويب" : "Web Solutions",
    lang === "ar" ? "التسويق الرقمي" : "Digital Marketing",
    lang === "ar" ? "استراتيجية العلامة التجارية" : "Brand Strategy",
    lang === "ar" ? "تصميم الجرافيك" : "Graphic Design",
    lang === "ar" ? "تصميم الويب وتجربة المستخدم" : "Web & UI/UX Design",
    lang === "ar"
      ? "تصوير المنتجات والفيديوغرافيك"
      : "Product Photography & Videography",
    lang === "ar"
      ? "تصميم العروض التقديمية الاحترافية"
      : "Professional Presentation Design",
    lang === "ar" ? "تصميم وتطوير مواقع الويب" : "Web Design & Development",
    lang === "ar" ? "تطوير متاجر إلكترونية" : "E-commerce Development",
    lang === "ar" ? "إدارة وسائل التواصل الاجتماعي" : "Social Media Management",
    lang === "ar"
      ? "تسويق المحتوى وإنشاء المدونات"
      : "Content Marketing & Blogging",
    lang === "ar"
      ? "تحسين محركات البحث (SEO)"
      : "Search Engine Optimization (SEO)",
    lang === "ar"
      ? "التسويق عبر محركات البحث"
      : "Search Engine Marketing (SEM/Google Ads)",
    lang === "ar" ? "التسويق عبر البريد الإلكتروني" : "Email Marketing",
    lang === "ar"
      ? "إعلانات وسائل التواصل الاجتماعي"
      : "Social Media Advertising",
    lang === "ar" ? "بناء الهوية البصرية" : "Building Visual Identity",
    lang === "ar"
      ? "تحديد صوت العلامة التجارية وشخصيتها"
      : "Defining Brand Voice and Personality",
    lang === "ar"
      ? "دراسة السوق والمنافسين"
      : "Conducting Market and Competitor Research",
    lang === "ar"
      ? "تطوير خطة تسويقية استراتيجية شاملة"
      : "Developing a Comprehensive Strategic Marketing Plan",
  ];

  return (
    <section className="relative py-20 bg-brand-dark min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-gray mb-6">
            {lang === "ar" ? "تواصل معنا | CONTACT US" : "CONTACT US"}
          </h1>
          <p className="text-brand-gray/80 text-lg">
            {lang === "ar"
              ? "احصل على استشارة مجانية وابدأ مشروعك معنا"
              : "Get a free consultation and start your project with us"}
          </p>
        </div>

        {/* رسائل الحالة */}
        {submitStatus === "success" && (
          <div className="mb-8 p-6 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center text-lg">
            {lang === "ar"
              ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً."
              : "Your message has been sent successfully! We'll contact you soon."}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-8 p-6 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center text-lg">
            {lang === "ar"
              ? "حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى."
              : "An error occurred while sending your message. Please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-gray font-medium mb-3 text-lg">
                {lang === "ar" ? "الاسم الكامل" : "Full Name"}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-lg bg-brand-black/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors text-lg"
                placeholder={
                  lang === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"
                }
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-brand-gray font-medium mb-3 text-lg">
                {lang === "ar" ? "البريد الإلكتروني" : "Email Address"}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-lg bg-brand-black/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors text-lg"
                placeholder={
                  lang === "ar"
                    ? "أدخل بريدك الإلكتروني"
                    : "Enter your email address"
                }
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-gray font-medium mb-3 text-lg">
                {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-lg bg-brand-black/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors text-lg"
                placeholder={
                  lang === "ar" ? "أدخل رقم هاتفك" : "Enter your phone number"
                }
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-brand-gray font-medium mb-3 text-lg">
                {lang === "ar" ? "نوع الخدمة" : "Service Type"}
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-lg bg-brand-black/50 border border-brand-gray/30 text-brand-gray focus:outline-none focus:border-brand-primary transition-colors text-lg appearance-none cursor-pointer relative"
                required
                disabled={isSubmitting}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ECB0E' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 12px center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "16px",
                  paddingRight: "48px",
                }}
              >
                <option value="" className="bg-brand-black text-brand-gray">
                  {lang === "ar" ? "اختر نوع الخدمة" : "Select service type"}
                </option>
                {services.map((service, index) => (
                  <option
                    key={index}
                    value={service}
                    className="bg-brand-black text-brand-gray hover:bg-brand-primary hover:text-white py-2"
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-brand-gray font-medium mb-3 text-lg">
              {lang === "ar" ? "رسالتك" : "Your Message"}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-4 rounded-lg bg-brand-black/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors resize-none text-lg"
              placeholder={
                lang === "ar"
                  ? "أخبرنا عن مشروعك واحتياجاتك"
                  : "Tell us about your project and needs"
              }
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center px-10 py-5 rounded-lg font-semibold transition-colors btn-shimmer text-lg ${
                isSubmitting
                  ? "bg-brand-gray/50 text-brand-gray/70 cursor-not-allowed"
                  : "bg-brand-primary text-white hover:bg-brand-secondary"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {lang === "ar" ? "جاري الإرسال..." : "Sending..."}
                </span>
              ) : lang === "ar" ? (
                "إرسال الرسالة"
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-brand-black/50 rounded-xl p-8 border border-brand-gray/20">
            <h3 className="text-2xl font-bold text-brand-gray mb-6">
              {lang === "ar" ? "معلومات الاتصال" : "Contact Information"}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <FiSmartphone className="text-brand-primary text-xl" />
                </div>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <h4 className="font-semibold text-brand-gray mb-1">
                    {lang === "ar" ? "مصر" : "EGYPT"}
                  </h4>
                  <p
                    className="text-brand-gray/70 font-mono"
                    style={{ direction: "ltr" }}
                  >
                    +20-101-180-308-7
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center flex-shrink-0">
                  <FiSmartphone className="text-brand-secondary text-xl" />
                </div>
                <div className={lang === "ar" ? "text-right" : "text-left"}>
                  <h4 className="font-semibold text-brand-gray mb-1">
                    {lang === "ar"
                      ? "المملكة العربية السعودية"
                      : "SAUDI ARABIA"}
                  </h4>
                  <p
                    className="text-brand-gray/70 font-mono"
                    style={{ direction: "ltr" }}
                  >
                    +966-530-986-725
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-brand-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray mb-1">
                    {lang === "ar" ? "البريد الإلكتروني" : "Email"}
                  </h4>
                  <p className="text-brand-gray/70">info@brandexco.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-brand-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-gray mb-1">
                    {lang === "ar" ? "الموقع الإلكتروني" : "Website"}
                  </h4>
                  <p className="text-brand-gray/70">www.brandexco.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-black/50 rounded-xl p-8 border border-brand-gray/20">
            <h3 className="text-2xl font-bold text-brand-gray mb-6">
              {lang === "ar" ? "وسائل التواصل الاجتماعي" : "Social Media"}
            </h3>
            <div className="space-y-4">
              <p className="text-brand-gray/70 mb-6">
                {lang === "ar"
                  ? "تابعنا على وسائل التواصل الاجتماعي"
                  : "Follow us on social media"}
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.facebook.com/brandexcoagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/brandexco.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-brand-secondary/20 flex items-center justify-center hover:bg-brand-secondary hover:text-black transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href="https://x.com/brandexcoagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-brand-green-1/20 flex items-center justify-center hover:bg-brand-green-1 hover:text-black transition-colors cursor-pointer"
                  aria-label="Twitter/X"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a
                  href="https://www.tiktok.com/@brandexco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-brand-primary/20 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-colors cursor-pointer"
                  aria-label="TikTok"
                >
                  <FaTiktok className="text-xl" />
                </a>
              </div>
              <div className="text-center mt-6">
                <h4 className="font-bold text-brand-gray text-xl">BRANDEXCO</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
