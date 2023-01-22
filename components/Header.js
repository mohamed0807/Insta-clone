import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars4Icon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import profile from "../public/pro2.jpg";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter()
  const [open,setOpen]=useRecoilState(modalState)
  // const currentValue = useRecoilValue(modalState) this is for see the value of current state like useSelector in redux
  // console.log(session);
  return (
    <div className="shadow-sm border-b bg-white  sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl  ">
        <div onClick={()=>router.push('/')} className="relative hidden lg:inline-grid w-24 mx-5 xl:mx-auto">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
            alt="img"
          />
        </div>
        <div onClick={()=>router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
            alt="img"
          />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 border-gray-400 focus:ring-black focus:border-black rounded-md  "
              type="text"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={()=>router.push('/')} fill="black" className="navBtn" />
          <Bars4Icon  className="h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center  animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={()=>setOpen(true)} className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <Image
                onClick={signOut}
                src={session?.user.image}
                alt="Profile"
                // layout="center"
                width={10}
                height={10}
                className="rounded-full cursor-pointer h-10 w-10 object-cover"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
