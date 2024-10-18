$(document).ready(function () { 
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(this);
        formData.append('service_id',"service_8wtcqsd");
        formData.append('template_id',"template_0c9w5pt");
        formData.append('user_id',"_jR4oROg_t_udWUni");
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
