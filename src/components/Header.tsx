import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="p-3 dark:bg-slate-800/80 sticky top-0 z-30 backdrop-blur-md h-[50px]">
      <div className="container flex items-center justify-between">
        <h2>
          <Link href="/">Header</Link>
        </h2>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
