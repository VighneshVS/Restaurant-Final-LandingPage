import { useRef, useState } from "react";
import resVideo from "../assets/meal.mp4";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./video.css";

const video = () => {
  const [videoState, setVideoState] = useState(false);
  const vidRef = useRef();
  const secRef = useRef();

  return (
    <article className="videoContainer">
      <video
        ref={vidRef}
        src={resVideo}
        type="video/mp4"
        muted
        loop
        controls={false}
        onMouseEnter={() => secRef.current.classList.remove("hide")}
      />
      <section
        ref={secRef}
        className="video-overlay hide"
        onMouseLeave={() => secRef.current.classList.add("hide")}
      >
        <div
          className="icon-container"
          onClick={() => {
            setVideoState(!videoState);
            videoState ? vidRef.current.pause() : vidRef.current.play();
          }}
        >
          {!videoState ? (
            <BsFillPlayFill color="#fff" fontSize={30} />
          ) : (
            <BsPauseFill color="#fff" fontSize={30} />
          )}
        </div>
      </section>
    </article>
  );
export default video;
};
