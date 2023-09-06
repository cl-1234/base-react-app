import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起页面不存在"
      extra={
        <Button type="primary" onClick={() => navigate('/homepage')}>
          回到主页
        </Button>
      }
    />
  );
};

export default NoPage;
