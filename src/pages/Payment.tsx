import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";

const Payment = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <Layout>
      <div className="px-[20vw] py-20 min-h-[75vh]"></div>
    </Layout>
  );
};

export default Payment;
