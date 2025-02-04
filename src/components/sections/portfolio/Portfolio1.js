"use client";
import PortfolioCard from "@/components/shared/cards/PortfolioCard";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import ButtonGroup from "@/components/shared/portfolio/ButtonGroup";
import filter from "@/libs/filter";
import getPortfolio from "@/libs/getPortfolio";
import React, { useEffect } from "react";

const Portfolio1 = () => {
  const portfolio = getPortfolio();
  useEffect(() => {
    filter();
  }, []);
  return (
    <section id="portfolio">
      <div className="pt-60px pb-30px md:pt-20 md:pb-60px lg:pt-100px lg:pb-20">
        <div className="container">
          {/* <!-- section heading --> */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>My Recent Works</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              Here are some of the websites I have worked on. Some were
              collaborative projects completed during my full-time roles.
            </p>
          </div>
          {/* <!-- portfolio --> */}
          <div className="portfolio-filter">
            {/* <!-- controllers --> */}
            {/* <ButtonGroup /> */}
            {/* <!-- contents --> */}
            <div
              className="portfolio-box wow fadeInUp mt-30px md:mt-10 lg:mt-50px wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="portfolio-sizer"></div>
              <div className="gutter-sizer"></div>
              {portfolio?.length
                ? portfolio?.map((portfolioSingle, idx) => (
                    <PortfolioCard key={idx} portfolio={portfolioSingle} />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio1;
