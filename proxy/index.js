const list = [
  {
    name: '/20/turn.php',
    description: '转转赚活动接口',
    method: 'GET',
  },
  {
    name: '/v2/auth/sms/sendcode',
    description: '发送短信验证码接口',
    method: 'POST',
  },
];

const proxyList = {};

for (let i = 0; i < list.length; i++) {
  proxyList[list[i].name] = {
    target: 'https://cellapi.youzhuan.com',
    changeOrigin: true,
  };
}

export default proxyList;
