import {Form, Col, Row, Button} from "react-bootstrap";


function CheckOutComponent({setInfoForm,infoForm, endBuyingProcess,itemCountText}){

    return(
        <>
            <Form>
                 <Row className="mb-3">
                     <Form.Group as={Col} controlId="formGridEmail">
                         <Form.Label>Nombre</Form.Label>
                         <Form.Control required type="text" placeholder="Nombre completo" onInput={(event)=>{setInfoForm({...infoForm, name:event.target.value})}}/>
                         
                     </Form.Group>

                     

                     <Form.Group as={Col} controlId="formGridEmail">
                         <Form.Label>Email</Form.Label>
                         <Form.Control required type="email" placeholder="Ingrese su email" onInput={(event)=>{setInfoForm({...infoForm, email:event.target.value})}}/>
                         <Form.Control required type="email" placeholder="Confirme su email" onInput={(event)=>{setInfoForm({...infoForm, emailConfirmed:event.target.value})}}/>
                     </Form.Group>

                 </Row>

                 <Row className="mb-3">

                     <Form.Group as={Col} controlId="formGridAddress1">
                         <Form.Label>Direccion</Form.Label>
                         <Form.Control required placeholder="1234 avenida 4321" onInput={(event)=>{setInfoForm({...infoForm, direction:event.target.value})}}/>
                     </Form.Group>

                     <Form.Group as={Col} controlId="formGridCity">
                         <Form.Label>Telefono</Form.Label>
                         <Form.Control required type="tel" placeholder="9-12345674" pattern="[0-9]{1}-[0-9]{8}" onInput={(event)=>{setInfoForm({...infoForm, tel:event.target.value})}}/>
                     </Form.Group>

                 </Row>

                 <Row>

                     <Col>
                         <Button variant="primary" type="button" onClick={()=>endBuyingProcess()}>Finalizar pedido</Button>
                     </Col>
                        
                 </Row>
                </Form>
        </>
    )


}

export default CheckOutComponent;