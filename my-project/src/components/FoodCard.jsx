import React from "react";

const FoodCard = ({ food }) => {
  const { name, price, image, description } = food;
  return (
    <div className="w-full flex flex-col ring-1 ring-zinc-200 bg-white rounded-lg shadow-xl text-black">
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full mx-auto mb-2 rounded-lg"
        />
      </div>

      <div className="px-6 py-10">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl mb-2">{name}</h2>
          <h4 className="font-medium text-lg">{price}</h4>
        </div>
        <p className="text-justify text-sm mb-2">{description}</p>
        <button className="font-bold">Order a delivery</button>
      </div>
    </div>
  );
};

export default FoodCard;
