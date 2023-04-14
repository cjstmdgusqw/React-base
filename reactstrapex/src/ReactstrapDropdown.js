import { useState } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const ReactstrapDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () =>{
        setDropdownOpen(!dropdownOpen);
    }
    return(
        <ButtonDropdown isOpen = {dropdownOpen} direction="left" toggle={toggle}>
            <DropdownToggle caret color = 'info'>버튼 Dropdown</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>헤더</DropdownItem>
                <DropdownItem disabled>비활성화 버튼</DropdownItem>
                <a href="https://kosta.com">
                    <DropdownItem>kosta 사이트로 이동</DropdownItem>
                </a>
                <DropdownItem onClick={e=> alert('사이트로이동')}>Alert버튼</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}

export default ReactstrapDropdown;