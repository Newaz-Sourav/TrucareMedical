import React, { useState, useEffect } from "react";

const ImgSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <div className="carousel w-full h-56 sm:h-64 md:h-64 lg:h-80 xl:h-96 2xl:h-screen">
      <div
        id="slide1"
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://www.superspecialitycare.com/wp-content/uploads/2022/09/bnr03.jpg"
          className="w-full h-full object-fill" // Ensures the image fits within the container without cropping
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide2"
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://media.gettyimages.com/id/1412592379/video/happy-man-doctor-wearing-white-medical-coat-and-stethoscope-looking-at-camera-smiling-male.jpg?s=640x640&k=20&c=vgmp8k2srfhLQFPKJHsU-wpUNJtvGzwO6UKcDeN7aHk="
          className="w-full h-full object-fill" // Ensures the image fits within the container without cropping
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/042/585/516/small_2x/ai-generated-medical-stethoscope-on-green-background-top-view-with-copy-space-photo.jpg"
          className="w-full h-full object-fill" // Ensures the image fits within the container without cropping
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div
        id="slide4"
        className={`carousel-item relative w-full ${
          currentSlide === 4 ? "block" : "hidden"
        }`}
      >
        <img
          src="https://media.licdn.com/dms/image/C5612AQGSQyLhf6shBQ/article-cover_image-shrink_720_1280/0/1520079802571?e=2147483647&v=beta&t=7YKLMZjdzVt4akyybCply-AXOwHQOYz-PVjU9MuK-h4"
          className="w-full h-full object-fill" // Ensures the image fits within the container without cropping
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImgSlide;
