import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./styles.css";

import {Autoplay, Pagination, Navigation} from "swiper";
const AdvertisedItems = () => {
  const {data: products} = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/advertises");
      const data = res?.data?.data;
      console.log(data);
      return data;
    },
  });
  return (
    <div className="my-10">
      <h2 className="text-3xl font-semibold text-center">
        Advertisement Items
      </h2>
      <div className="carousel w-full h-96">
        <Swiper
          pagination={true}
          navigation={true}
          slidesPerView={1}
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {products?.map(product => (
            <SwiperSlide key={product._id}>
              <img
                className="w-screen h-full object-contain"
                src={product.image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AdvertisedItems;
