import {Alert, UncontrolledAlert}from 'reactstrap';

const ReactstrapAlert = () => {
    return(
        <div>
            <Alert color = 'light'>
                Simple Alert
            </Alert>
            <UncontrolledAlert color = 'warning'> 
                Uncontrolled Alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </UncontrolledAlert>
        </div>
    )
}

export default ReactstrapAlert;

// alert는 그냥쓸댸
// uncontrol 어쩌고는 x가 표시된다

// 리액트는 className이라고 써야한다