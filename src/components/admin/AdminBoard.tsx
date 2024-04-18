import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const temp_admin_data = [
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
  {
    productId: 123123,
    sellerId: "idididi",
    productImage:
      "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004",
    productQunatity: 10,
    productPrice: 10000,
    productName: "🍄[좀더 귀한 분께~]어버이날 참송이버섯 선물세트🎁",
  },
];

const AdminBoard = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Checkbox />
        <div className="text-sm self-start pl-5 mr-auto">전체선택</div>
        <div className="text-sm self-start">선택삭제</div>
      </div>
      <Separator className="my-5" />
      <div className="flex flex-col gap-3">
        {temp_admin_data.map((item) => (
          <div className="flex h-28 gap-5 py-2">
            <Checkbox />
            <img
              src={item.productImage}
              className="object-cover w-24 rounded-sm"
            />
            <div className="flex flex-col justify-between w-full py-1">
              <span>{item.productName}</span>
              <div className="flex items-center justify-between">
                <p className="text-xs">남은수량: {item.productQunatity}개</p>
                <div className="flex gap-1">
                  <Button className="p-2 h-6 text-xs font-normal">수정</Button>
                  <Button className="p-2 h-6 text-xs font-normal">삭제</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBoard;
