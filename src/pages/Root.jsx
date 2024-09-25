import TopBar from "../components/topbar/TopBar.jsx";
import {Outlet} from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <TopBar/>
      <Outlet/>
    </>
  );
}