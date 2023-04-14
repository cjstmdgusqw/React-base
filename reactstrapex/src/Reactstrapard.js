import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardLink} from 'reactstrap';

const ReactstrapCard = () => {
    return(
        <div style={{width : '250px'}}>
        <Card>
            <CardImg top height = {"200px"} src = "cat.jpg" alt = "Card image cap"/>
            <CardBody>
                <CardTitle><h5>Card 제목</h5></CardTitle>
                <CardSubtitle>Card 부제목</CardSubtitle>
                <CardText>Card 내용 엊거ㅜ운라ㅣ멀</CardText>
                <CardLink href = '#'>CardLink</CardLink>
                <Button>버튼</Button>
            </CardBody>
        </Card>
        </div>
    )
}

export default ReactstrapCard;