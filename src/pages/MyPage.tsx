import BasicUserInfoSection from "../components/myPage/basicUserInfoSection/BasicUserInfoSection";
import PurchaseHistory from "../components/myPage/purchaseHistory/PurchaseHistory";
import { Separator } from "../components/ui/separator";
import Layout from "../layout/Layout";

function MyPage() {
  return (
    <Layout>
      <div className="min-h-screen mx-80 my-20 flex flex-col gap-8">
        <h2 className="text-xl font-bold">마이페이지</h2>
        <BasicUserInfoSection />
        <Separator />
        <PurchaseHistory />
      </div>
    </Layout>
  );
}

export default MyPage;
