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

export enum activeState {
  DASHBOARD = "dashboard",
  SALES = "sales",
  USER_MNG = "user-management",
}
