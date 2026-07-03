import React from "react";
import BlogList from "/components/blog/BlogList";

const BlogPage = () => {
  const handleSelectPost = (post) => {
    // TODO: BlogDetailPage banne ke baad yahan navigation add karna
    console.log("Selected post:", post);
  };

  return <BlogList onSelectPost={handleSelectPost} />;
};

export default BlogPage;