document.getElementById("toggle").addEventListener("click", function (){
    console.log("checkbox is clicked on");
    if (this.checked){
        document.querySelector("#emailBox").computedStyleMap.display = 'block';
    }
    else{
        document.querySelector("#emailBox").computedStyleMap.display = 'none';
    }
})