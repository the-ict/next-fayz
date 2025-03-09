"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";


export default function Navbar() {
  const products = useSelector((store: RootState) => store.products);
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const pathname = usePathname();


  return (
    <div className="h-[60px] bg-[#fdfdfd] flex justify-center sticky top-0 z-[10] shadow px-5">
      <div className="max-w-[1124px] h-full flex items-center w-full justify-between">
        {menuActive && (
          <div
            className="mobile-menu sm:hidden fixed top-0 left-0 h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] z-[9999]"
            onClick={() => setMenuActive(false)}
          >
            <div className="px-2 py-5 h-full w-[60%] bg-[#efefef] rounded-2xl navbar transition-all flex flex-col justify-between">
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
                  <Link href={"/Markets"}>
                    <li
                      className={`${pathname === "/Markets" && "text-[#01A3D4]"}`}
                    >
                      Do&apos;konlar
                    </li>
                  </Link>
                  <Link href={"/News"}>
                    <li className={`${pathname === "/News" && "text-[#01A3D4]"}`}>
                      Yangiliklar
                    </li>
                  </Link>
                  <Link href={"/Contacts"}>
                    <li
                      className={`${pathname === "/Contacts" && "text-[#01A3D4]"}`}
                    >
                      Aloqa
                    </li>
                  </Link>
                </ul>
              </div>
              <button className="bg-blue-600 p-2 text-white font-bold rounded outline-none border-none">
                <Link href="/Contacts">
                  Bo&apos;g&apos;lanish
                </Link>
              </button>
            </div>
          </div>
        )}
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
            <Link href={"/Markets"}>
              <li
                className={`cursor-pointer font-semibold text-[14px] ${pathname === "/Markets" && "text-[#01A3D4]"}`}
              >
                Do&apos;konlar
              </li>
            </Link>
            <Link href={"/News"}>
              <li
                className={`cursor-pointer font-semibold text-[14px] ${pathname === "/News" && "text-[#01A3D4]"}`}
              >
                Yangiliklar
              </li>
            </Link>
            <Link href={"/Contacts"}>
              <li
                className={`cursor-pointer font-semibold text-[14px] ${pathname === "/Contacts" && "text-[#01A3D4]"}`}
              >
                Aloqa
              </li>
            </Link>
          </ul>
        </div>
        <div className="relative flex items-center gap-2">
          <Link href={"/Checkout"}>
            <Image
              src="/magazine.png"
              alt="Magazine icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
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
