import logo from "../media/logo.png";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="p-5 bg-white shadow sm:flex sm:items-center sm:justify-between">
        <div class="flex justify-between items-center max-w-6xl mx-auto">
          <span class="text-2xl cursor-pointer">
            <a href="/#">
              <img class="h-20 inline" src={logo} />
            </a>
          </span>
        </div>
        <ul class=" max-w-6xl mx-auto sm:flex sm:items-center z-[-1] sm:z-auto sm:static absolute bg-white w-full left-0 sm:w-auto sm:py-0 py-4 sm:pl-0 pl-7 sm:opacity-100 transition-all ease-in duration-500 hidden">
          <li class="mx-4 my-6 sm:my-0">
            <a href="/#" class="text-lg hover:text-cyan-500 duration-500">
              HOME
            </a>
          </li>
          <li class="mx-4 my-6 sm:my-0">
            <a
              href="/#realisaties"
              class="text-lg hover:text-cyan-500 duration-500"
            >
              REALISATIES
            </a>
          </li>
          <li class="mx-4 my-6 sm:my-0">
            <a href="/#contact" class="text-lg hover:text-cyan-500 duration-500">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
