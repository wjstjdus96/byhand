import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

interface ISelectorType {
  value: string;
  name: string;
}

interface ISelector {
  label?: string;
  selectItems: ISelectorType[];
  value: string;
  onChange: (...event: any[]) => void;
  errorMsg?: string;
  placeholder?: string;
  styles: string;
}

const Selector = ({
  label,
  selectItems,
  onChange,
  value,
  errorMsg,
  placeholder,
  styles,
}: ISelector) => {
  return (
    <div className={styles}>
      {label && <Label>{label}</Label>}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selectItems.map((item) => (
              <SelectItem value={item.value}>{item.name}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {errorMsg && <span className=" text-xs text-red-600">{errorMsg}</span>}
    </div>
  );
};

export default Selector;
