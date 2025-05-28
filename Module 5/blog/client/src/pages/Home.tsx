import { useQuery } from '@apollo/client';

import BlogPostForm from '../components/BlogPostForm/index.tsx';
import BlogPostList from '../components/BlogPostList/index.tsx';

import { QUERY_BLOGPOSTS } from '../utils/queries.ts';

const Home = () => {
  const { loading, data } = useQuery(QUERY_BLOGPOSTS);
  const blogPosts = data?.blogPosts || [];

  return (
    <main>
      <div>
        <div>
          <BlogPostForm />
        </div>
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BlogPostList
              blogPosts={blogPosts}
              title="A list of Blog Posts"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
