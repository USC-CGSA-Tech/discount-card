import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { Navigate, request, useModel, useNavigate } from '@umijs/max';
import { message } from 'antd';
import { useAccess } from '@umijs/max';

const BaseUrl = 'http://localhost:8081/login';

export default () => {
  const { initialState } = useModel('@@initialState');
  let navigate = useNavigate();
  let access = useAccess();
  if (access.isLogin()) {
    return <Navigate to="/" />;
  }
  return (
    <LoginForm
      title="登录"
      subTitle=" "
      onFinish={async (values) => {
        const response = await request(`${BaseUrl}/login`, {
          method: 'POST',
          params: values,
        });
        if (response.code !== 200) {
          message.error(response.message);
          return false;
        } else {
          message.success('登录成功');
        }
        const token = response.data.token;
        const username = response.data.username;
        initialState.token = token;
        initialState.user = username;
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        navigate('/');
      }}
    >
      <ProFormText
        name="username"
        placeholder="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        placeholder="密码"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />
    </LoginForm>
  );
};
