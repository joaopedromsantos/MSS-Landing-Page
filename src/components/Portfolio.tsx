import { portfolioData } from "../data/portfolioData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black-primary px-4">
      <div className="container max-w-7xl mx-auto px-8 sm:px-16 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Nosso Portfólio
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Confira alguns dos projetos que foram desenvolvidos em nossa
            empresa.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
            className="!pb-12"
          >
            {portfolioData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group block overflow-hidden rounded-lg shadow-lg">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute top-1/2 -left-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button className="swiper-button-next-custom absolute top-1/2 -right-4 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors cursor-pointer">
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
