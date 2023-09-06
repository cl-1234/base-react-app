import { LoginUserType } from '@/types/login';
import httpRequest from '@/utils/axios';

export const login = (params: LoginUserType) => httpRequest.post('user/login', params);
