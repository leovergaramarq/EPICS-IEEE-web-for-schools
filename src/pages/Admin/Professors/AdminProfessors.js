import { useState, useEffect, useContext } from 'react';
import TableProfessors from '../../../components/Admin/TableProfessors';

import AdminContext from '../../../components/Admin/AdminContext';

import userApi from '../../../mock_data/collections/user.json';

import './AdminProfessors.scss';

export default function AdminProfessors(props) {
    const [professors, setProfessors] = useState([]);
    const { school, rowSel, setRowSel, addRow, setAddRow, editRow, setEditRow, deleteRow, setDeleteRow } 
        = useContext(AdminContext);

    useEffect(() => {
        if(editRow) {
            
            setEditRow(false);
        }
    }, [editRow]);

    useEffect(() => {
        if(addRow) {
            
            setAddRow(false);
        }
    }, [addRow]);
    
    useEffect(() => {
        if(deleteRow) {
            // setProfessors(professors.filter(p => p.username !== rowSel.username))
            const temp = professors;
            temp.splice(temp.findIndex(p => p.username === rowSel.username), 1)
            setProfessors(temp);

            setRowSel(null);
            setDeleteRow(false);
        }
    }, [deleteRow]);

    useEffect(() => (
        setProfessors(userApi.filter(u => u.school.code === school && u.role === 'professor'))
    ), []);

    return (
        <div className='admin-professors'>
            <TableProfessors
                professors={professors}
            />
        </div>
    )
}