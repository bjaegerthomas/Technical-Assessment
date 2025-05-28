import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_BLOGPOST } from '../utils/queries.ts';

const SingleBlogPost = () => {

  const { blogPostId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_BLOGPOST, {

    variables: { blogPostId: blogPostId },
  });

  const blogPost = data?.blogPost || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>
        {blogPost.title} <br />
      </h3>
      <h3>
        Written by {blogPost.author} on {blogPost.createdAt}<br />
      </h3>
      <div>
        <blockquote>
          {blogPost.content}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleBlogPost;
