"use client";

import { LinkProps } from "@/types/linkProps";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  title: string;
  links: LinkProps[];
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Dropdown = ({ title, links, setMenuOpen }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
      >
        {title}{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="relative md:absolute z-10 bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-full md:w-44 mt-6 md:right-2">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 hover:bg-gray-800"
                  onClick={() => [setIsDropdownOpen(false), setMenuOpen(false)]}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Dropdown;
