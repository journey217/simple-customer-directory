import {useEffect, useState} from "react";
import DashboardHeader from "../Components/DashboardHeader.jsx";
import AddCustomer from "../Components/AddCustomer.jsx";
import CustomerDisplay from "../Components/CustomerDisplay.jsx";

const Dashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);
    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

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
        <div className={"dashboard_container"}>
            <DashboardHeader openModal={openModal} />
            {isLoaded &&
                <div>
                    <CustomerDisplay customers={users} setIsLoaded={setIsLoaded} />
                </div>
            }
            {showModal && (
                <AddCustomer closeModal={closeModal} setIsLoaded={setIsLoaded} />
            )}
        </div>
    )
}

export default Dashboard