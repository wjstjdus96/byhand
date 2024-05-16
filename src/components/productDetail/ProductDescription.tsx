const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="p-5">
      <h4 className="text-lg font-semibold mb-5">상품 상세설명</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
