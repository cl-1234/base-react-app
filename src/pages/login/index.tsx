import styles from './index.module.less';
import Chat from '@/static/images/chat.png';
import Brand from '@/static/images/brand.png';
import { Button, Checkbox, Form, Input } from 'antd';
import { BtnLinkStyle, LoginFormStyle } from '@/constant/style';
import Username from '@/static/images/username.png';
import Password from '@/static/images/password.png';
import ValidateCode from '@/static/images/validate-code.png';
import { WechatOutlined, QqOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { login } from '@/services/login';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

type ErrorTipType = {
  [key in 'usernameTip' | 'passwordTip' | 'validateCodeTip']?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [form] = Form.useForm();
  const handleUserLogin = () => {
    form.validateFields().then(async (formRes) => {
      const { username, password, validateCode } = formRes;
      const res = await login({ username, password, validateCode });
      if (isChecked) {
        localStorage.setItem('username', username);
      } else {
        localStorage.setItem('username', '');
      }
    });
  };

  const handleRemeberUsername = (e: CheckboxChangeEvent) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      form.setFieldsValue({ username });
      setIsChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContentWrapper}>
        <img src={Chat} alt="" className={styles.chatImg} />
        <div className={styles.loginFormWrapper}>
          <div className={styles.titleContent}>
            <img src={Brand} alt="" className={styles.logoImg} />
            <div className={styles.title}>
              <div className={styles.bigTitle}>easychat智能平台</div>
              <div className={styles.smallTitle}>easychat intelligent platform</div>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <Form style={{ width: '100%' }} form={form}>
              <Form.Item name="username" rules={[{ required: true, message: '用户名不能为空' }]}>
                <Input
                  placeholder="请输入账号"
                  style={{ ...LoginFormStyle }}
                  prefix={<img src={Username} className={styles.formLogo} alt="" />}
                />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: '密码不能为空' }]}>
                <Input.Password
                  placeholder="请输入密码"
                  style={{ ...LoginFormStyle }}
                  prefix={<img src={Password} className={styles.formLogo} alt="" />}
                />
              </Form.Item>
              <Form.Item
                name="validateCode"
                rules={[{ required: true, message: '验证码不能为空' }]}
              >
                <Input
                  placeholder="验证码"
                  style={{ ...LoginFormStyle }}
                  prefix={<img src={ValidateCode} className={styles.formLogo} alt="" />}
                />
              </Form.Item>
              <div className={styles.loginStatus}>
                <Checkbox onChange={handleRemeberUsername} checked={isChecked}>
                  记住用户名
                </Checkbox>
                <Button type="link" style={{ ...BtnLinkStyle }}>
                  忘记密码?
                </Button>
              </div>
            </Form>
            <Button
              type="primary"
              style={{
                width: 280,
                ...LoginFormStyle,
              }}
              onClick={handleUserLogin}
            >
              登录
            </Button>
            <div className={styles.extraWay}>
              <div className={styles.loginWay}>
                <Button
                  type="link"
                  icon={<WechatOutlined style={{ color: '#3b62d4' }} />}
                  style={{ ...BtnLinkStyle }}
                >
                  QQ
                </Button>
                <div className={styles.split} />
                <Button
                  icon={<QqOutlined style={{ color: '#3b62d4' }} />}
                  type="link"
                  style={{ ...BtnLinkStyle }}
                >
                  微信
                </Button>
              </div>
              <Button type="link" style={{ ...BtnLinkStyle }}>
                立即注册
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>@copyright jingyun.com</div>
    </div>
  );
};

export default Login;
