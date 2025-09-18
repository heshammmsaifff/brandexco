import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router-dom";

export default function Blog({ lang = "ar" }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("lang", lang)
        .order("created_at", { ascending: false });

      if (error) return console.error(error);
      setPosts(data);
    };

    fetchPosts();
  }, [lang]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {lang === "ar" ? "المدونة" : "Blog"}
      </h1>
      {posts.length === 0 ? (
        <p>{lang === "ar" ? "لا يوجد مدونات حالياً" : "no blogr now"}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg shadow">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-3 text-center border pb-2 rounded-3xl">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-500">{post.category}</p>
              <p className="mt-2">{post.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
