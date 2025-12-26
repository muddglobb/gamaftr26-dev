import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ category, name, status, testimonial, photo }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Category Label (outside card) */}
      {category && (
        <div className="mb-2 px-4 py-1 bg-amazon-600 text-white rounded-full text-sm font-bold">
          {category}
        </div>
      )}

      {/* Island Card with Border Image */}
      <div className="island-card w-full max-w-md p-8 md:p-10">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Photo Placeholder */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300 overflow-hidden">
            {photo ? (
              <Image
                src={photo}
                alt={name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                Photo
              </div>
            )}
          </div>

          {/* Name */}
          <h3 className="text-lg md:text-xl font-bold text-amazon-900">
            {name}
          </h3>

          {/* Status */}
          <p className="text-sm md:text-base text-amazon-700 font-semibold">
            {status}
          </p>

          {/* Testimonial Text */}
          <p className="text-sm md:text-base text-glacier-950 leading-relaxed">
            &quot;{testimonial}&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
