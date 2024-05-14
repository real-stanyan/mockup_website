import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us | Vida Glow</title>
        <meta
          name="description"
          content="Learn more about Vida Glow, a leading wellness brand."
        />
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Vida Glow</h1>
          <p className="mt-4 text-lg text-gray-600">
            At Vida Glow, we specialize in active beauty solutions for real,
            active people. Our products are designed to be effective, simple to
            use, and provide real results.
          </p>
        </div>
        <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to inspire confidence at every age by promoting
              health, well-being, and beauty from within. We are committed to
              creating products that enhance your natural beauty and fit
              seamlessly into your daily routine.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-600">
              Founded in 2014, Vida Glow started with a single product - our
              original Natural Marine Collagen. Since then, we've expanded our
              range to include a variety of ingestible beauty products, all
              designed to support and enhance your natural beauty.
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-gray-600">
              Integrity, innovation, and inclusivity are at the heart of
              everything we do. We believe in transparency, continuously
              improving our formulations, and making our products accessible to
              everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Products</h2>
            <p className="mt-4 text-gray-600">
              From our best-selling Marine Collagen to our advanced skincare
              range, every Vida Glow product is designed to help you look and
              feel your best. We use only the highest quality ingredients and
              are committed to sustainable sourcing and practices.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
