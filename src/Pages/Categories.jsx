import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Categories = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/categories/all");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <>
      <div className="mx-auto w-full px-4 pb-4 pt-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/categories/all"
              className={`inline-flex items-center justify-center rounded-3xl border px-6 py-2.5 font-medium transition-colors duration-300 hover:border-transparent hover:bg-color-50 hover:text-white ${activeLink === "/categories/all" ? "border-transparent bg-color-50 text-white" : "border-color-100 bg-transparent text-color-100"}`}
            >
              All
            </Link>
            <Link
              to="/categories/chair"
              className={`inline-flex items-center justify-center rounded-3xl border px-6 py-2.5 font-medium transition-colors duration-300 hover:border-transparent hover:bg-color-50 hover:text-white ${activeLink === "/categories/chair" ? "border-transparent bg-color-50 text-white" : "border-color-100 bg-transparent text-color-100"}`}
            >
              Chair
            </Link>
            <Link
              to="/categories/clock"
              className={`inline-flex items-center justify-center rounded-3xl border px-6 py-2.5 font-medium transition-colors duration-300 hover:border-transparent hover:bg-color-50 hover:text-white ${activeLink === "/categories/clock" ? "border-transparent bg-color-50 text-white" : "border-color-100 bg-transparent text-color-100"}`}
            >
              Clock
            </Link>
            <Link
              to="/categories/home-decor"
              className={`inline-flex items-center justify-center rounded-3xl border px-6 py-2.5 font-medium transition-colors duration-300 hover:border-transparent hover:bg-color-50 hover:text-white ${activeLink === "/categories/home-decor" ? "border-transparent bg-color-50 text-white" : "border-color-100 bg-transparent text-color-100"}`}
            >
              Home Decor
            </Link>
            <Link
              to="/categories/lamp"
              className={`inline-flex items-center justify-center rounded-3xl border px-6 py-2.5 font-medium transition-colors duration-300 hover:border-transparent hover:bg-color-50 hover:text-white ${activeLink === "/categories/lamp" ? "border-transparent bg-color-50 text-white" : "border-color-100 bg-transparent text-color-100"}`}
            >
              Lamp
            </Link>
            <Link
              to="/categories/sofa"
              className={`inline-flex items-center justify-center rounded-3xl border px-6 py-2.5 font-medium transition-colors duration-300 hover:border-transparent hover:bg-color-50 hover:text-white ${activeLink === "/categories/sofa" ? "border-transparent bg-color-50 text-white" : "border-color-100 bg-transparent text-color-100"}`}
            >
              Sofa
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Categories;
