// Icons
import TrophySvg from "../assets/images/trophy.svg";
import WarrantyCheck from "../assets/images/warranty-check.svg";
import FreeShipping from "../assets/images/free-shipping.svg";
import Support from "../assets/images/support.svg";

const CustomerAssurance = () => {
  return (
    <section className="mx-auto w-full bg-neutral-200 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-4">
              <img
                src={TrophySvg}
                className="aspect-square w-[50px]"
                alt="trophy"
                loading="lazy"
              />
            <div className="flex flex-col items-center gap-1.5">
              <h3 className="text-xl font-semibold">High Quality</h3>
              <p className="text-center">Top Quality Materials</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src={WarrantyCheck}
              className="aspect-square w-[50px]"
              alt="warranty check"
              loading="lazy"
            />
            <div className="flex flex-col items-center gap-1.5">
              <h3 className="text-xl font-semibold">Warranty Protection</h3>
              <p className="text-center">12 Months Warranty</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src={FreeShipping}
              className="aspect-square w-[50px]"
              alt="free shipping"
              loading="lazy"
            />
            <div className="flex flex-col items-center gap-1.5">
              <h3 className="text-xl font-semibold">Free Shipping</h3>
              <p className="text-center">
                On Order Over $200<b className="text-color-50">*</b>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <img
              src={Support}
              className="aspect-square w-[50px]"
              alt="customer support"
              loading="lazy"
            />
            <div className="flex flex-col items-center gap-1.5">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-center">Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerAssurance;
