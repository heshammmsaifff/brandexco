import emailjs from "emailjs-com";

// تكوين EmailJS
export const EMAILJS_CONFIG = {
  // استبدل هذه القيم بالقيم الحقيقية من حسابك في EmailJS
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",

  // إعدادات إضافية
  TEMPLATE_PARAMS: {
    to_name: "BrandExCo Team",
    company_name: import.meta.env.VITE_COMPANY_NAME || "BrandExCo",
    website: import.meta.env.VITE_COMPANY_WEBSITE || "https://brandexco.com",
  },
};

// دالة تهيئة EmailJS
export const initEmailJS = () => {
  try {
    // فحص أن جميع المتغيرات موجودة
    if (
      !EMAILJS_CONFIG.PUBLIC_KEY ||
      EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      console.warn(
        "⚠️ EmailJS Public Key غير محدد. يرجى إضافة VITE_EMAILJS_PUBLIC_KEY في ملف .env"
      );
      return false;
    }

    if (
      !EMAILJS_CONFIG.SERVICE_ID ||
      EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID"
    ) {
      console.warn(
        "⚠️ EmailJS Service ID غير محدد. يرجى إضافة VITE_EMAILJS_SERVICE_ID في ملف .env"
      );
      return false;
    }

    if (
      !EMAILJS_CONFIG.TEMPLATE_ID ||
      EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID"
    ) {
      console.warn(
        "⚠️ EmailJS Template ID غير محدد. يرجى إضافة VITE_EMAILJS_TEMPLATE_ID في ملف .env"
      );
      return false;
    }

    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log("✅ EmailJS initialized successfully");
    return true;
  } catch (error) {
    console.error("❌ Failed to initialize EmailJS:", error);
    return false;
  }
};

// دالة إرسال الرسالة
export const sendEmail = async (formData) => {
  // فحص أن EmailJS تم تهيئته
  if (
    !EMAILJS_CONFIG.PUBLIC_KEY ||
    EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY"
  ) {
    return {
      success: false,
      error: "EmailJS not configured. Please check your environment variables.",
    };
  }

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    from_phone: formData.phone,
    service_type: formData.service,
    message: formData.message,
    to_name: EMAILJS_CONFIG.TEMPLATE_PARAMS.to_name,
    company_name: EMAILJS_CONFIG.TEMPLATE_PARAMS.company_name,
    website: EMAILJS_CONFIG.TEMPLATE_PARAMS.website,
  };

  try {
    console.log("📧 Sending email with params:", templateParams);

    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    console.log("✅ Email sent successfully:", result);
    return { success: true, result };
  } catch (error) {
    console.error("❌ EmailJS Error:", error);

    // رسائل خطأ أكثر وضوحاً
    let errorMessage = "حدث خطأ في إرسال الرسالة";

    if (error.status === 412) {
      errorMessage =
        "مشكلة في إعداد Gmail API. يرجى اتباع تعليمات الإعداد في ملف EMAILJS_SETUP.md";
    } else if (error.status === 400) {
      errorMessage = "بيانات النموذج غير صحيحة";
    } else if (error.status === 401) {
      errorMessage = "مفتاح EmailJS غير صحيح";
    } else if (error.status === 403) {
      errorMessage = "لا توجد صلاحية لإرسال الرسائل";
    }

    return {
      success: false,
      error: errorMessage,
      details: error,
    };
  }
};
