    //use function
    function todo() {            
        //get id
 var usertext= document.getElementById("usertext")
 var list = document.getElementById("list")
 // create li button
 var li = document.createElement("li")
 var text = document.createTextNode(usertext.value)
 //appendChild
 li.appendChild(text)
 list.prepend(li)
 //  create delet button
 var detbtn= document.createElement("button")
 detbtn.innerHTML="Delet"
 li.appendChild(detbtn)
 //  create edit button
 var editbtn= document.createElement("button")
 editbtn.innerHTML="Edit"
 li.appendChild(editbtn)
 //setAttribute
 detbtn.setAttribute("onclick","delte()")
 console.log(detbtn);
 editbtn.setAttribute("onclick","edit()")
 console.log(editbtn);
 usertext.value="" 
 }

 //Function delet list
 function delte() {
     console.log(event.target.parentNode.remove());
 }

 //Function Edit list
 function edit() {  
     var oldtext = event.target.parentNode.firstChild.nodeValue
     var edittext = prompt("Enter your update value",oldtext)
     event.target.parentNode.firstChild.nodeValue=edittext 
 }