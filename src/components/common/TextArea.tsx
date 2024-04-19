import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ITextArea {
  name: string;
  label: string;
  register: any;
}

const TextArea = ({ name, label, register }: ITextArea) => {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        {...register(name, { requeired: true })}
        id={name}
        className="resize-none h-[30vh]"
      />
    </div>
  );
};

export default TextArea;
