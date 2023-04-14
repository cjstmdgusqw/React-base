import { Button } from "reactstrap";

const Section2 = () => {
    return(
        <div className="section_main">
            <div className = "section_left">
                <div className="textBox" style={{float : 'right', paddingTop : '12%'}}>
                    <span class = 'L-text'>
                        우대조건 없이<br/>
                        합리적인 예금과 적금
                    </span>
                    <span className = 'S-text'>
                        기대했던 금리와 다르게 복잡한 우대조건에  실망한 적이 있었나요?<br/>
                        카카오뱅크의 예금, 적금은 숨겨진 우대조건 없이 누구에게나 <br/>
                    </span><br/>
                    <Button color = "light">정기예금&nbsp;&gt;</Button>&nbsp;&nbsp;
                    <Button color = "light">자유적금&nbsp;&gt;</Button><br/><br/>
                    <img src = "/img/main-savings-money.png" height={'100px'} width={'422px'} alt = ''/>
                </div>
            </div>
            <div className="section_right">
                <div className="imgBox" style={{float : 'left'}}>
                    <img src = "/img/main-savings.png" height = '720px' width = '410px' alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Section2;