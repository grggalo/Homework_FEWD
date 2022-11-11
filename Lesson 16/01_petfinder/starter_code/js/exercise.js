function selectPet(petType){

    // Get the specific pet data set
    let thePet = petData[petType];
    console.log(thePet);

    // Set the title
document.querySelector('.petDisplayName'.innerText = thePet['displayName'])


    // Empty the specification data
let specs = "";
    // Add the space required, size, weight
 specs += "<dt>Weight</dt><dd>"+ thePet ['weight'] + "</dd>";
    // Add logic to add the trainability and lap size images
if(thePetData.trainability == true){
    specs += "<dt>Trainable</dt><dd>img src=\"./img/200px-Gnome-emblem-default.svg.png\"</dd>";
    else{
        specs += "<dt>Trainable</dt><dd>img src=\"./img/200px-Gnome-emblem-unreadable.svg.png\"</dd>";
    }

    if(thePetData.trainability == true){
        specs += "<dt>Fits on Lap</dt><dd>img src=\"./img/200px-Gnome-emblem-default.svg.png\"</dd>";
        else{
            specs += "<dt>Fits on Lap</dt><dd>img src=\"./img/200px-Gnome-emblem-unreadable.svg.png\"</dd>";
        }

    // Add the foods (may require loop)
   specs += "<dt>Foods</dt><dd><ul></ul>";

   for(let i=0; thePet['foods'].length;i++){
    specs += "<li>" + thePet.foods + "</li>"
   }

   specs += "</dd>";

    // Update the images

  

        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



document.addEventListener('DOMContentLoaded', function(event) {

    // Initial run
    selectPet("dog");
    //Update whenever a new value is picked
    document.querySelector(".myClass").addEventListener("change",function(){});
});






