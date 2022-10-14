
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     console.log(a);
     console.log(b);

     // Add comparison logic

   
if(isNan(a) || isNan(b)){
  comparison = "N/A";
 } 
else if(a > b){
  comparison = ">";
 } 
else if(a < b){
  comparison = "=";
 }
else {
  comparison = "=";
}
document.querySelector('#comparison').innerText = comparison;
   };