import AdminBoard from "../components/admin/AdminBoard";
import { Button } from "../components/ui/button";
import Layout from "../layout/Layout";

function ProductManagement() {
  return (
    <Layout>
      <div className="px-[10vw] pt-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xl font-bold">내가 판매 중인 상품</h2>
          <Button>상품 등록하기</Button>
        </div>
        <AdminBoard />
      </div>
    </Layout>
  );
}

export default ProductManagement;
