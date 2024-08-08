import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { faker } from '@faker-js/faker';

const imgUrl = faker.image.urlLoremFlickr();

export default function HeaderImg() {
  return (
    <Card sx={{ maxWidth: '100%', height: '350px', margin: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imgUrl}
          alt="green iguana"
          style={{ objectFit: 'cover', objectPosition: 'center', height: '100%', width: '100%' }}
        />
      </CardActionArea>
    </Card>
  );
}