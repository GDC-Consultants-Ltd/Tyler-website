"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const pageTitleData = {
  "/about/our-guarantee": {
    title: "Our Guarantee",
    backgroundImage: "/assets/images/page-title/1.webp",
  },
  "/about/testimonials": {
    title: "Testimonials",
    backgroundImage: "/assets/images/page-title/2.webp",
  },
  "/about/who-we-are": {
    title: "How we work",
    backgroundImage: "/assets/images/page-title/3.webp",
  },
  "/about/gallery": {
    title: "Gallery",
    backgroundImage: "/assets/images/page-title/4.webp",
  },
  "/house-plans": {
    title: "House Plans",
    backgroundImage: "/assets/images/page-title/5.webp",
  },
  "/blog": {
    title: "Our Blog",
    backgroundImage: "/assets/images/page-title/6.webp",
  },
  "/contact/contact-us": {
    title: "Contact Us",
    backgroundImage: "/assets/images/page-title/7.webp",
  },
  "/contact/questionnaire": {
    title: "Project Questionnaire",
    backgroundImage: "/assets/images/page-title/7.webp",
  }
};

const PageTitle = () => {
  const pathname = usePathname();
  const pageData = pageTitleData[pathname] || pageTitleData["/"];

  return (
    <div className="relative w-full">
      {/* Header spacer - dark navy color matching the screenshot */}

      {/* Main hero section */}
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src={pageData.backgroundImage}
            alt="Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0" />
        </div>

        <div className="h-[40px]" />

        {/* Content container */}
        <div className="relative h-full max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            {/* Title - using gray color as seen in the screenshot */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-navy whitespace-pre-line leading-tight">
              {pageData.title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
