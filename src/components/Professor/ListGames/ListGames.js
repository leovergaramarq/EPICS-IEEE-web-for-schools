import { Link } from 'react-router-dom';
import { List } from 'antd';

import './ListGames.scss';

export default function GameStore(props) {
    const { games } = props;

    return (
        <List
            className='professor-list-games'
            itemLayout="vertical"
            size="large"
            // pagination={{
            //     pageSize: 3,
            // }}
            dataSource={games}
            renderItem={Game}
            bordered
        />
    );
}

function Game(props) {
    const { code, name, shortDescription, devs, skills, logo } = props;
    const linkTo = `/games/${code}`

    return (
        <List.Item
            key={code}
            actions={skills.map(s => <div>{s}</div>)}
            extra={
                <Link to={linkTo}>
                <img
                    width={100}
                    alt={`Logo de ${name}`}
                    src={logo}
                />
                </Link>
            }
        >
            <List.Item.Meta
                title={<Link to={linkTo}>{name}</Link>}
                description={`Por: ${devs.map(
                    d => d.type == 'student' ? `${d.firstname} ${d.lastname}`: d.name
                    ).join(', ')}`}
            />
            {shortDescription}
        </List.Item>
    )
}
