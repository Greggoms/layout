"use client";

import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import clsx from "clsx";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleMenu() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleToggleMenu}
        className={clsx(
          "md:hidden w-screen h-screen bg-neutral-800/20 backdrop-blur-sm",
          isSidebarOpen ? "fixed" : "hidden"
        )}
      />

      {/* Menu Toggle Button */}
      <button
        onClick={handleToggleMenu}
        className={clsx(
          "md:hidden self-start bg-sky-600",
          isSidebarOpen
            ? "sticky top-12 translate-x-[240px]"
            : "relative translate-x-0"
        )}
      >
        {isSidebarOpen ? (
          <AiOutlineMenuFold className="w-10 h-10" />
        ) : (
          <AiOutlineMenuUnfold className="w-10 h-10" />
        )}
      </button>

      {/* Menu Container */}
      <div
        className={clsx(
          "fixed md:static md:flex transition-transform ease-in-out -translate-x-full md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <aside className={clsx(`dark:bg-sky-900 w-60`)}>
          <ul className="flex flex-col divide-y dark:divide-neutral-400 sticky top-12">
            <li>
              <button
                onClick={handleToggleMenu}
                className="py-3 px-2 w-full text-left dark:hover:bg-sky-800"
              >
                Item 1
              </button>
            </li>
            <li>
              <button
                onClick={handleToggleMenu}
                className="py-3 px-2 w-full text-left dark:hover:bg-sky-800"
              >
                Item 2
              </button>
            </li>
            <li>
              <button
                onClick={handleToggleMenu}
                className="py-3 px-2 w-full text-left dark:hover:bg-sky-800"
              >
                Item 3
              </button>
            </li>
            <li>
              <button
                onClick={handleToggleMenu}
                className="py-3 px-2 w-full text-left dark:hover:bg-sky-800"
              >
                Item 4
              </button>
            </li>
            <li>
              <button
                onClick={handleToggleMenu}
                className="py-3 px-2 w-full text-left dark:hover:bg-sky-800"
              >
                Item 5
              </button>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
}
