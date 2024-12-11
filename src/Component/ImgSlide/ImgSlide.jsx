import React, { useState, useEffect } from "react";

const ImgSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, [totalSlides]);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  return (
    <div className="carousel relative overflow-hidden w-full h-56 sm:h-64 md:h-64 lg:h-80 xl:h-96 2xl:h-98">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${(currentSlide - 1) * 100}%)` }}>
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://www.superspecialitycare.com/wp-content/uploads/2022/09/bnr03.jpg"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://media.gettyimages.com/id/1412592379/video/happy-man-doctor-wearing-white-medical-coat-and-stethoscope-looking-at-camera-smiling-male.jpg?s=640x640&k=20&c=vgmp8k2srfhLQFPKJHsU-wpUNJtvGzwO6UKcDeN7aHk="
            className="w-full h-full object-fill"
          />
        </div>
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/042/585/516/small_2x/ai-generated-medical-stethoscope-on-green-background-top-view-with-copy-space-photo.jpg"
            className="w-full h-full object-fill"
          />
        </div>
        <div className="carousel-item w-full flex-shrink-0">
          <img
            src="https://media.licdn.com/dms/image/C5612AQGSQyLhf6shBQ/article-cover_image-shrink_720_1280/0/1520079802571?e=2147483647&v=beta&t=7YKLMZjdzVt4akyybCply-AXOwHQOYz-PVjU9MuK-h4"
            className="w-full h-full object-fill"
          />
        </div>
      </div>
      <div className="absolute inset-y-0 left-5 flex items-center">
        <button onClick={handlePrevSlide} className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white">
          ❮
        </button>
      </div>
      <div className="absolute inset-y-0 right-5 flex items-center">
        <button onClick={handleNextSlide} className="btn btn-circle bg-transparent hover:bg-transparent border-none text-white">
          ❯
        </button>
      </div>
    </div>
  );
};

export default ImgSlide;
