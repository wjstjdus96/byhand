interface IMyPageIntro {
  name: string;
}

const MyPageIntro = ({ name }: IMyPageIntro) => {
  return (
    <div>
      <h5 className="text-lg">기본정보</h5>
      <div>{name}님</div>
    </div>
  );
};

export default MyPageIntro;
