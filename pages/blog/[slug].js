// pages/blog/[slug].js
import { supabase } from "../../supabaseClient";

export default function Post({ post }) {
  if (!post) return <p>Post not found</p>;

  let imageUrl = "https://via.placeholder.com/600x300?text=No+Image";
  if (post.image_url) {
    imageUrl = post.image_url.startsWith("http")
      ? post.image_url
      : supabase.storage.from("posts").getPublicUrl(post.image_url).publicUrl;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
      <img
        src={imageUrl}
        alt={post.title}
        className="w-full h-90 object-cover rounded-lg shadow-2xl"
      />
      <p className="text-sm text-gray-500">{post.category}</p>
      <div className="mt-4 leading-relaxed whitespace-pre-line">
        {post.content}
      </div>
    </div>
  );
}

// SSR
export async function getServerSideProps(context) {
  const { slug } = context.params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("lang", "ar")
    .maybeSingle();

  if (error) {
    console.error(error.message);
  }

  return {
    props: {
      post: post || null,
    },
  };
}
