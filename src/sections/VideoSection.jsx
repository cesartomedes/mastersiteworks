import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  // Build correct path for video
  const videoSrc = `${import.meta.env.BASE_URL}videos/video1.mp4`;

  // Forzar autoplay al cargar la página y al hacer scroll
  useEffect(() => {
    // Intentar reproducir inmediatamente cuando el video esté cargado
    if (isLoaded && videoRef.current && !hasAutoPlayed) {
      const playVideo = () => {
        videoRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasAutoPlayed(true);
            console.log("Video started playing automatically");
          })
          .catch((e) => {
            console.log("Autoplay prevented, waiting for user interaction:", e);
            // En mobile, esperar a que el usuario interactúe
            const handleUserInteraction = () => {
              if (!hasAutoPlayed && videoRef.current) {
                videoRef.current.play()
                  .then(() => {
                    setIsPlaying(true);
                    setHasAutoPlayed(true);
                    console.log("Video started after user interaction");
                  })
                  .catch(err => console.log("Still blocked:", err));
              }
              document.removeEventListener('click', handleUserInteraction);
              document.removeEventListener('touchstart', handleUserInteraction);
            };
            document.addEventListener('click', handleUserInteraction);
            document.addEventListener('touchstart', handleUserInteraction);
          });
      };
      playVideo();
    }
  }, [isLoaded, hasAutoPlayed]);

  // Detect when video section is in view for autoplay (fallback)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoPlayed && videoRef.current && isLoaded) {
          videoRef.current.play()
            .then(() => {
              setIsPlaying(true);
              setHasAutoPlayed(true);
              console.log("Video started by scroll");
            })
            .catch((e) => console.log("Scroll autoplay prevented:", e));
        }
      },
      { threshold: 0.2 } // Reducido a 20% para activar más fácil
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isLoaded, hasAutoPlayed]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((e) => console.log("Play prevented:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden scroll-mt-20"
      style={{ backgroundColor: "#0a1a0f" }}
    >
      {/* Cinematic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a1f] via-[#0a1a0f] to-[#1a3a1f] opacity-90"></div>

      {/* Spotlight effect - simulated cinema lighting */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-[#314528]/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/2 bg-gradient-to-t from-[#314528]/30 to-transparent blur-2xl"></div>
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-[#314528]/40 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Video container with cinematic vignette effect */}
      <div className="relative w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full max-h-[90vh] object-contain relative z-10 rounded-lg shadow-2xl"
          loop
          muted={isMuted}
          playsInline
          controls={false}
          preload="auto"
          onLoadedData={() => setIsLoaded(true)}
          poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video element.
        </video>

        {/* Indicador visual de que el video está listo (opcional) */}
        {!hasAutoPlayed && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 animate-pulse">
              <FaPlay className="text-white text-2xl" />
            </div>
          </div>
        )}

        {/* Cinematic vignette effect (darker edges) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 rounded-lg pointer-events-none"></div>

        {/* Subtle overlay for better control visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>

        {/* Video controls - Cinematic style */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/70 backdrop-blur-lg rounded-full px-6 py-3 z-20 hover:bg-[#314528]/80 transition-all duration-300 border border-white/10 shadow-2xl">
          <button
            onClick={togglePlay}
            className="text-white hover:text-[#314528] transition duration-300 transform hover:scale-110"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
          <button
            onClick={toggleMute}
            className="text-white hover:text-[#314528] transition duration-300 transform hover:scale-110"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#314528] to-transparent"></div>
    </section>
  );
};

export default VideoSection;