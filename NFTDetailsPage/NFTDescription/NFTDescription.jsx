import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
    MdVerified,
    MdCloudUpload,
    MdTimer,
    MdReportProblem,
    MdOutlineDeleteSweep
} from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet, FaPercentage } from "react-icons/fa";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import { BiTransferAlt, BiDollar } from "react-icons/bi";


// Internal Import
import Style from "./NFTDescription.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import { NFTTabs } from "../NFTDetailsIndex";



const NFTDescription = () => {

    const [social, setSocial] = useState(false);
    const [NFTMenu, setNFTMenu] = useState(false);
    const [history, setHistory] = useState(true);
    const [provanance, setProvanance] = useState(false);
    const [owner, setOwner] = useState(false);


    const historyArray = [
        images.user1,
        images.user2,
        images.user3,
        images.user4,
        images.user5
    ]

    const provananceArray = [
        images.user6,
        images.user7,
        images.user8,
        images.user9,
        images.user10
    ]

    const ownerArray = [
        images.user1,
        images.user8,
        images.user2,
        images.user6,
        images.user5
    ]

    const openSocial = () => {
        if (!social) {
            setSocial(true);
            setNFTMenu(false);
        } else {
            setSocial(false);
        }
    };

    const openNFTMenu = () => {
        if (!NFTMenu) {
            setNFTMenu(true);
            setSocial(false);
        } else {
            setNFTMenu(false);
        }
    };


    const openTabs = (e) => {
        const btnText = e.target.innerText;

        if (btnText == "Bid History") {
            setHistory(true);
            setProvanance(false);
            setOwner(false);
        } else if (btnText == "Provenance") {
            setHistory(false);
            setProvanance(true);
            setOwner(false);
        }
    };

    const openOwner = () => {
        if (!owner) {
            setOwner(true);
            setHistory(false);
            setProvanance(false);
        } else {
            setOwner(false);
            setHistory(true);
        }
    };



    return (
        <div className={Style.NFTDescription}>
            <div className={Style.NFTDescription_box}>

                {/* Part One */}

                <div className={Style.NFTDescription_box_share}>
                    <p>Virtual Worlds</p>
                    <div className={Style.NFTDescription_box_share_box}>
                        <MdCloudUpload
                            className={Style.NFTDescription_box_share_box_icon}
                            onClick={() => openSocial()}
                        />

                        {
                            social && (
                                <div className={Style.NFTDescription_box_share_box_social}>
                                    <a href="#">
                                        <TiSocialFacebook /> Facebook
                                    </a>
                                    <a href="#">
                                        <TiSocialInstagram /> Instagram
                                    </a>
                                    <a href="#">
                                        <TiSocialLinkedin /> LinkedIn
                                    </a>
                                    <a href="#">
                                        <TiSocialTwitter /> Twitter
                                    </a>
                                    <a href="#">
                                        <TiSocialYoutube /> YouTube
                                    </a>
                                </div>
                            )
                        }

                        <BsThreeDots
                            className={Style.NFTDescription_box_share_box_icon}
                            onClick={() => openNFTMenu()}
                        />

                        {
                            NFTMenu && (
                                <div className={Style.NFTDescription_box_share_box_social}>
                                    <a href="#">
                                        <BiDollar /> Change price
                                    </a>
                                    <a href="#">
                                        <BiTransferAlt /> Transfer
                                    </a>
                                    <a href="#">
                                        <MdReportProblem /> Report abuse
                                    </a>
                                    <a href="#">
                                        <MdOutlineDeleteSweep /> Delete item
                                    </a>
                                </div>
                            )
                        }


                    </div>
                </div>

                {/* Part Two */}

                <div className={Style.NFTDescription_box_profile}>
                    <h1>PandaX #123</h1>
                    <div className={Style.NFTDescription_box_profile_box}>
                        <div className={Style.NFTDescription_box_profile_box_left}>
                            <Image
                                src={images.user1}
                                alt="profile"
                                width={40}
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />
                            <div className={Style.NFTDescription_box_profile_box_left_info}>
                                <small>Creator</small> <br />

                                <span>
                                    John Stones <MdVerified />
                                </span>
                            </div>
                        </div>

                        <div className={Style.NFTDescription_box_profile_box_right}>
                            <Image
                                src={images.creatorbackground1}
                                alt="profile"
                                width={40}
                                height={40}
                                className={Style.NFTDescription_box_profile_box_left_img}
                            />

                            <div className={Style.NFTDescription_box_profile_box_right_info}>
                                <small>Collection</small> <br />
                                <span>
                                    Monkey App <MdVerified />
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className={Style.NFTDescription_box_profile_biding}>
                        <p>
                            <MdTimer /> <span>Auction ending in:</span>
                        </p>

                        <div className={Style.NFTDescription_box_profile_biding_box_timer}>
                            <div
                                className={
                                    Style.NFTDescription_box_profile_biding_box_timer_item
                                }
                            >
                                <p>2</p>
                                <span>Days</span>
                            </div>
                            <div
                                className={
                                    Style.NFTDescription_box_profile_biding_box_timer_item
                                }
                            >
                                <p>22</p>
                                <span>hours</span>
                            </div>
                            <div
                                className={
                                    Style.NFTDescription_box_profile_biding_box_timer_item
                                }
                            >
                                <p>45</p>
                                <span>mins</span>
                            </div>
                            <div
                                className={
                                    Style.NFTDescription_box_profile_biding_box_timer_item
                                }
                            >
                                <p>12</p>
                                <span>secs</span>
                            </div>
                        </div>

                        <div className={Style.NFTDescription_box_profile_biding_box_price}>
                            <div
                                className={
                                    Style.NFTDescription_box_profile_biding_box_price_bid
                                }
                            >
                                <small>Current Bid</small>
                                <p>
                                    1.000 ETH <span>( ≈ $3,221.22)</span>
                                </p>
                            </div>

                            <span>[96 in stock]</span>
                        </div>

                        <div className={Style.NFTDescription_box_profile_biding_box_button}>
                            <Button icon=<FaWallet />
                                btnName="Place a bid"
                                handleClick={() => { }}
                                classStyle={Style.button}
                            />

                            <Button
                                icon=<FaPercentage />
                                btnName="Make offer"
                                handleClick={() => { }}
                                classStyle={Style.button}
                            />

                        </div>

                        <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
                            <button onClick={(e) => openTabs(e)}>Bid History</button>
                            <button onClick={(e) => openTabs(e)}>Provenance</button>
                            <button onClick={() => openOwner()}>Owner</button>
                        </div>

                        {
                            history && (
                                <div className={Style.NFTDescription_box_profile_biding_box_card}>
                                    <NFTTabs dataTab={historyArray} />
                                </div>
                            )
                        }

                        {
                            provanance && (
                                <div className={Style.NFTDescription_box_profile_biding_box_card}>
                                    <NFTTabs dataTab={provananceArray} />
                                </div>
                            )
                        }

                        {
                            owner && (
                                <div className={Style.NFTDescription_box_profile_biding_box_card}>
                                    <NFTTabs dataTab={ownerArray} icon=<MdVerified /> />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NFTDescription;