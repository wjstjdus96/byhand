import { useNavigate } from "react-router-dom";
import AdminBoard from "../components/admin/board/AdminBoard";
import { Button } from "../components/ui/button";
import Layout from "../layout/Layout";

function ProductManagement() {
  const navigate = useNavigate();
  const onClickRegister = () => {
    navigate("register");
  };

  return (
    <Layout>
      <div className="px-[20vw] py-20 min-h-[75vh]">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-bold">내가 판매 중인 상품</h2>
          <Button onClick={onClickRegister}>상품 등록하기</Button>
        </div>
        <AdminBoard />
      </div>
    </Layout>
  );
}

export default ProductManagement;
