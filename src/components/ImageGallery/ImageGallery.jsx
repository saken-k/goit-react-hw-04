import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {gallery.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
