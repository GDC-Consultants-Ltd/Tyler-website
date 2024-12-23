"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "Design & Build",
      image: "/assets/images/services/1.webp",
      description:
        "We also done furniture manufacturing, our experts are help you building your dream furnitures with in more than your expectation...",
      link: "/services/design-build",
    },
    {
      title: "Renovations & Extensions",
      image: "/assets/images/services/2.webp",
      description:
        "Our expert carpenters provide top-quality woodworking services for all your construction and renovation needs...",
      link: "/services/renovations",
    },
    {
      title: "Light Commercial",
      image: "/assets/images/services/3.webp",
      description:
        "Transform your existing furniture into beautiful pieces that match your style and requirements...",
      link: "/services/commercial",
    },
    {
      title: "New Builds",
      image: "/assets/images/services/4.webp",
      description:
        "We also done furniture manufacturing, our experts are help you building your dream furnitures with in more than your expectation...",
      link: "/services/new-builds",
    },
    {
      title: "Bathrooms & Kitchens",
      image: "/assets/images/services/5.webp",
      description:
        "Our expert carpenters provide top-quality woodworking services for all your construction and renovation needs...",
      link: "/services/bathrooms-kitchens",
    },
    {
      title: "Decks & Fences",
      image: "/assets/images/services/6.webp",
      description:
        "Transform your existing furniture into beautiful pieces that match your style and requirements...",
      link: "/services/decks-fences",
    },
  ];

  return (
    <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <div className="flex justify-center items-center gap-1">
          <div className="w-12 sm:w-16 h-[1px] bg-white/20"></div>
          <div className="w-3 sm:w-4 h-1 bg-orange"></div>
          <div className="w-12 sm:w-16 h-[1px] bg-white/20"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative cursor-pointer h-[300px] sm:h-[350px] md:h-[400px]"
            >
              {/* Main Image */}
              <div className="relative h-full overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  priority={index < 3} // Load first 3 images with priority
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-center transition-transform duration-300 group-hover:-translate-y-full">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="w-10 sm:w-12 h-0.5 bg-orange mx-auto" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-orange/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8 text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-white border-2 border-white 
                               px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm sm:text-base
                               hover:bg-white hover:text-orange transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight size={16} className="sm:size-[18px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;