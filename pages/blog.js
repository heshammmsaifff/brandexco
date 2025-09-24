import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Link from "next/link";

export default function Blog({ lang = "ar" }) {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("lang", lang)
        .order("created_at", { ascending: false });

      if (error) return console.error(error);

      setPosts(data);

      // استخراج الفئات بدون تكرار
      const uniqueCategories = [
        ...new Set(data.map((post) => post.category).filter(Boolean)),
      ];
      setCategories(uniqueCategories);
    };

    fetchPosts();
  }, [lang]);

  // فلترة البوستات حسب الفئة
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {lang === "ar" ? "المدونة" : "Blog"}
      </h1>

      {/* فلتر الفئات */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 text-black">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full border transition cursor-pointer ${
            selectedCategory === "all"
              ? "bg-green-500 hover:bg-gray-400 shadow-lg"
              : "bg-gray-100 hover:bg-gray-400"
          }`}
        >
          {lang === "ar" ? "الكل" : "All"}
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border transition cursor-pointer ${
              selectedCategory === cat
                ? "bg-green-600 hover:bg-gray-400 shadow-lg"
                : "bg-gray-100 hover:bg-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* عرض المقالات */}
      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500">
          {lang === "ar" ? "لا يوجد مقالات حالياً" : "No blogs available now"}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg shadow hover:shadow-xl transition"
            >
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-3 text-center border pb-2 rounded-3xl">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-gray-500 text-center">
                {post.category}
              </p>
              <p className="mt-2 text-gray-700">
                {post.content.slice(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
