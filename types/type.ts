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
export interface UserData {
  id: string;
  employee: string;
  email: string;
  is_active: boolean;
  departement: string;
}
export interface UsersData {
  count: number;
  page_count: number;
  page_size: number;
  page: number;
  results: UserData[];
}

export enum actionButtonKind {
  EDIT = "edit",
  DELETE = "delete",
  CREATE = "create",
}
