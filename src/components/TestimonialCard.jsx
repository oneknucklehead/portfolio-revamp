import React, { useState } from "react";

const TestimonialCard = ({
  testimonial,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  //   const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white border border-gray-200 dark:border-0 dark:bg-dark-primary backdrop-blur group rounded-3xl hover:-translate-y-4 hover:shadow-lg transition-all duration-500 overflow-hidden h-full flex flex-col"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col h-full p-4 space-y-4">
        {/* Large Image with Hover Effect */}
        <div className="relative aspect-[4/3] overflow-hidden cursor-pointer rounded-2xl">
          {/* Before Image */}
          <img
            src={testimonial.imageBefore}
            alt="Design work before"
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* After Image */}
          <img
            src={testimonial.imageAfter}
            alt="Design work after"
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Chat Messages */}
        <div className="flex flex-col flex-grow">
          <div className="space-y-3 mb-6 flex-grow">
            {testimonial?.chat?.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "client" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`flex items-end gap-2 max-w-[85%] ${msg.sender === "you" ? "flex-row-reverse" : ""}`}
                >
                  {/* {msg.sender === "client" && (
                                <img
                                  src={testimonial.author.avatar}
                                  alt={testimonial.author.name}
                                  className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-100 flex-shrink-0"
                                />
                              )} */}
                  <div
                    className={`flex flex-col ${msg.sender === "you" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`px-4 py-3 rounded-xl transition duration-700 bg-gray-100 dark:bg-dark-text/90 text-gray-800 dark:text-black  ${
                        msg.sender === "client"
                          ? "rounded-bl-sm"
                          : "rounded-br-sm group-hover:bg-light-secondary group-hover:dark:bg-dark-secondary group-hover:text-white group-hover:dark:text-black"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                    </div>
                    {/* <span className="text-xs text-gray-400 mt-1 px-1">
                                  {msg.time}
                                </span> */}
                  </div>
                  {/* {msg.sender === "you" && (
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold text-sm ring-2 ring-orange-100 flex-shrink-0">
                                  K8
                                </div>
                              )} */}
                </div>
              </div>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={testimonial.author.avatar}
              alt={testimonial.author.name}
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <div>
              <h3 className="font-semibold text-sm dark:text-white">
                {testimonial.author.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs ">
                {testimonial.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
