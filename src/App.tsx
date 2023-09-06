import { ConfigProvider, Button, DatePicker } from 'antd';
import 'dayjs/locale/zh-cn';
import zhCn from 'antd/locale/zh_CN';
import './app.less';
import Homepage from './pages/homepage';
import dayjs from 'dayjs';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './appLayout';
import NoPage from './pages/noPage';
import FriendsList from './pages/friendsList';
import { useEffect } from 'react';
import initSocket from './utils/websocket';
dayjs.locale('zh-cn');

const App = () => {
  useEffect(() => {
    initSocket();
  }, []);

  return (
    <ConfigProvider
      locale={zhCn}
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#3b62d4',
          borderRadius: 2,
          // 派生变量，影响范围小
          colorBgContainer: '#FFFFFF',
        },
      }}
    >
      <div className="app">
        <AppLayout>
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/friendsList" element={<FriendsList />} />
            <Route path="/notFound" element={<NoPage />} />
            <Route path="*" element={<Navigate to="/notFound" />} />
          </Routes>
        </AppLayout>
      </div>
    </ConfigProvider>
  );
};

export default App;
