import React from "react";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from "./product"; 
function App() {            //fonction global
const firstName = "Imed"; // declaration of variable firstname

  return ( 
    <>
                          
    <Card style={{ width: '18rem' }}>      
      <Image/>                                      {/* using the image component */}

      <Card.Body>
        <Card.Title><Name/> </Card.Title>                  {/* using the name component */}

        <Card.Text>
          <Description/>                                      {/* using the description component */}

        </Card.Text>
        <Button variant="primary"><Price/></Button>                   {/* using the price component */}

      </Card.Body>
    </Card>
    <div className="message">
        <p>Hello, {firstName ? firstName : "there!"}</p>           {/*making the hello message with the condition of the first name*/}
      </div>
      {firstName ? <img src={product.image} alt="this is my boots" /> : null}      {/*condition if firstname is falsy then no picture will show */}
    </>
  );
}
export default App;
