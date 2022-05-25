
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#searchTable tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    $("#resetInput").on('click',function(){
      value = "";
      $("#myInput").val("")
      $("#searchTable tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    })
  });

  $("#formId").on("submit", function (e) {
    e.preventDefault();
    var formValues = $(this).serialize();
    $.ajax({
      type: "POST",
      url: "/submitForm",
      contentType: 'application/x-www-form-urlencoded',
      dataType: 'json',
      data: formValues,
      success: function (response) {
        console.log(response)
        if(response.message == false){
          alert(response.data);
        }else{
          var append = `<tr>
                          <td>${response.data.length}</td>
                          <td>${response.data[response.data.length-1].Firstname}</td>
                          <td>${response.data[response.data.length-1].Lastname}</td>
                          <td>${response.data[response.data.length-1].email}</td>
                        </tr>
                       `
        $("#searchTable tbody").append(append);
        alert("DATA INSERT SUCCESSFULLY");
        }
      },
      error: function () {
        console.log("some ajax Error found-----HINT-(please check your ajax syntex.)");
      },
    });

    $("#formId").each(function () {
      this.reset();
    })
  })

});


