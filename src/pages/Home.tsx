import Banner from "../components/home/Banner";
import CategoryCollection from "../components/home/categoryCollection/CategoryCollection";
import Layout from "../layout/Layout";

function Home() {
  return (
    <Layout page="home">
      <Banner />
      <CategoryCollection />
    </Layout>
  );
}

export default Home;
