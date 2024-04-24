import { Control, useController } from "react-hook-form";
import { IRegisterFormData } from "../../admin/register/RegisterForm";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

interface ICategoryType {
  value: string;
  name: string;
}

interface ISelectInput {
  name: any;
  label: string;
  control: Control<IRegisterFormData>;
  errorMsg?: string;
  placeholder: string;
  items: ICategoryType[];
}

const SelectInput = ({
  name,
  label,
  items,
  placeholder,
  control,
  errorMsg,
}: ISelectInput) => {
  const {
    field: { value, onChange },
  } = useController({ control, name });

  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Select value={value || ""} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem value={item.value}>{item.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errorMsg && <span className=" text-xs text-red-600">{errorMsg}</span>}
    </div>
  );
};

export default SelectInput;
