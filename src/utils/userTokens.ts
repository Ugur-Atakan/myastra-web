import { Tokens } from "../types/auth";

export const saveUserTokens = (tokens: Tokens) => {
localStorage.setItem('tokens', JSON.stringify(tokens));
 };

 export const DeleteUserTokens = () => {
localStorage.removeItem('tokens');
 }

 export const getUserTokens = (): Tokens | null => {
const tokens = localStorage.getItem('tokens');
if (tokens) {
  return JSON.parse(tokens);
}
return null;
 }
