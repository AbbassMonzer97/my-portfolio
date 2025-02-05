"use client";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const MobileMenu = ({ isActiveMobileMenu, setIsActiveMobileMenu }) => {
  const { isIndexPage } = useHeaderContext();
  const navItems = getNavItems();
  return (
    <div
      className={`mobile-menu absolute left-0 top-full min-h-screen-90 w-full bg-seondary-color block origin-top-left lg:hidden ${
        isActiveMobileMenu ? "active" : "hidden"
      }`}
    >
      <div className="container py-5">
        <ul className="ml-4">
          {navItems?.length
            ? navItems?.map(({ name, path, path2 }, idx) => (
                <li key={idx}>
                  <Link
                    onClick={() => setIsActiveMobileMenu(false)}
                    href={isIndexPage ? path : path2}
                    className="text-size-25 text-white-color uppercase leading-1.2 py-15px"
                  >
                    {name}
                  </Link>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
