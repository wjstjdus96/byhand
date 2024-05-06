import { IOrderResData } from "../../../hooks/payment/useAddOrder";
import { convertPriceUnit } from "../../../utils/convertPriceUnit";
import { convertTimestamp } from "../../../utils/convertTimestamp";
import { Separator } from "../../ui/separator";
import PurchaseItem from "./PurchaseItem";

interface IPurchaseHistoryItem {
  historyItem: IOrderResData;
}

const PurchaseHistoryItem = ({ historyItem }: IPurchaseHistoryItem) => {
  return (
    <div className="flex flex-col gap-3 bg-slate-50 p-5 rounded-lg">
      <div className="flex justify-between">
        <p className="text-sm">
          {convertTimestamp(historyItem.orderedAt.seconds)}
        </p>
        <span className=" text-sm">
          총 주문 금액: {convertPriceUnit(historyItem.purchaseAmount)} 원
        </span>
      </div>
      <Separator />
      {historyItem.orderedProducts.map((_, idx) => (
        <PurchaseItem
          historyItems={historyItem.orderedProducts}
          historyId={historyItem.purchaseId}
          itemIdx={idx}
        />
      ))}
    </div>
  );
};

export default PurchaseHistoryItem;
