export interface AuthTokenModel {
  accessToken: string;
  user :  {
    id: number;
    email: string;
  }
}
