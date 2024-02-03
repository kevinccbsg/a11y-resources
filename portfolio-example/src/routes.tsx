import { createBrowserRouter } from "react-router-dom";
import InaccessibleHome from "./inaccessible/Home";

const router = createBrowserRouter([
  {
    path: "/inaccessible",
    element: (
      <InaccessibleHome />
    ),
  },
]);

export default router;
