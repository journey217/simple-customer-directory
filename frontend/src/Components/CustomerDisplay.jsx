
const CustomerDisplay = ( { customers, setIsLoaded } ) => {

    const handleRemove = async (id) => {
        let url = `${import.meta.env.VITE_API_PATH}/customers/${id}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const reply = await response.json()
            if (!reply.success) {
                console.log(reply)
            }
            setIsLoaded(false)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className={"customer_display_container"}>
            {customers.map((customer, index) => (
                <div className={"card"} key={index}>
                    <img src={customer.profile_picture_url} alt={customer.name + " profile picture"}/>
                    <div className={"card_attributes"}>
                        <div>{customer.name}</div>
                        <div><a href={`mailto:${customer.email}`}>{customer.email}</a></div>
                        <div>{customer.company_name}</div>
                        <div><a href={`tel:${customer.phone}`}>{customer.phone}</a></div>
                        <div>{customer.contract_start_date}</div>
                        <div>{customer.contract_expire_date}</div>
                    </div>
                    <div className={"button_tray"}>
                        <button className={"cancel_button"} onClick={e => handleRemove(customer.id)}>{"Remove"}</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CustomerDisplay;