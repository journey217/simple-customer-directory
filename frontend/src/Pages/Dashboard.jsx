import {useEffect, useState} from "react";
import DashboardHeader from "../Components/DashboardHeader.jsx";

const Dashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        if (!isLoaded) {
            fetchUsers()
        }

    }, [isLoaded]);

    const fetchUsers = async () => {
        let url = `${import.meta.env.VITE_API_PATH}/customers`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let reply = await response.json();
            if (reply.success) {
                console.log(reply)
                setUsers(reply.data);

            } else {
                console.log(reply.message)
            }
            setIsLoaded(true)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <DashboardHeader />
            {isLoaded &&
                <div>
                    {users.map(user => (
                        <div key={user.id}>
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Dashboard