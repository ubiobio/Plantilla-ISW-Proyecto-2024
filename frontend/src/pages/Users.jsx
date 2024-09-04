import Table from '@components/Table';
import useUsers from '@hooks/users/useGetUsers.jsx';

const Users = () => {
  const users = useUsers();

  return (
    <>
      <div className='main-container'>
        <div className='table-container'>
          <Table 
            dataUser={users} 
            title={'Todos los usuarios'} 
            noDataComponent={'No se encontraron usuarios'}
          />
        </div>
      </div>
    </>
  );
};

export default Users;