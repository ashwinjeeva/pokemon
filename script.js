
// fetching data from api

async function getdata(){
    try{
         for(i=1;i<51;i++){
        let data= await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        value = await data.json()
      
        c=value
        let nam =c.name
        
        let abi=[]
        c.abilities.forEach(element => {
        abi.push(element.ability.name);});
        
        let mov=[]
        c.moves.forEach(element => {
        mov.push(element.move.name);});
        
        let wei=c.weight
        
    let table=document.querySelector("#tbody")
    let cell=document.createElement("tr")
    let sno=document.createElement("td")
    let d1=document.createElement("td")
    let d2=document.createElement("td")
    let d3=document.createElement("td")
    let d4=document.createElement("td")
   
    sno.textContent=i
    cell.appendChild(sno)
    d1.textContent=nam
    cell.appendChild(d1)
    d2.textContent=abi
    cell.appendChild(d2)
    d3.textContent=mov
    cell.appendChild(d3)
    d4.textContent=wei
    cell.appendChild(d4)
    table.appendChild(cell)

        }
       
} catch(error){
       
        document.writeln(`Please check the error message :${error}`)

    }
    
   
}
getdata()
