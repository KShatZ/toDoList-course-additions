// $("input:checkbox").change(function(){
   
//     let deleteRequest = new XMLHttpRequest();
//     let data = {
//         checkbox: $(this).attr("name")
//     }

//     deleteRequest.open("DELETE","/remove");
//     deleteRequest.setRequestHeader("Content-Type", "application/json");
//     deleteRequest.send(JSON.stringify(data));
// });

$("input:checkbox").on("input", (function(){

    let data = {
        checkbox: $(this).attr("name")
    };

    $.ajax({
        url: "/remove",
        method: "DELETE",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data){
            console.log("Success: " + data);
            location.replace("/");
        },
        error: function(data){
            console.log("Error: " + data);
        }
    });

}));








// Above code gets the name of the checkbox that was clicked
// Send POST to express
// Use the name to find the item in the array and remove
// Redirect to home to remove that item
// Have a delay so that the item is crossed off (CSS) and then removed