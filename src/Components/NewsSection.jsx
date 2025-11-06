import React from "react";
import { Eye, Heart } from "lucide-react";

const articles = [
  {
    id: 1,
    image:
      "data:image/png;base64,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",
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    id: 2,
    image:
      "https://imgs.search.brave.com/Mk-Y6Hh76ybtrLNOKnqIvr4coQ15tRDbnH3nNJTHVps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy9lNWM3ZjRk/NTc3YWM5OTY3NmEy/MGQ0NzVlMTQyMTA4/ZjAzYzYwNTY4ODAy/NGM5ZWExYmU1OWU4/NGZkMjBiODI2Lmpw/Zw",
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuzS8OeqpQX2DTCcYfNfGJ_vzGN2jaH-tT5w&s",
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_o4qIXBneBTx7CqNUmrIXTgYPfjbPCrjxg&s",
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-[#F9FBFF] text-center">
      {/* Header */}
      <div className="mb-14">
        <p className="text-blue-500 font-semibold uppercase tracking-wide mb-2 text-2xl">
          Better Information, Better Health
        </p>
        <h2 className="text-4xl font-bold text-[#0E273A]">News</h2>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex bg-white  shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Left: Image */}
            <img
              src={article.image}
              alt={article.title}
              className="w-40 h-40 md:w-48 md:h-48 object-contain"
            />

            {/* Right: Text Content */}
            <div className="p-4 text-left flex flex-col justify-between">
              <div>
                <p className="text-sm text-blue-500 mb-1">
                  {article.date} | By {article.author}
                </p>
                <h3 className="text-[#0E273A] font-medium leading-snug">
                  {article.title}
                </h3>
              </div>

              {/* Footer with icons */}
              <div className="flex items-center gap-4 mt-3 text-gray-600">
                <div className="flex items-center gap-1">
                  <Eye size={18} className="text-blue-600" />
                  <span className="text-sm">{article.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={18} className="text-pink-500" />
                  <span className="text-sm">{article.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-10 space-x-2">
        <span className="w-3 h-3 rounded-full bg-blue-300"></span>
        <span className="w-3 h-3 rounded-full bg-blue-600"></span>
        <span className="w-3 h-3 rounded-full bg-blue-300"></span>
      </div>
    </section>
  );
}
