import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const MyCard = ({ image, title, genero, raza, grupo }) => {
    return (
        <>
            <Card style={{ width: "23rem", height:"43rem"}}>
                <Card.Img src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className='info'>
                        <p>{genero}</p>
                        <p>{raza}</p>
                        <p>{grupo}</p>
                    </div>
                    <Button>Más Información</Button>
                </Card.Body>
            </Card>
        </>
    );
};
export default MyCard;