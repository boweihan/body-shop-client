import React from 'react';
import movie from '../videos/landing.mp4';

const HomePage = () => {
  const content = {
    imageAlt: 'Car being repaired',
  };

  return (
    <main>
      <video className="c-video" playsinline autoPlay muted loop>
        <track kind="captions" />
        <source src={movie} type="video/mp4" />
      </video>
    </main>
  );
};

export default HomePage;
