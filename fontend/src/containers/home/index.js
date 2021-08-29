import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/layout'

export default function Home(props) {
    return (
        <div>
            <Layout>
                <Jumbotron style={{margin:'5rem'}} className='text-center'>
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem Ipsum</p>
                </Jumbotron>
            </Layout>
        </div>
    )
}
