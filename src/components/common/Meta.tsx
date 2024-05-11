import { Helmet } from "react-helmet-async";
import { IProductResData } from "../../types/product";

interface IMeta {
  page: "home" | "products" | "detail";
  product?: IProductResData;
}

const Meta = ({ page, product }: IMeta) => {
  const title = {
    home: "바이핸드-홈",
    products: "바이핸드-전체상품",
    detail: `바이핸드-상품정보`,
  }[page];
  const description = {
    home: "핸드메이드 상품 이커머스 플랫폼 바이핸드입니다",
    products: "상품을 찾아보세요",
    detail: `${product?.productName}`,
  }[page];
  const url = {
    home: "https://byhand-wjstjdus96s-projects.vercel.app/",
    products: "https://byhand-wjstjdus96s-projects.vercel.app/products",
    detail: `https://byhand-wjstjdus96s-projects.vercel.app/products/${product?.id}`,
  }[page];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      {/* <meta property="og:image" content={imageUrl} /> */}
    </Helmet>
  );
};

export default Meta;
