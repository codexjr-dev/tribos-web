import { useEffect } from "react";
import { useState, useRef } from "react";
import styles from "./styles.module.css";

import PauseIcon from "../../assets/icons/pause-icon.svg";
import PlayIcon from "../../assets/icons/play-icon.svg";

const usePlayerState = ($videoPlayer) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
    speed: 1,
  });

  useEffect(() => {
    try {
      playerState.playing
        ? $videoPlayer.current.play()
        : $videoPlayer.current.pause();
    } catch (e) {
      console.log(e);
    }
  }, [$videoPlayer, playerState.playing]);

  const toggleVideoPlay = () => {
    setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  };

  const handleTimeUpdate = () => {
    const currentPercentage =
      ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
    setPlayerState({
      ...playerState,
      percentage: currentPercentage,
    });
  };

  const handleChangeVideoPercentage = (event) => {
    const currentPercentageValue = event.target.value;
    $videoPlayer.current.currentTime =
      ($videoPlayer.current.duration / 100) * currentPercentageValue;

    setPlayerState({
      ...playerState,
      percentage: currentPercentageValue,
    });
  };

  const handleChangeVideoSpeed = (event) => {
    setPlayerState({
      ...playerState,
      speed: event.target.value,
    });

    $videoPlayer.current.playbackRate = playerState.speed;
  };

  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
    handleChangeVideoSpeed,
  };
};

export const VideoPlayer = ({ source }) => {
  const $videoPlayer = useRef(null);
  const {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleChangeVideoPercentage,
    handleChangeVideoSpeed,
  } = usePlayerState($videoPlayer);

  return (
    <div className={styles.video_container}>
      <video
        src={source}
        ref={$videoPlayer}
        onTimeUpdate={handleTimeUpdate}
        crossOrigin="anonymous"
      />
      <div className={styles.controls}>
        <button onClick={toggleVideoPlay}>
          {playerState.playing ? (
            <img src={PauseIcon} alt="Pausar" />
          ) : (
            <img src={PlayIcon} alt="Reproduzir" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={playerState.percentage}
          onChange={handleChangeVideoPercentage}
        />
        <select value={playerState.speed} onChange={handleChangeVideoSpeed}>
          {[0.5, 1, 2].map((speed) => {
            return (
              <option
                key={`speedChange_${speed}`}
                value={speed}
              >{`${speed}x`}</option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
