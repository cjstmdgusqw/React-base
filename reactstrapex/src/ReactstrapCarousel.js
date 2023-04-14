import {UncontrolledCarousel} from 'reactstrap';

const ReactstrapCarousel = () =>{
    const items = [
        {
            src:'cat.jpg',
            alt : '고양이1',
            caption : '나는 고양이1입니다.',
            header : '고양이1' 
        },
        {
            src:'cat2.jpeg',
            alt : '고양이2',
            caption : '나는 고양이2입니다.',
            header : '고양이1' 
        },
        {
            src:'cat3.jpeg',
            alt : '고양이3',
            caption : '나는 고양이3입니다.',
            header : '고양이1' 
        },
        {
            src:'cat4.jpeg',
            alt : '고양이4',
            caption : '나는 고양이4입니다.',
            header : '고양이1' 
        },
    ]
    return(
        <UncontrolledCarousel items = {items} style={{width : '500px'}}/>
    )
        
}

export default ReactstrapCarousel;