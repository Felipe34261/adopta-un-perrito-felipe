import Badge from 'react-bootstrap/Badge';

const Tags = ({ text, color }) => {
  return (
    <Badge bg={color} className="w-100 py-2 fs-6">
      {text}
    </Badge>
  );
};

export default Tags;