import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { width } from '@mui/system';


export default function ShoeCard({ shoeItem }) {
  return (
      <div className='oneCard'>
    <Card sx={{ maxWidth: 345 }} style={{ marginTop:10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height ={300}
          width={300}
          image={shoeItem.ShoePicture} style={{height:300 ,width:300} }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {shoeItem.ShoeBrand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>ShoeModel {shoeItem.ShoeModel}</p>
          <p>ShoeQuentity {shoeItem.ShoeQuentity}</p>
          <p>ShoeType {shoeItem.ShoeType}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

// export default function ShoeCard({ shoeItem }) {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//                 avatar={
//                     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//                         R
//                     </Avatar>
//                 }
//                 action={
//                     <IconButton aria-label="settings">
//                         <MoreVertIcon />
//                     </IconButton>
//                 }
//                 title={shoeItem.ShoeBrand}
//                 subheader={shoeItem.ShoeModel}
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image={shoeItem.ShoePicture}
//                 alt="shoe"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                     {shoeItem.ShoePrice}
//                 </Typography>
//             </CardContent>
//             <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label="share">
//                     <ShareIcon />
//                 </IconButton>
//                 <ExpandMore
//                     expand={expanded}
//                     onClick={handleExpandClick}
//                     aria-expanded={expanded}
//                     aria-label="show more"
//                 >
//                     <ExpandMoreIcon />
//                 </ExpandMore>
//             </CardActions>
//             <Collapse in={expanded} timeout="auto" unmountOnExit>
//                 <CardContent>
//                     <Typography paragraph>Method:</Typography>
//                     <Typography paragraph>
//                         {shoeItem.ShoeQuentity}
//                     </Typography>
//                     <Typography paragraph>
//                         {shoeItem.ShoeType}
//                     </Typography>
//                     <Typography paragraph>
//                         Add rice and stir very gently to distribute. Top with artichokes and
//                         peppers, and cook without stirring, until most of the liquid is absorbed,
//                         15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//                         mussels, tucking them down into the rice, and cook again without
//                         stirring, until mussels have opened and rice is just tender, 5 to 7
//                         minutes more. (Discard any mussels that don’t open.)
//                     </Typography>
//                     <Typography>
//                         Set aside off of the heat to let rest for 10 minutes, and then serve.
//                     </Typography>
//                 </CardContent>
//             </Collapse>
//         </Card>
//     );
// }


// function ShoeCard({ shoeItem })
// <section>
/* <h1>{shoeItem.ShoeBrand}</h1> */ 
/* <p>{shoeItem.ShoeInSale}</p> */ 
/* <p>{shoeItem.ShoeModel}</p> */ 
/* <img src="shoeItem.ShoePicture"/> */ 
/* <p>{shoeItem.ShoePrice}</p> */ 
/* <p>{shoeItem.ShoeQuentity}</p> */ 
/* <p>{shoeItem.ShoeType}</p> */ 
/* </section> */ 


// ShoeBrand: "ADIDAS"
// ShoeInSale: true
// ShoeModel: "ULTRABOOST 22"
// ShoePicture: "https://media.shoesonline.co.il/2021/12/women-Adidas-Ultraboost-22__GX5591.jpg"
// ShoePrice: 509
// ShoeQuentity: 20
// ShoeType: "Runing"