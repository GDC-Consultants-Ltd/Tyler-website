"use client";
import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  Plus,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Get the current path only on the client-side
    setCurrentPath(window.location.pathname);
  }, []);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: "/assets/images/menu-icons/1.png",
    },
    {
      name: "About Us",
      path: "/about",
      icon: "/assets/images/menu-icons/2.png",
      subItems: [
        { name: "Our Guarantee", path: "/about/our-guarantee" },
        { name: "Testimonials", path: "/about/testimonials" },
        { name: "How we work", path: "/about/who-we-are" },
        { name: "Gallery", path: "/about/gallery" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      icon: "/assets/images/menu-icons/3.png",
      subItems: [
        { name: "Design & Build", path: "/services/design-build" },
        { name: "Renovations & Extensions", path: "/services/renovations" },
        { name: "Light Commercial", path: "/services/commercial" },
        { name: "New Builds", path: "/services/new-builds" },
        { name: "Bathrooms & Kitchens", path: "/services/bathrooms-kitchens" },
        { name: "Decks & Fences", path: "/services/decks-fences" },
      ],
    },
    {
      name: "House Plans",
      path: "/house-plans",
      icon: "/assets/images/menu-icons/4.png",
    },
    {
      name: "Our Blogs",
      path: "/blog",
      icon: "/assets/images/menu-icons/5.png",
    },
    {
      name: "Contact Us",
      path: "/contact",
      icon: "/assets/images/menu-icons/6.png",
      subItems: [
        { name: "Contact Us", path: "/contact/contact-us" },
        { name: "Project Questionnaire", path: "/contact/questionnaire" },
      ],
    },
  ];

  const toggleSubmenu = (itemName) => {
    setExpandedMenus((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const renderNavItem = (item) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedMenus.includes(item.name);

    return (
      <div key={item.path} className="block">
        <div className="flex items-center justify-between">
          <Link
            href={item.path}
            className={`py-3 text-lg font-medium transition-colors flex items-center gap-3
              ${
                currentPath === item.path
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            onClick={(e) => {
              if (hasSubItems) {
                e.preventDefault();
                toggleSubmenu(item.name);
              } else {
                setIsOpen(false);
              }
            }}
          >
            <div className="w-10 h-10 relative">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain filter brightness-0 invert"
              />
            </div>
            {item.name}
          </Link>
          {hasSubItems && (
            <button
              onClick={() => toggleSubmenu(item.name)}
              className="p-2 text-white/60 hover:text-white"
            >
              <Plus
                size={20}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* Submenu */}
        {hasSubItems && isExpanded && (
          <div className="pl-4 border-l border-white/10">
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path}
                className={`block py-2 text-base transition-colors
                  ${
                    currentPath === subItem.path
                      ? "text-orange"
                      : "text-white/50 hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className="fixed top-8 right-8 z-50 flex items-center gap-3 text-orange hover:text-navy transition-colors duration-300 group"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-xl font-bold tracking-wider">MENU</span>
        <MenuIcon
          size={24}
          className="transition-transform duration-300 group-hover:rotate-90"
        />
      </button>

      {/* Side Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="w-80 bg-navy text-white border-l border-white/10 overflow-y-auto"
        >
          <SheetHeader className="border-none">
            <div className="flex justify-between items-center mb-8">
              <SheetTitle className="text-white text-lg font-medium">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="mb-12 space-y-1">{navItems.map(renderNavItem)}</nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideNavigation;
