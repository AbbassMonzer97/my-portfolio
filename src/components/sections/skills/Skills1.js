import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import getSkills from "@/libs/getSkills";

const Skills1 = ({ type }) => {
  const skills = getSkills();
  return (
    <section id="skills">
      <div
        className={
          type === 2
            ? "pt-60px md:pt-100px lg:pt-30"
            : "pt-60px pb-60px md:pt-20 md:pb-60px lg:pt-100px lg:pb-20"
        }
      >
        <div className="container">
          {/* <!-- section heading --> */}
          <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
            <HeadingPrimary>My Skills</HeadingPrimary>
            <p
              className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp"
              data-wow-delay=".4s"
            >
              From beautiful designs to powerful web apps, I turn ideas into
              reality with clean code and the latest web technologies
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
            {skills?.map(({ title, items }, idx) => (
              <div
                key={title}
                className="h-full rounded-2xl border border-[#e4dcf6] dark:border-[#322848] bg-white dark:bg-[#161222] px-5 py-5 wow fadeInUp"
                data-wow-delay={`.${Math.min(idx + 3, 9)}s`}
              >
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-color">
                  {title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items?.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-[#d9d0ea] dark:border-[#3d3552] px-3 py-1 text-sm leading-5 text-primary-color-light dark:text-[#eceaf1]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills1;
