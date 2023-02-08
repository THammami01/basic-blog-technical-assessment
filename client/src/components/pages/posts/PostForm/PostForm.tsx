import type { FC} from 'react';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { PostsService } from '@/services';

import styles from './PostForm.module.scss';

const savePostSchema = yup.object().shape({
  title: yup.string().required('Please fill the title.'),
  content: yup.string().required('Please fill the content.'),
  author: yup.string().required("Please fill the author's name."),
});

interface PostFormProps {}

const PostForm: FC<PostFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(savePostSchema),
    defaultValues: {
      title: '',
      content: '',
      author: '',
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    setIsLoading(true);

    setTimeout(
      () =>
        PostsService.createPost(data)
          .then(() => {
            toast.success('Post created successfully!', {
              autoClose: 3000,
            });
            navigate('/posts');
          })
          .catch(() => {
            toast.error('Error occured.', {
              autoClose: 3000,
            });
          })
          .finally(() => {
            setIsLoading(false);
          }),
      300
    );
  };

  return (
    <section className={styles.container}>
      <h1>Create a new post</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter title.."
          className={errors.title ? styles.hasError : ''}
          {...register('title')}
        />
        {errors.title && <small>{errors.title.message}</small>}

        <textarea
          placeholder="Enter content.."
          className={errors.content ? styles.hasError : ''}
          {...register('content')}
        />
        {errors.content && <small>{errors.content.message}</small>}

        <input
          type="text"
          placeholder="Enter author name.."
          className={errors.author ? styles.hasError : ''}
          {...register('author')}
        />
        {errors.author && <small>{errors.author.message}</small>}

        <button
          disabled={!isValid}
          title={isValid ? '' : 'Please check all fields.'}
        >
          {isLoading ? '...' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default PostForm;
