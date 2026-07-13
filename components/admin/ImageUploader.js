import { useRef, useState } from "react";
import { FiUploadCloud, FiX } from "react-icons/fi";
import { supabase } from "../../supabaseClient";

// Reusable multi-image uploader that stores files in a Supabase Storage
// bucket and returns their public URLs via onChange.
export default function ImageUploader({
  bucket,
  images = [],
  onChange,
  max = 5,
  label = "الصور",
}) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const remaining = max - images.length;

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setError("");

    if (files.length > remaining) {
      setError(`يمكنك رفع ${max} صور كحد أقصى.`);
      return;
    }

    setUploading(true);
    try {
      const uploaded = [];
      for (const file of files) {
        const ext = file.name.split(".").pop();
        const path = `${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from(bucket)
          .upload(path, file, { cacheControl: "31536000", upsert: false });
        if (upErr) throw upErr;
        const { data } = supabase.storage.from(bucket).getPublicUrl(path);
        uploaded.push(data.publicUrl);
      }
      onChange([...images, ...uploaded]);
    } catch (err) {
      console.error("upload error:", err);
      setError("تعذّر رفع الصورة. تأكد من تسجيل الدخول وحاول مجدداً.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const removeImage = (url) => {
    onChange(images.filter((u) => u !== url));
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-brand-gray mb-2">
        {label}{" "}
        <span className="text-brand-gray/50 font-normal">
          ({images.length}/{max})
        </span>
      </label>

      <div className="flex flex-wrap gap-3 mb-3">
        {images.map((url) => (
          <div
            key={url}
            className="relative w-24 h-24 rounded-lg overflow-hidden border border-brand-gray/20 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt="" className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => removeImage(url)}
              className="absolute top-1 left-1 bg-red-500/90 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="حذف الصورة"
            >
              <FiX className="text-xs" />
            </button>
          </div>
        ))}

        {remaining > 0 && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="w-24 h-24 rounded-lg border-2 border-dashed border-brand-gray/30 flex flex-col items-center justify-center text-brand-gray/50 hover:border-brand-primary hover:text-brand-primary transition-colors disabled:opacity-50"
          >
            {uploading ? (
              <div className="w-5 h-5 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin" />
            ) : (
              <>
                <FiUploadCloud className="text-xl mb-1" />
                <span className="text-xs">رفع</span>
              </>
            )}
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={max > 1}
        onChange={handleFiles}
        className="hidden"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
}
