//Liberias
// import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {HomeOutlined, TeamOutlined, RocketOutlined, BookOutlined} from '@ant-design/icons';

//Estilos
import './MenuSider.scss';

function MenuSider(props) {
    const {menuCollapsed, selectedKey, setSelectedKey} = props;
    const {Sider} = Layout;
    
    return (
        <Sider className="director-sider" collapsed={menuCollapsed}>
            <Menu 
                mode="inline" 
                selectedKeys={selectedKey}
                onSelect={e => setSelectedKey(e.key)}
                className="director-sider__menu"
            >
                <Menu.Item key="/home" className="director-sider__item" icon={<HomeOutlined/>}>
                    <Link to={"/home"}>
                    <span className="nav-text">Inicio</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/home/courses" className="director-sider__item" icon={<BookOutlined/>}>
                    <Link to={"/home/courses"}>
                    <span className="nav-text">Cursos</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/home/professors" className="director-sider__item" icon={<TeamOutlined/>}>
                    <Link to={"/home/professors"}>
                    <span className="nav-text">Profesores</span>
                    </Link>
                </Menu.Item>

                <Menu.Item key="/home/apps" className="director-sider__item" icon={<RocketOutlined />}>
                    <Link to={"/home/apps"}>
                    <span className="nav-text">Aplicaciones</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default withRouter(MenuSider);