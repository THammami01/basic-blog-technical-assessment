import type { FC } from 'react';

import { ToastContainer as InitToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContainerProps {}

const ToastContainer: FC<ToastContainerProps> = () => {
  return (
    <InitToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
      style={{ lineHeight: '1.4' }}
    />
  );
};

export default ToastContainer;
