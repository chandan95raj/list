import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, CircularProgress } from '@mui/material';

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

  if (loading) return <CircularProgress />;

  if (!itemDetails) return <div>No item details found</div>;

  return (
    <Box>
      <Typography variant="h4">Item Details</Typography>
      <Typography variant="h6">Name: {itemDetails.name}</Typography>
      <Typography variant="body1">Description: {itemDetails.description}</Typography>
    </Box>
  );
};

export default ListDetails;
