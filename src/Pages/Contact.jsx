import React from "react";
import Pagination from "../components/Pagination";
import CustomerAssurance from "../components/CustomerAssurance";

// Icons
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <main className="">
      <Pagination name="Contact" />

      <section className="w-full py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-center text-3xl font-bold">
              Get In Touch With Us
            </h1>
            <p className="max-w-md text-center text-base">
              For more information about our products & services or any type of inquiries please drop us an email.
            </p>
          </div>
          <div className="grid p-4 grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col items-center gap-3  md:gap-5 md:items-start">
              <div className="group flex gap-3">
                <div>
                  <Phone className="transition-colors duration-300 group-hover:stroke-color-50" />
                </div>
                <a
                  href="tel:+880123456789"
                  className="text-lg font-medium transition-colors duration-300 hover:text-color-50"
                >
                  +880123456789
                </a>
              </div>
              <div className="group flex gap-3">
                <div>
                  <Mail className="transition-colors duration-300 group-hover:stroke-color-50" />
                </div>
                <a
                  href="mailto:support@swiftmart.com"
                  className="text-lg font-medium transition-colors duration-300 hover:text-color-50"
                >
                  support@swiftmart.com
                </a>
              </div>
              <div className="group flex gap-3">
                <div>
                  <MapPin className="transition-colors duration-300 group-hover:stroke-color-50" />
                </div>
                <div className="text-lg font-medium transition-colors duration-300 hover:text-color-50">
                  215, 5th AB Avenue, New York, USA
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contactName" className="font-medium">
                  Name <b className="text-color-50">*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  aria-required="true"
                  placeholder="Your Name"
                  id="contactName"
                  className="rounded-md border-2 border-color-100/60 py-3 pl-2 pr-4 text-base font-normal outline-none placeholder:text-color-100 focus:border-color-100/80"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contactEmail" className="font-medium">
                  Email <b className="text-color-50">*</b>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  aria-required="true"
                  placeholder="Your Email"
                  id="contactEmail"
                  className="rounded-md border-2 border-color-100/60 py-3 pl-2 pr-4 text-base font-normal outline-none placeholder:text-color-100 focus:border-color-100/80"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contactSubject" className="font-medium">
                  Subject <b className="text-color-50">*</b>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  aria-required="true"
                  placeholder="Subject"
                  id="contactSubject"
                  className="rounded-md border-2 border-color-100/60 py-3 pl-2 pr-4 text-base font-normal outline-none placeholder:text-color-100 focus:border-color-100/80"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contactMessage" className="font-medium">
                  Message <b className="text-color-50">*</b>
                </label>
                <textarea
                  name="message"
                  required
                  aria-required="true"
                  placeholder="Your message here..."
                  id="contactMessage"
                  rows="3"
                  spellCheck="false"
                  className="resize-y rounded-md border-2 border-color-100/60 py-3 pl-2 pr-4 text-base font-normal outline-none placeholder:text-color-100 focus:border-color-100/80"
                />
              </div>
              <button type="submit" className="rounded-[4px] inline-flex justify-center items-center gap-1.5 px-6 py-3.5 text-base lg:text-lg font-medium transition-colors bg-color-50 text-white shadow-shadowDefault">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <CustomerAssurance />
    </main>
  );
};

export default Contact;
