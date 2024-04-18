import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface ISelectAuthority {
  control: any;
}

const SelectAuthority = ({ control }: ISelectAuthority) => {
  return (
    <div>
      <span>어떤 권한으로 가입하시겠습니까?</span>
      <Controller
        control={control}
        name="type"
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onValueChange={onChange} className="flex">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="seller" id="seller" />
              <Label htmlFor="seller">판매자</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="buyer" id="buyer" />
              <Label htmlFor="buyer">구매자 </Label>
            </div>
          </RadioGroup>
        )}
      />
    </div>
  );
};

export default SelectAuthority;
