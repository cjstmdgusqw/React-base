import {Link} from 'react-router-dom';

const Header = () => {
    const divStyle = {backgroundColor : 'white', width : '100%', position : 'fixed', left : '0px', top : '0px', zIndex : 10};
    return(
        <div style={divStyle}>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <Link to = {'/'} id = 'logo'><b>Kosta</b>bank</Link>
                </li>
                <li className='nav-item'>
                    <Link to = {'/makeAccount'} >계좌개설</Link>
                </li>
                <li className='nav-item'>
                    <Link to = {'/deposit'}>입금</Link>
                </li>
                <li className='nav-item'>
                    <Link to = {'/withdraw'}>출금</Link>
                </li>
                <li className='nav-item'>
                    <Link to = {'/accountInfo'}>계좌조회</Link>
                </li>
                <li className='nav-item'>
                    <Link to = {'/AllaccountInfo'} >전체계좌조회</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;