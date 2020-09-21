import { useEffect } from "react";
import { useRouter } from "next/router";

// Current URL is '/'
function Test() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/?counter=10", undefined, { shallow: false });
  }, []);

  useEffect(() => {
    // The counter changed!
  }, [router.query.counter]);
  return <div>test</div>;
}

export default Test;
