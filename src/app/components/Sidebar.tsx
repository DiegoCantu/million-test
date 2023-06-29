'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { block } from "million/react"; 
// import { block } from "million/react-server"; <- neither works
import CircleImage from "./CircleImage";
import CircleWords from "./CircleWords";

type SidebarProps = {
    title: string;
    bannerImage: string;
    sidebarItems: any[];
    type: "flat" | "children"
    userName?: string;
    userImage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ title, bannerImage, sidebarItems, type = "flat", userName = "", userImage = "" }) => {

    return (
        <div className="sidebar-container">
            <Image className="sidebar-banner" src={bannerImage} alt={"Banner"} width={0} height={0} loading="lazy" quality="100"
                placeholder="blur" blurDataURL={bannerImage} />
            <div className="sidebar-external-inset" />
            <div className="sidebar-internal-inset">
                <h1 className="sidebar-title">{title}</h1>
                <div className="flex justify-center items-center mt-2">
                    {
                        userImage !== "" ?
                            <CircleImage image={userImage!} /> :
                            userName != "" && <CircleWords userName={userName!} />
                    }
                </div>
                <hr className="sidebar-divisor-line" />
                {
                    type === "flat" ?
                        sidebarItems?.map((item: any, index: number) => (
                            <Link key={index} className="sidebar-flat-container" href={item?.href} shallow={true}>
                                <div className="flex items-center gap-2">
                                    <div>{item?.icon}</div>
                                    <div className="lg:hidden xl:block">{item?.name}</div>
                                </div>
                            </Link>
                        ))
                        :
                        sidebarItems?.map((item: any, index: number) => (
                            <div key={index}>
                                <div className="sidebar-icon-container">
                                    {item?.icon}
                                    <a className='lg:hidden xl:block'>
                                        {item?.name}
                                    </a>
                                </div>
                                {
                                    item?.children?.map((child: any, cIndex: number) =>
                                        <Link key={cIndex} id={cIndex.toString()} className='sidebar-children-container xl:pl-2' href={child?.href} shallow={true}>
                                            <div className="flex items-center gap-2 w-full">
                                                <div>{child?.icon}</div>
                                                <div className="lg:hidden xl:block">{child?.name}</div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

const BlockComponent = block<SidebarProps>(Sidebar);

export default BlockComponent;