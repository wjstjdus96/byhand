import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ICustomInput {
  name: string;
  type: string;
  register: any;
}

export function CustomInput({ name, type, register }: ICustomInput) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{name.toUpperCase()}</Label>
      <Input {...register(name, { requeired: true })} type={type} id="email" />
    </div>
  );
}
