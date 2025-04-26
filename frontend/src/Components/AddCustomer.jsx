import { IoClose } from "react-icons/io5";
import {useState} from "react";

const AddCustomer = ( { closeModal } ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    const handleClear = () => {
        setName("");
        setEmail("");
        setPhone("");
        setStartDate("");
        setEndDate("");
        setProfilePicture("");
        setCompany("")
    }

    const handleFormatEmail = (email) => {
        setEmail(email);
    }

    return (
        <div className={"add_customer_modal_container"}>
            <div className={"modal_content"}>
                <div className={"modal_header"}>
                    <h2>{"Add Customer"}</h2>
                    <div onClick={closeModal} className={"close_button"}><IoClose size={"30"}/></div>
                </div>
                <div className={"modal_form"}>
                    <div className={"input_group"}>
                        <label>{"Name"}</label>
                        <input
                            type={"text"}
                            onChange={e => setName(e.target.value)}
                            maxLength={30}
                            value={name}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Email"}</label>
                        <input
                            type={"email"}
                            onChange={e => handleFormatEmail(e.target.value)}
                            maxLength={30}
                            value={email}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Phone Number"}</label>
                        <input
                            type={"phone"}
                            onChange={e => setPhone(e.target.value)}
                            maxLength={30}
                            value={phone}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Company"}</label>
                        <input
                            type={"text"}
                            onChange={e => setCompany(e.target.value)}
                            maxLength={30}
                            value={company}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Profile Picture URL"}</label>
                        <input
                            type={"text"}
                            onChange={e => setProfilePicture(e.target.value)}
                            maxLength={30}
                            value={profilePicture}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Contract Start Date"}</label>
                        <input
                            type={"date"}
                            onChange={e => setStartDate(e.target.value)}
                            maxLength={30}
                            value={startDate}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Contract End Date"}</label>
                        <input
                            type={"date"}
                            onChange={e => setEndDate(e.target.value)}
                            maxLength={30}
                            value={endDate}
                        />
                    </div>
                </div>
                <div className={"button_tray"}>
                    <button onClick={closeModal} className={"cancel_button"}>{"Cancel"}</button>
                    <button onClick={handleClear} className={"clear_button"}>{"Clear"}</button>
                    <button className={"add_button"}>{"Add"}</button>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer