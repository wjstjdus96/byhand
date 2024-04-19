import { useEffect, useState } from "react";
import { Label } from "../../ui/label";
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

interface IImageInput {
  label: string;
  name: string;
  setValue: any;
}

const ImageInput = ({ label, name, setValue }: IImageInput) => {
  const [showImages, setShowImages] = useState<string[]>([]);
  const [originalImages, setOriginalImages] = useState<Blob[]>([]);

  const changeToUrl = (photo: Blob) => {
    return URL.createObjectURL(photo);
  };

  const handleAddImage = (e: any) => {
    const newImages: Blob[] = e.target.files;

    if (originalImages.length + newImages.length > 5) {
      alert("최대 개수를 초과하였습니다");
      return;
    }

    setOriginalImages((prev) => [...prev, ...newImages]);
  };

  const handleRemoveImage = (idx: number) => {
    setOriginalImages((prev) => prev.filter((_, i) => i != idx));
  };

  useEffect(() => {
    setValue(name, originalImages);
    setShowImages(originalImages.map((img) => changeToUrl(img)));
  }, [originalImages]);

  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="grid grid-cols-3 gap-1">
        {showImages &&
          showImages.map((img, idx) => (
            <div className="relative">
              <img className="w-full h-40 object-cover rounded-md" src={img} />
              <FaTimes
                className=" absolute right-2 top-2 cursor-pointer"
                onClick={() => handleRemoveImage(idx)}
              />
            </div>
          ))}
        <label
          htmlFor="input-file"
          onChange={handleAddImage}
          className="h-40 w-full flex flex-col items-center justify-center border-input border-2 border-dotted rounded-md cursor-pointer"
        >
          <input
            type="file"
            id="input-file"
            multiple
            accept="image/jpg, image/jpeg, image/png"
            className="hidden"
          />
          <FaPlus />
          <p className="text-xs pt-2">({showImages.length} / 5)</p>
        </label>
      </div>
    </div>
  );
};

export default ImageInput;
