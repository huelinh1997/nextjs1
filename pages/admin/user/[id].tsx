import { useRouter } from "next/router";
import Link from "next/link";

function User() {
  const router = useRouter();
  console.log("router:", router);

  console.log(router.query);

  const handleOnClick = () => {
    router.push("/login");
  };

  return (
    <>
      <div>User admin</div>
      <button onClick={handleOnClick}>go home</button>
      <br></br>
      <Link href="/login">
        <a>go home</a>
      </Link>
      <br></br>

      <a href="/login">go home</a>
    </>
  );
}

export default User;
