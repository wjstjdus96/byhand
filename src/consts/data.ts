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

export const CATEGORY_COLLECTION = [
  { type: "fashion", title: "패션이 궁금하쇼?" },
  { type: "food", title: "음식이 궁금하쇼?" },
  { type: "living", title: "리빙이 궁금하쇼?" },
  { type: "beauty", title: "뷰티가 궁금하쇼?" },
];

export const CATEGORY_TYPE_INCLUDING_TOTAL = [
  { value: "total", name: "전체" },
  ...CATEGORY_TYPE,
];
