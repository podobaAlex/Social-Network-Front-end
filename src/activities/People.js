import '../static/css/People.css'
import User from '../components/User'
import React from 'react';

const People = () => {
    const [now, setNow] = React.useState(null)
    const usersRef = React.useRef(null);

    function getUsers() {
        let userContainer = [];
        for (let i = 0; i < 15; i++) {
            userContainer.push(User(i, null, 'name'))
        }
        usersRef.current = setNow(userContainer)
    }

    let userList = ''
    if (now != null) {
        userList = now;
    }

    React.useEffect(getUsers)

    return (
        <div className="wrapper">
            <div className="container container_people">
                <div className="users__search" contentEditable></div>
                <div className="users">
                    {userList}
                </div>
            </div>
        </div>
    )
}

export default People