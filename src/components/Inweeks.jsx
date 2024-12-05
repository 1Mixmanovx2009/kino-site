import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./InWeeks.css";
import { FreeMode, Navigation } from "swiper/modules";
import { useGetMovieQuery } from "../redux/api/movie-api";

const Inweeks = () => {
  const navigate = useNavigate()
  const { data, error, isLoading } = useGetMovieQuery({
    type: "upcoming",
    params: { page: 1 },
  });
  console.log(data);
  

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="mt-[50px]">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <p className="text-[20px] font-medium text-greyText">Скоро на этой неделе</p>
          <Link to={"/sessions"} className="flex items-center gap-1 font-medium text-redText">
            Показать все <FaAngleRight />
          </Link>
        </div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#f00",
            "--swiper-pagination-color": "#fff",
          }}
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper2 mb-[30px] max-sm:flex max-sm:flex-col"
        >
          {data?.results?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div>
                <div className="w-[280px] h-[400px] rounded-xl bg-[#1D1D1D]">
                  <img
                    onClick={()=> navigate(`/movie/${movie.id}`)}
                    src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
                    width={300}
                    alt={movie.title}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="font-aeonik text-[22px] font-medium text-white">
                    {movie.title}
                  </h3>
                  <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                    {movie.release_date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Inweeks;
