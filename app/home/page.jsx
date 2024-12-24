import Link from "next/link";

const Home = () => {
  return (
    <main>
      <section className="voting-section">
        <h2>Vote Now</h2>
        <div className="categories-container">
          <Link
            href="/series-with-most-uploaded-episodes"
            className="category-card"
          >
            <h3>Series with the Most Uploaded Episodes in 2024</h3>
          </Link>
          <Link href="/best-editing" className="category-card">
            <h3>Best Editing</h3>
          </Link>
          <Link href="/most-realistic-plot" className="category-card">
            <h3>Most Realistic Plot</h3>
          </Link>
          <Link href="/most-sold-manga" className="category-card">
            <h3>Most Sold Manga</h3>
          </Link>
          <Link href="/most-mentally-sane-actors" className="category-card">
            <h3>Most Mentally Sane Actors</h3>
          </Link>
          <Link href="/best-fandom" className="category-card">
            <h3>Best Fandom</h3>
          </Link>
          <Link href="/best-actor" className="category-card">
            <h3>Best Actor</h3>
          </Link>
          <Link href="/best-actress" className="category-card">
            <h3>Best Actress</h3>
          </Link>
          <Link href="/best-costume-design" className="category-card">
            <h3>Best Costume Design</h3>
          </Link>
          <Link href="/best-editing-2hh" className="category-card">
            <h3>Best Editing</h3>
          </Link>
          <Link href="/best-sounds" className="category-card">
            <h3>Best Sounds</h3>
          </Link>
          <Link href="/best-story-telling" className="category-card">
            <h3>Best Story Telling</h3>
          </Link>
          <Link href="/most-caked-up-character" className="category-card">
            <h3>Most Caked Up Character</h3>
          </Link>
          <Link href="/best-customer-service" className="category-card">
            <h3>Best Customer Service</h3>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
