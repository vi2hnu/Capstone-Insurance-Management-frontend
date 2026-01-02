export interface LoginModel {
    username: string;
    password: string;
}

export interface UserDTO {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface LoginResponse{
    token: string,
    user: UserDTO,
    changePassword: boolean
}