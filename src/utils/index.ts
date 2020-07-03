import { router } from 'umi';
import { Toast } from 'antd-mobile';

interface ERROR {
  code: number
  errorCode: string,
  errorMessage: string
}

enum ERROR_CODE {
  NEED_LOGIN = 'NEED_LOGIN',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
}

export default {
  routeTo(path: string = '') {
    router.push(path);
  },
  errorHandler(error: ERROR) {
    console.log(error)
    switch (error.errorCode) {
      case ERROR_CODE.NEED_LOGIN:
        this.routeTo('/login');
        break;
      case ERROR_CODE.TOKEN_EXPIRED:
        this.routeTo('/login');
        break;
      default:
        Toast.fail(error.errorMessage || '')
    }
  }
}
