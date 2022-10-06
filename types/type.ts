export interface loginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export enum activeState {
  DASHBOARD = "dashboard",
  SALES = "sales",
  USER_MNG = "user-management",
}
