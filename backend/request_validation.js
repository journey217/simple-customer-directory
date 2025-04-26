function name_validator (name) {
    if (!name || name.trim() === "") {
        return "Name is required";
    }
    return ""
}

function email_validator (email) {
    if (!email || email.trim() === "") {
        return 'Email Address is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Invalid email address format. Please make sure email address follows <name>@<address>.<domain> format.';
    }
    return ""
}

function phone_number_validator (phone_number) {
    if (!phone_number || phone_number.trim() === "") {
        return 'Phone Number is required'
    }
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone_number)) {
        return 'Invalid phone number format. Please make sure phone number follows XXX-XXX-XXXX format.'
    }
    return ""
}

function company_validator (company) {
    if (!company || company.trim() === "") {
        return "Company Name is required";
    }
    return ""
}

function pfp_validator (pfp) {
    if (!pfp || pfp.trim() === "") {
        return "Profile Picture URL is required";
    }
    return ""
}

function date_validator (date, type) {
    if (!date || date.trim() === "") {
        return `${type} Date is required`
    }
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(date)) {
        return `Invalid ${type} Date format. Please make sure ${type} Date follows YYYY-MM-DD format.`
    }
    return ""
}

function request_validator (form) {
    const name = form.name;
    const email = form.email
    const phone = form.phone
    const company = form.company;
    const profilePicture = form.profilePicture
    const startDate = form.startDate
    const endDate = form.endDate
    let isValid = "";
    let type = null;
    isValid = name_validator(name)
    if (isValid !== "") {
        type = "name"
        return [isValid, type]
    }
    isValid = email_validator(email)
    if (isValid !== "") {
        type = "email"
        return [isValid, type]
    }
    isValid = phone_number_validator(phone)
    if (isValid !== "") {
        type = "phone"
        return [isValid, type]
    }
    isValid = company_validator(company)
    if (isValid !== "") {
        type = "company"
        return [isValid, type]
    }
    isValid = pfp_validator(profilePicture)
    if (isValid !== "") {
        type = "profilePicture"
        return [isValid, type]
    }
    isValid = date_validator(startDate, "Start")
    if (isValid !== "") {
        type = "startDate"
        return [isValid, type]
    }
    isValid = date_validator(endDate, "End")
    if (isValid !== "") {
        type = "endDate"
        return [isValid, type]
    }
    return [isValid, type]
}

module.exports = {
    request_validator
};