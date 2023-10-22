import { Outlet } from "react-router";
import { Container } from "reactstrap";
import Buttony from "../components/Buttony";
import Rasa from "./Rasa";

const Layout = () => {
  return (
    <div className="epp">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
export default Layout;
