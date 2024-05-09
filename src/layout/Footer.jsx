import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Copyright,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-color-300 w-full px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col">
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:gap-8">
            <div className="flex flex-col gap-2">
              <Link href="/">
                <h3 className="text-lg font-bold lg:text-xl">
                  Swift<span className="text-color-50">Mart</span>
                </h3>
              </Link>
              <p className=" max-w-sm">
                Discover timeless elegance and exceptional comfort with our
                curated collection of high-quality furniture.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold lg:text-xl">Categories</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link
                    to="/categories/chair"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Chair
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories/clock"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Clock
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories/home-decor"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Home Decor
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories/lamp"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Lamp
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories/sofa"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Sofa
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold lg:text-xl">Useful Links</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link
                    to="/"
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Categories/all"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories/all"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold lg:text-xl">Follow Us On</h3>
              <ul className="flex flex-col gap-1.5">
                <li>
                  <Link
                    to="#"
                    className="group flex w-fit items-center gap-1.5 font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    <Facebook className="size-[22px] transition-colors duration-300 group-hover:stroke-color-50" />{" "}
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="group flex w-fit items-center gap-1.5 font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    <Instagram className="size-[22px] transition-colors duration-300 group-hover:stroke-color-50" />{" "}
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="group flex w-fit items-center gap-1.5 font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    <Twitter className="size-[22px] transition-colors duration-300 group-hover:stroke-color-50" />{" "}
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="group flex w-fit items-center gap-1.5 font-medium transition-colors duration-300 hover:text-color-50"
                  >
                    <Linkedin className="size-[22px] transition-colors duration-300 group-hover:stroke-color-50" />{" "}
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-neutral-200 py-6">
        <p className="flex items-center justify-center gap-1 text-center text-sm font-medium text-color-100/80">
          <Copyright className="size-[18px]" /> {new Date().getFullYear()} |
          
          <Link
            to="https://github.com/imredoyyy"
            target="_blank"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-color-100/90"
          >
            Coded
          </Link>{" "}
          with ❤️ by{" "}
          <Link
            target="_blank"
            to="https://coderredoy.com"
            className="underline underline-offset-4 transition-colors duration-200 hover:text-color-100/90"
          >
            Coder Redoy
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
