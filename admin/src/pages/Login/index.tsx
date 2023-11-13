import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useModel, useNavigate, Navigate} from '@umijs/max';

export default () => {
  const { initialState } = useModel('@@initialState');
  let navigate = useNavigate();
  if (initialState.isLogin) {
    return <Navigate to="/" />;
  }
  return (
    <LoginForm
      title="登录"
      subTitle=" "
      onFinish={async (values) => {
        initialState.name = values.username;
        initialState.isLogin = true;
        localStorage.setItem('initialState', JSON.stringify(initialState));
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
