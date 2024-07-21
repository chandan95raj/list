import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectItem } from '../../modules/redux/itemSlice';
import { Table } from 'antd';
import { Box, IconButton, Typography } from '@mui/material';
import { RemoveRedEye } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    dispatch(selectItem(item));
    sessionStorage.setItem('selectedItemId', item.key);
    navigate('/list/details');
  };

  const columns = [
    {
      title: 'S/n',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <>{text}.</>,
      width: 80,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 150,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => (
        <span>
          {text.length > 50 ? text.substring(0, 50) + '...' : text}
        </span>
      ),
      width: 200,
    },
    {
      title: 'Action',
      dataIndex: 'view',
      key: 'view',
      render: (text, record) => (
        <IconButton
          color="success"
          variant="contained"
          onClick={() => handleItemClick(record)}
        >
          <RemoveRedEye />
        </IconButton>
      ),
      width: 100,
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/chandan95raj/api/main/list.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Typography variant="h3" className="text-center" color='secondary'>Listing Assignment</Typography>
      <hr />
      <Box>
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={{ pageSize: 10 }} 
          scroll={{ x: 'max-content' }}
        />
      </Box>
    </>
  );
};

export default List;
