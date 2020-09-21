import React, { useMemo, useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/router";

const User = () => {
  console.log("render lai khi doi state");
  useMemo(() => {
    console.log("render 1 lan, ko render lai khi doi state");
  }, []);

  const [user, setUser] = useState({
    firstname: "linh",
    lastname: "nguyen hue",
  });
  const router = useRouter()

  // c1: ko toi uu
  //const fullname = user.firstname + " " + user.lastname;
  // neu ko dung useMemo, mỗi khi render, fullname sẽ được tính toán lại ko cần thiết
  // => sử dụng useMemo để cactch lại kết quả tính, chỉ khi biến truyền vào thay đôi thì mới tính lại => c2
  //c2 useMemo
  const fullname = useMemo(() => {
    // useMemo nhan vao func, func return ve gi thi useMemo return ve cai do
    return user.firstname + " " + user.lastname;
  }, [user]);

  // ***  KHÔNG ĐƯỢC LẠM DỤNG useMemo, chỉ dc dùng khi phải tính toán phức tạp, néu tính toán thừa ảnh hưởng đến hiệu suất thì ta mới nên dùng đến
  return (
    <>
      {fullname}
      <p>Hello</p>
      <Button />
      useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])

    </>
  );
};

export async function getStaticPaths() {
  return {};
}

export default User;
