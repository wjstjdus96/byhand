import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { useState } from "react";
import { IAddressInfo } from "../../../pages/Payment";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";
import AddressForm from "./AddressForm";

interface IAddressModal {
  children: JSX.Element;
  addressInfo: IAddressInfo | undefined;
  setAddressInfo: React.Dispatch<
    React.SetStateAction<IAddressInfo | undefined>
  >;
}

const AddressModal = ({
  children,
  setAddressInfo,
  addressInfo,
}: IAddressModal) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-between">
            <AlertDialogTitle>배송 정보</AlertDialogTitle>
            <IoClose
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <AlertDialogDescription>
            배송 정보를 입력해주세요
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AddressForm
          setIsOpen={setIsOpen}
          addressInfo={addressInfo}
          setAddressInfo={setAddressInfo}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddressModal;
