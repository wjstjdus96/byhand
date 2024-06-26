import banner1 from "../../assets/banner1.png";
import banner1wp from "../../assets/banner1_wp.webp";
import banner2 from "../../assets/banner2.png";
import banner2wp from "../../assets/banner2_wp.webp";

const Banner = () => {
  return (
    <div className="flex gap-5 mt-24 mx-20 justify-between">
      <div className="relative">
        <picture>
          <source srcSet={banner1wp} type="image/webp" />
          <source srcSet={banner1} type="image/png" />
          <img
            src={banner1}
            className="rounded-lg h-full w-full object-cover"
            alt="배너이미지1"
          />
        </picture>
        <span className="absolute bottom-20 left-10 text-2xl font-bold ">
          작지만 큰 존재감, 키링의 세계
        </span>
        <span className="absolute bottom-12 left-10 text-lg ">
          각양각색의 사랑스러움의 키링을 만나 보세요.
        </span>
      </div>
      <div className="relative">
        <picture>
          <source srcSet={banner2wp} type="image/webp" />
          <source srcSet={banner2} type="image/png" />
          <img
            src={banner2}
            className="rounded-lg h-full w-full object-cover"
            alt="배너이미지2"
          />
        </picture>
        <span className="absolute bottom-20 left-10 text-2xl font-bold">
          편리하고 실용적인 작품집
        </span>
        <span className="absolute bottom-12 left-10 text-lg">
          일상에서 편리하고 실용적인 작품들을 모았어요.
        </span>
      </div>
    </div>
  );
};

export default Banner;
