import "./_postCard.scss";
import imagePost from "../../assets/images/image-post.jpg";
import iconFacebook from "../../assets/images/facebook.svg"
import iconDiscord from "../../assets/images/discord.svg"
import iconGithub from "../../assets/images/github.svg"
import iconLinkedink from "../../assets/images/youtube.svg"
import iconYoutube from "../../assets/images/linkedin.svg"

export default function PostCard() {
  return (
    <div className="box">
      <div className="container">
        <div className="info">
          <h1>Technological Innovation: Shaping the Future</h1>
          <div className="content">
            <p>
              Discover how the latest technological trends are reshaping our
              world. Explore incredible advancements and their impact on
              society. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nemo, quos?
            </p>
          </div>
        </div>
        <img src={imagePost} alt="" />
      </div>
      <div className="medias">
        <ul>
        <li><img src={iconFacebook} alt="" /></li>
        <li><img src={iconDiscord} alt="" /></li>
        <li><img src={iconGithub} alt="" /></li>
        <li><img src={iconLinkedink} alt="" /></li>
        <li><img src={iconYoutube} alt="" /></li>
        </ul>
      </div>
    </div>
  );
}
