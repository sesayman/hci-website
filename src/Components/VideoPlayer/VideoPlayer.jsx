import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/hci-images/video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);
    const videoRef = useRef(null); // Ref for the video element

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
            if (videoRef.current) {
                videoRef.current.muted = true; // Mute the video when closing
            }
        }
    };

    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video ref={videoRef} src={video} autoPlay muted controls></video>
        </div>
    );
};

export default VideoPlayer;
