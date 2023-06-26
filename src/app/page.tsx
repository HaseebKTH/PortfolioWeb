"use client";

import Image from "next/image";
import im1 from "@/assets/images/im1.jpg";
import im2 from "@/assets/images/im2.jpg";
import im3 from "@/assets/images/im3.jpg";
import im4 from "@/assets/images/im4.jpg";
import im5 from "@/assets/images/im5.jpg";
import im6 from "@/assets/images/im6.jpg";
import im7 from "@/assets/images/im7.jpg";
import im8 from "@/assets/images/im8.jpg";
import heroImage from "@/assets/images/imhaseeb.jpg";
import { useState } from "react";
import { TypingEffect } from "@/views/vault";
import { TypingEffect2 } from "@/views/vault2";
import Link from "next/link";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main className="relative min-h-screen w-full bg-orange-100">
      <nav className="flex bg-gray-500 px-6 py-1 items-center justify-between shadow-md shadow-orange-300 w-full fixed z-50">
        <div className="text-orange-400">{TypingEffect()}</div>
        <div className="hidden mu:flex text-orange-300 gap-x-8 md:gap-x-12">
          <span>
            <Link href="#home" className="hover:border-b-2 border-orange-500">
              Home
            </Link>
          </span>
          <span>
            <Link href="#skills" className="hover:border-b-2 border-orange-500">
              Skills
            </Link>
          </span>
          <span>
            <Link
              href="#portfolio"
              className="hover:border-b-2 border-orange-500"
            >
              Portfolio
            </Link>
          </span>
          <span>
            <Link
              href="#testimonials"
              className="hover:border-b-2 border-orange-500"
            >
              Testimonials
            </Link>
          </span>
          <span>
            <Link
              href="#contactus"
              className="hover:border-b-2 border-orange-500"
            >
              Contact
            </Link>
          </span>
        </div>
        <div className="flex mu:hidden">
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-orange-300"
              onClick={toggleSidebar}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-orange-300"
              onClick={toggleSidebar}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </nav>
      <div
        className={`mu:hidden fixed bg-slate-400 w-1/2 text-center min-w-fit text-lg rounded-b-lg shadow-md shadow-orange-300 top-12 duration-500 ${sidebarOpen ? "translate-x-full " : "-translate-x-full"
          }`}
      >
        <ul className="py-4">
          <li className="py-4">
            <Link
              href="#home"
              className="hover:border-b-2 border-orange-500 hover:font-bold"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="#skills"
              className="hover:border-b-2 border-orange-500 hover:font-bold"
              onClick={toggleSidebar}
            >
              Skills
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="#portfolio"
              className="hover:border-b-2 border-orange-500 hover:font-bold"
              onClick={toggleSidebar}
            >
              Portfolio
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="#testimonials"
              className="hover:border-b-2 border-orange-500 hover:font-bold"
              onClick={toggleSidebar}
            >
              Testimonials
            </Link>
          </li>
          <li className="py-4">
            <Link
              href="#contactus"
              className="hover:border-b-2 border-orange-500 hover:font-bold"
              onClick={toggleSidebar}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <section
        id="home"
        className="max-w-7xl min-h-screen pt-[70px] pb-[20px] flex flex-col-reverse cu:flex-row items-center justify-center mx-auto"
      >
        <div className="cu:w-7/12 ">
          <p className="text-2xl cu:text-5xl text-yellow-400 font-bold pt-3 text-center">
            Hello!
          </p>
          <p className="text-3xl cu:text-6xl text-yellow-400 font-bold p-1 cu:p-3 text-center ">
            I'm <span className="hover:text-red-600">Haseeb</span>
          </p>
          <p className="text-sm sm:text-xl text-yellow-600 font-bold text-justify px-12">
            I'm your passport into a thriving Digital World! A world with infinite
            potential! Our web design solutions will help fuel your brand's
            growth and will help unlock endless opportunities for your business!
          </p>
          <h1 className="text-4xl text-red-500 font-bold p-3 text-center">
            Design. Develop. Deliver.
          </h1>
          <div className="flex justify-between py-8 p-2 xsu:px-8 su:px-16 sm:px-40 cu:px-28 flex-wrap">
            <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900 hover:shadow-md hover:scale-125 duration-500">
              <Link href="#contactus">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-orange-300 bg-red-500 h-14 w-14"
                >
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
                </svg>
              </Link>
            </div>
            <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900 hover:shadow-md hover:scale-125 duration-500">
              <Link href="#contactus">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-orange-300 bg-red-500 h-14 w-14"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>
            </div>
            <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900 hover:shadow-md hover:scale-125 duration-500">
              <Link href="#contactus">
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-orange-300 bg-red-500 h-14 w-14"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Link>
            </div>
            <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900 hover:shadow-md hover:scale-125 duration-500">
              <Link href="#contactus">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="text-orange-300 bg-red-500 h-14 w-14"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-red-800 mx-auto">{TypingEffect2()}</div>
        </div>

        <div className="w-1/2 cu:w-5/12 p-0">
          <div className="border-4 border-yellow-500 rounded-full overflow-hidden ">
            <Image
              src={heroImage}
              alt="Hero Image"
              className="w-full h-full object-cover hover:scale-110 duration-1000"
            />
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="max-w-7xl min-h-screen pt-[70px] pb-[20px] mx-auto"
      >
        <h1 className="pb-4 pt-2 text-center text-3xl font-bold text-rose-800">
          Skills
        </h1>

        <div className="mx-auto p-8 grid su:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 justify-items-center items-center">
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z" />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              HTML
            </h2>
          </div>
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              viewBox="0 0 384 512"
              fill="currentColor"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              CSS
            </h2>
          </div>
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              Javascript
            </h2>
          </div>
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              Typescript
            </h2>
          </div>
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              Tailwind CSS
            </h2>
          </div>
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              React
            </h2>
          </div>
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              fill="none"
              viewBox="0 0 15 15"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M0 7.5a7.5 7.5 0 1111.697 6.216L4.907 4.21A.5.5 0 004 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 010 7.5zM10 10V4h1v6h-1z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              NextJS
            </h2>
          </div>
          <div className="rounded-lg p-8 bg-orange-100 transition duration-500 ease-in hover:bg-orange-200 hover:scale-125">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className=" text-orange-300 bg-red-500 rounded-md h-40 w-40"
            >
              <path d="M15.698 7.287L8.712.302a1.03 1.03 0 00-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 011.55 1.56l1.773 1.774a1.224 1.224 0 011.267 2.025 1.226 1.226 0 01-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 11-1.008-.036V5.887a1.226 1.226 0 01-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 000 1.457l6.986 6.986a1.03 1.03 0 001.457 0l6.953-6.953a1.031 1.031 0 000-1.457" />
            </svg>
            <h2 className="text-center font-bold text-2xl text-orange-600 pt-2">
              Git
            </h2>
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="max-w-7xl min-h-screen pt-[70px] mx-auto"
      >
        <h1 className="pb-4 pt-2 text-center text-3xl font-bold text-rose-800">
          Portfolio
        </h1>
        <div className="mx-auto p-4 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8">
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im1}
                alt="Website 1 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 1</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im2}
                alt="Website 2 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 2</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im3}
                alt="Website 3 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 3</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im4}
                alt="Website 4 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 4</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im5}
                alt="Website 5 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 5</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im6}
                alt="Website 6 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 6</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im7}
                alt="Website 7 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 7</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-orange-200 shadow-2xl">
            <div className="overflow-hidden">
              <Image
                src={im8}
                alt="Website 8 Image"
                className="w-full h-48 object-cover rounded-t-lg hover:scale-110 duration-1000"
              />
            </div>
            <div className="px-6 py-3">
              <h2 className="font-bold text-2xl">Website 8</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                assumenda porro inventore repellendus ipsum.
              </p>
              <a href="#" className="text-lg font-bold text-red-500">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="max-w-7xl min-h-screen pt-[70px] mx-auto"
      >
        <h1 className="pb-4 pt-2 text-center text-3xl font-bold text-rose-800">
          Testimonials
        </h1>

        <div className="grid lg:grid-cols-4 gap-4 p-4">
          <div className="bg-indigo-500 text-white lg:col-span-2 p-16 rounded-lg">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-indigo-800 h-10"
            >
              <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 006.925 10H10a1 1 0 011 1v7c0 1.103-.897 2-2 2H3a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0017.925 10H21a1 1 0 011 1v7c0 1.103-.897 2-2 2z" />
            </svg>
            <p>
              I just finished my trial period and was so amazed with the support
              and good results that I purchased the Pro version for my business.
            </p>
            <p className="font-bold text-lg text-right ">John Doe</p>
            <p className="font-normal text-sm italic text-right">
              CEO ABC Tech.
            </p>
          </div>

          <div className="bg-gray-500 text-white p-8 rounded-lg">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-gray-900 h-10"
            >
              <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 006.925 10H10a1 1 0 011 1v7c0 1.103-.897 2-2 2H3a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0017.925 10H21a1 1 0 011 1v7c0 1.103-.897 2-2 2z" />
            </svg>
            <p>
              I just finished my trial period and was so amazed with the support
              and good results that I purchased the Pro version for my business.
            </p>
            <p className="font-bold text-lg text-right">John Doe</p>
            <p className="font-normal text-sm italic text-right">
              CEO ABC Tech.
            </p>
          </div>

          <div className="bg-white lg:row-start-2 p-8 rounded-lg">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-stone-600 h-10"
            >
              <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 006.925 10H10a1 1 0 011 1v7c0 1.103-.897 2-2 2H3a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0017.925 10H21a1 1 0 011 1v7c0 1.103-.897 2-2 2z" />
            </svg>
            <p>
              I just finished my trial period and was so amazed with the support
              and good results that I purchased the Pro version for my business.
            </p>
            <p className="font-bold text-lg text-right">John Doe</p>
            <p className="font-normal text-sm italic text-right">
              CEO ABC Tech.
            </p>
          </div>

          <div className="bg-red-500 text-white lg:col-span-2 p-8 rounded-lg">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-red-800 h-10"
            >
              <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 006.925 10H10a1 1 0 011 1v7c0 1.103-.897 2-2 2H3a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0017.925 10H21a1 1 0 011 1v7c0 1.103-.897 2-2 2z" />
            </svg>
            <p>
              zzI just finished my trial period and was so amazed with the
              support and good results that I purchased the Pro version for my
              business.
            </p>
            <p className="font-bold text-lg text-right">John Doe</p>
            <p className="font-normal text-sm italic text-right">
              CEO ABC Tech.
            </p>
          </div>

          <div className="bg-amber-600 text-white lg:row-start-1 lg:row-span-2 lg:col-start-4 p-8 rounded-lg">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className=" text-amber-900 h-10"
            >
              <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 006.925 10H10a1 1 0 011 1v7c0 1.103-.897 2-2 2H3a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 01-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0017.925 10H21a1 1 0 011 1v7c0 1.103-.897 2-2 2z" />
            </svg>
            <p>
              I just finished my trial period and was so amazed with the support
              and good results that I purchased the Pro version for my business.
            </p>
            <p className="font-bold text-lg text-right">John Doe</p>
            <p className="font-normal text-sm italic text-right">
              CEO ABC Tech.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contactus"
        className="max-w-7xl min-h-screen pt-[70px] mx-auto flex flex-col justify-center"
      >
        <h1 className="pb-4 pt-2 text-center text-3xl font-bold text-rose-800">
          Contact Us!
        </h1>

        <form className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl my-8 mx-auto p-8 border border-gray-300">
          <div>
            <label className="block"> Full Name </label>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full resize-none"
            />
          </div>
          <div>
            <label className="block"> Email Address </label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full resize-none"
            />
          </div>
          <div>
            <label className="block"> Contact no. </label>
            <input
              type="text"
              name="cnumber"
              placeholder="Contact no."
              className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full resize-none"
            />
          </div>
          <div className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-4">
            <label className="block"> Message </label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              className="mt-1 py-2 px-3 border border-gray-300 rounded-md w-full resize-none"
            ></textarea>
          </div>
          <button className="col-span-full inline-block py-3 px-9 bg-red-500 text-white font-bold rounded-full hover:bg-red-700">
            Send a Message
          </button>
        </form>
      </section>

      <hr className="border border-orange-600 mx-6" />

      <footer className="grid grid-cols-3 justify-items-center items-center pb-2 pt-1 text-orange-600 text-xs sus:text-sm md:text-lg font-bold px-8">
        <div className="justify-self-start">© 2023 - Haseeb Aslam</div>
        <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900">
          <Link href="#home">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className="text-orange-300 bg-red-500 h-4 w-4 xsu:h-5 xsu:w-5 su:h-8 su:w-8"
            >
              <path d="M946.5 505L534.6 93.4a31.93 31.93 0 00-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
            </svg>
          </Link>
        </div>
        <div className="flex justify-self-end space-x-2">
          <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900">
            <Link href="#contactus">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-orange-300 bg-red-500 h-4 w-4 xsu:h-5 xsu:w-5 su:h-8 su:w-8"
              >
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
              </svg>
            </Link>
          </div>
          <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900">
            <Link href="#contactus">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-orange-300 bg-red-500 h-4 w-4 xsu:h-5 xsu:w-5 su:h-8 su:w-8"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
          </div>
          <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900">
            <Link href="#contactus">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-orange-300 bg-red-500 h-4 w-4 xsu:h-5 xsu:w-5 su:h-8 su:w-8"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
          </div>
          <div className="rounded-full overflow-hidden shadow-xl shadow-orange-900">
            <Link href="#contactus">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="text-orange-300 bg-red-500 h-4 w-4 xsu:h-5 xsu:w-5 su:h-8 su:w-8"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

////      <div className="max-w-7xl min-h-screen flex items-center pt-[60px] justify-center mx-auto border border-red-900">
////      https://reactsvgicons.com/
//// <Image src={logoImage} height={60} alt="Picture of the author" />

/*<h3 className="font-bold text-2xl">
I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
</h3>
<p className="mt-4">
“I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.”
</p>*/

/*<span>Home</span>
<span>Skills</span>
<span>Portfolio</span>
<span>Testimonials</span>
<span>Contact</span>*/
