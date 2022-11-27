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
import {useContext} from "react";
import {AuthContext} from "../../../contexts/AuthProvider";
const AdvertisedItems = () => {
  const {user} = useContext(AuthContext);
  const {data: products} = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/advertises?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res?.data?.data;
      console.log(data);
      return data;
    },
  });
  return (
    <>
      {products?.length && (
        <div className="my-10">
          <h2 className="text-4xl font-semibold text-center uppercase p-6">
            Advertisement Items
          </h2>
          <div className="carousel w-full h-96">
            <Swiper
              pagination={true}
              navigation={true}
              slidesPerView={2}
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
                    className="w-full h-full object-contain"
                    src={product.image}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedItems;
