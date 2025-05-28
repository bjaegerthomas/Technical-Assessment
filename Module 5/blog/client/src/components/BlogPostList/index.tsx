import { Link } from 'react-router-dom';

interface BlogPost {
  _id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
}

interface BlogPostListProps {
  blogPosts: BlogPost[];
  title: string;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ blogPosts, title }) => {
  if (!blogPosts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {blogPosts &&
        blogPosts.map((blogPost) => (
          <div key={blogPost._id}>
            <h4>
              {blogPost.title} <br />
            </h4>
            <div>
              <h3> Written by {blogPost.author} on {blogPost.createdAt}<br /></h3>
            </div>
            <Link
              to={`/blogPosts/${blogPost._id}`}
            >
              Check Out this BlogPost.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogPostList;
