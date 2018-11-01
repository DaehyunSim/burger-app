import React from 'react';

import Auxil from '../../HOC/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Auxil>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxil>

);

export default layout;