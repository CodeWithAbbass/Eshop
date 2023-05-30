import "../Css/HeroSlider.css";
import { useEffect } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const HeroSlider = () => {
  const SlideArr = [
    {
      DesktopSlideImage:
        "https://gcp-img.slatic.net/lazada/d1e8e452-abc3-4f06-97df-b7b0409f316a_PK-1976-688.jpg",
      MobileSlideImage:
        "https://gcp-img.slatic.net/lazada/bc6ee331-bee5-4f6f-8435-3e9cd47150ec_PK-1440-944.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/7838279a-14dd-4815-a842-78fe49925e55.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/be07148b-21d3-4c5f-8d97-0039ddd226f4.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/52679351-b8cc-48e7-825d-7845638e2ff5.jpg_1200x1200.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/7c1dcedf-6c30-4061-b2ce-b955d214a073.jpg_760x760Q50s150.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/08c531c7-c71f-40e5-ac3b-c4dfab69afb2.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/12cad140-287c-4243-b45b-eb8780e77c8e.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/3113a802-f9ef-46eb-a262-8bbc9360e328.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/3b099f29-76e6-4e0c-901c-12ac47030aee.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/795496f5-160e-4bc8-a1bf-bfee7024d214.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/5b36e3c6-e63c-4047-a6e6-1fbc49b1991d.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/c21c26b1-cb35-45d9-9513-c5062a1031cf.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/d19de4eb-3045-424a-a07a-87f00b3ffb9d.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/f6dda8b1-c50f-4179-9362-63699119a69e.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/ad3cddcb-53c0-4b73-9e76-d84c0f9b9329.jpg",
    },
    {
      DesktopSlideImage:
        "https://icms-image.slatic.net/images/ims-web/6a02fc99-009a-437d-b33b-71c72dc17547.jpg",
      MobileSlideImage:
        "https://icms-image.slatic.net/images/ims-web/b560b006-6f4e-4906-bacc-4d6af475cdad.jpg",
    },
  ];

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper h-100 container-xl"
    >
      {SlideArr.length == 0
        ? ""
        : SlideArr.map((image, index) => {
            const { DesktopSlideImage, MobileSlideImage } = image;
            return (
              <SwiperSlide key={index}>
                <img
                  src={DesktopSlideImage}
                  alt=""
                  className="w-100 Slide_Image DesktopSlideImg h-100"
                />
                <img
                  src={MobileSlideImage}
                  alt=""
                  className="w-100 Slide_Image MobileSlideImg h-100"
                />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
};

export default HeroSlider;
