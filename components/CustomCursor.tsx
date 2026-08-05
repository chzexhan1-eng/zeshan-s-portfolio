"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseEnterLink = () => {
      if (!cursor) return;
      cursor.style.width = "70px";
      cursor.style.height = "70px";
      cursor.style.opacity = "0.85";
    };

    const onMouseLeaveLink = () => {
      if (!cursor) return;
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.opacity = "1";
    };

    const onMouseDown = () => {
      if (!cursor) return;
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
    };

    const onMouseUp = () => {
      if (!cursor) return;
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    };

    // Lerp animate
    const animate = () => {
      const { x, y } = posRef.current;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";

      // Follower lags behind
      followerPosRef.current.x += (x - followerPosRef.current.x) * 0.12;
      followerPosRef.current.y += (y - followerPosRef.current.y) * 0.12;
      follower.style.left = followerPosRef.current.x + "px";
      follower.style.top = followerPosRef.current.y + "px";

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Attach to interactive elements
    const addLinkListeners = () => {
      const links = document.querySelectorAll("a, button, [role='button'], .magnetic-btn");
      links.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    addLinkListeners();
    // Re-attach periodically to catch dynamically added elements
    const interval = setInterval(addLinkListeners, 2000);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafRef.current);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} aria-hidden="true" />
      <div id="cursor-follower" ref={followerRef} aria-hidden="true" />
    </>
  );
}
