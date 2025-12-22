import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SupportHeader } from './SupportCpt';
import { testimonials } from '../../data/products';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12 flex items-center justify-center flex-col gap-y-[5rem]">
      <SupportHeader/>
      <div ref={containerRef} className="max-w-6xl w-full mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            What Our Customers Are Saying
          </h1>
          <p className="text-gray-400">Hear from our amazing community of gamers</p>
        </div>

        <div 
          ref={testimonialRef}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Rating Stars */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex mb-2">
                {renderStars(currentTestimonial.rating)}
              </div>
              <p className="text-sm text-gray-400">{currentTestimonial.rating}/5 Rating</p>
            </div>

            <div className="flex-1">
              <p className="text-xl md:text-2xl italic text-gray-200 mb-6 leading-relaxed">
                "{currentTestimonial.comment}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-green-400">{currentTestimonial.name}</p>
                  <p className="text-gray-400">Razer Community Member</p>
                </div>
                
                {/* no9at */}
                <div className="hidden md:flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-green-500 scale-125' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={prevTestimonial}
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-green-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex md:hidden space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-500 scale-125' 
                    : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-gray-400 group-hover:text-green-400 transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            <span className="text-green-400 font-semibold">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{testimonials.length}</span>
          </p>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted by over 10 million gamers worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;