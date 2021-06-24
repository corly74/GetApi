import '@coreui/coreui/dist/css/coreui.min.css';

import DataTable from 'react-data-table-component';
import React, { memo, useEffect, useState } from 'react';


const data = [{ id: 1, title: 'Conan the Barbarian', year: '1982', desc:'SAQ-200'},
              { id: 2, title: 'Conan the Barbarian', year: '1982', desc:'SAQ-200'}                                                    ];
const columns = [
  {
    name: 'ID',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'year',
    sortable: true,
    right: true,
  },
  {
    name: 'Desc',
    selector: 'desc',
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
