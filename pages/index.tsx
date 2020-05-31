import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedIssuesData } from "../lib/issues";
// import utilStyles from "../styles/utils.module.css";

export default function Home({
  allIssuesData,
}: {
  allIssuesData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg leading-normal">
        <p>
          He is the dictatorial President Prime Minister of the fictional North
          African country of Wadiya (also known as the Republic of Wadiya) and
          he will keep his power over his home country and never allow a
          democracy.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in
          <a
            className="text-green-700 no-underline hover:underline"
            href="https://nextjs.org/learn"
          >
            our Next.js tutorial
          </a>
          .)
        </p>
      </section>
      <section className="text-lg leading-normal pt-px">
        <h2 className="text-2xl leading-snug my-4 mx-0">Blog</h2>
        <ul className="m-0 p-0 list-none">
          {allIssuesData.map(({ id, date, title }) => (
            <li className="mt-0 mx-0 mb-5" key={id}>
              <Link href="/issues/[id]" as={`/issues/${id}`}>
                <a className="text-green-600 font-sans font-semibold text-2xl no-underline hover:underline">
                  {title}
                </a>
              </Link>
              <br />
              <small className="text-gray-600">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allIssuesData = getSortedIssuesData();
  return {
    props: {
      allIssuesData,
    },
  };
};
