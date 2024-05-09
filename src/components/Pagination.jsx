import { Link } from "react-router-dom";

// Icon
import { ChevronRight } from "lucide-react";

const Pagination = ({ className, name }) => {
  return (
    <section className="bg-pagination-bg relative h-[12rem] w-full bg-cover bg-[center] bg-no-repeat lg:h-[14rem]">
      <div className="absolute right-0 top-0 h-full w-full bg-white/25 backdrop-blur-[3px]"></div>
      <div className={`w-full py-16 ${className || ""}`}>
        <div className="mx-auto w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
          <div className="absolute left-[50%] top-[50%] z-[5] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4">
            <h3 className="text-4xl font-bold">{name}</h3>
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-xl font-semibold transition-colors duration-300 hover:text-color-50"
              >
                Home{" "}
                <span>
                  <ChevronRight />
                </span>
              </Link>
              <span className="text-xl font-medium text-neutral-700">
                {name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
