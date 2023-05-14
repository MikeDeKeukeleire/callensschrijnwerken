import React from "react";

export default function Footer() {
  return (
    <footer class="bg-white rounded-lg shadow m-4 mt-8 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flacomedia.be/" class="hover:underline">
            Flaco Media
          </a>
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              HOME
            </a>
          </li>
          <li>
            <a href="/realisaties" class="mr-4 hover:underline md:mr-6">
              REALISATIES
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
