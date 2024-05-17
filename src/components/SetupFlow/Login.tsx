import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { IoClose } from 'react-icons/io5';

interface Props {
  toggleModal: () => void;
}

const Login: React.FC<Props> = ({ toggleModal }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div className="h-screen w-full flex justify-center items-center z-50 top-0 fixed bg-black/50 backdrop-blur-sm">
      <div className="flex h-[80vh] w-11/12 md:w-8/12 rounded-md">
        <div className="h-full hidden md:block w-6/12 rounded-s-md">
          <Image
            src="/bg.png"
            className="rounded-s-md h-full w-full object-cover"
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="h-full w-full md:w-6/12 bg-white rounded-e-md flex justify-center items-center relative">
          <button
            className="bg-red-500 p-1 rounded-md text-white absolute top-1 right-1"
            onClick={handleClick}
          >
            <IoClose />
          </button>
          <div className="w-9/12 flex flex-col gap-8">
            <div>
              <h1 className="text-2xl font-bold mb-1">Welcome</h1>
              <p className="text-sm">Please login to your account</p>
            </div>
            <form className="w-full flex flex-col gap-8">
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#1A0D46]">
                    Username / Email
                  </label>
                  <input
                    type="text"
                    className="border-b border-gray-300 outline-none text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#1A0D46]">Password</label>
                  <input
                    type="password"
                    className="border-b border-gray-300 outline-none text-sm"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <Link href={'#'} className="text-[#1A0D46] underline">
                  Forgot Password
                </Link>
                <Link
                  href={'/account-setup'}
                  className="bg-[#1A0D46] text-white py-2 px-8 rounded-md"
                >
                  Login
                </Link>
              </div>
              <div className="w-full">
                <Link
                  href={'#'}
                  className="flex items-center justify-center bg-[#D9D3EF] w-full text-[#1A0D46] rounded-md py-2"
                >
                  <span>Register your School</span>
                </Link>
                <span className="text-sm text-gray-400">
                  Privacy Policy and Terms & Conditions
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
