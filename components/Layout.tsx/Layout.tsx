import { useEffect } from 'react';

interface Props {
  loaded: boolean;
  children: React.ReactChild;
}

export const Layout = (props: Props) => {
  const { children, loaded } = props;

  useEffect(() => {
    if (loaded && !document.body.classList.contains('loaded')) {
      document.body.classList.add('loaded');
    }

    return () => {
      document.body.classList.remove('loaded');
    };
  }, [loaded]);

  return <div>{children}</div>;
};
