import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFount404() {
  const router = useRouter();

  useEffect(() => {
    void router.push('/');
  }, [router]);

  return null;
}
