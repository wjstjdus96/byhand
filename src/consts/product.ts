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
  { type: "fashion", title: "패션이 궁금하쇼?" },
  { type: "food", title: "음식이 궁금하쇼?" },
  { type: "living", title: "리빙이 궁금하쇼?" },
  { type: "beauty", title: "뷰티가 궁금하쇼?" },
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
