import React from "react";

const Testimonials = () => {
  const users = [
    {
      name: "John",
      image: "/people/2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Mary",
      image: "/people/3.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Joanne",
      image: "/people/4.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Kim",
      image: "/people/5.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="testimonials py-14 px-3 text-black bg-zinc-100 my-6">
      <h1 className="font-bold text-4xl text-center py-10">Testimonials</h1>

      <div className="w-full p-4 m-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-center">
        {users.map((user, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full m-auto"
              />
              <p className="text-center mt-2">{user.name}</p>
              <p className="text-center mt-2">{user.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
