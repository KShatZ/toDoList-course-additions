exports.getDate = function() {

    let date = new Date();
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
   return date.toLocaleDateString("en-US", options); //Returns formated date with option settings
}
