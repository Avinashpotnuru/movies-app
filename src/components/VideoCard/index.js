"use client";

//third party package
import ReactPlayer from "react-player";

const VideoCard = ({ videos }) => {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "230",
    width: "400",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      {videos?.key && (
        <ReactPlayer
          controls={true}
          height={230}
          width={350}
          playing={false}
          url={`https://youtu.be/${videos?.key}`}
        />
      )}
    </div>
  );
};

export default VideoCard;
