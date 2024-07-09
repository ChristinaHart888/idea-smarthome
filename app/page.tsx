"use client";

import Link from "next/link";
import QRCode from "../public/wifi-qr.jpg";
import Image from "next/image";

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
                    marginBottom: "5em",
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
            <div
                id="firstTime"
                style={{
                    height: "calc(100vh - 5em)",
                    position: "relative",
                    marginBottom: "5em",
                }}
            >
                <h1>
                    For first time visitors, please watch this orientation video
                </h1>
                <video src="https://www.youtube.com/watch?v=SlPhMPnQ58k&list=RDMM&index=14"></video>
                <div
                    style={{
                        bottom: "20%",
                        left: "0%",
                        position: "absolute",
                        border: "1px solid green",
                        padding: "1em",
                        fontSize: "32px",
                        cursor: "pointer",
                    }}
                    onClick={() => scrollToId("home")}
                >
                    Back
                </div>
                <div
                    style={{
                        bottom: "20%",
                        right: "0%",
                        position: "absolute",
                        border: "1px solid green",
                        padding: "1em",
                        fontSize: "32px",
                        cursor: "pointer",
                    }}
                    onClick={() => scrollToId("toilet")}
                >
                    Next
                </div>
            </div>
            <div
                id="toilet"
                style={{
                    height: "calc(100vh - 5em)",
                    position: "relative",
                }}
            >
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
                <div
                    style={{
                        bottom: "20%",
                        left: "0%",
                        position: "absolute",
                        border: "1px solid green",
                        padding: "1em",
                        fontSize: "32px",
                        cursor: "pointer",
                    }}
                    onClick={() => scrollToId("firstTime")}
                >
                    Back
                </div>
                <div
                    style={{
                        bottom: "20%",
                        right: "0%",
                        position: "absolute",
                        border: "1px solid green",
                        padding: "1em",
                        fontSize: "32px",
                        cursor: "pointer",
                    }}
                    onClick={() => scrollToId("toilet")}
                >
                    Next
                </div>
            </div>
        </main>
    );
}
