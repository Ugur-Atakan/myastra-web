import {UserInterface} from './user';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fcm_id?: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

export type AuthResponse = {
  tokens: Tokens;
  user: UserInterface;
};