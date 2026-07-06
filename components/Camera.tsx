"use client";

import { useEffect, useRef, useState } from "react";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    startCamera();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  async function startCamera() {
    try {
      const media = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment",
        },
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = media;
      }

      setStream(media);
    } catch (err) {
      console.error(err);
      alert("Kunde inte öppna kameran.");
    }
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="rounded-xl border border-gray-700"
    />
  );
}
