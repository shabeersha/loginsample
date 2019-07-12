$(document).ready(function () {
    $("#signup-form").validate({
        rules: {
            uname: {
                required: true,
                minlength: 4
            },
            pass: {
                required: true,
                minlength: 5
            },
            confirmpassword: {
                required: true,
                minlength: 5,
                equalTo: "#pass"
            }

        },
        messages: {
            uname: {
                required: "Enter valid username",
                minlength: "min length 4"
            },
            pass: {
                required: "Password Required",
                minlength: "min length 5"
            },
            confirmpassword: {
                required: "Password",
                minlength: "min length 5",
                equalTo: "Password doesnt match"
            }
        }
    })
})