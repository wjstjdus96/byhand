import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { UseFormSetValue } from "react-hook-form";
import { IAddressFormData } from "../../components/payment/addressInfoSection/AddressForm";

export const useAddress = ({
  setValue,
}: {
  setValue: UseFormSetValue<IAddressFormData>;
}) => {
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setValue("deliveryPostcode", fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return { handleClick };
};
