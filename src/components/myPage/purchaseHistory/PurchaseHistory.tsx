import { usePurchaseHistory } from "../../../hooks/myPage.ts/usePurchasHistory";
import Loading from "../../common/Loading";
import PurchaseHistoryItem from "./PurchaseHistoryItem";

const PurchaseHistory = () => {
  const { data: historyItems, isLoading } = usePurchaseHistory();

  return (
    <div>
      <h5 className="text-lg font-semibold mb-3">구매내역</h5>
      <div className="flex flex-col gap-5 p-2 ">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {historyItems && historyItems.length != 0 ? (
              historyItems.map((item) => (
                <PurchaseHistoryItem historyItem={item} />
              ))
            ) : (
              <span className="py-20 text-center">주문 내역이 없습니다</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
