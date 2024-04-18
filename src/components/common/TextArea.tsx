import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ITextArea {
  name: string;
  label: string;
}

const TextArea = ({ name, label }: ITextArea) => {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Textarea id={name} className="resize-none h-[30vh]" />
    </div>
  );
};

export default TextArea;
