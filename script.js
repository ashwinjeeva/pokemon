
// fetching data from api

async function getdata(){
    try{
         for(i=1;i<51;i++){
        let data= await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        value = await data.json()
      
        c=value
        let nam =c.name
        console.log(nam);
        let abi=[]
        c.abilities.forEach(element => {
        abi.push(element.ability.name);});
        console.log(abi);
        let mov=[]
        c.moves.forEach(element => {
        mov.push(element.move.name);});
        console.log(mov);
        let wei=c.weight
        console.log(wei);
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
        console.log(`Please check the error message :${error}`);
        document.writeln(`Please check the error message :${error}`)

    }
    
   
}
getdata()






// fetch(url)
// .then((response)=>response.json())
// .then((data)=>{
// console.log(data.results);
// })
// .catch((err)=>{
//     console.log("error no data");
// })

// getting their values
// console.log(value.name)
// console.log(value.abilities)
// console.log(value.moves[0].move.name)
// console.log(value.weight)
// console.log(value)


        // console.log(c.abilities[0].ability.name)
        // console.log(c.moves[0].move.name)
        // console.log(c.weight)

          // document.getElementById("name").innerHTML=nam
        // document.getElementById("ability").innerHTML=abi
        // document.getElementById("move").innerHTML=mov
        // document.getElementById("weight").innerHTML=wei


        
        
// async function getdata(){
//     try{
//             let data= await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
//             value = await data.json()
//             return value

//         }

//             console.log(getdata());
        
//                 logic part
//                 for(i=0;i<51;i++){
//                 let individual_url=value.results[i].url
//                 let c= await fetch(individual_url)
//                 c= await c.json()
//                 let nam =c.name
//                 console.log(nam);
//                 let abi=[]
//                 c.abilities.forEach(element => {
//                 abi.push(element.ability.name);});
//                 console.log(abi);
//                 let mov=[]
//                 c.moves.forEach(element => {
//                 mov.push(element.move.name);});
//                 console.log(mov);
//                 let wei=c.weight
//                 console.log(wei);
              
        
//             let table=document.querySelector("#tbody")
//             let cell=document.createElement("tr")
//             let sno=document.createElement("td")
//             let d1=document.createElement("td")
//             let d2=document.createElement("td")
//             let d3=document.createElement("td")
//             let d4=document.createElement("td")
           
//             sno.textContent=i+1
//             cell.appendChild(sno)
//             d1.textContent=nam
//             cell.appendChild(d1)
//             d2.textContent=abi
//             cell.appendChild(d2)
//             d3.textContent=mov
//             cell.appendChild(d3)
//             d4.textContent=wei
//             cell.appendChild(d4)
//             table.appendChild(cell)
            
                
        
//         }
               
        
                
                
            
//             } catch(error){
//                 console.log(`Please check the error message :${error}`);
//                 document.writeln(error)
            
//             }
            
           
//         }
//         getdata()

//     async function getdata(){
        
//             var data= await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
//             value = await data.json()
//             return value

//         }
        
//     async function gets(){
//         try{
//             for(i=0;i<51;i++){
//             var  res= await getdata()
            
           
                        
//                          var individual_url= await res.results[i].url
//                          var c= await fetch(individual_url)
//                          q= await c.json()
//                          var nam = q.name
//                          console.log(nam)
                     
                        
//                     }
//         //                 let abi=[]
//         //                 c.abilities.forEach(element => {
//         //                 abi.push(element.ability.name);});
//         //                 console.log(abi);
//         //                 let mov=[]
//         //                 c.moves.forEach(element => {
//         //                 mov.push(element.move.name);});
//         //                 console.log(mov);
//         //                 let wei=c.weight
//         //                 console.log(wei);
                      
                
//         //             let table=document.querySelector("#tbody")
//         //             let cell=document.createElement("tr")
//         //             let sno=document.createElement("td")
//         //             let d1=document.createElement("td")
//         //             let d2=document.createElement("td")
//         //             let d3=document.createElement("td")
//         //             let d4=document.createElement("td")
                   
//         //             sno.textContent=i+1
//         //             cell.appendChild(sno)
//         //             d1.textContent=nam
//         //             cell.appendChild(d1)
//         //             d2.textContent=abi
//         //             cell.appendChild(d2)
//         //             d3.textContent=mov
//         //             cell.appendChild(d3)
//         //             d4.textContent=wei
//         //             cell.appendChild(d4)
//         //             table.appendChild(cell)
                    
                        
                
            
//         // }
//     }
//     catch(error){
//                     console.log(`Please check the error message :${error}`);
//                     document.writeln(error)
                   
                
//                 }
//             }
         
// gets();
