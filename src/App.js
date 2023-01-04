import { RouterProvider } from "react-router-dom";

import GlobalStyle from "./styles/global";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </>
  );
}
