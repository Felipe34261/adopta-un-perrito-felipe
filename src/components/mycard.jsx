import Card from 'react-bootstrap/Card';
import Tags from './tags';

const MyCard = ({ image, name, description, tagText, tagColor }) => {
  return (
    <Card className="h-100 text-center p-3 shadow-sm dog-card">
      <Card.Img 
        variant="top" 
        src={image} 
        alt={name} 
        className="card-img-custom rounded" 
      />
      <Card.Body className="d-flex flex-column justify-content-between px-1">
        <div>
          <Card.Title className="fw-bold mt-2">{name}</Card.Title>
          <Card.Text className="text-muted small">
            {description}
          </Card.Text>
        </div>
        <div className="mt-3">
          <Tags text={tagText} color={tagColor} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default MyCard;