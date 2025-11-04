import React from "react";
import { Eye, Heart } from "lucide-react";

const articles = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/Mk-Y6Hh76ybtrLNOKnqIvr4coQ15tRDbnH3nNJTHVps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy9lNWM3ZjRk/NTc3YWM5OTY3NmEy/MGQ0NzVlMTQyMTA4/ZjAzYzYwNTY4ODAy/NGM5ZWExYmU1OWU4/NGZkMjBiODI2Lmpw/Zw",
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
      "https://imgs.search.brave.com/Mk-Y6Hh76ybtrLNOKnqIvr4coQ15tRDbnH3nNJTHVps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy9lNWM3ZjRk/NTc3YWM5OTY3NmEy/MGQ0NzVlMTQyMTA4/ZjAzYzYwNTY4ODAy/NGM5ZWExYmU1OWU4/NGZkMjBiODI2Lmpw/Zw",
    date: "Monday 05, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    id: 4,
    image:
      "https://imgs.search.brave.com/Mk-Y6Hh76ybtrLNOKnqIvr4coQ15tRDbnH3nNJTHVps/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/cHYtdGFyZ2V0LWlt/YWdlcy9lNWM3ZjRk/NTc3YWM5OTY3NmEy/MGQ0NzVlMTQyMTA4/ZjAzYzYwNTY4ODAy/NGM5ZWExYmU1OWU4/NGZkMjBiODI2Lmpw/Zw",
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
              className="w-40 h-40 md:w-48 md:h-48 object-cover"
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
