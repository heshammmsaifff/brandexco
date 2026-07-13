import { useEffect, useState } from "react";
import {
  FiTrash2,
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiCircle,
} from "react-icons/fi";
import AdminLayout from "../../components/admin/AdminLayout";
import { supabase } from "../../supabaseClient";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState(null);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false });
    setMessages(data || []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const toggleRead = async (msg) => {
    await supabase
      .from("messages")
      .update({ is_read: !msg.is_read })
      .eq("id", msg.id);
    setMessages((m) =>
      m.map((x) => (x.id === msg.id ? { ...x, is_read: !x.is_read } : x))
    );
  };

  const handleDelete = async (id) => {
    if (!confirm("هل أنت متأكد من حذف هذه الرسالة؟")) return;
    const { error } = await supabase.from("messages").delete().eq("id", id);
    if (error) return alert("تعذّر الحذف: " + error.message);
    setMessages((m) => m.filter((x) => x.id !== id));
  };

  const openMessage = (msg) => {
    setOpenId(openId === msg.id ? null : msg.id);
    if (!msg.is_read) toggleRead(msg);
  };

  const fmtDate = (d) =>
    new Date(d).toLocaleString("ar-EG", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  return (
    <AdminLayout title="الرسائل">
      {loading ? (
        <p className="text-brand-gray/60">جاري التحميل...</p>
      ) : messages.length === 0 ? (
        <div className="text-center py-16 text-brand-gray/60">
          لا توجد رسائل بعد.
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`border rounded-xl overflow-hidden transition-colors ${
                msg.is_read
                  ? "border-brand-gray/15 bg-brand-black/30"
                  : "border-brand-primary/40 bg-brand-primary/5"
              }`}
            >
              <button
                onClick={() => openMessage(msg)}
                className="w-full flex items-center gap-4 p-4 text-right"
              >
                <span
                  className={`flex-shrink-0 ${
                    msg.is_read ? "text-brand-gray/30" : "text-brand-primary"
                  }`}
                >
                  {msg.is_read ? <FiCircle /> : <FiMail />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-brand-gray truncate">
                    {msg.name}
                    {msg.service && (
                      <span className="mr-2 text-xs font-normal text-brand-primary">
                        • {msg.service}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-brand-gray/50 truncate">
                    {msg.message}
                  </p>
                </div>
                <span className="text-xs text-brand-gray/40 flex-shrink-0 hidden sm:block">
                  {fmtDate(msg.created_at)}
                </span>
              </button>

              {openId === msg.id && (
                <div className="px-4 pb-4 border-t border-brand-gray/10 pt-4 space-y-3">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href={`mailto:${msg.email}`}
                      className="inline-flex items-center gap-2 text-brand-primary hover:underline"
                      dir="ltr"
                    >
                      <FiMail /> {msg.email}
                    </a>
                    {msg.phone && (
                      <a
                        href={`tel:${msg.phone}`}
                        className="inline-flex items-center gap-2 text-brand-primary hover:underline"
                        dir="ltr"
                      >
                        <FiPhone /> {msg.phone}
                      </a>
                    )}
                  </div>
                  <p className="text-brand-gray/85 whitespace-pre-line leading-relaxed">
                    {msg.message}
                  </p>
                  <p className="text-xs text-brand-gray/40 sm:hidden">
                    {fmtDate(msg.created_at)}
                  </p>
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => toggleRead(msg)}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm border border-brand-gray/20 text-brand-gray/70 hover:text-brand-primary hover:border-brand-primary transition-colors"
                    >
                      <FiCheckCircle />
                      {msg.is_read ? "تحديد كغير مقروءة" : "تحديد كمقروءة"}
                    </button>
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                      <FiTrash2 /> حذف
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
