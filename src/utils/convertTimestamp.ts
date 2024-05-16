export const convertTimestamp = (createdAt: any) => {
  const time = createdAt;
  const year = time.getFullYear();
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const day = time.getDate().toString().padStart(2, "0");
  const hour = ("0" + time.getHours()).slice(-2);
  const minute = ("0" + time.getMinutes()).slice(-2);
  const second = ("0" + time.getSeconds()).slice(-2);

  return `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;
};
