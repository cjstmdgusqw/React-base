import {Button} from 'reactstrap';

const Section4 = () => {
    return(
        <div className='section_main'>
            <div className='section_left'>
                <div className = "textBox" style = {{float : 'right', paddingTop:'28%'}}>
                    <span className='L-text'>
                        함께 도전해서<br/>
                        재미있는 26주적금    
                    </span><br/>
                    <span className='S-text'>
                        26주동안 변화하는 재미에 빠져있는 사이<br/>
                        어느덧 만기 달성 경험을 맛보게 됩니다.    
                    </span><br/>
                    <Button color = 'light'>26주 적금&nbsp;&gt;</Button>
                </div>
            </div>
            <div className = "section_right">
                <div className='imgBox' style = {{float:'left',  paddingTop:'20%'}}>
                    <img src = "/img/main-26weeks.png" width='520px' height = '408px' alt = ' '/>
                </div>
            </div>
        </div>
    )
}

export default Section4;