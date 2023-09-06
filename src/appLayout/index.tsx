import { FC, useEffect, useState } from 'react';
import styles from './index.module.less';
import Brand from '@/static/images/brand.png';
import { BellOutlined, LogoutOutlined } from '@ant-design/icons';
import DefaultMan from '@/static/images/default-man.png';
import DownArrow from '@/static/images/down-arrow.png';
import { Menu, MenuProps } from 'antd';
import Login from '@/pages/login';
import { useNavigate } from 'react-router-dom';
import Loading from '@/components/loading';

interface AppLayoutProps {
  children: React.ReactElement;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const pathname = window.location.pathname;

  useEffect(() => {
    if (pathname !== '/') return;
    navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('pathname====', pathname);
  if (pathname === '/') {
    return <Loading />;
  }
  if (pathname === '/login') {
    return <Login />;
  }

  const handleMenuClick: MenuProps['onClick'] = (menuItem) => {
    console.log('点击跳转', menuItem);
    const { key } = menuItem;
    navigate(key);
  };

  return (
    <div className={styles.appLayoutWrapper}>
      <div className={styles.appLayoutHeaderWrapper}>
        <div className={styles.brand}>
          <img src={Brand} alt="" className={styles.logoImg} />
        </div>
        <div className={styles.freeContent}></div>
        <div className={styles.userContent}>
          <BellOutlined />
          <div className={styles.split} />
          <div className={styles.user}>
            <img src={DefaultMan} className={styles.userAvatar} alt="" />
            <div className={styles.userOper}>
              <div className={styles.userName}>UserAdmin</div>
              <img className={styles.downArrow} src={DownArrow} alt="" />
            </div>
          </div>
          <div className={styles.split} />
          <LogoutOutlined />
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.menuList}>
          <Menu
            mode="inline"
            inlineCollapsed={collapsed}
            onClick={handleMenuClick}
            items={[
              {
                title: '首页',
                label: '首页',
                key: '/homePage',
              },
              {
                title: '聊天列表',
                label: '聊天列表',
                key: '/friendsList',
              },
              {
                title: '设置',
                label: '设置',
                key: '/setting',
              },
            ]}
          />
        </div>
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
