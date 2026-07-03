import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaUser, FaArrowLeft } from "react-icons/fa";

const BlogDetail = ({ post }) => {
  if (!post) return null;

  const { title, image, category, author, date, readTime, content = [] } = post;

  return (
    <section className="bg-warm-gray py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-navy transition-colors mb-8"
        >
          <FaArrowLeft /> Back to Blog
        </Link>

        {/* Header */}
        <span className="text-xs font-bold text-gold tracking-widest uppercase">
          {category}
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-dark-text mt-3 mb-6 leading-tight">
          {title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-light-text border-b border-gray-200 pb-6 mb-8">
          <div className="flex items-center gap-2">
            <FaUser className="text-gold" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gold" />
            <span>{readTime}</span>
          </div>
          <span>{date}</span>
        </div>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] mb-10">
          <img src={image} alt={title} className="w-full h-[420px] object-cover" />
        </div>

        {/* Body */}
        <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-8 md:p-10">
          {content.map((paragraph, i) => (
            <p
              key={i}
              className="text-dark-text text-base leading-relaxed mb-5 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;