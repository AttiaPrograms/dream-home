import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";

const BlogCard = ({ post }) => {
  const { id, title, excerpt, image, category, author, date, readTime } = post;

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <Link to={`/blog/${id}`}>
        <div className="overflow-hidden h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-bold text-gold tracking-widest uppercase">
          {category}
        </span>

        <Link to={`/blog/${id}`}>
          <h3 className="font-serif text-xl font-bold text-dark-text mt-2 mb-3 line-clamp-2 group-hover:text-gold transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-dark-text text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-light-text border-t border-gray-100 pt-4 mb-4">
          <div className="flex items-center gap-2">
            <FaUser className="text-gold" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-gold" />
            <span>{readTime}</span>
          </div>
        </div>

        {/* Read More */}
        <Link
          to={`/blog/${id}`}
          className="inline-block text-sm font-semibold text-gold hover:text-navy transition-colors"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;