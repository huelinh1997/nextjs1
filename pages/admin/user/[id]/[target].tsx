import { useRouter } from "next/router";
import Link from "next/link";

export default function Target() {
  const router = useRouter();
  console.log("router:", router);
  const handleOnClick = () => {
    router.push("/login");
  };
  return (
    <>
      <div>Target</div>
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
