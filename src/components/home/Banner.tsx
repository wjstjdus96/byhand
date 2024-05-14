import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";

const Banner = () => {
  return (
    <div className="flex gap-5 mt-24 mx-20 justify-between">
      <div className="relative">
        <img src={banner1} className="rounded-lg h-full w-full object-cover" />
        <span className="absolute bottom-20 left-10 text-2xl font-bold ">
          작지만 큰 존재감, 키링의 세계
        </span>
        <span className="absolute bottom-12 left-10 text-lg ">
          각양각색의 사랑스러움의 키링을 만나 보세요.
        </span>
      </div>
      <div className="relative">
        <img src={banner2} className="rounded-lg h-full w-full object-cover" />

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
