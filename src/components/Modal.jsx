import axios from "axios";
import React from "react";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import {AuthContext} from "../contexts/AuthProvider";
import toast from "react-hot-toast";

const Modal = ({product}) => {
  console.log(product);
  const {user} = useContext(AuthContext);
  const {productName, image, resalePrice} = product;
  const {register, handleSubmit, reset} = useForm();

  const handleBooking = data => {
    const buyerInfo = {
      productId: product._id,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      productTitle: productName,
      price: product.resalePrice,
      number: data.number,
      location: data.location,
      image: image,
    };
    const url = "http://localhost:5000/bookings";
    axios({
      method: "post",
      url: url,
      data: buyerInfo,
    })
      .then(res => {
        if (res) {
          reset();
        }
      })
      .catch(err => console.log(err));
    toast.success("Booking Successful");
  };
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <form onSubmit={handleSubmit(handleBooking)} className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex justify-between">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                defaultValue={user?.displayName}
                type="text"
                className="input input-bordered"
                disabled
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                defaultValue={user?.email}
                type="text"
                className="input input-bordered"
                disabled
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              defaultValue={productName}
              type="text"
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={`$${resalePrice}`}
              type="text"
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              {...register("number", {required: true})}
              type="text"
              placeholder="Enter your number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Meeting Location</span>
            </label>
            <input
              {...register("location", {required: true})}
              type="text"
              placeholder="Enter meeting location"
              className="input input-bordered"
            />
          </div>
          <div className="modal-action form-control mt-6">
            <button
              htmlFor="booking-modal"
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Modal;
