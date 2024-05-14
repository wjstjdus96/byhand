export const CATEGORY_TYPE = [
  { value: "food", name: "식품" },
  {
    value: "fashion",
    name: "패션",
  },
  {
    value: "living",
    name: "리빙",
  },
  {
    value: "beauty",
    name: "뷰티",
  },
  {
    value: "etc",
    name: "기타",
  },
];

export const HOME_COLLECTIONS = [
  { type: "fashion", title: "Fashion - 의류" },
  { type: "food", title: "Food - 식품" },
  { type: "living", title: "Living - 홈리빙" },
  { type: "beauty", title: "Beauty - 뷰티" },
];

export const CATEGORY_TYPE_INCLUDING_TOTAL = [
  { value: "total", name: "전체" },
  ...CATEGORY_TYPE,
];

export const SORT_TYPE = [
  {
    value: "createdAt-desc",
    name: "최신순",
  },

  {
    value: "productPrice-asc",
    name: "가격낮은순",
  },
  {
    value: "productPrice-desc",
    name: "가격높은순",
  },
];
