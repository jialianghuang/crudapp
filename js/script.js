"use strict"

const draggables = document.getElementById("movielist")
async function main(){
 let response = await fetch("resource/data.json")
 let jsondata = await response.json()
 for(const movie of jsondata)
  {
        let child = document.createElement('li')
        child.className = "dragitems"
        child.textContent = movie.name
        draggables.appendChild(child)
  }
 const items = document.querySelectorAll(".dragitems")
 console.log(items) 
}
main()
