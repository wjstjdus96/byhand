import MyPageIntro from "../components/myPage/MyPageIntro";
import PurchaseHistory from "../components/myPage/PurchaseHistory";
import Layout from "../layout/Layout";

function MyPage() {
  return (
    <Layout>
      <div className="min-h-screen px-20 py-20 flex flex-col gap-8">
        <h2 className="text-xl font-bold">마이페이지</h2>
        <MyPageIntro name={"울랄라"} />
        <PurchaseHistory />
      </div>
    </Layout>
  );
}

export default MyPage;
