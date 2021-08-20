import "./style.scss"
import {Image, Table,Jumbotron, Container, Row, Col} from 'react-bootstrap';
import ItemCountComponent from "../ItemCountComponent/";
import { Link } from "react-router-dom";

function ItemDetailComponent ({itemDetailsProp}){

    return(
        
        <Jumbotron fluid>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Image id="itemImage" src={itemDetailsProp.thumbnail} alt={itemDetailsProp.id} rounded />
                    </Col>
                    <Col xs={12} md={4}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>{itemDetailsProp.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Una breve explicacion</td>
                                </tr>
                                <tr>
                                    <td>Precio {itemDetailsProp.price} CLP</td>
                                </tr>
                            </tbody>
                        </Table>
                        { true ? 
                            <Container>
                                <Row className="justify-content-center">
                                    <ItemCountComponent itemDetails={itemDetailsProp} isCartOrDetail={"Detail"}/>
                                </Row>
                            </Container> 
                            : 
                            <Container>
                            <Row className="justify-content-center">
                                <Link to={`/Cart`}><button id="onAddCart">Terminar mi compra</button></Link>
                            </Row>
                        </Container>
                        }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default ItemDetailComponent;
