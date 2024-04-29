import { SORT_TYPE } from "../../consts/data";
import Selector from "../common/form/Selector";

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
