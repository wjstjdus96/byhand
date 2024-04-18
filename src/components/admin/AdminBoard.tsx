import ProductBoardHead from "../productBoard/ProductBoardHead";
import ProductBoardItem from "../productBoard/ProductBoardItem";
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
      <ProductBoardHead />
      <Separator className="my-5" />
      <div className="flex flex-col gap-3">
        {temp_admin_data.map((item) => (
          <ProductBoardItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default AdminBoard;
