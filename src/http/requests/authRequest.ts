import {baseApi} from '..';
import {
  AuthResponse,
  LoginCredentials,
  RegisterCredentials,
} from '../../types/auth';


const loginWithEmail = async (
  data: LoginCredentials,
): Promise<AuthResponse> => {
  try {
    console.log('data', data);
    const response = await baseApi.post('/auth/sign-in', data);
    console.log('response', response);
    return response.data.result;
  } catch (error: any) {
    throw error;
  }
};

const registerWithEmail = async (
  data: RegisterCredentials,
): Promise<AuthResponse> => {
  try {
    const resposne = await baseApi.post('/auth/sign-up', data);
    return resposne.data.result;
  } catch (error: any) {
    throw error;
  }
};


const forgotPassword = async (email: string): Promise<string> => {
  try {
    const resposne = await baseApi.post('/auth/forgot-password', {email});
    return resposne.data.result.code;
  } catch (error: any) {
    throw error;
  }
};

export {
  loginWithEmail,
  registerWithEmail,
  forgotPassword,
  //loginWitGoogle,
};