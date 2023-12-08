import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Cards.css'


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

export default function Cards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <div className='pub'>
    <Card sx={{ maxWidth: 345 ,bgcolor: "#fce4ec" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="ahmed ben ali"
        subheader="September 14,2023"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.g2a.com/1024x576/1x1x1/steam-gift-card-10-eur-steam-key-global-i10000000258072/5a5ce623ae653a15dc59d173"
        alt="Paella dish"
    
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Steam Gift Card 10 EUR - Steam Key - For EUR Currency Only
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
        <Typography paragraph>
        Steam Gift Cards and Wallet Codes are an easy way to put money into your own Steam Wallet or give the perfect gift of games to your friends or family.Steam Gift Cards work just like a gift certificate, while Steam Wallet ...
            </Typography>
        </CardContent>
        </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 ,bgcolor: "#fce4ec" }}>
        <CardHeader
        avatar={
        <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
            R
        </Avatar>
        }
        action={
    <IconButton aria-label="settings">
            <MoreVertIcon />
        </IconButton>
        }
        title="mohamed mraidi"
        subheader="September 14, 2016"
    />
    <CardMedia
        component="img"
        height="194"
        image="https://www.dexerto.com/cdn-cgi/image/width=750,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/10/04/Iso_Wallpaper_1920x1080__1600x900.jpeg"
        alt="valorant agent"
    />
    <CardContent>
        <Typography variant="body2" color="text.secondary">
        VALORANT $25 Gift Card - PC [Online Game Code]
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon />
        </IconButton>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
Note: After purchase, you can access the item in Your Games Library.
By placing your order, you agree to our Games and Software Terms of Use.
This product is non-returnable and non-refundable.
Note: Currently, this item is available only to customers located in the United States.
</Typography>
        </CardContent>
        </Collapse>
    </Card>
    <Card sx={{ maxWidth: 345 ,bgcolor: "#fce4ec" }}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[900] }} aria-label="recipe">
            R
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title="samir hamdi"
        subheader="September 14,2023"
        />
        <CardMedia
        component="img"
        height="194"
        image="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png"
        alt="Amzone gift card"
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        Amazon.com eGift Card
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
            <ShareIcon />
        </IconButton>
        <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
        >
            <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
            This Gift Card can only be used to purchase eligible goods and services available on Amazon.com, and cannot be used on Amazon websites in other countries.
            </Typography>
        
        </CardContent>
    </Collapse>
    </Card>
    </div>
    </div>
    
    
    );
}
