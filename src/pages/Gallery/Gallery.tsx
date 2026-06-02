import { useState } from "react";

import gallery1 from "../../assets/gallery/gallery-1.webp";
import gallery2 from "../../assets/gallery/gallery-2.webp";
import gallery3 from "../../assets/gallery/gallery-3.webp";
import gallery4 from "../../assets/gallery/gallery-4.webp";
import gallery5 from "../../assets/gallery/gallery-5.webm";
import gallery6 from "../../assets/gallery/gallery-6.webm";
import gallery7 from "../../assets/gallery/gallery-7.webm";
import gallery8 from "../../assets/gallery/gallery-8.webm";

type GalleryMedia = {
  src: string;
  title: string;
  type: "image" | "video";
  size?: "small" | "wide" | "tall" | "large";
};

const galleryMedia: GalleryMedia[] = [
  {
    src: gallery1,
    title: "Mangonada with fresh mango and chamoy",
    type: "image",
    size: "large",
  },
  {
    src: gallery2,
    title: "Colorful Mexican paletas",
    type: "image",
    size: "small",
  },
  {
    src: gallery3,
    title: "Ice cream scoops in a cup",
    type: "image",
    size: "tall",
  },
  {
    src: gallery4,
    title: "Elote with toppings",
    type: "image",
    size: "small",
  },
  {
    src: gallery5,
    title: "Aguas frescas drinks",
    type: "video",
    size: "wide",
  },
  {
    src: gallery6,
    title: "Mexican snacks and chips",
    type: "video",
    size: "small",
  },
  {
    src: gallery7,
    title: "Fresh fruit dessert cup",
    type: "video",
    size: "small",
  },
  {
    src: gallery8,
    title: "La Michoacana Aztek treat",
    type: "video",
    size: "wide",
  },
];

function getMediaSizeClass(size: GalleryMedia["size"]) {
  switch (size) {
    case "large":
      return "h-72 sm:h-80 md:col-span-2 md:row-span-2 md:h-full";
    case "wide":
      return "h-72 sm:h-80 md:col-span-2 md:h-64";
    case "tall":
      return "h-72 sm:h-80 md:row-span-2 md:h-full";
    default:
      return "h-72 sm:h-80 md:h-64";
  }
}

function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

  function closeModal() {
    setSelectedMedia(null);
  }

  return (
    <>
      <section className="bg-bg px-6 py-16 md:px-24 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="hero-title text-6xl leading-none sm:text-7xl md:text-8xl">
            Our Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
            Take a look at our favorite treats, snacks, drinks, and sweet
            Mexican flavors made for the whole family.
          </p>
        </div>
      </section>

      <section className="bg-bg px-6 pb-20 md:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:auto-rows-[260px] md:gap-4 lg:grid-cols-4">
          {galleryMedia.map((media) => (
            <button
              key={media.src}
              type="button"
              onClick={() => setSelectedMedia(media)}
              className={`relative overflow-hidden rounded-3xl border-4 border-white bg-white text-left shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl ${getMediaSizeClass(
                media.size
              )}`}
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={media.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <video
                  src={media.src}
                  aria-label={media.title}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* MODAL / LIGHTBOX */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 py-8"
          onClick={closeModal}
        >
          <div
            className="relative max-h-full w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute -top-12 right-0 rounded-full bg-white px-4 py-2 text-lg font-bold text-black"
              aria-label="Close gallery preview"
            >
              ✕
            </button>

            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-h-[80vh] w-full rounded-2xl object-contain"
              />
            ) : (
              <video
                src={selectedMedia.src}
                muted
                controls
                autoPlay
                playsInline
                className="max-h-[80vh] w-full rounded-2xl bg-black object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;