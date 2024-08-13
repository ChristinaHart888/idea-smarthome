import React, { ReactNode } from "react";

interface slideProps {
    children: ReactNode;
    id: string;
    btn1Txt?: string;
    btn1Id: string;
    btn2Txt?: string;
    btn2Id: string;
}

export default function Slide({
    children,
    id,
    btn1Txt,
    btn2Txt,
    btn1Id,
    btn2Id,
}: slideProps) {
    const scrollToId = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    };
    return (
        <div
            id={id}
            style={{
                height: "calc(100vh - 4em)",
                position: "relative",
            }}
        >
            {children}
            <div
                style={{
                    bottom: "10%",
                    left: "0%",
                    position: "absolute",
                    border: "1px solid green",
                    padding: "1em",
                    fontSize: "32px",
                    cursor: "pointer",
                }}
                onClick={() => {
                    scrollToId(btn1Id);
                }}
            >
                {btn1Txt ? btn1Txt : "Back"}
            </div>
            <div
                style={{
                    bottom: "10%",
                    right: "0%",
                    position: "absolute",
                    border: "1px solid green",
                    padding: "1em",
                    fontSize: "32px",
                    cursor: "pointer",
                }}
                onClick={() => {
                    scrollToId(btn2Id);
                }}
            >
                {btn2Txt ? btn2Txt : "Next"}
            </div>
        </div>
    );
}
