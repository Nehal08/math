import { useState } from "react";
import { Input, InputGroup, Button, Col, Row, TabContent, Table, UncontrolledTooltip } from "reactstrap";
//import * as tf from "@tensorflow/tfjs";


const Home = () => {

  const [eqstring, setEqstring] = useState("");
  const [msg, setMsg] = useState(undefined);

  async function handleEquation(equationString) {
    //const model = await tf.loadLayersModel("/tfjs/model.json");

    // model
    //   .predict(equationString)
    //   .data()
    //   .then((res) => {
    //     handleMsg(res[0]);
    //   });
    setMsg(equationString)
    console.log("In handleEquation function ")
    console.log(equationString)
  }

  const onChangeText = (val) => {
    console.log("In onChangeText function ")
    setEqstring(val);
  }

  const handleMsg = (prediction) => {
    console.log("In handleMsg function ")
    setMsg("The Solution is : " + prediction);
  };

  return (
    <div className="container">
      <div>
        <h1 className="heading">
          <span href="#" id="tt" style={{fontFamily: 'Tangerine', fontWeight: 'bolder', fontSize: '50px'}}>
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
            <InputGroup>
              <Input placeholder="Enter Equation" onChange={(event) => onChangeText(event.target.value)}/>
              <Button onClick={() => handleEquation(eqstring)}>
                Solve!
              </Button>
            </InputGroup>
            </Col>
            <Col>
              <div className="result">
                {msg && <h3 className="pred-heading">{msg}</h3>}
              </div>
            </Col>
          </Row>
        </TabContent>
      </Table>
    </div>
  );
};

export default Home;