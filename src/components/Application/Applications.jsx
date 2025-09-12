import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ApplicationCard from '../ApplicationCard/ApplicationCard';

export default function Applications({ Application }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="p-6">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="fw-bold">
          How to apply across Industries or
          <br /> various business functions
        </h1>
        <div className="d-flex gap-2 me-4">
          <button ref={prevRef} className="p-3 rounded-circle">
            <i class="bi bi-arrow-left text-dark fs-4"></i>
          </button>
          <button ref={nextRef} className="p-3 rounded-circle">
            <i class="bi bi-arrow-right text-dark fs-4"></i>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {Application.map((application, idx) => (
          <SwiperSlide key={idx}>
            <ApplicationCard
              title={application.title}
              items={application.items}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
