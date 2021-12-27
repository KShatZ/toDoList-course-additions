const checkboxes = document.querySelectorAll("input[type='checkbox']");

for (let i = 0; i < checkboxes.length; i++){

    checkboxes[i].addEventListener("input", function(event){

        let data = {checkbox: event.target.name};
    
        fetch("/remove", {
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => {

            if(response.status == 200){ //OK response code
                //Have a timeout so user can see the CSS cross of first before disappearing
                setTimeout(function(){
                    location.replace("/");
                }, 500);
            }
        })
        .catch(error => {
            console.log(error);
        });
    });
}

// Currently the code above accomplishes removal of to-do item with help of express and a page reload
// Will want to redo this later where the removal happens with DOM maniupulation (element.remove I beleive)
// without page reloading.