import '@coreui/coreui/dist/css/coreui.min.css';
// import {
//   CDataTable, CTable, CCard, CContainer, CButton, CCardBody, CTableHead, CTableRow, CTableHeaderCell,
//   CTableDataCell, CTableBody,
// } from '@coreui/react';
// import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import React, { memo, useEffect, useState } from 'react';


const data = [{ ID: 1801387266, name: 'Conan the Barbarian', desc:'SAQ-200',type:'general'},
              { ID: 1801387266, name: 'Conan the Barbarian', desc:'SAQ-200',type:'general'}                                                    ];
const columns = [
  {
    name: 'ID',
    selector: 'ID',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },

  {
    name: 'Desc',
    selector: 'desc',
    sortable: true,
    right: true,
  },
  {
    name: 'Type',
    selector: 'type',
    sortable: true,
    right: true,
  },
];



const Table = () => {
  return (
    <div className="container mt-5">
      <DataTable
        title="Arnold Movies"
        columns={columns}
        data={data}
      />



    </div>
  )
};


export default Table;
