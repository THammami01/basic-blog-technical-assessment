import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Post as PostItem } from '@/components/pages/posts/Posts';
import { PostsService } from '@/services';

interface PostProps {}

const Post: FC<PostProps> = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    PostsService.getPost(id as string)
      .then((res) => {
        setPost(res.data);
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

  return (
    <section>
      {isLoading && <p>Loading..</p>}
      {!isLoading && post && <PostItem post={post} setPost={setPost} />}
    </section>
  );
};

export default Post;
