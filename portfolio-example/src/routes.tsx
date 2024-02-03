import { createBrowserRouter } from "react-router-dom";
import InaccessibleHome from "./pages/inaccessible/Home";
import AccessibleHome from "./pages/accessible/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AccessibleHome />
    ),
  },
  {
    path: "/inaccessible",
    element: (
      <InaccessibleHome />
    ),
  },
]);

export default router;
