class ClientValidation {

    static phoneValidator = {
        validator: v => {
            return /^(\+?\d{2})?(\(\d{3}\))?\d{3}-\d{2}-\d{2}$/.test(v);
        },
        message: "Phone must be on +xx(xx)xxx-xx-xx format"
    };

    static firstNameValidator = {
        validator: v => {
            return v.length > 0;
        },
        message: "Name can't be empty"
    };


    static lastNameValidator = {
        validator: v => {
            return v.length > 0;
        },
        message: "LastName can't be empty"
    };

    static emailValidator = {
        validator: v => {
            return v.length > 0
                && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
        },
        message: "Email is invalid or empty"
    };

}
