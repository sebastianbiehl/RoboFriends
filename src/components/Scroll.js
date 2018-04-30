import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const Scroll = (props) => {
    return (
        <Scrollbars autoHide style={{width:'100%', height:'1000px'}}> 
                {props.children}
        </Scrollbars>
    )
}

export default Scroll;