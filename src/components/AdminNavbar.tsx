import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { IoNotifications } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

export default function AdminNavbar() {
  return (
    <div className="w-full shadow fixed top-0 z-10 bg-white">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        <Link href={'/'} className="flex gap-4 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            height={100}
            width={300}
            className="h-12 w-48"
          />
        </Link>
        <div className="hidden w-4/12 border border-gray-300 md:flex gap-1.5 items-center p-2 rounded-md">
          <FiSearch className="mx-0.5 h-5 w-5" />
          <input
            type="text"
            className="outline-none w-full"
            placeholder="Search"
          />
        </div>
        <div>
          <div className="flex gap-5 md:gap-8">
            <button className="block p-1 h-5 w-5 md:hidden hover:text-gray-600 duration-500">
              <FiSearch className="" />
            </button>
            <button className="hover:text-gray-600 duration-500">
              <MdEmail className="h-5 w-5" />
            </button>
            <button className="hover:text-gray-600 duration-500">
              <IoNotifications className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
