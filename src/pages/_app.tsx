import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { globalState } from 'utils/globalState';
import { Layout } from 'components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    globalState.router = router;
    setLoaded(true);
  }, [router]);

  return (
    <>
      <div className="canvas-wrapper" />
      <Layout loaded={loaded}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
