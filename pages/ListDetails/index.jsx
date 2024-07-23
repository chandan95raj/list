import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {  Typography, CircularProgress, Button, Card, CardContent, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ListDetails = () => {
  const items = useSelector((state) => state.items.items);
  const selectedItem = useSelector((state) => state.items.selectedItem);
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemDetails = async () => {
      if (selectedItem) {
        setItemDetails(selectedItem);
        setLoading(false);
      } else {
        const itemId = sessionStorage.getItem('selectedItemId');
        if (itemId) {
          const item = items.find((item) => item.key === itemId);
          setItemDetails(item);
          setLoading(false);
        }
      }
    };

    fetchItemDetails();
  }, [selectedItem, items]);

  if (loading) return <CircularProgress className='circle' />;

  if (!itemDetails) return <div>No item details found</div>;

  return (
    <>
      <Grid container>
        <Grid stack md='4' className='m-auto'>
          <Card className='shadow'>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {itemDetails.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className='text-justify'>
                {itemDetails.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/">
                <Button size="small" variant='outlined'>Back</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ListDetails;
