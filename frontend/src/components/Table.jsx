import DataTable from 'react-data-table-component';
import useTable from '@hooks/table/useTable';
import deleteIcon from '@assets/deleteIcon.svg';
import updateIcon from '@assets/updateIcon.svg';
import { UserOptions } from '@components/userOptions.jsx';
import { deleteUser } from '@services/user.service.js';

function Table({ dataUser, title, noDataComponent }) {
  const { filteredItems, filteredNonEmptyItems, subHeaderComponentMemo } = useTable(dataUser);

  const handleEdit = (user) => {
    console.log('Modificar usuario:', user);
  };

  const handleDelete = async (user) => {
    await deleteUser(user.rut);
  };

  const columns = [
    {
      name: "Nombre",
      selector: row => row.nombreCompleto,
    },
    {
      name: "Correo electrónico",
      selector: row => row.email,
    },
    {
      name: "Rut",
      selector: row => row.rut,
    },
    {
      name: "Rol",
      selector: row => row.rol,
    },
    {
      name: "Creado",
      selector: row => row.createdAt,
    },
    {
      name: "Acción",
      selector: row => (
        row.nombreCompleto && row.rut && row.email && row.rol && row.createdAt ? (
          <>
            <UserOptions 
              src={updateIcon} 
              alt={'Modificar'} 
              onEdit={handleEdit} 
              row={row}
            />
            <UserOptions 
              src={deleteIcon} 
              alt={'Eliminar'} 
              onDelete={handleDelete} 
              row={row}
              disabled={row.rol === 'Administrador'}
            />
          </>
        ) : null
      )
    }
  ];

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página:',
    rangeSeparatorText: 'de',
  };

  return (
    <DataTable
      title={title}
      noDataComponent={noDataComponent}
      columns={columns}
      data={filteredItems}
      pagination
      paginationPerPage={7}
      paginationRowsPerPageOptions={[7]}
      paginationComponentOptions={paginationComponentOptions}
      paginationTotalRows={filteredNonEmptyItems.length}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
}

export default Table;