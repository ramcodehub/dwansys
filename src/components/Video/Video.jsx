import { useRef, useState } from 'react';
import Video from '../../assets/videos/DwansysLandingPageVideo.mp4';
import './Video.css';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="position-relative d-inline-block w-100 video">
      <video
        ref={videoRef}
        width="100%"
        src={Video}
        onClick={handlePause}
        className="rounded"
        muted
      />

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="btn position-absolute top-50 start-50 translate-middle border-0 shadow-none"
        >
          <i className="bi bi-play-circle text-white"></i>
        </button>
      )}
    </div>
  );
}
