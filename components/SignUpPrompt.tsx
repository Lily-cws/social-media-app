"use client"
import React from 'react';
import SignUpModal from './modals/SignUpModal';
import LogInModal from './modals/LogInModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function SignUpPrompt() {
  // const username = useSelector((state: RootState) => state.user.username );
  // console.log("UserName:", username)

  // we use name instead of username, so that the component wiill render smoothly
  const name = useSelector((state: RootState) => state.user.name );
  //console.log("UserName:", name)


  return (
    !name &&
    <div className="fixed w-full bg-myBgYellow bg-opacity-90 h-[80px] bottom-0 flex justify-center items-center md:space-x-5 lg:justify-between lg:px-20 xl:px-40 2xl:px-80">
      
      <div className="hidden md:flex flex-col text-white">
        <span className="text-xl font-bold">Don&apos;t miss out on the buzz</span>
        <span>People on Busy Bee are always the first to know</span>
      </div>

      <div className="flex space-x-2 p-3 w-full md:w-auto">
        <LogInModal />
        <SignUpModal />
      </div>
    </div>
  )
}
