import React, { useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Product_addAsync, allData, get_dataAsync, product_updateAsync } from '../../Severice/Action/Product_Action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function Product_edit() {

    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const {product} = useSelector(state => state)

    const [inputList, setinputList] = useState(product);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value

        setinputList({ ...inputList, [name]: value }, e.target.files)
        // setinputList(e.target.files)
        // console.log("name",name);

    }

    const handleSubmit = (e) => {

        // console.log(e);

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidated(true);

        e.preventDefault();

        console.log("inputyList", inputList);

        dispatch(product_updateAsync(inputList.id, inputList));

        navigate('/view')

        setinputList({
            img :'',
            name: '',
            price: '',
            qty: '',
            dec: ''
        })

        

    }

    return (
        <>
            <Container>
                <div className="d-flex mt-4">
                    <div className="col-12">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                            {/* <Form.Group as={Col} md="4" xl="6" controlId="validationCustom01" style={{ margin: "0px auto 20px auto", display: "flex", alignItems: "baseline" }}>
                                    <Form.Label style={{ width: "15%", marginRight: 10 }}>Product Img</Form.Label>
                                    <Form.Control required type="file" name="img" value={inputList.img} onChange={handleChange} placeholder="product img" accept='image/*' />
                            </Form.Group> */}
                                <Form.Group></Form.Group>

                                <Form.Group as={Col} md="4" xl="6" controlId="validationCustom01" style={{ margin: "0px auto 20px auto", display: "flex", alignItems: "baseline" }}>
                                    <Form.Label style={{ width: "15%", marginRight: 10 }}>Product name</Form.Label>
                                    <Form.Control required type="text" name="name" value={inputList.name} onChange={handleChange} placeholder="product name" />
                                </Form.Group>
                                <Form.Group></Form.Group>

                                <Form.Group as={Col} md="4" xl="6" controlId="validationCustom01" style={{ margin: "0px auto 20px auto", display: "flex", alignItems: "baseline" }}>
                                    <Form.Label style={{ width: "15%", marginRight: 10 }}>Price</Form.Label>
                                    <Form.Control required type="text" name="price" value={inputList.price} onChange={handleChange} placeholder="price" />
                                </Form.Group>
                                <Form.Group></Form.Group>

                                <Form.Group as={Col} md="4" xl="6" controlId="validationCustom01" style={{ margin: "0px auto 20px auto", display: "flex", alignItems: "baseline" }}>
                                    <Form.Label style={{ width: "15%", marginRight: 10 }}>Quantity</Form.Label>
                                    <Form.Control required type="text" name="qty" value={inputList.qty} onChange={handleChange} placeholder="quantity" />
                                </Form.Group>
                                <Form.Group></Form.Group>

                                <Form.Group as={Col} md="4" xl="6" controlId="validationCustom01" style={{ margin: "0px auto 20px auto", display: "flex", alignItems: "baseline" }}>
                                    <Form.Label style={{ width: "15%", marginRight: 10 }}>Description</Form.Label>
                                    <Form.Control required type="text" name="dec" value={inputList.dec} onChange={handleChange} placeholder="description" />
                                </Form.Group>
                            </Row>
                            <Button type="submit" style={{margin: "0 auto", display: "flex"}}>Submit</Button>
                        </Form>
                    </div>

                </div>
            </Container>

            

        </>

    );
}

export default Product_edit;
