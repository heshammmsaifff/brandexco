import React, { useState, useEffect } from "react";
import { initEmailJS, sendEmail } from "../config/emailjs";

function ContactForm({ lang }) {
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
    lang === "ar" ? "تسويق وسائل التواصل الاجتماعي" : "Social Media Marketing",
    lang === "ar" ? "تحسين محركات البحث" : "Search Engine Optimization",
    lang === "ar" ? "إعلانات جوجل" : "Google Ads",
    lang === "ar" ? "التصميم الجرافيكي" : "Graphic Design",
    lang === "ar"
      ? "تطوير مواقع التجارة الإلكترونية"
      : "E-commerce Website Development",
    lang === "ar" ? "استشارات تقنية" : "Technical Consultations",
  ];

  return (
    <section className="relative py-20 bg-brand-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-gray mb-6">
            {lang === "ar" ? "ابدأ مشروعك معنا" : "Start Your Project With Us"}
          </h2>
          <p className="text-brand-gray/80 text-lg">
            {lang === "ar"
              ? "احصل على استشارة مجانية وتحدث مع خبرائنا حول مشروعك"
              : "Get a free consultation and talk to our experts about your project"}
          </p>
        </div>

        {/* رسائل الحالة */}
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
            {lang === "ar"
              ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً."
              : "Your message has been sent successfully! We'll contact you soon."}
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
            {lang === "ar"
              ? "حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى."
              : "An error occurred while sending your message. Please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-brand-gray font-medium mb-3">
                {lang === "ar" ? "الاسم الكامل" : "Full Name"}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-brand-dark/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors"
                placeholder={
                  lang === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"
                }
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-brand-gray font-medium mb-3">
                {lang === "ar" ? "البريد الإلكتروني" : "Email Address"}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-brand-dark/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors"
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
              <label className="block text-brand-gray font-medium mb-3">
                {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-brand-dark/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors"
                placeholder={
                  lang === "ar" ? "أدخل رقم هاتفك" : "Enter your phone number"
                }
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-brand-gray font-medium mb-3">
                {lang === "ar" ? "نوع الخدمة" : "Service Type"}
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-brand-dark/50 border border-brand-gray/30 text-brand-gray focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer relative"
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
                <option value="" className="bg-brand-dark text-brand-gray">
                  {lang === "ar" ? "اختر نوع الخدمة" : "Select service type"}
                </option>
                {services.map((service, index) => (
                  <option
                    key={index}
                    value={service}
                    className="bg-brand-dark text-brand-gray hover:bg-brand-primary hover:text-white py-2"
                  >
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-brand-gray font-medium mb-3">
              {lang === "ar" ? "رسالتك" : "Your Message"}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-brand-dark/50 border border-brand-gray/30 text-brand-gray placeholder-brand-gray/50 focus:outline-none focus:border-brand-primary transition-colors resize-none"
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
              className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-colors btn-shimmer ${
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
      </div>
    </section>
  );
}

export default ContactForm;
