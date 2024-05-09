import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import TrendingSlider from "../components/TrendingSlider";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";

// Images
import BannerImgOne from "../assets/images/banner-img-1.jpg";
import BannerImgTwo from "../assets/images/banner-img-2.jpg";
const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <PopularProducts />
        <Banner
          img={BannerImgOne}
          alt="banner image one"
          url="/categories/all"
          heading="Comfortable & Elegant Living"
          desc="Transform any space into a stylish and serene sanctuary with our curated collection of furniture."
          className='order-first'
        />
        <TrendingSlider />
        <Banner
          img={BannerImgTwo}
          alt="Image of a Shelf"
          url="/categories/all"
          heading="Organize Your Space with Stylish Shelves"
          desc="Redesign your home with our range of stylish shelves. Maximize your storage space while adding a touch of sophistication to your living space."
        />
        <Newsletter />
      </main>
    </>
  );
};

export default Home;
