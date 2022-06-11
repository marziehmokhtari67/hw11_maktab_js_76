/// EX1
// /setting the color rows of table
//  first row
let primary  = document.getElementById("primary")
primary.setAttribute("class","text-center  bg-blue-300 border-b  border-b-blue-400")
// second row
let Secondary = document.getElementById("secondary")
Secondary.setAttribute("class","text-center  bg-pink-100 border-b border-b-pink-200")
// third row
let success = document.getElementById("success")
success.setAttribute("class","text-center  bg-green-100 border-b border-b-green-200")
// forth row
let danger = document.getElementById("danger")
danger.setAttribute("class","text-center  bg-pink-300 border-b border-b-pink-400")
// fifth row
let warning = document.getElementById("warning")
warning.setAttribute("class","text-center  bg-yellow-200 border-b border-b-yellow-400")
// /sixth row
let info = document.getElementById("info")
info.setAttribute("class","text-center  bg-blue-200 border-b border-b-blue-300")
// seventh row
let light = document.getElementById("light")
light.setAttribute("class","text-center  bg-salt-50 border-b border-b-salt-100")
// /8th row
let dark = document.getElementById("dark")
dark.setAttribute("class","text-center text-white  bg-gray-800")


// EX2
// creating botton
let bottonRemove=document.createElement("botton")
bottonRemove.setAttribute("onclick","removing()")
bottonRemove.innerHTML="Remove rows "
bottonRemove.setAttribute("class","border border-1 bg-purple-500 mb-5 w-40 text-center rounded-md font-bold h-10 py-1")
document.body.prepend(bottonRemove)
let tr = document.querySelectorAll("tr")
function removing(){
    
    for(let i=1 ;i<6;i++){
        tr[i].remove()
    }
}
// EX3
// adding rows
let bottonAdd =document.createElement("botton")
bottonAdd.setAttribute("onclick","adding()")
bottonAdd.innerHTML="Add rows "
bottonAdd.setAttribute("class","border border-1 bg-purple-500 mt-40 w-40 text-center rounded-md font-bold h-10 py-1 mt-10")
document.body.append(bottonAdd)
function adding(){
    
    let tbody= document.getElementsByTagName("tbody")
    console.log(tbody)
    // creating new row
    let new_tr=document.createElement("tr")
    new_tr.setAttribute("class","text-center  bg-green-400 border-b border-b-green-200")
    // creating new td
    let new_first_td=document.createElement("td")
    new_first_td.innerHTML="dark"
    new_tr.appendChild(new_first_td)
    
   
    for(let i=0; i<2 ; i++){
        let new_rest_td = document.createElement("td")
        new_rest_td.setAttribute("class","font-light")
        new_rest_td.innerHTML="Cell"
     new_tr.appendChild(new_rest_td)   
    }
    // adding rows
    for(let i=1 ;i<4;i++){
         tbody[0].append( new_tr )
    }
}
// 
