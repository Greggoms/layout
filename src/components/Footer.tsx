const Footer = () => {
  return (
    <footer className="p-2 dark:bg-slate-800">
      <div className="container">
        <div className="flex items-center justify-between gap-2 text-sm">
          <span>&copy; {new Date().getFullYear()} Footer</span>
          <span>
            Built with{" "}
            <a href="https://nextjs.org/" className="link">
              NextJS
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
