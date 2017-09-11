import axios from 'axios';

/**
 * 登录
 */
export const loginService = data => axios.post('/user', data);