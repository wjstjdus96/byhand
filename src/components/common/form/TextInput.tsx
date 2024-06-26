import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

interface ITextInput {
  name: string;
  type?: string;
  register: any;
  errorMsg?: string;
  label: string;
  placeholder?: string;
}

export function TextInput({
  name,
  type = "text",
  register,
  errorMsg,
  label,
  placeholder,
}: ITextInput) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...register(name, { requeired: true })}
        type={type}
        id={name}
        placeholder={placeholder}
        className="w-full"
      />
      {errorMsg && <span className=" text-xs text-red-600">{errorMsg}</span>}
    </div>
  );
}
