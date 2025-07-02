import { Outlet, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { MainMenu } from "src/components/MainMenu";
import { Breadcrumbs } from "src/components/Breadcrumbs";

export const MainLayout = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <Container>
      <Row>
        <Col xxl={12}>
          <MainMenu />
        </Col>
        <Col xxl={12}>
          <Breadcrumbs pathNames={pathNames} />
        </Col>
        <Col xxl={12}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
