import Head from "next/head";

import journal from "@/utils/journal";

const Journal = () => {
  return (
    <div>
      <Head>
        <title>Journal | Vida Glow</title>
        <meta
          name="description"
          content="Read the latest articles and insights on health, beauty, and wellness from Vida Glow."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Vida Glow Journal
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Read the latest articles and insights on health, beauty, and
            wellness from Vida Glow.
          </p>
        </div>
        <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journal.map((entry) => (
            <div key={entry.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={entry.imageUrl}
                alt={entry.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-2xl font-bold text-gray-900 mt-4">
                {entry.title}
              </h2>
              <p className="text-sm text-gray-500">{entry.date}</p>
              <p className="mt-4 text-gray-600">{entry.excerpt}</p>
              <a
                href={`/journal/${entry.id}`}
                className="mt-4 inline-block text-blue-500 hover:text-blue-700"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Journal;
