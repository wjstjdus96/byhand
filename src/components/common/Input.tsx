import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ICustomInput {
  name: string;
  type: string;
  register: any;
  errorMsg?: string;
}

export function CustomInput({ name, type, register, errorMsg }: ICustomInput) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="email">{name.toUpperCase()}</Label>
      <Input
        {...register(name, { requeired: true })}
        type={type}
        id="email"
        className="w-full"
      />
      {errorMsg && <span className=" text-xs text-red-600">{errorMsg}</span>}
    </div>
  );
}
