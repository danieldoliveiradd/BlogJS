import "./_postCard.scss";
import imagePost from "../../assets/images/image-post.jpg";

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
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </div>
    </div>
  );
}
