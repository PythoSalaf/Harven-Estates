import { useState } from "react";
import { House1, House2, House3, House4, House5 } from "../assets";
import { FaVideo } from "react-icons/fa";
import { BsArrowsAngleExpand } from "react-icons/bs";

const PropertySlider = () => {
  // Array of images
  const images = [
    { id: 1, src: House1, alt: "House Image 1" },
    { id: 2, src: House2, alt: "House Image 2" },
    { id: 3, src: House3, alt: "House Image 3" },
    { id: 4, src: House4, alt: "House Image 4" },
    { id: 5, src: House5, alt: "House Image 5" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Handle full-screen toggle
  const toggleFullscreen = () => {
    const imageElement = document.getElementById("main-image");
    if (imageElement.requestFullscreen) {
      imageElement.requestFullscreen();
    } else if (imageElement.webkitRequestFullscreen) {
      imageElement.webkitRequestFullscreen(); // For Safari
    } else if (imageElement.msRequestFullscreen) {
      imageElement.msRequestFullscreen(); // For IE/Edge
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main image with video tour and fullscreen buttons */}
      <div className="relative w-full h-[350px] md:h-[500px]" id="main-image">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="object-cover w-full h-full rounded-xl"
        />

        {/* Video tour button */}
        <button className="absolute bottom-5 left-5 bg-white p-2 rounded-lg shadow-lg flex items-center gap-2">
          <FaVideo className="" />
          Video tour
        </button>

        {/* Fullscreen button */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-2 left-2 text-black p-2 rounded-full shadow-lg"
        >
          <BsArrowsAngleExpand className="size-6" />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-5 right-5 bg-black bg-opacity-50 text-white py-1 px-3 rounded-lg">
          {" "}
          {images.findIndex((img) => img.id === selectedImage.id) + 1} /{" "}
          {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className={`border-2 rounded-lg p-1 transition duration-300 ease-in-out transform hover:scale-105 ${
              selectedImage.id === image.id
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-28 md:w-24 h-16 md:h-24 object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertySlider;
