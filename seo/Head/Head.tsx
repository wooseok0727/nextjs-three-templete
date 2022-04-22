import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const Head = (props: HeadProps) => {
  const {
    ogImage = '/images/logo.png',
    title = 'Nextjs with Three',
    description = 'lorem ipsum',
  } = props;

  return (
    <NextHead>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <title>{title}</title>
    </NextHead>
  );
};
