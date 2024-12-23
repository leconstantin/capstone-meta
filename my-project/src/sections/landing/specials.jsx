import React from "react";
import FoodCard from "../../components/FoodCard";
const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      price: "$ 12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
      image: "/images/foodb.jpg",
    },
    {
      name: "Bruchetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smearede with garlic and seasonede with salt and olive oil",
      image: "/images/foodc.jpg",
    },
    {
      name: "Lemon Dessert",
      price: "$ 5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
      image: "/images/foodd.jpg",
    },
  ];

  return (
    <section className="px-4 lg:px-10 text-black">
      <h1 className="font-bold text-3xl my-16">This weeks specials!</h1>

      <div className="w-full sm:w-[80%] lg:w-full  mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 justify-center">
        {specials.map((food, index) => {
          return <FoodCard key={index} food={food} />;
        })}
      </div>
    </section>
  );
};

export default Specials;
