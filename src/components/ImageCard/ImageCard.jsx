import css from "./ImageCard.module.css";
import { FaHeart } from "react-icons/fa";

const ImageCard = ({ photo, onImageClick }) => {
  return (
    <div className={css.imageBox}>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        className={css.image}
        onClick={() => onImageClick(photo.urls.regular)}
      />
      <div className={css.about}>
        <p className={css.author}>{photo.user.name}</p>
        <p className={css.likes}>
          <FaHeart size={12} />
          {photo.likes}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
