import { Button, UncontrolledPopover, PopoverHeader, PopoverBody} from "reactstrap";

const ReactstrapPopover = () => {
    return(
        <>
        <Button id = "popover_id">Popover button</Button>
        <UncontrolledPopover placement = 'right' target = "popover_id">
            <PopoverHeader>Reactstrap Popover</PopoverHeader>
            <PopoverBody>
                Aenenan id magna id risus congue ornare.
            </PopoverBody>
        </UncontrolledPopover>
        </>
    )
}
export default ReactstrapPopover;