import {useState} from 'react';
import {Button, Fade} from 'reactstrap';

const ReactstrapFade = () => {
    const [fadeInOut, setFadeInOut] = useState(false);
    const toggle = () => {
        setFadeInOut(!fadeInOut);
    }
    return (
        <>
            <Button color='success' onClick={toggle}>Fade in/Out</Button>
            <Fade in={fadeInOut} tag = "h1">
            hello world
            </Fade>
            <div>I am a Collapse</div>
        </>
    )
}

export default ReactstrapFade;