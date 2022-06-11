// information array
let Array = [
    { name: 'James', age: 9, country: 'United States' },
    { name: 'Rony', age: 31, country: 'United Kingdom' },
    { name: 'Peter', age: 58, country: 'Canada' },
    { name: 'Marks', age: 20, country: 'Spain' }
]
let table = document.createElement("table")

//  adding style to table
table.style.border="1px solid black"
table.style.width="50%"
table.style.height="50%"
document.body.appendChild(table)
let tHead = document.createElement("head")

table.appendChild(tHead)
// creating header
 let head = ["name","age","country"]
 head.forEach((item)=>{
     let th = document.createElement("th")
     th.innerHTML=item

    //  adding style to th
     th.style.border="1px solid black"

    //  adding th to table
     table.appendChild(th)
   
 })
  // creating table body and inserting information inside  

 for(let i=0; i<4;i++){
    let tr=document.createElement("tr")
    Object.values(Array[i]).map((item)=>{
        let td = document.createElement("td")
        // adding style to td
        td.style.border="1px solid black";
        
        td.innerHTML=item
        tr.appendChild(td)
    })
    let age = Object.values(Array[i])[1]
    if(age<10){
        tr.style.backgroundColor="yellow"
    }
    else if (age>=10 && age<40){
        tr.style.backgroundColor="green"
    }
    else if (age>=40 && age<80){
        tr.style.backgroundColor="red"
    }   
    else{
        tr.style.backgroundColor="blue"
    }   
    table.appendChild(tr)
 }

