export const convertTimestamp = (createdAt: number) => {
  const time = new Date(createdAt * 1000);
  const year = time.getFullYear();
  const month = ("0" + (time.getMonth() + 1)).slice(-2);
  const day = ("0" + (time.getDay() + 1)).slice(-2);
  const hour = ("0" + time.getHours()).slice(-2);
  const minute = ("0" + time.getMinutes()).slice(-2);
  const second = ("0" + time.getSeconds()).slice(-2);

  return `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
};
