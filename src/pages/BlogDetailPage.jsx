import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../components/blog/BlogList";
import BlogDetail from "../components/blog/BlogDetail";

const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <section className="bg-warm-gray py-24 text-center">
        <h2 className="font-serif text-2xl font-bold text-dark-text mb-4">
          Post not found
        </h2>
        <Link to="/blog" className="text-gold font-semibold hover:text-navy">
          ← Back to Blog
        </Link>
      </section>
    );
  }

  return <BlogDetail post={post} />;
};

export default BlogDetailPage;