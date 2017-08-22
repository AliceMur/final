  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });


  $(uniqueForms).bind("submit", function(e) {
            var $form = $(this);
            var warningsFound = 0;
           var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
            $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");
    cache: false,
    success: function() {
      // Success message
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      .append("</button>");
      $('#success > .alert-success')
      .append("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success')
      .append('</div>');
      //clear all fields
      $('#contactForm').trigger("reset");
      },
     error: function() {
       // Fail message
       $('#success').html("<div class='alert alert-danger'>");
       $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
       .append("</button>");
       $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
       $('#success > .alert-danger').append('</div>');
       //clear all fields
       $('#contactForm').trigger("reset");
        },
