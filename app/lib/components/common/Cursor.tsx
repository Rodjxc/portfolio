"use client";

import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "mouse-follower/dist/mouse-follower.min.css";
import "./cursor.css";

export const Cursor = () => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.6,
      skewingText: 0.1,
    });

    return () => {
      cursor.destroy();
    };
  }, []);

  return null;
};
