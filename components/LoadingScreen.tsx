"use client"
import React from 'react';
import Image from 'next/image';
import { LinearProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';


export default function LoadingScreen() {
    const loadingScreen = useSelector((state : RootState) => state.loading.loadingScreenOpen);


  return (
    <>
    {
        loadingScreen && (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-50 bg-white
                    flex justify-center items-center transition">
            <div className="flex flex-col items-center">
                <Image
                    src={'/assets/Honey_Bee.png'} 
                    width={120}
                    height={120}
                    alt={"Busy Bee Logo"}
                    className="mb-5"
                />
                <h1 className="text-6xl font-bold mb-10">Busy <span className="text-myBgYellow">Bee</span></h1>
                {/*use CSS instead of tailwind */}
                <LinearProgress sx={{
                    width: 265,
                    height: 10,
                    backgroundColor: "#F4AF01",
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "black"
                    }
                }} />
            </div>
        </div>
            )
    }
    </>   
  )
}
