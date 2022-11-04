

let text = document.getElementById('text');
let print = document.getElementById('print');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

 

 function findWeather(){


  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=2da3f98cbe9f7739b9ec0464cce20797`)
   .then(response => response.json())
    .then(data =>{
      // let result = document.getElementById('print');
      // result.innerHTML = data;
      console.log(data)
      console.log(data.main.temp)
      console.log(data.coord.lon)
      console.log(data.coord.lat)
      console.log(data.wind.speed)
    
    })

 }
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) =>{
      let flag1 = data[1].flags.svg;
      let flag2 = data[2].flags.svg;
      let flag3 = data[4].flags.svg;
      img1.setAttribute('src', `${flag1}`)
      img2.setAttribute('src', `${flag2}`)
      img3.setAttribute('src', `${flag3}`)
   
      console.log(data[91])
      console.log(data[1].capital[0])
      console.log(data[1].name.common)
      console.log(data[1].latlng)
      console.log(data[1].region)
      console.log(data[1].idd.root)
      console.log(data.length)

      for(i=0; i< data.length; i++){
        if(data[i].name.common == "India"){
          console.log(indexOf(data[i]))
        }
      }
  
   })



 
