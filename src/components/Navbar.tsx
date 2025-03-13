"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";



export default function Navbar() {

  const { theme, setTheme } = useTheme()

  const products = useSelector((store: RootState) => store.products);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(theme === "dark");

  const pathname = usePathname();


  const handleToggle = () => {
    const newTheme = isChecked ? "light" : "dark";
    setTheme(newTheme);
    setIsChecked(!isChecked);
  };


  return (
    <div className="h-[60px] bg-[#fdfdfd] dark:bg-[#333] transition-all flex justify-center sticky top-0 z-[10] shadow px-5">
      <div className="max-w-[1124px] h-full flex items-center w-full justify-between">
        {menuActive && (
          <div
            className="mobile-menu sm:hidden fixed top-0 left-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] z-[9999]"
            onClick={() => setMenuActive(false)}
          >
            <div className="px-2 py-5 h-full w-[60%] bg-[#efefef] dark:bg-[#111] rounded-2xl navbar transition-all flex flex-col justify-between">
              <div className="text-[20px] font-bold">
                <Link href={"/"}>
                  <Image
                    src="/logo.png"
                    alt="Fayz logo"
                    width={20}
                    height={20}
                    style={{ height: "auto", width: "auto" }}
                  />
                </Link>
                <ul className="flex flex-col gap-4 mt-10">
                  <Link href={"/"}>
                    <li className={`${pathname === "/" && "text-[#01A3D4]"}`}>
                      Biz haqimizda
                    </li>
                  </Link>
                  <Link href={"/user/Markets"}>
                    <li
                      className={`${pathname === "/user/Markets" && "text-[#01A3D4]"}`}
                    >
                      Do&apos;konlar
                    </li>
                  </Link>
                  <Link href={"/user/News"}>
                    <li className={`${pathname === "/user/News" && "text-[#01A3D4]"}`}>
                      Yangiliklar
                    </li>
                  </Link>
                  <Link href={"/user/Contacts"}>
                    <li
                      className={`${pathname === "/user/Contacts" && "text-[#01A3D4]"}`}
                    >
                      Aloqa
                    </li>
                  </Link>
                </ul>
              </div>
              <button className="bg-blue-600 p-2 text-white font-bold rounded outline-none border-none">
                <Link href="/user/Contacts">
                  Bo&apos;g&apos;lanish
                </Link>
              </button>
            </div>
          </div>
        )}

        {
          theme === "dark" ? (
            <Image
              src="/menuWhite.png"
              alt="navigation-menu"
              width={20}
              height={20}
              onClick={() => {
                setMenuActive(true);
              }}
              className="menu-icon sm:hidden"
            />
          ) : (
            <Image
              src="/menu.png"
              alt="navigation-menu"
              width={20}
              height={20}
              onClick={() => {
                setMenuActive(true);
              }}
              className="menu-icon sm:hidden"
            />
          )
        }

        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Fayz logo"
              width={40}
              height={40}
              style={{ height: "auto", width: "auto" }}
            />
          </Link>
          <ul className="flex items-center gap-6 max-sm:hidden">
            <Link href={"/"}>
              <li
                className={`cursor-pointer font-semibold text-[14px] ${pathname === "/" && "text-[#01A3D4]"}`}
              >
                Biz haqimizda
              </li>
            </Link>
            <Link href={"/user/Markets"}>
              <li
                className={`cursor-pointer font-semibold text-[14px] ${pathname === "/user/Markets" && "text-[#01A3D4]"}`}
              >
                Do&apos;konlar
              </li>
            </Link>
            <Link href={"/user/News"}>
              <li
                className={`cursor-pointer font-semibold text-[14px] ${pathname === "/user/News" && "text-[#01A3D4]"}`}
              >
                Yangiliklar
              </li>
            </Link>
            <Link href={"/user/Contacts"}>
              <li
                className={`cursor-pointer font-semibold text-[14px] ${pathname === "/user/Contacts" && "text-[#01A3D4]"}`}
              >
                Aloqa
              </li>
            </Link>
          </ul>
        </div>
        <div className="relative flex items-center gap-2">
          <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className="sliderr round"></span>
          </label>
          <Link href={"/user/Checkout"}>
            <FontAwesomeIcon icon={faCartShopping} className="text-[20px]" />
            {products.products.length > 0 && (
              <div className="w-5 h-5 rounded-full bg-purple-500 absolute -top-2 -right-2 flex justify-center items-center text-white">
                {products.products.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
