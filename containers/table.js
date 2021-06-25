import '@coreui/coreui/dist/css/coreui.min.css';

import React,{useEffect} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
 
} from '@coreui/react';
import { useSelector, useDispatch } from 'react-redux';
import {LOAD_TABLE} from './constants';
import {loadTable} from './action';








const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const fields = ['No','name','desc', 'county', 'type','updateTime']









const Table = () => { 

  const projectState = useSelector(state => state.projectList);
  console.log(projectState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:LOAD_TABLE,abc:'123'});
  }, []);
  return ( 
    <div className="container mt-5"> 
      <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
            <h3>Get data from ChtIiot</h3>
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={projectState}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'No':
                  (item)=>{
                    return( <td>
                    {projectState.indexOf(item)+1}
                    </td>)
                   
                 }

                 

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
    </div>
  )

}


export default Table;
