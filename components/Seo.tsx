import Head from 'next/head';

const Seo = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title} | My Review World</title>
    </Head>
  );
};

export default Seo;
