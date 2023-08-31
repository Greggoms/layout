"use client";

import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleToggleMenu() {
    setIsSidebarOpen((prev) => !prev);
  }

  if (isSidebarOpen) {
    return (
      <div className="sm:hidden fixed top-0 left-0 right-0 h-screen grid grid-cols-1 grid-rows-1 z-40">
        {/* Overlay */}
        <div
          onClick={() => setIsSidebarOpen(false)}
          className={`col-start-1 row-start-1 bg-slate-700/60 backdrop-blur-lg`}
        />
        {/* Menu */}
        <div
          className={`col-start-1 row-start-1 z-10 bg-slate-300 dark:bg-slate-800 w-60`}
        >
          <aside className="flex flex-col gap-4">
            <ul className="flex flex-col divide-y dark:divide-neutral-400 sticky top-12">
              <li>
                <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
                  Item 1
                </button>
              </li>
              <li>
                <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
                  Item 2
                </button>
              </li>
              <li>
                <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
                  Item 3
                </button>
              </li>
              <li>
                <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
                  Item 4
                </button>
              </li>
              <li>
                <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
                  Item 5
                </button>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row-reverse items-start">
      <button
        onClick={handleToggleMenu}
        className="md:hidden fixed top-15 left-0 bg-sky-600"
      >
        <AiOutlineMenuUnfold className="w-10 h-10" />
      </button>
      <aside className="hidden md:block dark:bg-lime-900 w-60">
        <ul className="flex flex-col divide-y dark:divide-neutral-400 sticky top-12">
          <li>
            <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
              Item 1
            </button>
          </li>
          <li>
            <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
              Item 2
            </button>
          </li>
          <li>
            <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
              Item 3
            </button>
          </li>
          <li>
            <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
              Item 4
            </button>
          </li>
          <li>
            <button className="py-3 px-2 w-full text-left dark:hover:bg-lime-800">
              Item 5
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
}
