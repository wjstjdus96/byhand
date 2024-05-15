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
    <div className="w-1/4 flex">
      <Input
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="검색어를 입력하세요"
      />
    </div>
  );
};

export default SearchBar;
