interface IPaymentSection {
  children: React.ReactNode;
  sectionTitle: string;
}

const PaymentSection = ({ children, sectionTitle }: IPaymentSection) => {
  return (
    <div className=" bg-slate-100 py-5 px-6 rounded-sm">
      <h3 className=" text-lg font-semibold mb-5">{sectionTitle}</h3>
      <div>{children}</div>
    </div>
  );
};

export default PaymentSection;
