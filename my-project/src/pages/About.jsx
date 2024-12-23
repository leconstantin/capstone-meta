import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          About Little Lemon
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-8">
          Bringing Flavor from Chicago to You
        </h2>

        <div className="md:flex md:space-x-16">
          <div className="flex-1 text-left">
            <p className="text-lg text-gray-700 mb-4">
              Little Lemon is a Chicago-based restaurant that specializes in
              bringing fresh, flavorful dishes to the table. Whether you're a
              fan of savory comfort food or looking for healthier options, we've
              got something for everyone. We believe that great food should be
              both delicious and nutritious.
            </p>
            <p className="text-lg text-gray-700">
              Our chefs use only the finest ingredients to create mouthwatering
              dishes that will leave you coming back for more. Come visit us
              today and experience the magic of Little Lemon!
            </p>
          </div>

          <div className="flex-1 mt-8 md:mt-0">
            <img
              src="/images/foodi.jpg"
              alt="Little Lemon Restaurant"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Location</h3>
        <p className="text-lg text-gray-700 mt-2">
          123 Lemon Street, Chicago, IL 60610
        </p>
      </div>
    </section>
  );
};

export default About;
