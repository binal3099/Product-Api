import React, { useEffect } from 'react'
import { Button, Card, Container, Row, Table } from 'react-bootstrap';
import { allData, get_dataAsync } from '../../Severice/Action/Product_Action';
import { useDispatch, useSelector } from 'react-redux';

function Product_View() {

  const { Products } = useSelector(state => state)
  // console.log("Product",Products);
  const dispatch = useDispatch();

  const alldata = () => {
    dispatch(get_dataAsync())
  }

  useEffect(() => {
    alldata()
  }, []);

  return (
    <>
      {/* <div className="container">
        <div className="row">
          {
            Products.map((d) => {
              console.log("d", d);
              return (
                <Card style={{ width: '18rem' }} className='mb-3 me-3'>
                  <Card.Img variant="top" src={d.image} />
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Title>{d.price}</Card.Title>
                    <Card.Title>{d.qty}</Card.Title>
                    <Card.Text>
                      {d.dec}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleClick(d)} className='me-2'>Edit</Button> ||
                    <Button variant="primary" onClick={() => handleClick(d)} className='ms-2'>Delete</Button>
                  </Card.Body>
                </Card>
              )
            })}

      </div>
      </div> */}


      <Container>
        <Row>
          <Table striped bordered hover className='mt-4'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Product Dec</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {
                Products.map((d) => {
                  return (
                    <tr>
                      <td><img src={d.image} style={{ width: "100px", height: "100px" }} /></td>
                      <td>{d.name}</td>
                      <td>{d.price}</td>
                      <td>{d.dec}</td>
                      <td><button className='btn btn-danger' onClick={() => handleRemove(d.id)}>
                        Remove
                      </button> || 
                      <button className='btn btn-primary' onClick={() => handleRemove(d.id)}>
                        Delete
                      </button>
                      
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </Table>
        </Row>
      </Container>


    </>
  )
}

export default Product_View;