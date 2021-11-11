import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from './Loading_final_2.json';

export default function Waiting() {
  return (
    <Player
      autoplay={true}
      loop={true}
      controls={true}
      src={animationData}
      style={{ height: "80px", width: "80px" }}
    ></Player>
  )
}

