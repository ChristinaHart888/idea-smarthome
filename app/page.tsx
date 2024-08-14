"use client";

import Link from "next/link";
import QRCode from "../public/wifi-qr.jpg";
import stairsBag from "../public/stairs_bag.jpg";
import Image from "next/image";
import Slide from "./slide";

export default function Home() {
    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
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
                        First Time
                    </div>
                    <div
                        style={{
                            border: "1px solid white",
                            padding: "1em 0.5em",
                            backgroundColor: "purple",
                            fontSize: "32px",

                            cursor: "pointer",
                        }}
                    >
                        Control Panel
                    </div>
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
            <Slide id="toilet" btn1Id="wifi" btn2Id="">
                <div>
                    <h1>Toilet</h1>
                    <div
                        className="content"
                        style={{
                            display: "flex",
                        }}
                    >
                        <div
                            className="vid"
                            style={{
                                minWidth: "50%",
                                backgroundColor: "#333",
                            }}
                        ></div>
                        <div
                            className="text"
                            style={{
                                paddingInline: "1em",
                            }}
                        >
                            <div
                                className="lift"
                                style={{
                                    marginBottom: "1em",
                                }}
                            >
                                <h2>Lift the lid</h2>
                                <p>
                                    The top lid should automatically be lifted
                                    up when it senses movement. If it is still
                                    down, you can try tapping the button at the
                                    bottom right of the toilet bowl with your
                                    feet. Tap the button again to lift up the
                                    seat cover.
                                </p>
                            </div>
                            <div className="flush">
                                <h2>Flush</h2>
                                <p>
                                    Hit the black button on the bottom of the
                                    toilet bowl. The lid and seat cover should
                                    automatically close and flushing should
                                    begin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        </main>
    );
}
