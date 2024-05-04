import { usePurchaseHistory } from "../../../hooks/myPage.ts/usePurchasHistory";
import PurchaseHistoryItem from "./PurchaseHistoryItem";

const PurchaseHistory = () => {
  const { data: historyItems } = usePurchaseHistory();

  return (
    <div>
      <h5 className="text-lg font-semibold mb-3">구매내역</h5>
      <div className="flex flex-col gap-5 p-2 ">
        {historyItems &&
          historyItems.map((item) => (
            <PurchaseHistoryItem historyItem={item} />
          ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
