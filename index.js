let inputEle=document.getElementById("location-input");
let butn=document.getElementById("btn");

let tempVal=document.getElementById("temp-value");
let discrip=document.getElementById("weather-disc");
let locEle=document.getElementById("location");

const apiKey="83f18e5b04eee0508f6ed1015e25d664";


butn.onclick=function() {
    if(inputEle.value=="")
    alert("enter some message")

    else{
        loca=inputEle.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loca}&appid=${apiKey}`;
        fetch(url).then (res=>res.json())
        .then(data=>{
            console.log(data);
            const{name}= data;
            const{feels_like}= data.main;
            const{description}=data.weather[0];
            locEle.innerText=name;
            discrip.innerText=description;
            tempVal.innerText=Math.floor(feels_like-273);

        })

        .catch(()=>{
            alert("enter valid location");
        })
        inputEle.value="";
    }
}