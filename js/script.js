"use strict"

const draggables = document.getElementById("movielist")
async function loader(){
 let response = await fetch("resource/data.json")
 let jsondata = await response.json()
 for(const movie of jsondata)
  {
      let child = document.createElement("li")
      child.className = "dragitems"
      child.textContent = movie.name
      let editbtn = document.createElement("button")
      editbtn.className = "editbtn"
      editbtn.innerText = "edit"
      child.appendChild(editbtn)
      let deletebtn = document.createElement("button")
      deletebtn.className = "deletebtn"
      deletebtn.innerText = "delete"
      child.appendChild(deletebtn)
      draggables.appendChild(child)
  }
}
function setDeleteBtn(){
      const deletebutton = document.querySelectorAll(".deletebtn")
      deletebutton.forEach(function(dbtn){
      dbtn.addEventListener("click",function(){
          let item = dbtn.parentElement
          item.parentElement.removeChild(item)
      })
      }) 
}
function setEditBtn(){
      const editbutton = document.querySelectorAll(".editbtn")
      editbutton.forEach(function(btn){
      btn.addEventListener("click",function(){
      let editinput = document.querySelector("#edit")
      editinput.focus();
      editinput.onblur = function(){
           let movieitem = btn.parentElement;
           movieitem.firstChild.textContent = editinput.value;
      }
})
})
}
function SetAddBtn(){
      const addbtn =  document.querySelector("#additem")
      addbtn.addEventListener("click",function(){
      let child = document.createElement("li")
      child.className = "dragitems"
      child.textContent = document.querySelector("#editor").value
      let editbtn = document.createElement("button")
      editbtn.className = "editbtn"
      editbtn.innerText = "edit"
      child.appendChild(editbtn)
      let deletebtn = document.createElement("button")
      deletebtn.className = "deletebtn"
      deletebtn.innerText = "delete"
      child.appendChild(deletebtn)
      draggables.prepend(child)
      setDelete()
      setEdit()
    })
}
loader().then(function(){
      setDeleteBtn()
      setEditBtn()
      SetAddBtn()
})
