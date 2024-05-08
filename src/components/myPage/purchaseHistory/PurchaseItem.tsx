import { useOrderCancel } from "../../../hooks/myPage.ts/useOrderCancel";
import { useProductDetail } from "../../../hooks/productDetails.tsx/useProductDetail";
import { IOrderedProduct } from "../../../types/order";
import AlertDialogBox from "../../common/AlertDialogBox";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

interface IPurchaseItem {
  historyItems: IOrderedProduct[];
  itemIdx: number;
  historyId: string;
}

const PurchaseItem = ({ itemIdx, historyId, historyItems }: IPurchaseItem) => {
  const { data: productDetail } = useProductDetail({
    productId: historyItems[itemIdx].orderProductId,
  });
  const { onClickCancelOrder } = useOrderCancel({
    historyItems,
    historyId,
    itemIdx,
  });

  return (
    <div>
      {productDetail && (
        <>
          <div className="flex gap-3 items-center">
            <img
              src={productDetail.productThumbnail}
              className="object-cover w-20 rounded-sm"
            />
            <div className="flex flex-col  gap-1 w-full py-1">
              <Badge
                variant={`${
                  historyItems[itemIdx].orderStatus != "주문취소"
                    ? "outline"
                    : "default"
                }`}
                className="text-[10px] w-fit"
              >
                {historyItems[itemIdx].orderStatus}
              </Badge>
              <span className="text-sm">{productDetail.productName}</span>
              <span className="text-xs">
                {historyItems[itemIdx].orderQuantity} 개 주문
              </span>
            </div>
            {historyItems[itemIdx].orderStatus != "주문취소" && (
              <AlertDialogBox
                title="주문을 취소하시겠습니까?"
                description="한번 취소하시면 되돌릴 수 없습니다"
                actionName="주문 취소"
                onClickAction={() => onClickCancelOrder()}
              >
                <Button variant="outline" className="text-xs p-2 h-8">
                  주문 취소
                </Button>
              </AlertDialogBox>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PurchaseItem;
