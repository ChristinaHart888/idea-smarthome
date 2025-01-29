"use client";

import Link from "next/link";
import QRCode from "../public/wifi-qr.jpg";
import stairsBag from "../public/stairs_bag.jpg";
import Image from "next/image";
import ToiletBtn from "../public/toilet_btn.jpg";
import ToiletRemote from "../public/Flush.png";
import Slide from "./slide";
import useScreenOrientation from "./useOrientation";
import lnyPic from "../public/lny_2025_hero_banner_image.webp";
import { useEffect, useState } from "react";

export default function Home() {
    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
    const orientation = useScreenOrientation();
    const [isPortrait, setIsPortrait] = useState<boolean>();

    useEffect(() => {
        setIsPortrait(
            orientation === "portrait-primary" ||
                orientation === "portrait-secondary"
        );
    }, [orientation]);

    return (
        <main
            style={{
                padding: "5em",
                paddingBottom: "0",
            }}
        >
            <div
                id="home"
                style={{
                    height: "calc(100vh - 5em)",
                    position: "relative",
                }}
            >
                <h1
                    style={{
                        color: "white",
                        fontSize: "111px",
                        fontFamily: "Helvetica",
                        marginBottom: "1em",
                    }}
                >
                    Welcome to Chua Smart Home Residence
                </h1>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <div
                        style={{
                            border: "1px solid white",
                            padding: "1em 0.5em",
                            marginRight: "5em",
                            fontSize: "32px",
                            backgroundColor: "purple",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            scrollToId("firstTime");
                        }}
                    >
                        Start Tour
                    </div>
                    {/* <div
                        style={{
                            border: "1px solid white",
                            padding: "1em 0.5em",
                            backgroundColor: "purple",
                            fontSize: "32px",

                            cursor: "pointer",
                        }}
                    >
                        Control Panel
                    </div> */}
                </div>
            </div>
            <Slide id="firstTime" btn1Id="home" btn2Id="wifi">
                <h1>You may place your bags along the stairs.</h1>
                <Image
                    src={stairsBag}
                    width={920}
                    alt="Image of bags on stairs"
                    style={{
                        maxHeight: "69%",
                    }}
                ></Image>
            </Slide>
            <Slide id="wifi" btn1Id="firstTime" btn2Id="toilet">
                <h1
                    style={{
                        marginBottom: "0.5em",
                    }}
                >
                    Wifi
                </h1>
                <div
                    className="tutorial"
                    style={{
                        display: "flex",
                    }}
                >
                    <div className="qrCode">
                        <Image
                            src={QRCode}
                            height={400}
                            width={400}
                            alt="Qr code "
                        ></Image>
                    </div>
                    <div
                        className="wifiDetails"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            backgroundColor: "#333",
                            flexGrow: 1,
                            padding: "1em",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "42px",
                                marginBottom: "1em",
                            }}
                        >
                            Wifi Details
                        </h3>
                        <span
                            style={{
                                fontSize: "32px",
                                marginBottom: "1em",
                            }}
                        >
                            SSID: ideaHomeGuest
                        </span>
                        <span
                            style={{
                                fontSize: "32px",
                            }}
                        >
                            Password: 97796996
                        </span>
                    </div>
                </div>
            </Slide>
            <Slide id="toilet" btn1Id="wifi" btn2Id="remote">
                <div>
                    <h1>How to use the toilet</h1>
                    <div
                        className="content"
                        style={{
                            display: "flex",
                            flexDirection: isPortrait ? "column" : "row",
                        }}
                    >
                        <div
                            className="bowl"
                            style={{
                                display: "flex",
                                width: isPortrait ? "100%" : "50%",
                                flexDirection: "column",
                            }}
                        >
                            <h2>Button</h2>
                            <div
                                className="instructions"
                                style={{
                                    display: "flex",
                                }}
                            >
                                <div
                                    className="vid"
                                    style={{
                                        maxWidth: "40%",
                                        backgroundColor: "#333",
                                        minWidth: "fit-content",
                                    }}
                                >
                                    <Image
                                        src={ToiletBtn}
                                        alt="Image of toilet"
                                        style={{
                                            maxHeight: isPortrait
                                                ? "300px"
                                                : "400px",
                                            maxWidth: "100%",
                                            width: "auto",
                                        }}
                                    ></Image>
                                </div>
                                <div
                                    className="text"
                                    style={{
                                        paddingInline: "1em",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <div
                                        className="lift"
                                        style={{
                                            height: "50%",
                                        }}
                                    >
                                        <h2>Lift the seat cover</h2>
                                        <p>
                                            Hit the circled button with your
                                            feet
                                        </p>
                                    </div>
                                    <div className="flush">
                                        <h2>Flush</h2>
                                        <p>
                                            Hit the circled button on the bottom
                                            of the toilet bowl until the lid
                                            closes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="remote"
                            style={{
                                width: isPortrait ? "100%" : "50%",
                                paddingLeft: "1em",
                            }}
                        >
                            <h2>Remote</h2>
                            <div className="img">
                                <Image
                                    src={ToiletRemote}
                                    alt="Img of remote"
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }}
                                ></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide id="remote" btn1Id="toilet" btn2Id="">
                <div>
                    <h1>Feel free to grab some drinks from the fridge</h1>
                    <Image
                        src={lnyPic}
                        alt="Happy Lunar New Year"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    ></Image>
                </div>
            </Slide>
        </main>
    );
}
