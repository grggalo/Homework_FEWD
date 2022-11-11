/* Create a script that attaches a click event to each trulia-grid-item that expands it to being featured AND removes featured from every other item 

* The method querySelectorAll() will return an array of objects that match (whereas querySelector() only returns the first one)
* The method getElementsByClassName will return an array of objects that match the class name*/

let truliaCards = document.getElementsByClassName("trulia-grid-item");




document.addEventListener('DOMContentLoaded', function(event) {
// Toggle the navigation
  document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
    e.preventDefault();
    let navSet = document.querySelectorAll('.trulia-nav > nav ul');

    for(let a=0;a<navSet.length;a++){
        navSet[a].classList.toggle('trulia-nav-mobilehide');
    }

});

// Loop through all the cards
for (let b=0;b<truliaCards.length;b++){ 
  // Add a click listener on each card
  truliaCards[b].addEventListener('click',function(){      
      // Remove the featured class
for (let c=0;c<truliaCards.length;c++){
  truliaCards[c].classList.remove('trulia-featured-grid-item');
    } 

      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
  });
}

  });  



