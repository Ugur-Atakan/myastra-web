import { Tokens } from "../types/auth";

export const saveUserTokens =async (tokens: Tokens) => {
localStorage.setItem('tokens', JSON.stringify(tokens));
 };

 export const deleteUserTokens = async() => {
localStorage.removeItem('tokens');
 }

 export const getUserTokens = async(): Promise<Tokens | null> => {
const tokens = localStorage.getItem('tokens');
if (tokens) {
  return JSON.parse(tokens);
}
return null;
 }
