import CollectionMoreBtn from "./CollectionMoreBtn";

interface ICollection {
  title: string;
  children: React.ReactNode;
  category: string;
}

const Collection = ({ children, title, category }: ICollection) => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <CollectionMoreBtn category={category} />
      </div>
      <div className="grid grid-cols-6 gap-3">{children}</div>
    </div>
  );
};

export default Collection;
