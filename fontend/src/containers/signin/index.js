import React from 'react'
import { Container,Form,Button, Row,Col } from 'react-bootstrap'
import Layout from '../../components/layout'
import Input from '../../components/UI/input'
import {login} from '../../actions';
import {useDispatch} from 'react-redux'
import { useState } from 'react';

export default function Signin(props) {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const dispatch = useDispatch();
    const userLogin=(e)=>{
        e.preventDefault()
        const user={
            email,password
        }
        
        dispatch(login(user));
    }
    return (
       <Layout>
           <Container>
               <Row style={{marginTop: '50px'}}>    
                    <Col md={{span:6,offset:3}}>
                    <Form onSubmit={userLogin}>
                        <Input
                            label="Email address"
                            placeholder="Enter email"
                            value={email}
                            type="text"
                            onChange={(e)=>setEmail(e.target.value)}
                            />

                        <Input
                            label="Password"
                            placeholder="Password"
                            value={password}
                            type="password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>    
                    </Col>
               </Row>
                
           </Container>
       </Layout>
    )
}
