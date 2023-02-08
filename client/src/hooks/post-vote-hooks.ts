import { toast } from 'react-toastify';

import { PostsService } from '@/services';

export const useUpvotePost = (
  setPost: any,
  setPosts: any,
  setIsUpvoting: any
) => {
  return (id: string) => {
    setIsUpvoting(true);

    PostsService.upvotePost(id)
      .then(() => {
        setPosts &&
          setPosts((posts: any) =>
            posts.map((post: any) =>
              post.id === id
                ? { ...post, vote_count: post.vote_count + 1 }
                : post
            )
          );

        setPost &&
          setPost((post: any) => ({
            ...post,
            vote_count: post.vote_count + 1,
          }));

        toast.success('Upvoted successfully.', {
          toastId: 'upvote',
          autoClose: 3000,
        });
      })
      .catch(() => {
        toast.error('Error occured.', {
          toastId: 'upvote',
          autoClose: 3000,
        });
      })
      .finally(() => {
        setTimeout(() => setIsUpvoting(false), 300);
      });
  };
};

export const useDownvotePost = (
  setPost: any,
  setPosts: any,
  setIsDownvoting: any
) => {
  return (id: string) => {
    setIsDownvoting(true);

    PostsService.downvotePost(id)
      .then(() => {
        setPosts &&
          setPosts((posts: any) =>
            posts.map((post: any) =>
              post.id === id
                ? { ...post, vote_count: post.vote_count - 1 }
                : post
            )
          );

        setPost &&
          setPost((post: any) => ({
            ...post,
            vote_count: post.vote_count - 1,
          }));

        toast.success('Downvoted successfully.', {
          toastId: 'downvote',
          autoClose: 3000,
        });
      })
      .catch(() => {
        toast.error('Error occured.', {
          toastId: 'downvote',
          autoClose: 3000,
        });
      })
      .finally(() => {
        setTimeout(() => setIsDownvoting(false), 300);
      });
  };
};
