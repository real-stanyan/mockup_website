"use client";

import { useState, useEffect } from "react";

import Head from "next/head";

import journal from "@/utils/journal";

const JournalEntry = ({ params }) => {
  const [blog, setBlog] = useState({
    title: "",
    date: "",
    content: "",
    imageUrl: "",
  });
  useEffect(() => {
    setBlog(journal.find((item) => item.id === parseInt(params.slug)));
  }, [params.slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>{blog.title} | Vida Glow Journal</title>
        <meta name="description" content={blog.content} />
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            {blog.title}
          </h1>
          <p className="text-sm text-gray-500">{blog.date}</p>
          <p className="mt-4 text-gray-600">{blog.content}</p>
        </div>
      </main>
    </div>
  );
};

export default JournalEntry;
