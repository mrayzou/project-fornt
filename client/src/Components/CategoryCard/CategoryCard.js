import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import './category.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom';
 

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




const CategoryCard = () => {
  const [expanded, setExpanded] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};
const navigate = useNavigate()

  return (
  <div className='container'>
    <div className='discover' >
   <h1 >DISCOVER OUR CATEGORY</h1>
   </div>
    <div  className='category'>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://storage-asset.msi.com/global/picture/article/article_16872484626bfb3c82eae88411e0a6e5af61afbc44.jpeg"
          alt="black Computer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            COMPUTER
          </Typography>
          <ArrowDownwardIcon onClick={() => navigate("/Products")}  />
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://asset.msi.com/resize/picture/global/wallpaper/202303-1-1.jpg/550.png"
          alt="laptop"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            LAPTOP
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://asset.msi.com/resize/picture/global/wallpaper/wallpaper_15882197375eaa4f5958f9a.jpg/550.png"
          alt="accesssories"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ACCESSORIES
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://netrinoimages.s3.eu-west-2.amazonaws.com/2022/03/09/1114435/389027/isometric_gaming_room_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4024829_o.png"
          alt="gaming room"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GAMING ROOM
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://pic.clubic.com/v1/images/1846433/raw?fit=smartCrop&height=675&width=1200&hash=7f6e7f3b07980442f624e5a70a757a7f0a014bb0"
          alt="consoles"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          CONSOLES
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRDcbgANL3T_-0ez75xF1CX3rr72KS_hj9A&usqp=CAU"
          alt="gaming board"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          GAMING BOARD
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  )
}

export default CategoryCard