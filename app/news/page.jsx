import React from "react";

const News = () => {
  return (
    <section className="py-3">
      <article>
        <h2 className="text-yellow-500 text-center">
          Hamizza's Bizarre Adventure: the movie
        </h2>
        <p className="text-center">CUMMING SOON...!</p>
        <p className="text-center">trust</p>
        <div className="mt-2 text-center">
          <iframe
            className="max-w-full max-h-full mx-auto"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LV9UYtFoLQU"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </article>
    </section>
  );
};

export default News;
