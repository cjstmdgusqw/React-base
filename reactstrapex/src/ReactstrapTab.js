import {TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import {useState} from 'react';

export default function ReactstrapTab(){
    const [tabState, setTabState] = useState('first');

    const toggle = (tabnum) =>{
        if(tabState !== tabnum){
            setTabState(tabnum);
        }
    }
    return(
        <>
            <Nav tabs>  
                <NavItem>
                    <NavLink onClick={()=>{toggle("first")}}>First</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>{toggle("second")}}>Second</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={tabState}>
                <TabPane tabId={'first'} onClick={toggle("first")}>First tap content</TabPane>
                <TabPane tabId={'second'} onClick={toggle("second")}>Second tap content</TabPane>
            </TabContent>
        </>
    )
}