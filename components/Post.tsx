import React from 'react';
import { ChatBubbleOvalLeftEllipsisIcon,
HeartIcon,
ChartBarIcon,
ArrowUpTrayIcon
 } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { arrayRemove, arrayUnion, doc, DocumentData, Timestamp, updateDoc } from 'firebase/firestore';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store';
import { openCommentModal, setCommentDetails, openLogInModal } from '@/redux/slices/modalSlice';
import Link from 'next/link';
import { db } from "@/firebase";


interface PostProps  {
    data: DocumentData;
    id: string;
}

export default function Post({data, id}:PostProps) {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState)=> state.user )


    {/*Like and unlike post */}
    async function likePost(){

        //if user is not signed in, Open LogInModal
        if(!user.username){
            dispatch(openLogInModal());
            return;
        }

        const postRef = doc(db,"posts",id)

        if(data.likes.includes(user.uid)){
            await updateDoc(postRef,{
                likes: arrayRemove(user.uid),
            });

        }else{
            await updateDoc(postRef,{
                likes: arrayUnion(user.uid),
            });

        }
    }


  return (
    <div className="border-b border-gray-100">
        <Link href={'/' + id}>
            <PostHeader
                username={data.username}
                name={data.name}
                timestamp={data.timestamp}
                text={data.text}
            />
        </Link>


      <div className="ml-16 p-3 flex space-x-14">
        <div className="relative">
            <ChatBubbleOvalLeftEllipsisIcon
            className="w-[22px] h-[22px] cursor-pointer hover:text-[#F4AF01] transition"
            onClick={()=> {
                //if user is not signed in, Open LogInModal
                if(!user.username){
                    dispatch(openLogInModal());
                    return;
                }
                dispatch(setCommentDetails({
                    name: data.name,
                    username: data.username,
                    id: id,
                    text: data.text,
                }))
                dispatch(openCommentModal())
            }}
            />
            {
                data.comments.length > 0 &&
                <span className="absolute text-xs top-1 -right-3">{data.comments.length}</span>
            }
        </div>

        <div className="relative">
            {
                data.likes.includes(user.uid) ?

                <HeartSolidIcon
                className="w-[22px] h-[22px] cursor-pointer text-pink-600 transition"
                onClick={()=> likePost()}
                /> 
                :
                <HeartIcon
                className="w-[22px] h-[22px] cursor-pointer hover:text-pink-500 transition"
                onClick={()=> likePost()}
                />

            }
            {
                data.likes.length > 0 &&
                <span className="absolute text-xs top-1 -right-3">{data.likes.length}</span>
            }
        </div>

        <div className="relative">
            <ChartBarIcon
            className="w-[22px] h-[22px] cursor-not-allowed" />
        </div>

        <div className="relative">
            <ArrowUpTrayIcon
            className="w-[22px] h-[22px] cursor-not-allowed" />
        </div>
      </div>
    </div>
  )
}


//Timestamp type is from firebase/firestore
//to use Timestamp, you need to install react-moment > npm install react-moment
interface PostheaderProps{
    username: string;
    name: string;
    timestamp?: Timestamp;  //timestamp? is optional
    text: string;
    replyTo?: string; //replyTo? is optional
}

export function PostHeader({username, name, timestamp, text, replyTo}:PostheaderProps) {
    return(
        <div className="flex space-x-5 p-3">
            <Image
            src={'/assets/Profile_Pic.png'}
            width={44}
            height={44}
            alt="Profile"
            className="w-[44px] h-[44px]"
             />
             <div className="text-[15px] flex flex-col space-y-1.5">
                <div className="flex space-x-1.5 text-[#707E89]">
                    <span className="font-bold text-[#0F1419] 
                    inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]
                    whitespace-nowrap overflow-hidden text-ellipsis">{name}</span>
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis
                    inline-block max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
                        @{username}</span>
                                       
                        {
                            timestamp && (
                                <>
                                <span>|</span>
                                <span className="whitespace-nowrap">
                                    <Moment fromNow>
                                        {timestamp.toDate()}
                                    </Moment>
                                </span>
                                </>
                            )

                        }
                 
                </div>
                <div>
                    {text} 
                </div>
                {
                    replyTo && (
                        <>                
                            <div>
                                Replying to <span className="text-[#F4AF01]">@{replyTo}</span>
                            </div>
                        </>
                    )
                }

             </div>

        </div>
    )
}