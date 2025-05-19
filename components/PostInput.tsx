"use client"
import { db } from "@/firebase";
import React, {useState} from 'react';
import Image from 'next/image';
import {
    CalendarIcon,
    ChartBarIcon,
    FaceSmileIcon,
    MapPinIcon,
    PhotoIcon,

} from '@heroicons/react/24/outline';
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeCommentModal,openLogInModal } from '@/redux/slices/modalSlice';
import { Avatar } from "@mui/material";



interface PostInputProps {
  isModalOpen?: boolean; // isModalOpen? is optional , refer to Comment Modal
}

export default function PostInput({isModalOpen}:PostInputProps) {
  const [text, setText] = useState("");
  const user = useSelector((state: RootState)=> state.user);
  const commentDetails = useSelector((state: RootState)=>state.modals.commentPostDetails);
  const dispatch = useDispatch();

  async function sendPost(){

    if(!user.username){
        dispatch(openLogInModal());
        setText('');
        return;
    }
    await addDoc(collection(db, "posts"),{
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: []
    });
    setText('');
  }

  async function sendComment() {
    const postRef = doc(db,"posts",commentDetails.id)

    await updateDoc(postRef,{
      comments: arrayUnion({
        name: user.name,
        username: user.username,
        text: text,
      })
    });

    setText('');
    dispatch(closeCommentModal());
  }

  return (
    <div className="flex space-x-5 p-3 border-b border-gray-100">

      {
        !isModalOpen ? (
          <Image
            src={'/assets/Honey_Bee.png'} 
            width={44}
            height={44}
            alt="Logo"
            unoptimized
            className="w-[44px] h-[44px]"
            priority
          />
        ) : (
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
        )
      }
      <div className="w-full">
        <textarea className="w-full resize-none outline-none
        min-h-[50px] text-lg"
        placeholder={isModalOpen? "Send your reply":"What is happening!?"}
        onChange={(event)=>setText(event.target.value)}
        value={text}
        />

        <div className="flex justify-between pt-5 border-t border-gray-100">
            <div className="flex space-x-1.5">
                <PhotoIcon className="w-[22px] h-[22px] text-myBgYellow" />
                <ChartBarIcon className="w-[22px] h-[22px] text-myBgYellow" />
                <FaceSmileIcon className="w-[22px] h-[22px] text-myBgYellow" />
                <CalendarIcon className="w-[22px] h-[22px] text-myBgYellow" />
                <MapPinIcon className="w-[22px] h-[22px] text-myBgYellow" />
            </div>
            <button
                className="w-[80px] h-[36px] text-white bg-myBgYellow rounded-full 
                            text-sm cursor-pointer disabled:bg-opacity-60"
                disabled={!text}
                onClick={()=> isModalOpen? sendComment() : sendPost()}
            >
              Bumble
            </button>
        </div>
      </div>
    </div>
  )
}
