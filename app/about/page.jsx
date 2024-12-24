import Link from "next/link";

const About = () => {
  return (
    <main className="py-3">
      <section className="about-section text-center">
        <h1 className="text-yellow-500 text-3xl font-bold mb-4">
          Hamizza Awards Voting Website
        </h1>
        <h2 className="text-xl text-gray-300 mb-4">Overview</h2>
        <p className="text-lg text-gray-300 mb-6">
          Wellcum to <b>Hamizza's Official Website</b>, the ultimate platform
          for fans to celebrate and support their favorite series of 2024. The
          website offers an exciting experience where <em>you</em> decide the
          winners. Cast your votes, rally behind your favorites, and be part of
          the celebration! hhhhhh{" "}
          <strong className="text-orange-500">We care about your vote!!</strong>{" "}
          hhhhhhhhhhhhhhhh
        </p>
      </section>
      <Link href="/home" className="vote-link block text-center mt-4">
        <div className="vote-square w-48 h-48 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center mx-auto hover:bg-gray-600 transition duration-300">
          <span className="text-white text-xl">Send your vote from here</span>
        </div>
      </Link>
      <p className="text-center text-antiquewhite mt-4">
        <u>NB</u>: If you're using your phone, please hold click this button
        because haha vote HAHA turns into foot HAHHAHA omg Odlan so funy
        hhhhhhhhhh vote foot lol foot in vote with voot that phote
        HHHHHHHHHHHHHHHHHHHH
      </p>
    </main>
  );
};

export default About;
