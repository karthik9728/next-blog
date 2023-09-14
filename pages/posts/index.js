import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

const AllPostsPage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorial"
        />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
};

export default AllPostsPage;

export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
}
