export interface loginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface credentials {
  id: string;
  email: string;
  employee: string;
  is_active: boolean;
  token: string;
}

export enum activePath {
  DASHBOARD = "/",
  SALES = "/sales",
  USER = "/user",
}

export interface UsersData {
  count: number;
  page_count: number;
  page_size: number;
  page: number;
  results: {
    id: string;
    employee: string;
    email: string;
    is_active: boolean;
  }[];
}
