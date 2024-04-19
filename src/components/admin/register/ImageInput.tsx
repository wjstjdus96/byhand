import { useState } from "react";
import { Label } from "../../ui/label";

interface IImageInput {
  label: string;
  name: string;
}

const ImageInput = ({ label, name }: IImageInput) => {
  const [showImages, setShowImages] = useState<string[]>([]);
  const [originalImages, setOriginalImages] = useState([]);

  const handleAddImage = (e: any) => {
    const imageBolbList: Blob[] = e.target.files;
    let imageUrlList: string[] = [...showImages];

    for (let i = 0; i < imageBolbList.length; i++) {
      const current = URL.createObjectURL(imageBolbList[i]);
      imageUrlList.push(current);
    }

    if (imageUrlList.length > 5) {
      imageUrlList = imageUrlList.slice(0, 5);
    }

    setShowImages(imageUrlList);
  };

  const handleRemoveImage = (e: any) => {};

  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="grid grid-cols-3 gap-1">
        {showImages &&
          showImages.map((img) => (
            <div className="">
              <img className="w-full h-40 object-cover rounded-md" src={img} />
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
          <p>+</p>
          <p className="text-xs">({showImages.length} / 5)</p>
        </label>
      </div>
    </div>
  );
};

export default ImageInput;
