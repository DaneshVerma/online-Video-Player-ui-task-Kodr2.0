import { Link } from "react-router";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <>
      <header className='sticky top-0 bg-white z-10 shadow-sm px-10'>
        <div className='flex items-center justify-between gap-8 px-4 h-14'>
          <div className='flex'>
            <Link to={'/'} className='text-xl font-bold'>PlAYER UI</Link>
          </div>
          <SearchBar />
          <div>
            <img src='/vite.svg' alt='Logo' className='h-10' />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
