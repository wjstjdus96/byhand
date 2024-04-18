import RegisterForm from "../components/admin/register/RegisterForm";
import Layout from "../layout/Layout";

function ProductRegister() {
  return (
    <Layout>
      <div className="px-[29vw] pt-20">
        <h2 className="text-xl font-bold mb-6">상품 등록</h2>
        <RegisterForm />
      </div>
    </Layout>
  );
}

export default ProductRegister;
