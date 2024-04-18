import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ICustomInput {
  name: string;
  type: string;
}

export function CustomInput({ name, type }: ICustomInput) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">{name}</Label>
      <Input type={type} id="email" />
    </div>
  );
}
