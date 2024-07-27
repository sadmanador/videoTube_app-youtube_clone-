import "./PlayVideo.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import Image from "next/image";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src="/assets/video.mp4" controls autoPlay muted></video>
      <h3>Best you channel to lear web development</h3>
      <div className="play-video-info">
        <p>152 Views &bull; 2 days ago</p>
        <div>
          <span>
            <Image src={like} alt="" />
            125
          </span>
          <span>
            <Image src={dislike} alt="" />2
          </span>
          <span>
            <Image src={share} alt="" /> Share
          </span>
          <span>
            <Image src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <Image src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to Watch More tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <Image src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam voluptatem laborum molestiae saepe, voluptatibus
              inventore deserunt illo cum autem. Quasi illo minus dignissimos?
            </p>
            <div className="comment-action">
              <Image src={like} alt="" />
              <span>244</span>
              <Image src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <Image src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam voluptatem laborum molestiae saepe, voluptatibus
              inventore deserunt illo cum autem. Quasi illo minus dignissimos?
            </p>
            <div className="comment-action">
              <Image src={like} alt="" />
              <span>244</span>
              <Image src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <Image src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam voluptatem laborum molestiae saepe, voluptatibus
              inventore deserunt illo cum autem. Quasi illo minus dignissimos?
            </p>
            <div className="comment-action">
              <Image src={like} alt="" />
              <span>244</span>
              <Image src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <Image src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam voluptatem laborum molestiae saepe, voluptatibus
              inventore deserunt illo cum autem. Quasi illo minus dignissimos?
            </p>
            <div className="comment-action">
              <Image src={like} alt="" />
              <span>244</span>
              <Image src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
