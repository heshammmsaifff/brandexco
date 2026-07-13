import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

// Animated toast for form feedback. `status` is "success" | "error" | null.
export default function Toast({ status, lang = "ar", onClose, duration = 5000 }) {
  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(t);
  }, [status, duration, onClose]);

  const isSuccess = status === "success";

  const messages = {
    success:
      lang === "ar"
        ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً."
        : "Your message was sent successfully! We'll be in touch soon.",
    error:
      lang === "ar"
        ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى."
        : "Something went wrong. Please try again.",
  };

  return (
    <AnimatePresence>
      {status && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className="fixed bottom-6 end-6 z-[9999] max-w-sm w-[calc(100%-3rem)] sm:w-auto"
          role="status"
          aria-live="polite"
        >
          <div
            className={`relative flex items-start gap-3 rounded-2xl border p-4 pe-10 shadow-2xl backdrop-blur ${
              isSuccess
                ? "bg-brand-black/90 border-brand-primary/50"
                : "bg-brand-black/90 border-red-500/50"
            }`}
          >
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
              className={`text-2xl flex-shrink-0 ${
                isSuccess ? "text-brand-primary" : "text-red-400"
              }`}
            >
              {isSuccess ? <FiCheckCircle /> : <FiAlertCircle />}
            </motion.span>

            <p className="text-brand-gray text-sm leading-relaxed pt-0.5">
              {isSuccess ? messages.success : messages.error}
            </p>

            <button
              onClick={onClose}
              className="absolute top-3 end-3 text-brand-gray/50 hover:text-brand-gray transition-colors"
              aria-label={lang === "ar" ? "إغلاق" : "Close"}
            >
              <FiX />
            </button>

            {/* progress bar */}
            <motion.span
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className={`absolute bottom-0 start-0 h-1 w-full rounded-b-2xl ${
                isSuccess ? "bg-brand-primary" : "bg-red-400"
              }`}
              style={{ transformOrigin: lang === "ar" ? "right" : "left" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
