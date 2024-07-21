import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectItem } from '../../modules/redux/itemSlice';
import { Table } from 'antd';
import { Box, IconButton, Typography } from '@mui/material';
import { RemoveRedEye } from '@mui/icons-material';

const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleItemClick = (item) => {
    dispatch(selectItem(item));
    sessionStorage.setItem('selectedItemId', item.key);
    history.push('/list/details');
  };

  const columns = [
    {
      title: 'S/n',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <a>{text}.</a>,
    },
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      description: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      description: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      description: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Green',
      description: 'London No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Joe Black',
      description: 'Sydney No. 1 Lake Park',
    },
  ];

  return (
    <>
      <Typography variant="h3" className="text-center">Listing Assignment</Typography>
      <hr />
      <Box>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} />
      </Box>
    </>
  );
};

export default List;
