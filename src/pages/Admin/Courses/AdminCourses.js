//Liberias
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import qs from 'query-string';
import { Layout, Button } from 'antd';

//Componentes
import TableCourse from '../../../components/Admin/TableCourse';

//API
// import { getColegiosApi } from '../../../api/admin';

//Estilos
import './AdminCourses.scss';

//...
const { Content } = Layout;

export default function AdminCourses(props) {
    const [courses, setCourses] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const redirectStatistics = () => {
        const query = {};
        selectedRowKeys.forEach(el => query[courses[el].code] = true)
        return {
            pathname: '/statistics',
            search: qs.stringify(query),
        }
    }

    useEffect(() => {
        setDefCourses(setCourses);
    }, []);

    return (
        <Layout className="layout">
            <div className="admin-colegio-contenido">
                <Content>
                    <Button 
                        className="colegio__button"
                    >
                        Registrar Curso
                    </Button>
                    <TableCourse 
                        courses={courses}
                        selectedRowKeys={selectedRowKeys}
                        setSelectedRowKeys={setSelectedRowKeys}
                    />
                </Content>
                
                <Link
                    // onClick = {() => {console.log(a); a = "b"}}
                    to = {redirectStatistics}
                    // to={{
                    //     pathname: '/statistics',
                    //     search: qs.stringify({
                    //         ...selectedRowKeys.map(el => {
                    //             // console.log(el);
                    //             const xd = {
                    //                 [courses[el].code]: true
                    //             }
                    //             // console.log(xd);
                    //             return xd
                    //         })
                    //     })
                    // }} 
                    target="_blank" 
                    referrerPolicy="no-referrer"
                >
                <Button 
                    disabled={!selectedRowKeys.length}
                    type="primary" 
                    // onClick={() => {console.log({
                    //     ...selectedRowKeys.map(el => {
                    //         // console.log(el);
                    //         const xd = {
                    //             [courses[el].code]: true
                    //         }
                    //         // console.log(xd);
                    //         return xd
                    //     })
                    // })}}
                >
                    Ver Seleccionados
                </Button>
                </Link>
            </div>
        </Layout>
    );
}

const setDefCourses = setCourses => {
    const courses = [
        {
            code: "C01",
            name: 'Curso 01',
            period: '2021',
            level: 'B1',
            professors: [
                {
                    firstname: 'Juan',
                    lastname: 'Pérez Arboleda',
                    username: 'jpereza',
                },
                {
                    firstname: 'Alma Patricia',
                    lastname: 'Madero Benítez',
                    username: 'amben',
                },
            ],
        },
        {
            code: "C02",
            name: 'Curso 02',
            period: '2021',
            level: 'C2',
            professors: [
                {
                    firstname: 'Juan',
                    lastname: 'Pérez Arboleda',
                    username: 'jpereza',
                },
            ],
        },
        {
            code: "C03",
            name: 'Curso 03',
            period: '2021',
            level: 'A2',
            professors: [
                {
                    firstname: 'Alma Patricia',
                    lastname: 'Madero Benítez',
                    username: 'amben',
                },
            ],
        },
    ];
    setCourses(courses);
    setCourses(courses.map(el => {
        const {code, name, period, level, professors} = el;
        return {code, name, period, level, professors};
    }));
}