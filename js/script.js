"use strict"
const url = "https://imdb8.p.rapidapi.com/title/get-top-stripe?currentCountry=US&purchaseCountry=US&tconst=tt0944947"
const apikey = {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "573fcb6804msha24855d7f2b3038p1b9824jsn203e11c2be11"
}

const draggables = document.getElementById("movielist")
async function loader(){
 let response = await fetch(url, {
	"method": "GET",
	"headers": apikey
})
 let jsondata = await response.json()
      let child = document.createElement("li")
      child.className = "dragitems"
      child.textContent = jsondata.title.title
      let editbtn = document.createElement("button")
      editbtn.className = "editbtn"
      editbtn.innerText = "edit"
      child.appendChild(editbtn)
      let deletebtn = document.createElement("button")
      deletebtn.className = "deletebtn"
      deletebtn.innerText = "delete"
      child.appendChild(deletebtn)
      let favobtn = document.createElement("button")
      favobtn.className = "fa fa-star"
      child.appendChild(favobtn)
      draggables.appendChild(child)
  
}

function  setEdit(btn){
      btn.addEventListener("click",function(){
      btn.parentElement.classList.add("focus")
      let editinput = document.querySelector("#edit")
      editinput.focus();
      let movieitem = btn.parentElement;
      editinput.value = movieitem.firstChild.textContent;
      editinput.onblur = function(){
        btn.parentElement.classList.remove("focus")
        if(editinput.value){
           let movieitem = btn.parentElement;
           movieitem.firstChild.textContent = editinput.value;
           editinput.value="";
            }
      }

})
}

function setDelete(dbtn){
      dbtn.addEventListener("click",function(){
            let item = dbtn.parentElement
            item.parentElement.removeChild(item)
        }) 
}

function setFav(fbtn){
      
      fbtn.addEventListener("click",function() {
      if(fbtn.className == "fa fa-star"){
      let favlist = document.querySelector("#favlist")
      let child = document.createElement("li")
      child.textContent = fbtn.parentElement.childNodes[0].textContent
      favlist.appendChild(child)
      this.className = "fa fa-star checked"
      }
      })
}

function setFavBtn() {
      const favbtn = document.querySelectorAll(".fa")
      favbtn.forEach((button)=>setFav(button))
}

function setDeleteBtn(){
      const deletebutton = document.querySelectorAll(".deletebtn")
      deletebutton.forEach((button)=> setDelete(button)) 
}

function setEditBtn(){
      const editbutton = document.querySelectorAll(".editbtn")
      editbutton.forEach((button)=> setEdit(button))
}
function SetAddBtn(){
      const addbtn =  document.querySelector("#additem")
      addbtn.addEventListener("click",function(){
      let additem = document.querySelector("#editor")
      if(additem.value){
      let child = document.createElement("li")
      child.className = "dragitems"
      child.textContent = additem.value
      let editbtn = document.createElement("button")
      editbtn.className = "editbtn"
      editbtn.innerText = "edit"
      setEdit(editbtn)
      child.appendChild(editbtn)
      let deletebtn = document.createElement("button")
      deletebtn.className = "deletebtn"
      deletebtn.innerText = "delete"
      setDelete(deletebtn)
      child.appendChild(deletebtn)
      let favobtn = document.createElement("button")
      favobtn.className = "fa fa-star"
      setFav(favobtn)
      child.appendChild(favobtn)
      draggables.prepend(child)
      additem.value = ""
      }
    })
}

const modal = document.getElementById("myModal");
const favbtn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
favbtn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

loader().then(function(){
      setDeleteBtn()
      setEditBtn()
      SetAddBtn()
      setFavBtn()
})
