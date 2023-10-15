import React, { Fragment } from 'react'
import { Accordion } from 'react-bootstrap'

const ReactBootstrap = () => {
    let array = [1,2,3,4]
   return(
    <div>
        {
            array.map((x,i)=>{
              
                return  <Fragment>
                <Accordion defaultActiveKey={x} key={i}>
           <Accordion.Item eventKey={i}>
             <Accordion.Header>Accordion Item #1</Accordion.Header>
             <Accordion.Body>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
               minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat. Duis aute irure dolor in
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
               pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
               culpa qui officia deserunt mollit anim id est laborum.
             </Accordion.Body>
           </Accordion.Item>
        
         </Accordion>
         </Fragment>
            })
        }
 
    </div>
  
   )
}

export default ReactBootstrap