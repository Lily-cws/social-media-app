import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import PostFeed from "@/components/PostFeed";
import Widget from "@/components/Widget";
import SignUpPrompt from "@/components/SignUpPrompt";
import CommentModal from "@/components/modals/CommentModal";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <div className="text-[#0F1419] min-h-screen
    max-w-[1400px] mx-auto flex justify-center">
        <Sidebar />
        <PostFeed />
        <Widget />
      </div>
      <CommentModal />
      <SignUpPrompt />
      <LoadingScreen />
    </>

  );
}
