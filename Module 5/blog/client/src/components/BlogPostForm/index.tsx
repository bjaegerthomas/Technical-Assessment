import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_BLOGPOST } from '../../utils/mutations.ts';
import { REMOVE_BLOGPOST } from '../../utils/mutations.ts';
import { UPDATE_BLOGPOST } from '../../utils/mutations.ts';

import { QUERY_BLOGBOSTS } from '../../utils/queries.ts';

const BlogForm = () => {
  const [formState, setFormState] = useState({
    blogPostTitle: '',
    blogPostAuthor: '',
    blogPostContent: '',
  });

  const [addBlogPost, { error }] = useMutation(ADD_BLOGPOST, {
    refetchQueries: [
      QUERY_BLOGBOSTS,
      'getBlogPosts'
    ]
  });

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await addBlogPost({
        variables: { input: { ...formState } },
      });

      setFormState({
        blogPostTitle: '',
        blogPostAuthor: '',
        blogPostContent: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name } = event.target;

    if (name === 'blogPostTitle') {
      setFormState({ ...formState, blogPostTitle: event.target.value });

    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>Enter a blog post:</h3>

      <form
        onSubmit={handleFormSubmit}
      >
        <div>
          <input
            name="title"
            placeholder="My First Blog Post..."
            value={formState.blogPostTitle}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            name="author"
            placeholder="Add your name so we know who's post it is..."
            value={formState.blogPostAuthor}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="content"
            placeholder="What do you want to say?"
            value={formState.blogPostContent}
            onChange={handleChange}
          />
        </div>

        <div>
          <button>
            Add Blog Post
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default BlogForm;
