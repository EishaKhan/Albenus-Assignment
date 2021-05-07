import React from 'react';
import { Container } from '@material-ui/core';


const About = () => {
    return(
       <Container>
        <div>
        <div style={{paddingTop:'40px'}}>
        <h1>This is the About Page</h1>
        <p >React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
        </div>
        </div>
       </Container>
    );
}

export default About;