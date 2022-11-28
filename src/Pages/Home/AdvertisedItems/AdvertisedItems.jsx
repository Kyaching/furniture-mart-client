import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./styles.css";

import {Autoplay, Pagination} from "swiper";
import {useContext} from "react";
import {AuthContext} from "../../../contexts/AuthProvider";
const AdvertisedItems = () => {
  const {user} = useContext(AuthContext);
  const {data: products} = useQuery({
    queryKey: ["advertises"],
    queryFn: async () => {
      const res = await axios.get(
        `https://e-sell-server.vercel.app/advertises?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res?.data?.data;
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
          <div className="carousel w-full h-[400px]">
            <Swiper
              pagination={true}
              slidesPerView={1}
              modules={[Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {products?.map(product => (
                <SwiperSlide key={product._id}>
                  <img
                    className="w-full h-full bg-cover"
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
