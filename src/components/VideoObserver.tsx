import { useEffect } from "react";

const VideoObserver = () => {
    useEffect(() => {
        const videos = document.querySelectorAll("video");

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                const video = entry.target as HTMLVideoElement;
                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            }
        }, {
            threshold: 0.5, // Puedes ajustar esto si quieres que se active antes o después
        });

        videos.forEach((video) => observer.observe(video));

        return () => observer.disconnect();
    }, []);

    return null; // No renderiza nada visual
};

export default VideoObserver;
