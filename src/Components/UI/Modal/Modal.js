import React from 'react';

import classes from './Modal.css';
import Auxil from '../../../HOC/Auxil';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return(
        <Auxil>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                }}>
                {props.children}
            </div>
        </Auxil>

    );

}

export default modal;