import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/pages/Home";
import Partner from "./components/pages/Partner";
import Private from "./components/pages/Private";
import Signup from "./components/pages/Signup";
import Signupselect from "./components/pages/SignupMain";
import SignupGuide from "./components/pages/SignupGuide";
import GuidePage from "./components/pages/GuidePage";
import Board from "./components/pages/Board";

const routes = [
  { path: "/", component: Home },
  { path: "/partner", component: Partner },
  { path: "/Private", component: Private },
  { path: "/Signup", component: Signup },
  { path: "/SignupMain", component: Signupselect },
  { path: "/SignupGuide", component: SignupGuide },
  { path: "/GuidePage", component: GuidePage },
  { path: "/Board", component: Board },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
