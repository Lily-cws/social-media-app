import React from 'react';
import {MagnifyingGlassCircleIcon, EllipsisHorizontalIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';


export default function Widget() {
  return (
    <div className="hidden lg:flex p-3 flex-col space-y-4">
      {/* Search Bar*/}
      <div className="flex bg-myBgGray text-[#89959D] 
      h-[44px] items-center space-x-3 rounded-full px-5">
        <MagnifyingGlassCircleIcon
        className="w-[20px] h-[20px]"
         />
        <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Search Busy Bee"
        />
      </div>

      {/* Trending */}
      <div className="bg-myBgGray p-3 rounded-xl">
        <h1 className="text-xl font-bold mb-2">What&apos;s Happening?</h1>

        {/* --Trending 1 */}
        <div className="flex flex-col py-3 text-sm cursor-not-allowed">
          <div className="flex justify-between text-mytextGray text-[13px]">
            <span>Trending in Sweden</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm mb-0.5">#NextJS</span>
          <span className="text-mytextGray text-xs">240k Bumbles</span>
        </div>
        {/* --Trending 2 */}
        <div className="flex flex-col py-3 text-sm cursor-not-allowed">
          <div className="flex justify-between text-mytextGray text-[13px]">
            <span>Trending in Sweden</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm mb-0.5">AI Agents</span>
          <span className="text-mytextGray text-xs">200k Bumbles</span>
        </div>
        {/* --Trending 3 */}
        <div className="flex flex-col py-3 text-sm cursor-not-allowed">
          <div className="flex justify-between text-mytextGray text-[13px]">
            <span>Trending in Sweden</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm mb-0.5">Angular</span>
          <span className="text-mytextGray text-xs">14k Bumbles</span>
        </div>
        {/* --Trending 4 */}
        <div className="flex flex-col py-3 text-sm cursor-not-allowed">
          <div className="flex justify-between text-mytextGray text-[13px]">
            <span>Trending in Sweden</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-sm mb-0.5">JavaScript</span>
          <span className="text-mytextGray text-xs">190k Bumbles</span>
        </div>
      </div>

      {/* Who to Follow */}
      <div className="bg-myBgGray rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">Who to follow</h1>

        {/* Who to Follow 1 */}
        <div className="flex justify-between items-center text-sm py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={'/assets/LexFridman.jpg'}
              width={56}
              height={56}
              alt="Profile Pic"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Lex Fridman</span>
              <span>@lexfridman</span>
            </div>
          </div>
          
          <button className="bg-[#0F1419] text-white h-[40px] w-[72px] rounded-full text-sm cursor-not-allowed">Follow</button>
        </div>

        {/* Who to Follow 2 */}
        <div className="flex justify-between items-center text-sm py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={'/assets/MichaelP.jpg'}
              width={56}
              height={56}
              alt="Profile Pic"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Michael B. P.</span>
              <span>@ThePrimeTime</span>
            </div>
          </div>
          
          <button className="bg-[#0F1419] text-white h-[40px] w-[72px] rounded-full text-sm cursor-not-allowed">Follow</button>
        </div>

        {/* Who to Follow 3 */}
        <div className="flex justify-between items-center text-sm py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={'/assets/Sonny.jpg'}
              width={56}
              height={56}
              alt="Profile Pic"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Sonny Sangha</span>
              <span>@papareact</span>
            </div>
          </div>
          
          <button className="bg-[#0F1419] text-white h-[40px] w-[72px] rounded-full text-sm cursor-not-allowed">Follow</button>
        </div>



      </div>

  </div>
  )
}
