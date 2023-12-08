    import React from 'react';
    import Card from '@mui/material/Card';
    import CardMedia from '@mui/material/CardMedia';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    import { useDispatch } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { deleteProduct } from '../../JS/actions/product';
    import './Product.css'
    

    export default function ProductCard({ product }) {
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleEditClick = () => {
        navigate(`/EditProduct/${product._id}`); 
      };

      return (
        <div className='product' style={{ display: 'flex', flexDirection: 'column' }}>
        <Card sx={{ maxWidth: 350, display: 'flex', flexDirection: 'column', height: '100%'  }}>
          <CardMedia
            component="img"
            alt="Products"
            height="300"
            src={product.imageUrl}
            style={{ objectFit: 'cover' }}
          />
          <CardContent  sx={{ flex: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.productName}
            </Typography>
            <Typography gutterBottom variant="subtitle" component="div">
              {product.description}
            </Typography>
            <Typography gutterBottom variant="subtitle1"component="div">
              {product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => dispatch(deleteProduct(product._id))}>
              Delete
            </Button>
            <Button size="small" onClick={handleEditClick}>
              Edit
            </Button>
          </CardActions>
        </Card>
        </div>
      );
    }