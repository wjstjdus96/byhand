import { Controller } from "react-hook-form";
import { Label } from "../../ui/label";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";

interface ISelectAuthority {
  control: any;
  errorMsg?: string;
}

const SelectAuthority = ({ control, errorMsg }: ISelectAuthority) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className=" text-sm mb-1.5">어떤 권한으로 가입하시겠습니까?</span>
      <Controller
        control={control}
        name="authority"
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
      {errorMsg && <span className=" text-xs text-red-600">{errorMsg}</span>}
    </div>
  );
};

export default SelectAuthority;
