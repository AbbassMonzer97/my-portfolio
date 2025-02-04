"use client";
import { useHeaderContext } from "@/context_api/HeaderContext";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ isSticky }) => {
  const { isInnerPage } = useHeaderContext();
  return (
    <Link href="#home" className="logo">
      <Image
        className={`w-[5rem] h-[5rem]  ${
          isInnerPage && !isSticky
            ? "inline-block   "
            : " hidden dark:inline-block"
        } `}
        src="/img/logo/1.png"
        alt=""
        width={1000}
        height={1000}
      />
      <Image
        className={`w-[5rem] h-[5rem]  ${
          isInnerPage && !isSticky ? "hidden" : "inlin-block dark:hidden"
        }`}
        src="/img/logo/2.png"
        alt=""
        width={1000}
        height={1000}
      />
    </Link>
  );
};

export default Logo;
