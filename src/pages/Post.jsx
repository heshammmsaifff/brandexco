import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { Helmet } from "react-helmet-async";

const Post = ({ currentLang }) => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const langToUse = currentLang || "ar";
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("lang", langToUse)
        .maybeSingle();

      if (error) {
        console.error("Error fetching post:", error.message);
      } else {
        setPost(data);
      }
    };

    fetchPost();
  }, [slug, currentLang]);

  if (!post) return <p>Loading...</p>;

  // ✅ تحديد الرابط الصحيح للصورة
  let imageUrl = "https://via.placeholder.com/600x300?text=No+Image";
  if (post.image_url) {
    if (post.image_url.startsWith("http")) {
      imageUrl = post.image_url; // رابط كامل مخزن في DB
    } else {
      imageUrl = supabase.storage
        .from("posts")
        .getPublicUrl(post.image_url).publicUrl; // اسم الملف مخزن
    }
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Helmet>
        <title>{post.meta_title || post.title}</title>
        <meta
          name="description"
          content={post.meta_description || post.content?.slice(0, 160)}
        />
        <meta name="keywords" content={post.meta_keywords || ""} />
        <meta property="og:title" content={post.meta_title || post.title} />
        <meta
          property="og:description"
          content={post.meta_description || post.content?.slice(0, 160)}
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      <img
        src={imageUrl}
        alt={post.title}
        className="w-full h-90 object-cover rounded-lg shadow-2xl"
      />

      <h1 className="text-3xl font-bold mt-4 text-brand-gray">{post.title}</h1>
      <p className="text-sm text-brand-gray/70">{post.category}</p>
      <div className="mt-4 text-brand-gray/90 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
};

export default Post;
