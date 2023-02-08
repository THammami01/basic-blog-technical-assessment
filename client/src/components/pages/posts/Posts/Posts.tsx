import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDownvotePost, useUpvotePost } from '@/hooks/post-vote-hooks';
import { PostsService } from '@/services';
import { getClassNames, getSubstring } from '@/utils/funcs';

import styles from './Posts.module.scss';

const MAX_CONTENT_CHARS = 32;

interface PostProps {
  post: any;
  setPost?: any;
  setPosts?: (posts: any) => void;
  showFullContent?: boolean;
}

export const Post: FC<PostProps> = ({
  post,
  setPost = null,
  setPosts = null,
  showFullContent = true,
}) => {
  const [isUpvoting, setIsUpvoting] = useState(false);
  const [isDownvoting, setIsDownvoting] = useState(false);
  const handleUpvote = useUpvotePost(setPost, setPosts, setIsUpvoting);
  const handleDownvote = useDownvotePost(setPost, setPosts, setIsDownvoting);

  return (
    <article
      key={post.id}
      className={getClassNames(
        styles.post,
        showFullContent && styles.takeFullWidth
      )}
    >
      <h2>{post.title}</h2>

      <p className={styles.content}>
        {showFullContent
          ? post.content
          : getSubstring(post.content, MAX_CONTENT_CHARS)}
      </p>

      <p className={styles.author}>—{post.author}</p>

      {!showFullContent && <Link to={`/posts/${post.id}`}>Read more</Link>}

      <hr />

      <div className={post.vote_count < 0 ? styles.isRed : styles.isGreen}>
        <button onClick={() => handleUpvote(post.id)} disabled={isUpvoting}>
          {isUpvoting ? '...' : 'Upvote'}
        </button>

        <span>{post.vote_count}</span>

        <button onClick={() => handleDownvote(post.id)} disabled={isDownvoting}>
          {isDownvoting ? '...' : 'Downvote'}
        </button>
      </div>
    </article>
  );
};

interface PostsProps {}

const Posts: FC<PostsProps> = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setIsLoading(true);

    PostsService.getPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch(() => {
        toast.error('Error occured.', {
          autoClose: 3000,
        });
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 300);
      });
  }, []);

  useEffect(() => {
    const lowerCaseSearchKey = searchKey.toLowerCase();

    setFilteredPosts(
      searchKey
        ? posts.filter(
            (post: any) =>
              post.title.toLowerCase().includes(lowerCaseSearchKey) ||
              post.content.toLowerCase().includes(lowerCaseSearchKey) ||
              post.author.toLowerCase().includes(lowerCaseSearchKey)
          )
        : posts
    );
  }, [posts, searchKey]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <main className={styles.container}>
      <form>
        <input
          type="text"
          placeholder="Search.."
          value={searchKey}
          onChange={handleSearch}
        />
      </form>

      <section>
        {isLoading && <p>Loading..</p>}

        {!isLoading &&
          (filteredPosts.length ? (
            filteredPosts.map((post: any, idx) => (
              <Post
                key={idx}
                post={post}
                setPosts={setPosts}
                showFullContent={false}
              />
            ))
          ) : (
            <p>No posts found.</p>
          ))}
      </section>
    </main>
  );
};

export default Posts;
