import React, { useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/eventSlice';
import Table from 'react-bootstrap/Table';
export default function Events() {
    let events = useSelector((state)=>state.event);
    const dispatch = useDispatch();
    let [event,setEvent] = useState({name:'',type:'',sdate:'',edate:'',
    description:'',handleby:'',eventOrganization:'',subevent:0});
    let [error,setError] = useState({});
    let nameChange = (e) => {
        if(e.target.value.trim()===''){
            setError({...error,name:'This field should not blank'});
            setEvent({...event,name:''});
        }else{
            setError({...error,name:''});
            setEvent({...event,name:e.target.value});
        }
    }
    let typeChange = (e) => {
        if(e.target.value.trim()===''){
            setError({...error,type:'This field should not blank'});
            setEvent({...event,type:''});
        }else{
            setError({...error,type:''});
            setEvent({...event,type:e.target.value});
        }
    }
    let sdateChange = (e) => {
        if(e.target.value.trim()===''){
            setError({...error,sdate:'This field should not blank'});
            setEvent({...event,sdate:''});
        }else{
            setError({...error,sdate:''});
            setEvent({...event,sdate:e.target.value});
        }
    }
    let edateChange = (e) => {
        if(e.target.value.trim()===''){
            setError({...error,edate:'This field should not blank'});
            setEvent({...event,edate:''});
        }else{
            setError({...error,edate:''});
            setEvent({...event,edate:e.target.value});
        }
    }
    let descriptionChange = (e) => {
        if(e.target.value.trim()===''){
            setError({...error,description:'This field should not blank'});
            setEvent({...event,description:''});
        }else{
            setError({...error,description:''});
            setEvent({...event,description:e.target.value});
        }
    }
    let handlebyChange = (e) => {
        if(e.target.value.trim()===''){
            setError({...error,handleby:'This field should not blank'});
            setEvent({...event,handleby:''});
        }else{
            setError({...error,handleby:''});
            setEvent({...event,handleby:e.target.value});
        }
    }
    let eventOrganizationChange = (e) => {
        if(e.target.value.trim()===''){
            setError({...error,eventOrganization:'This field should not blank'});
            setEvent({...event,eventOrganization:''});
        }else{
            setError({...error,eventOrganization:''});
            setEvent({...event,eventOrganization:e.target.value});
        }
    }
    let subeventChange = (e) => {
        var reg = /^\d+$/;
        if(reg.test(e.target.value)){
            setError({...error,subevent:''});
            setEvent({...event,subevent:e.target.value});
        }else{
            setError({...error,subevent:'This field is number only'});
            setEvent({...event,subevent:''});
        }
    }
    let save = (e) => {
        e.preventDefault();
        let errorSubmit = { status: 0, name:'',type:'',sdate:'',edate:'',
        description:'',handleby:'',eventOrganization:'',subevent:'' };
        if(event.name.trim()===''){errorSubmit.name = 'This field should not blank'; errorSubmit.status = 1 
        } else { errorSubmit.name = '' }
        if(event.type.trim()===''){errorSubmit.type = 'This field should not blank'; errorSubmit.status = 1 
        } else { errorSubmit.type = '' }
        if(event.sdate.trim()===''){errorSubmit.sdate = 'This field should not blank'; errorSubmit.status = 1 
        } else { errorSubmit.sdate = '' }
        if(event.edate.trim()===''){errorSubmit.edate = 'This field should not blank'; errorSubmit.status = 1 
        } else { errorSubmit.edate = '' }
        if(event.description.trim()===''){errorSubmit.description = 'This field should not blank'; errorSubmit.status = 1 
        } else { errorSubmit.description = '' }
        if(event.handleby.trim()===''){errorSubmit.handleby = 'This field should not blank'; errorSubmit.status = 1 
        } else { errorSubmit.handleby = '' }
        if(event.eventOrganization.trim()===''){errorSubmit.eventOrganization = 'This field should not blank'; errorSubmit.status = 1 
        } else { errorSubmit.eventOrganization = '' }
        var reg = /^\d+$/;
        if(!reg.test(event.subevent)){errorSubmit.subevent = 'This field is number only'; errorSubmit.status = 1 
        } else { errorSubmit.subevent = '' }
        setError({...error,name:errorSubmit.name,type:errorSubmit.type,edate:errorSubmit.edate
            ,sdate:errorSubmit.sdate,subevent:errorSubmit.subevent,handleby:errorSubmit.handleby
            ,description:errorSubmit.description,eventOrganization:errorSubmit.eventOrganization});
        if (errorSubmit.status === 0) {
            dispatch(add(event));
            setEvent({...event,name:'',type:'',
            description:'',handleby:'',eventOrganization:'',subevent:0});
        }
    }
  return (
    <div>
      <Container>

        {/* Show Data  */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Description</th>
                    <th>Handle By</th>
                    <th>Organization</th>
                    <th>Sub Event</th>
                    </tr>
                </thead>
                <tbody>
            {
                events.length<=0?<tr>
                            <td colSpan={9}>No event found.</td></tr>:
            events.map((item,index)=>{
                return(
                    <>
                    
                            <tr>
                            <td>1</td>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.sdate}</td>
                            <td>{item.edate}</td>
                            <td>{item.description}</td>
                            <td>{item.handleby}</td>
                            <td>{item.eventOrganization}</td>
                            <td>{item.subevent}</td>
                            </tr>
                        
                    </>
                )
            })
        }
            </tbody>
        </Table>
        {/* Show Data */}
        {/* Form Start */}
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Create Events
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={save}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Event Name</Form.Label>
                        <Form.Control value={event.name} onChange={nameChange} type="text" placeholder="Enter Event Name" />
                      </Form.Group>
                      <span style={{color:'red'}}>{error.name}</span>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Event Type
                        </Form.Label>
                        <Form.Select onChange={typeChange} aria-label="Default select example">
                            <option selected={event.type === ''} value="">Please Select Type</option>
                            <option value="sports">sports</option>
                            <option value="music">music</option>
                            <option value="general">general</option>
                            <option value="children">children</option>
                            <option value="school">school</option>
                        </Form.Select>
                      </Form.Group>
                      <span style={{color:'red'}}>{error.type}</span>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Start Date</Form.Label>
                        <Form.Control  onChange={sdateChange} type="date"  />
                      </Form.Group>
                      <span style={{color:'red'}}>{error.sdate}</span>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">End Date</Form.Label>
                        <Form.Control  onChange={edateChange} type="date"  />
                      </Form.Group>
                      <span style={{color:'red'}}>{error.edate}</span>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Event Description</Form.Label>
                        <Form.Control value={event.description} onChange={descriptionChange} type="text" placeholder="Event Description" />
                      </Form.Group>
                      <span style={{color:'red'}}>{error.description}</span>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Event Handle By</Form.Label>
                        <Form.Control value={event.handleby} onChange={handlebyChange} type="text" placeholder="Event Handle By" />
                      </Form.Group>
                      <span style={{color:'red'}}>{error.handleby}</span>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Event Organisation</Form.Label>
                        <Form.Control value={event.eventOrganization} onChange={eventOrganizationChange} type="text" placeholder="Event Organisation" />
                      </Form.Group>
                      <span style={{color:'red'}}>{error.eventOrganization}</span>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Total Number Of Sub Events <span style={{color:'blue'}}>(Write 0 if no subevent)</span></Form.Label>
                        <Form.Control value={event.subevent}  onChange={subeventChange} type="text" placeholder="Total Number Of Sub Events" />
                      </Form.Group>
                      <span style={{color:'red'}}>{error.subevent}</span>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Events
                        </Button>
                      </div>
                    </Form>
                    {/* Form End */}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}