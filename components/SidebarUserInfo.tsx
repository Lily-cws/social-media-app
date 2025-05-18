
"use client"
import React, {useState} from 'react';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '@/redux/slices/userSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { closeLogInModal, closeSignUpModal } from '@/redux/slices/modalSlice';

export default function SidebarUserInfo() {
const [isClick, setIsClick] = useState(false);
const dispatch:AppDispatch = useDispatch();
const user = useSelector((state: RootState) => state.user)


async function handleSignOut() {
    await signOut(auth);

    dispatch(signOutUser());

    dispatch(closeLogInModal());
    dispatch(closeSignUpModal());
}

  return (

    <>
    {
        user.username && (
        <div className="absolute bottom-0 space-x-2 xl:p-3 xl:pe-6 flex items-center justify-between 
        rounded-full hover:bg-gray-500 hover:bg-opacity-10 transiton duration-150 ease-in cursor-pointer
        w-fit xl:w-full"
        onClick={()=> setIsClick(!isClick)}>
        <div className="flex items-center w-full">
            <Avatar
                sx={{
                    width: 36,
                    height: 36,
                    backgroundColor: "gray" 
                }}
                alt={user.name}
            >
                {user.name?.charAt(0).toUpperCase()}
            </Avatar>
            <div className="hidden xl:flex flex-col text-sm ms-2 w-[75%]">
                <span className="font-bold block whitespace-nowrap text-ellipsis overflow-hidden">{user.name}</span>
                <span className="text-gray-500 block whitespace-nowrap text-ellipsis overflow-hidden">@{user.username}</span>
            </div>
        </div>
        {/* dropdown menu */}
        {
            isClick && (
            <ul className="absolute top-0 left-full ml-3 shadow-md bg-white border rounded-xl w-[250px] z-50 hover:bg-gray-100 transiton duration-150 ease-in cursor-pointer"
                onClick={() => {handleSignOut()}}
            >
                <li className="p-2 h-full max-w-[300px] flex items-center justify-center">
                    <span className="h-fit inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-bold text-center">
                        Log out @{user.username}
                    </span>
                </li>
            </ul>
            )
        }
    </div> 
        )
    }
    
    </>

    
  )
}
