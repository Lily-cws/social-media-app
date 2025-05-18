import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '@/redux/slices/userSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { closeLogInModal, closeSignUpModal } from '@/redux/slices/modalSlice';


export default function HpLogOutButton() {
const user = useSelector((state: RootState) => state.user)    
const dispatch:AppDispatch = useDispatch();

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
        <div className="text-lg sm:text-xl p-2 rounded-3xl hover:bg-gray-500 hover:bg-opacity-10 transiton duration-150 ease-in cursor-pointer"
        onClick={() => {handleSignOut()}}
            >
            Log out 
        </div>
        )
    }
    </>

  )
}
