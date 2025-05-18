"use client"
import { closeCommentModal } from '@/redux/slices/modalSlice';
import { RootState } from '@/redux/store';
import { Modal } from '@mui/material'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useSelector, useDispatch } from 'react-redux'
import { PostHeader } from '../Post';
import PostInput from '../PostInput';


export default function CommentModal() {
    const open = useSelector((state : RootState)=> state.modals.commentModalOpen);
    const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails);
    const dispatch = useDispatch();

    return (
    <>
      <Modal
      className="flex justify-center items-center"
        open={open}
        onClose={()=> dispatch(closeCommentModal())}
      >
        <div className="w-full h-full sm:w-[600px] sm:h-fit bg-white
        sm:rounded-xl outline-none">
            <XMarkIcon className="w-7 mt-5 ms-5 cursor-pointer"
                onClick={()=> dispatch(closeCommentModal())}
              />
            <div className="pt-5 pb-10 px-0 sm:px-5 flex flex-col">
                <PostHeader
                    username={commentDetails.username}
                    name={commentDetails.name}
                    text={commentDetails.text}
                    replyTo={commentDetails.username}
                />
                <div className="mt-4">
                    <PostInput
                        isModalOpen={true}
                    />
                </div>
                
            </div>
        </div>
      </Modal>
    </>
  )
}
