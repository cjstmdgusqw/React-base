import { Button } from "reactstrap";
const Section5 = () => {
    return(
    <div class = "section_main">
        <div className="section_left">
            <div className='imgBox' style = {{float:'right',  paddingTop:'20%'}}>
                <img src = "/img/main-foreignRemittance-new.png" width='460px' height = '800px' alt = ' '/>
            </div>
        </div>
        <div className="section_right">
            <div className = "textBox" style = {{float : 'left', paddingTop:'34%'}}>
                    <span className='L-text'>
                        해외계좌송금과<br/>
                        WU빠른해외송금을<br/>
                        더 쉽고, 저렴하게<br/> 
                    </span><br/>
                    <span className='S-text'>
                        해외계좌송금이 가능한 22개국을 포함하여<br/>
                        전세계 200여개국으로<br/>
                        어느덧 만기 달성 경험을 맛보게 됩니다.    
                    </span><br/>
                    <Button color = 'light'>해외송금&nbsp;&gt;</Button>
                </div>

        </div>

    </div>
    )
}
export default Section5;