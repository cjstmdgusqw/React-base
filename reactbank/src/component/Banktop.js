import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './BankTop.css'

const BankTop = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="http://kosta.com"><i><b>kosta bank</b></i></NavbarBrand>
                <NavbarToggler onClick={toggle} className='mr-2' />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/login">로그인</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/join">회원가입</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                계좌
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to={'/'} className='a-item'>계좌개설</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={'/deposit'} className='a-item'>입금</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={'/withdraw'} className='a-item'>출금</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={'/accountInfo'} className='a-item'>계좌조회</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to={'/allAccountInfo'} className='a-item'>전체계좌조회</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    종료
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default BankTop;
