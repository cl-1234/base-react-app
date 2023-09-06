import { FC } from 'react';
import styles from './index.module.less';
import LoadingImg from '@/static/images/loading.gif';

interface LoadingProps {
  children?: React.ReactElement;
  title?: string;
}

const Loading: FC<LoadingProps> = ({ children, title }) => {
  return (
    <>
      <div className={styles.loadingWrapper}>
        <img src={LoadingImg} alt="" className={styles.loading} />
        <p className={styles.title}>{title}</p>
      </div>
      {children}
    </>
  );
};

export default Loading;
