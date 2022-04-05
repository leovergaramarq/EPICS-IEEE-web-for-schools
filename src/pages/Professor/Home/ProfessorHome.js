//Liberias
import { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'antd';

//Componentes
import GridCourses from './../../../components/Professor/GridCourses';
import ListApps from './../../../components/Professor/ListApps';

// Mock Data
import coursesApi from '../../../mock_data/collections/course.json'
import appsApi from '../../../mock_data/collections/app.json'

import ProfessorContext from '../../../components/Professor/ProfessorContext';

//Estilos
import './ProfessorHome.scss';

export default function ProfessorHome(){
    const {username} = useContext(ProfessorContext).userInfo;
    const [apps, setApps] = useState([]);

    const filterCourses = () => coursesApi.filter(c => c.professors.some(p => p.username == username));

    useEffect(() => {
        setApps(appsApi);
    }, []);

    return (
        <div className="professor-home">
            <Row className="professor-home__content" gutter={32}>
                <Col span={14}>
                <div className="professor-home__content__sec professor-home__courses">
                    <h1 className="professor-home__content__sec__title">Cursos</h1>
                    <div className="professor-home__content__sec__content">
                        <GridCourses courses={filterCourses()}/>
                    </div>
                </div>
                </Col>
                <Col span={10}>
                <div className="professor-home__content__sec professor-home__apps">
                    <h1 className="professor-home__content__sec__title">Aplicaciones</h1>
                    <div className="professor-home__content__sec__content">
                        <ListApps apps={apps}/>
                    </div>
                </div>
                </Col>
            </Row>
        </div>
    );
}