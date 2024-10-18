$(document).ready(function () { 
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        formData.append('service_id',"service_m4tcwn8");
        formData.append('template_id',"template_hqiltdv");
        formData.append('user_id',"nnIK7kS5akhqw2OEL");
        $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
        })
        .done(function () {
            alert('성공');
        })
        .fail(function (error) {
            alert("Oops... " + JSON.stringify(error));
        });
    });
});
