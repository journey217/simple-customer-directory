
const DashboardHeader = ( { openModal } ) => {

    return (
        <div className={"dashboard_header_container"}>
            <div className={"content"}>
                <h1>{"Simple Customer Directory"}</h1>
                <div className={"button_tray"}>
                    <button className={"add_button"} onClick={openModal}>{"Add"}</button>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;