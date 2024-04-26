import Selector from "../common/form/Selector";

const SORT_TYPE = [
  {
    value: "createdAt-desc",
    name: "최신순",
  },
  {
    value: "productPrice-desc",
    name: "가격낮은순",
  },
  {
    value: "productPrice-asc",
    name: "가격높은순",
  },
];

interface ISortSelector {
  selectedSort: string;
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

const SortSelector = ({ selectedSort, setSelectedSort }: ISortSelector) => {
  return (
    <Selector
      selectItems={SORT_TYPE}
      value={selectedSort}
      onChange={setSelectedSort}
      styles="self-end"
    />
  );
};

export default SortSelector;
