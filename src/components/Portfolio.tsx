import { portfolioData } from '../data/portfolioData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white max-w-7xl mx-auto px-2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvemos para os maiores players do mercado de café.
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
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
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
                            alt={`Sacaria para ${item.client}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* A LINHA ABAIXO FOI REMOVIDA!
                          <div className="absolute inset-0 bg-black bg-opacity-20"></div> 
                        */}
                    </div>
                  <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                    <h3 className="text-xl font-bold text-white">{item.client}</h3>
                    <p className="text-sm text-gray-200">{item.type}</p>
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
};

export default Portfolio;