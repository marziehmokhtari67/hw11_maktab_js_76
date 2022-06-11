function getAdd(){
    let btn = document.getElementsByTagName("button")
    console.log(btn)
    let value1 = document.getElementById("val1").value
    let value2 = document.getElementById("val2").value
    let result = Number(value1)+ Number(value2)
    if(result%2===0){
        btn[0].style.backgroundColor="blue"

    }
    else{
        btn[0].style.backgroundColor="red" 
    }
    
}