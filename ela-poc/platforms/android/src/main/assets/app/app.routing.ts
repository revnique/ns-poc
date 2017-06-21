import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { SummaryComponent } from "./pages/summary/summary.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "summary", component: SummaryComponent }
];

export const navigatableComponents = [
  LoginComponent,
  SummaryComponent,
  ListComponent
];