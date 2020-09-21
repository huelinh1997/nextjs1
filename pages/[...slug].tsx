import { useRouter } from "next/router";
import Link from "next/link";

function User() {
  const router = useRouter();
  console.log("router:", router);

  console.log(router.query);

  return <>Slug</>;
}

export default User;
