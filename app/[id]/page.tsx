"use client"
import Sidebar from '@/components/Sidebar'
import SignUpPrompt from '@/components/SignUpPrompt'
import Widget from '@/components/Widget'
import React from 'react'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';
import { ArrowLeftIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ChatBubbleOvalLeftEllipsisIcon,
HeartIcon,
ChartBarIcon,
ArrowUpTrayIcon
 } from '@heroicons/react/24/outline';
import { PostHeader } from '@/components/Post'
import { Avatar } from '@mui/material'

const fetchPost = async (id : string) =>{
    const postRef = doc(db,"posts",id);
    const postSnap = await getDoc(postRef);
    return postSnap.data(); //data() , would return you the data instead of snapshot

}

interface PageProps {
    params: {
        id: string;
    }
}

interface Comment {
    name: string;
    username: string;
    text: string;
}

export default async function page({params}: PageProps) {
    const {id} = params;
    //console.log("params", id);
    const post = await fetchPost(id);
    //console.log("post", post);

  return (
    <>
      <div className="text-[#0F1419] min-h-screen border-2 border-blue-100
    max-w-[1400px] mx-auto flex justify-center">
        <Sidebar />
<div className="flex-grow max-w-2xl border-x border-gray-100">
        <div className="py-4 px-3 text-lg sm:text-xl sticky top-0 z-50
        bg-white bg-opacity-80 backdrop-blur-sm font-bold border-b border-gray-100
        flex items-center">
            <Link href="/" >
                <ArrowLeftIcon className="w-5 h-5 mr-10" />
            </Link>
            Bumble
        </div>

        <div className="flex flex-col p-3 space-y-5 border-b border-gray-100">
            <div className="flex justify-between items-center mb-1.5">
                <div className="flex space-x-3">
                     <Avatar
                        sx={{
                            width: 44,
                            height: 44,
                            backgroundColor: "gray" 
                        }}
                        alt={post?.name}
                    >
                        {post?.name?.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="flex flex-col">
                        <span className="font-bold inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]
                    whitespace-nowrap overflow-hidden text-ellipsis">{post?.name}</span>
                        <span className="text-mytextGray inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]
                    whitespace-nowrap overflow-hidden text-ellipsis">@{post?.username}</span>
                    </div>
                </div>
                <EllipsisHorizontalIcon
                    className="w-5 h-5" />
            </div>

            <span className="text-[15px]">{post?.text}</span>
        </div>

        {/* number of likes*/}
        <div className="p-3 border-b border-gray-100 text-[15px]">
            <span className="font-bold">{post?.likes.length}</span> Likes
        </div>

        {/* Icons*/}
        <div className="p-3 border-b border-gray-100 text-[15px]
        flex justify-evenly">
            <Icons />
        </div>

        {/* List of Comments*/}
        {
            post?.comments.map((comment:Comment, index: number) =>(
                 <Comments
                    key={index}
                    name={comment.name}
                    username={comment.username}
                    text={comment.text}
                  />
            ))
        }
       

      </div>
        <Widget />
      </div>
      <SignUpPrompt />
    </>
  )
}

interface CommentProps {
    name: string;
    username: string;
    text: string;
}


function Comments({name,username,text}: CommentProps) {
    return(
        <div className="border-b border-gray-100">
            <PostHeader
                name={name}
                username={username}
                text={text}
            />

            <div className="flex space-x-14 p-3 ms-16">
                <Icons />
            </div>
        </div>
    )
}

function Icons() {
    return(
        <>
            <ChatBubbleOvalLeftEllipsisIcon className="w-[22px] h-[22px] cursor-not-allowed" />
            <HeartIcon className="w-[22px] h-[22px] cursor-not-allowed" />
            <ChartBarIcon className="w-[22px] h-[22px] cursor-not-allowed" />
            <ArrowUpTrayIcon className="w-[22px] h-[22px] cursor-not-allowed" />
        </>
    )
}