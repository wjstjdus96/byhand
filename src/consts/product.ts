export const CATEGORY_TYPE = [
  {
    value: "fashion",
    name: "패션",
  },
  { value: "food", name: "식품" },

  {
    value: "living",
    name: "홈리빙",
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
  { type: "fashion", title: "다양한 스타일의 의류와 액세서리를 만나보세요!" },
  { type: "food", title: "건강하고 맛있는 식품을 즐겨보세요!" },
  {
    type: "living",
    title: "편안하고 스타일리시한 홈리빙 아이템을 만나보세요!",
  },
  { type: "beauty", title: "아름다움을 위한 다양한 뷰티 제품을 만나보세요!" },
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
