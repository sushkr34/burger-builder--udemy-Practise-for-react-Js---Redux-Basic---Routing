import React from 'react';
import classes from './Layout.module.css'
import Auxillary from '../Auxillary/Auxillary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends React.Component{
    state={
       showSideDrawer:true 
    }

    SideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer :false})
    }

    // when setstate depends on the old state use prevstate as defiined below to use the state 
    SideDrawerToggleHandler =()=>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        });
    }
    render(){
        return(
            <Auxillary>
            <Toolbar drawerToggleclick={this.SideDrawerToggleHandler} />
            <SideDrawer 
            open={this.state.showSideDrawer}
             closed={this.SideDrawerClosedHandler}/>
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Auxillary>
    

        )
    }
}
export default Layout;