import { useEffect, useState } from "react";
import Selector from "../common/form/Selector";

const SORT_TYPE = [
  {
    value: "newest",
    name: "최신순",
  },
  {
    value: "lowest",
    name: "가격낮은순",
  },
  {
    value: "highest",
    name: "가격높은순",
  },
];

const SortSelector = () => {
  const [selected, setSelected] = useState("newest");

  return (
    <Selector
      selectItems={SORT_TYPE}
      value={selected}
      onChange={setSelected}
      styles="self-end"
    />
  );
};

export default SortSelector;
