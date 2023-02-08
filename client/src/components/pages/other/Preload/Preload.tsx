import type { FC } from 'react';

import styles from './Preload.module.scss';

interface PreloadProps {}

const Preload: FC<PreloadProps> = () => {
  return <div className={styles.preloadContainer}>Loading..</div>;
};

export default Preload;
