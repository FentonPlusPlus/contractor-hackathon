import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.back() // sends them back one page
      // router.back(); // same as above
      // router.go(1) // sends them forward 1 page
      router.push("/");
      // router.
    }, 4000)
  }, [])
  
  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>Something has gone wrong.</h2>
      <p>Go back to the <Link href="/">Homepage</Link></p>
    </div>
  )
}

export default NotFound;
