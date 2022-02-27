import { Col, Row, TabContent, Table, UncontrolledTooltip } from "reactstrap";

const Home = () => {

  return (
    <div className="container">
      <div>
        <h1 className="heading">
          <span href="#" id="tt">
            Enter Equation
          </span>
        </h1>
        <UncontrolledTooltip placement="right-end" target="tt">
          LSTM Time Series Forecasting
        </UncontrolledTooltip>
      </div>
      <Table>
        <TabContent>
          <Row>
            <Col>
              Area to enter Equation
            </Col>
            <Col>
            Area to show Equation
            </Col>
          </Row>
        </TabContent>
      </Table>
    </div>
  );
};

export default Home;