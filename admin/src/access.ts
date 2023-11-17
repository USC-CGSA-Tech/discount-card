import jwt from 'jsonwebtoken';
export default (initialState: API.UserInfo) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  return {
    canWrite: () => {
      return initialState.username === 'admin';
    },
    isLogin: () => {
      const token = initialState.token;
      if (!token) {
        return false;
      }
      const exp = jwt.decode(token)?.exp || 0;
      const ttl = exp - Date.now() / 1000;
      if (ttl < 0) {
        return false;
      }
      return true;
    },
  };
};
