import Link from "next/link";
import React from "react";

const ButtonSeondary = ({ children, url = "#", download, className }) => {
  const handleDownload = () => {
    if (download) {
      const link = document.createElement("a");
      link.href = download.path;
      link.download = download.fileName || "document.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // If download prop is provided, use button with onClick
  if (download) {
    return (
      <button
        onClick={handleDownload}
        className={`text-size-15 font-medium text-primary-color hover:text-body-color capitalize py-17px px-35px bg-200 bg-transparent hover:bg-primary-color rounded-full leading-1 border border-primary-color text-nowrap tracking-1px ${
          className || ""
        }`}
      >
        {children}
      </button>
    );
  }

  // Default to Link for standard navigation
  return (
    <Link
      href={url}
      className={`text-size-15 font-medium text-primary-color hover:text-body-color capitalize py-17px px-35px bg-200 bg-transparent hover:bg-primary-color rounded-full leading-1 border border-primary-color text-nowrap tracking-1px ${
        className || ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ButtonSeondary;
