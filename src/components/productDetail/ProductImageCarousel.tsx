import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductImageCarousel = ({ images }: { images: string[] }) => {
  return (
    <Carousel
      className="w-full"
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
    >
      {images.map((url) => (
        <div>
          <img src={url} className="object-cover aspect-square rounded-md" />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductImageCarousel;
