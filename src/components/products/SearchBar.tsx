import { ChangeEvent } from "react";
import { Input } from "../ui/input";

interface ISearchBar {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ keyword, setKeyword }: ISearchBar) => {
  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="w-1/3 flex">
      <Input value={keyword} onChange={onChangeKeyword} />
    </div>
  );
};

export default SearchBar;
