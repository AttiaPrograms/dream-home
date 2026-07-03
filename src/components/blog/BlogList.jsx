import React, { useState } from "react";
import BlogCard from "./BlogCard";

// Dummy Data - Baad me API se aayega
export const blogPosts = [
  {
    id: 1,
    category: "INVESTMENT",
    title: "Top 5 Areas to Invest in Karachi in 2026",
    excerpt: "Looking for the best ROI? We break down the top 5 emerging areas in Karachi for property investment this year.",
    image: "/assets/images/blog/blog1.jpg",
    author: "Ahmed Khan",
    date: "Oct 15, 2026",
    readTime: "5 min read",
    content: [
      "Karachi's real estate market has seen major shifts over the past year, with new development zones offering strong rental yields and long-term appreciation.",
      "DHA, Bahria Town, and the emerging Malir Expressway corridor are leading the pack for 2026, driven by improved infrastructure and rising demand from overseas Pakistanis.",
      "Before investing, always verify land title, NOC status, and developer track record — due diligence remains the single biggest factor in avoiding losses.",
    ],
  },
  {
    id: 2,
    category: "DESIGN",
    title: "Modern Villa Design Trends You Need to See",
    excerpt: "From smart homes to open layouts, discover the design trends that are shaping luxury villas in 2026.",
    image: "/assets/images/blog/blog2.jpg",
    author: "Sara Malik",
    date: "Oct 10, 2026",
    readTime: "4 min read",
    content: [
      "Open-plan living, natural light, and sustainable materials are defining luxury villa design this year.",
      "Smart home integration — from lighting to security — is no longer a premium add-on but an expected baseline in new builds.",
      "Indoor-outdoor living spaces, like retractable glass walls opening onto private courtyards, continue to be the most requested feature by buyers.",
    ],
  },
  {
    id: 3,
    category: "GUIDE",
    title: "Complete Guide to Buying Your First Home",
    excerpt: "Buying your first home can be stressful. Here is a step-by-step guide to make the process smooth and transparent.",
    image: "/assets/images/blog/blog3.jpg",
    author: "Bilal Asif",
    date: "Oct 05, 2026",
    readTime: "7 min read",
    content: [
      "Start by getting pre-approved for financing so you know your realistic budget before house-hunting begins.",
      "Shortlist properties based on location, resale potential, and proximity to schools or workplaces — not just aesthetics.",
      "Always hire an independent inspector before finalizing the deal, even if the seller insists the property is in perfect condition.",
    ],
  },
  {
    id: 4,
    category: "INSURANCE",
    title: "Why Property Insurance is a Must in 2026",
    excerpt: "Protect your biggest asset. We explain everything you need to know about property insurance in Pakistan.",
    image: "/assets/images/blog/blog4.jpg",
    author: "Hina Raza",
    date: "Sep 28, 2026",
    readTime: "3 min read",
    content: [
      "Property insurance covers damage from fire, natural disasters, and in some policies, theft or structural failure.",
      "Premiums are typically a small fraction of a property's value, making it one of the most cost-effective ways to protect a major investment.",
      "Always read the exclusions section carefully — many claims are denied due to coverage gaps buyers weren't aware of.",
    ],
  },
  {
    id: 5,
    category: "MARKET",
    title: "Dubai vs Karachi: Where to Invest Now?",
    excerpt: "A detailed comparison of property prices, rental yields, and growth potential in two major markets.",
    image: "/assets/images/blog/blog5.jpg",
    author: "Ahmed Khan",
    date: "Sep 22, 2026",
    readTime: "6 min read",
    content: [
      "Dubai offers stronger rental yields and easier ownership rules for foreign investors, while Karachi offers lower entry prices and higher long-term growth potential.",
      "Currency stability and ease of repatriating profits are key factors that favor Dubai for international investors.",
      "For local buyers, Karachi still offers the better risk-adjusted return given the current market cycle.",
    ],
  },
  {
    id: 6,
    category: "DESIGN",
    title: "Smart Home Technology for Modern Living",
    excerpt: "Make your home intelligent. Explore the top smart home devices that add comfort, security, and value.",
    image: "/assets/images/blog/blog6.jpg",
    author: "Sara Malik",
    date: "Sep 18, 2026",
    readTime: "4 min read",
    content: [
      "Smart thermostats, lighting, and security systems are now standard expectations among buyers under 40.",
      "Voice-controlled ecosystems and app-based home management add resale value and appeal to tech-savvy renters.",
      "Investing in smart infrastructure during construction is far cheaper than retrofitting it later.",
    ],
  },
];

const categories = ["ALL", "INVESTMENT", "DESIGN", "GUIDE", "INSURANCE", "MARKET"];

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredPosts =
    activeCategory === "ALL"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="bg-warm-gray py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-gold mb-3 uppercase">
            OUR BLOG
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark-text mb-4">
            Insights & Expert Advice
          </h1>
          <p className="text-dark-text max-w-2xl mx-auto">
            Stay updated with the latest trends in real estate, design, and investment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-navy shadow-md"
                  : "bg-white text-dark-text hover:bg-gold/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-dark-text text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;