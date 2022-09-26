import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface Props {
  title: string;
  now: number;
}

const Home: NextPage<Props> = (props) => {
  console.log({ props });
  return (
    <>
      {props.title}, {props.now}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const props: Props = {
    title: "testtitle",
    now: Date.now(),
  };
  return {
    props,
  };
};
