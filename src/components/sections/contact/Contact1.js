"use client";
import React, { useState } from "react";

const Contact1 = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      fname: form.fname.trim() === "" ? "Please enter you first name" : "",
      lname: form.lname.trim() === "" ? "Please enter you last name" : "",
      email: form.email.trim() === "" ? "Please enter your email" : "",
      phone: form.phone.trim() === "" ? "Please enter your number" : "",
      comment: form.comment.trim() === "" ? "Please enter your message" : "",
    };

    setErrors(newErrors);

    return (
      !newErrors.fname &&
      !newErrors.lname &&
      !newErrors.email &&
      !newErrors.phone &&
      !newErrors.comment
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      setShowSuccess(true);
      setForm({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        comment: "",
      });
    }
  };
  return (
    <section id="contact">
      <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
        <div className="container">
          <div className="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center gap-x-6 gap-y-10">
            {/* <!-- section heading --> */}
            <div className="md:col-start-1 md:col-span-7 lg:col-span-6">
              <div className=" wow fadeInLeft" data-wow-delay=".3s">
                <form className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 bg-white-color dark:bg-primary-color-light rounded-15px">
                  <div className="mb-25px text-center">
                    <h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                      Let’s work together!
                    </h2>
                    <p
                      className="text-primary-color-light dark:text-body-color wow fadeInLeft"
                      data-wow-delay=".4s"
                    >
                      I design and code beautifully simple things and i love
                      what i do. Just simple like that!
                    </p>
                  </div>
                  {/* <!-- inputs --> */}
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-15px wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    {/* <!-- first name --> */}
                    <div>
                      <input
                        name="fname"
                        type="text"
                        value={form.fname}
                        onChange={handleChange}
                        placeholder="First name"
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                      {errors.fname && (
                        <div>
                          <p className="text-red-300 text-left text-sm mt-[10px] ml-[10px]">
                            {errors.fname}
                          </p>
                        </div>
                      )}
                    </div>
                    {/* <!-- Last name --> */}
                    <div>
                      <input
                        type="text"
                        name="lname"
                        value={form.lname}
                        onChange={handleChange}
                        placeholder="Last name"
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                      {errors.lname && (
                        <div>
                          <p className="text-red-300 text-left text-sm mt-[10px] ml-[10px]">
                            {errors.lname}
                          </p>
                        </div>
                      )}
                    </div>
                    {/* <!-- Email address --> */}
                    <div>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email address"
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                      {errors.email && (
                        <div>
                          <p className="text-red-300 text-left text-sm mt-[10px] ml-[10px]">
                            {errors.email}
                          </p>
                        </div>
                      )}
                    </div>
                    {/* <!-- Phone number --> */}
                    <div>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        type="number"
                        placeholder="Phone number"
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                      {/* {errors.phone && (
                        <div>
                          <p className="text-red-300 text-left text-sm mt-[10px] ml-[10px]">
                            {errors.phone}
                          </p>
                        </div>
                      )} */}
                    </div>
                    {/* <div className="form_group sm:col-start-1 sm:col-span-2">
                      <FormSelect />
                    </div> */}
                    <div className="sm:col-start-1 sm:col-span-2">
                      <textarea
                        name="comment"
                        value={form.comment}
                        onChange={handleChange}
                        cols="1"
                        rows="10"
                        placeholder="Message"
                        className="text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-color leading-1"
                      />
                      {errors.comment && (
                        <div>
                          <p className="text-red-300 text-left text-sm mt-[10px] ml-[10px]">
                            {errors.comment}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="sm:col-start-1 sm:col-span-2">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- experience single area --> */}
            <div className="md:col-start-8 md:col-span-5">
              <div className="contact-info-list">
                <ul className="flex flex-col gap-y-10">
                  <li
                    className="flex  items-center md:gap-25px gap-3 position-relative wow fadeInRight"
                    data-wow-delay=".4s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-phone-call leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Phone
                      </p>
                      <a
                        href="https://wa.me/96176947200"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                        +961 76 947 200
                      </a>
                    </div>
                  </li>
                  <li
                    className="flex  items-center md:gap-25px gap-3 position-relative wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-mail-inbox-app leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:Abbassmonzer1997@gmail.com"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color"
                      >
                        Abbassmonzer1997@gmail.com
                      </a>
                    </div>
                  </li>
                  <li
                    className="flex  items-center md:gap-25px gap-3 position-relative wow fadeInRight"
                    data-wow-delay=".6s"
                  >
                    <div className="icon-box text-xl flex-shrink-0 w-50px h-50px text-white-color flex justify-center items-center flex-col bg-gradient-primary-2 rounded-full leading-1">
                      <i className="flaticon-location leading-1 mt-1"></i>
                    </div>
                    <div className="text-box">
                      <p className="text-primary-color-light dark:text-white-color mb-1">
                        Address
                      </p>
                      <a
                        href="#"
                        className="text-primary-color-light dark:text-white-color text-lg lg:text-xl font-medium hover:text-primary-color cursor-default"
                      >
                        Beirut, Lebanon
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
