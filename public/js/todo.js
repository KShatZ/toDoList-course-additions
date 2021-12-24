$("input:checkbox").change(function(){
    console.log($(this).attr("name"));
    
    let POST = new XMLHttpRequest();
    let data = {
        checkbox: $(this).attr("name")
    }

    POST.open("POST","/remove");
    POST.setRequestHeader("Content-Type", "application/json");
    POST.send(JSON.stringify(data));
});


// Above code gets the name of the checkbox that was clicked
// Send POST to express
// Use the name to find the item in the array and remove
// Redirect to home to remove that item
// Have a delay so that the item is crossed off (CSS) and then removed