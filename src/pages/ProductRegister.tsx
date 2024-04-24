import { useParams } from "react-router-dom";
import RegisterForm from "../components/admin/register/RegisterForm";
import Layout from "../layout/Layout";
import EditForm from "../components/admin/register/EditForm";

function ProductRegister() {
  const { productId: isEdit } = useParams();

  return (
    <Layout>
      <div className="px-[29vw] py-20">
        <h2 className="text-xl font-bold mb-6">
          {isEdit ? "상품 수정" : "상품 등록"}
        </h2>
        {isEdit ? <EditForm isEdit={isEdit} /> : <RegisterForm />}
      </div>
    </Layout>
  );
}

export default ProductRegister;
