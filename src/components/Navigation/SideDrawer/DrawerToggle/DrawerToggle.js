import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.menuToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
export default drawerToggle;