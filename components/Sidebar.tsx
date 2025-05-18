
import React from 'react';
import {HomeIcon,
    HashtagIcon,
    BellIcon,
    InboxIcon, 
    BookmarkIcon,
    UserIcon, 
    EllipsisHorizontalCircleIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import SidebarUserInfo from './SidebarUserInfo';


const Sidebar = () => {

    return (
        <nav  className="h-screen hidden sm:flex flex-col sticky top-0 p-3">
            <div className="relative h-full flex flex-col">
                <div className="py-3">
                    <Image src={'/assets/Honey_Bee.png'} width={48} height={48} alt="Logo"/>
                </div>
                <ul>
                    <SidebarLink Icon={HomeIcon} text="Home"/>
                    <SidebarLink Icon={HashtagIcon} text="Explore"/>
                    <SidebarLink Icon={BellIcon} text="Notifications"/>
                    <SidebarLink Icon={InboxIcon} text="Messages"/>
                    <SidebarLink Icon={BookmarkIcon} text="Bookmarks"/>
                    <SidebarLink Icon={UserIcon} text="Profile"/>
                    <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More"/>
                </ul>
                <button className="hidden xl:block bg-myBgYellow w-[200px] h-[53px]
                rounded-full text-white font-medium cursor-pointer shadow-md mt-2">
                    Bumble
                </button>

                <SidebarUserInfo />
            </div>
 
        </nav>
    );
};

interface SidebarLinkProps {
    text: string;
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>;
}

function SidebarLink({text, Icon}: SidebarLinkProps){
    return <li className="flex items-center text-xl mb-2 space-x-3 p-2.5">
        <Icon className="h-7" />
        <span className="hidden xl:block">{text}</span>
    </li>
}

export default Sidebar;
