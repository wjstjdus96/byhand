import { useEffect } from "react";
import { getProduct } from "../../../api/product";
import { getSessionItem } from "../../../utils/handleSession";
import ProductBoardHead from "../../common/productBoard/ProductBoardHead";
import ProductBoardItem from "../../common/productBoard/ProductBoardItem";
import { Separator } from "../../ui/separator";
import { useQuery } from "@tanstack/react-query";

const AdminBoard = () => {
  const uid = getSessionItem("userId");
  const { isLoading, data } = useQuery({
    queryKey: ["sellProduct", uid],
    queryFn: () => getProduct(uid),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <ProductBoardHead totLength={data?.length} />
      <Separator className="my-5" />
      <div className="flex flex-col gap-3">
        {data &&
          data.map((item) => (
            <ProductBoardItem item={item} isSellerPage={true} />
          ))}
      </div>
    </div>
  );
};

export default AdminBoard;
