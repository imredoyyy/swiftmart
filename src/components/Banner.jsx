import { Link } from "react-router-dom";

const Banner = ({ img, alt, heading, desc, url, className }) => {
  return (
    <section className="w-full px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 rounded-lg bg-color-300 sm:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-3 px-6 py-10  md:p-4">
            <h1 className="text-2xl font-bold lg:text-3xl">{heading}</h1>
            <p className="md:max-w-lg">{desc}</p>
            <Link
              to={url}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="grid w-fit place-items-center rounded-[2.5rem] border border-color-50 bg-color-50 px-6 py-2.5 font-medium text-white transition-colors duration-300 hover:bg-transparent hover:text-color-100"
            >
              Shop Now
            </Link>
          </div>
          <div className={`hidden sm:block ${className || ''}`}>
            <img src={img} alt={alt} loading="lazy" className="rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
