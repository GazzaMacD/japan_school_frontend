import type { NextPage } from 'next';
import Head from 'next/head';
import { Logo } from '@/components/elements/Logo';
import styles from '@/styles/page_styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>長久手の英会話・語学学校 エクスリンガル</title>
        <meta
          name="description"
          content="長久手市、名古屋市、みよし市、尾張旭市で上質な日常英会話・ビジネス英会話をはじめ、多言語学習サービス全般をご提供するエクスリンガルは、複数以上の言語を話すネイティブ講師たちから成る絆の強いチームです。魅力的なレッスンとわくわくするような学習体験をご提供し、あなたやあなたの会社の語学目標達成を全力でサポートします。講師と生徒の信頼関係を重視し、質の高い学習体験をお約束します。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Logo />
      </main>
    </div>
  );
};

export default Home;
