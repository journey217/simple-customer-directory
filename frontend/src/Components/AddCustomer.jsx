import { IoClose } from "react-icons/io5";
import {useState} from "react";

let defaultErrorState = {
    name: false,
    email: false,
    phone: false,
    company: false,
    startDate: false,
    endDate: false,
    profilePicture: false
}

const AddCustomer = ( { closeModal } ) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [formError, setFormError] = useState("");
    const [hasError, setHasError] = useState(defaultErrorState);

    const handleClear = () => {
        setName("");
        setEmail("");
        setPhone("");
        setStartDate("");
        setEndDate("");
        setProfilePicture("");
        setCompany("")
        setFormError("")
        setHasError(defaultErrorState)
    }

    const handleAdd = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_PATH}/customers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, company, profilePicture, phone, endDate, startDate}),
            });
            const reply = await response.json()
            if (!reply.success) {
                console.log(reply)
                let oldError = {...defaultErrorState}
                switch (reply.type) {
                    case "name":
                        oldError.name = true;
                        break;
                    case "email":
                        oldError.email = true;
                        break;
                    case "phone":
                        oldError.phone = true;
                        break;
                    case "company":
                        oldError.company = true;
                        break;
                    case "profilePicture":
                        oldError.profilePicture = true;
                        break;
                    case "startDate":
                        oldError.startDate = true;
                        break;
                    case "endDate":
                        oldError.endDate = true;
                }
                setHasError(oldError)
                setFormError(reply.message)
            } else {
                closeModal()
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className={"add_customer_modal_container"}>
            <div className={"modal_content"}>
                <div className={"modal_header"}>
                    <h2>{"Add Customer"}</h2>
                    <div onClick={closeModal} className={"close_button"}><IoClose size={"30"}/></div>
                </div>
                {formError !== "" && <div className={"form_error"}>{formError}</div>}
                <div className={"modal_form"}>
                    <div className={"input_group"}>
                        <label>{"Name"}</label>
                        <input
                            className={hasError.name ? "input_error":""}
                            type={"text"}
                            placeholder={" John Doe"}
                            onChange={e => setName(e.target.value)}
                            maxLength={30}
                            value={name}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Email Address"}</label>
                        <input
                            className={hasError.email ? "input_error":""}
                            type={"email"}
                            placeholder={" john.doe@example.com"}
                            onChange={e => setEmail(e.target.value)}
                            maxLength={30}
                            value={email}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Phone Number"}</label>
                        <input
                            placeholder={" 123-456-7890"}
                            className={hasError.phone ? "input_error":""}
                            type={"phone"}
                            onChange={e => setPhone(e.target.value)}
                            maxLength={30}
                            value={phone}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Company Name"}</label>
                        <input
                            className={hasError.company ? "input_error":""}
                            type={"text"}
                            placeholder={" Reid Petroleum"}
                            onChange={e => setCompany(e.target.value)}
                            maxLength={30}
                            value={company}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Profile Picture URL"}</label>
                        <input
                            placeholder={"www.example.com/image"}
                            className={hasError.profilePicture ? "input_error":""}
                            type={"text"}
                            onChange={e => setProfilePicture(e.target.value)}
                            maxLength={30}
                            value={profilePicture}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Contract Start Date"}</label>
                        <input
                            className={hasError.startDate ? "input_error":""}
                            type={"date"}
                            onChange={e => setStartDate(e.target.value)}
                            maxLength={30}
                            value={startDate}
                        />
                    </div>
                    <div className={"input_group"}>
                        <label>{"Contract End Date"}</label>
                        <input
                            className={hasError.endDate ? "input_error":""}
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
                    <button onClick={handleAdd} className={"add_button"}>{"Add"}</button>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer