"use client";
import { useState, useEffect } from "react";

const getOrientation = () => {
    return typeof window !== "undefined"
        ? window.screen.orientation.type
        : "portrait-secondary";
};

const useScreenOrientation = () => {
    const [orientation, setOrientation] = useState(getOrientation());

    const updateOrientation = (event: Event) => {
        setOrientation(getOrientation());
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("orientationchange", updateOrientation);
            return () => {
                window.removeEventListener(
                    "orientationchange",
                    updateOrientation
                );
            };
        }
    }, []);

    return orientation;
};

export default useScreenOrientation;
