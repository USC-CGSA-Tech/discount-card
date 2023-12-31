// 运行时配置

import { useNavigate } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<any> {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  return {
    token: token,
    username: username,
  };
}

export const layout = () => {
  let navigate = useNavigate();
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    logout: (initialState: any) => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      initialState.token = null;
      initialState.username = null;
      navigate('/login');
    },
  };
};
