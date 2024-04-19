import { Label } from "../../ui/label";

interface IImageInput {
  label: string;
  name: string;
}

const ImageInput = ({ label, name }: IImageInput) => {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      <div className="h-40 w-40 flex flex-col items-center justify-center border-input border-2 border-dotted rounded-md">
        <p>+</p>
        <div>0개</div>
      </div>
      <div></div>
    </div>
  );
};

export default ImageInput;
