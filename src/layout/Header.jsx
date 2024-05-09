import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { mergeClasses } from "../lib/utils";
import useScroll from "../hooks/use-scroll";
import useWindowSize from "../hooks/use-window-size";

import IconButton from "../components/ui/IconButton";
import { useCart, getTotalQuantity } from "../context/CartContext";
import SearchBar from "../components/SearchBar";

// Icons
import { Menu, X, Home, ShoppingCart, Search, UserRound } from "lucide-react";
import Logo from "/swiftmart-logo.svg";

const Header = () => {
  const scrolled = useScroll(40);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    setTotalQuantity(getTotalQuantity(cartItems));
  }, [cartItems]);

  // Mobile Search Bar Visibility
  const toggleSearchBar = () => {
    if (searchBarVisible) {
      setSearchBarVisible(false);
    } else {
      setSearchBarVisible(true);
    }
  };

  // Open/close Mobile Menu
  const toggleMobileMenu = () => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  };

  // Close mobile menu or mobile search bar if they are opened & window size is greater than 767px
  const size = useWindowSize();

  useEffect(() => {
    if (
      (size.width > 767 && showMobileMenu) ||
      (size.width > 767 && searchBarVisible)
    ) {
      setShowMobileMenu(false);
      setSearchBarVisible(false);
    }
  }, [size, showMobileMenu, searchBarVisible]);

  return (
    <header
      className={`sticky top-0 z-[50] w-full border-b px-4 py-4 md:px-8 ${scrolled ? "border-neutral-500 bg-white" : "border-transparent"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <IconButton
          className="md:hidden"
          ariaLabel="Open Mobile Menu"
          onClick={toggleMobileMenu}
        >
          <Menu />
        </IconButton>
        <Link to="/">
          <img
            src={Logo}
            alt="swiftmart"
            className="w-36 lg:w-48"
            loading="eager"
          />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-6">
            <li>
              <Link
                to="/categories/all"
                onClick={() => window.scrollTo({ top: 0 })}
                className="font-medium transition-colors duration-300 hover:text-color-50"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/categories/all"
                onClick={() => window.scrollTo({ top: 0 })}
                className="font-medium transition-colors duration-300 hover:text-color-50"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0 })}
                className="font-medium transition-colors duration-300 hover:text-color-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          {/* Search Input */}
          <SearchBar
            className="relative hidden md:block"
            subClassName="mt-3"
            inputWrapperClass="border-neutral-700 w-full"
            inputClassName="placeholder:text-color-100"
          />

          {/* Search Button Mobile */}
          <IconButton className="md:hidden" onClick={toggleSearchBar}>
            <Search />
          </IconButton>

          {/* Profile Button */}
          <IconButton className="hidden md:inline-flex">
            <UserRound />
          </IconButton>

          {/* Cart Button */}
          <Link to="/cart">
            <IconButton className="relative hidden md:inline-flex">
              <ShoppingCart />
              <span className="absolute right-[-7px] top-[-5px] inline-flex h-[15px] min-w-[22px] items-center justify-center rounded-2xl bg-color-50 px-0.5 text-[10px] text-white">
                {totalQuantity}
              </span>
            </IconButton>
          </Link>
        </div>

        {/* Search Form Mobile */}
        <SearchBar
          className={mergeClasses(
            "absolute left-[50%] z-[5] flex w-[98vw] translate-x-[-50%] justify-center bg-white shadow-md ring-black transition-all duration-400",
            searchBarVisible
              ? "pointer-events-auto visible top-[68px] opacity-100"
              : "pointer-events-none invisible top-[110px] opacity-0",
          )}
          subClassName="mt-12"
          inputWrapperClass="border-neutral-700 w-full"
          inputClassName="placeholder:text-color-100"
          noMatchingProductClass="mt-12"
        />

        {/* Sidebar Mobile Navigation Menu */}
        <nav
          className={mergeClasses(
            "fixed top-0 z-[999] h-screen min-w-[15rem] bg-white shadow-md ring-black transition-all duration-500 ease-in-out",
            showMobileMenu ? "left-0" : "left-[-18rem]",
          )}
        >
          <IconButton
            className="absolute right-2 top-1.5"
            ariaLabel="Close Mobile Menu"
            onClick={toggleMobileMenu}
          >
            <X />
          </IconButton>
          <ul className="mt-14 flex flex-col items-center gap-4">
            <li>
              <Link
                to="/categories/all"
                onClick={() => window.scrollTo({ top: 0 })}
                className="text-base font-medium transition-colors duration-300 hover:text-color-50"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/categories/all"
                onClick={() => window.scrollTo({ top: 0 })}
                className="text-base font-medium transition-colors duration-300 hover:text-color-50"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0 })}
                className="text-base font-medium transition-colors duration-300 hover:text-color-50"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom Fixed Mobile Navigation */}
        <div className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-between bg-neutral-100 px-8 py-3 shadow-shadow-mobile-nav md:hidden">
          <div>
            <Link
              to="/"
              className="display inline-flex rounded-lg p-3 transition-all duration-300 hover:bg-neutral-300 active:bg-neutral-200"
            >
              <Home />
            </Link>
          </div>
          <div>
            <button className="rounded-lg p-3 transition-all duration-300 hover:bg-neutral-300 active:bg-neutral-200">
              <UserRound />
            </button>
          </div>
          <div>
            <Link to="/cart">
              <button className="relative rounded-lg p-3 transition-all duration-300 hover:bg-neutral-300 active:bg-neutral-200">
                <ShoppingCart />
                <span className="absolute right-[-3px] top-[1px] inline-flex h-[15px] min-w-[22px] items-center justify-center rounded-2xl bg-color-50 px-1 text-[10px] text-white">
                  {totalQuantity}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
