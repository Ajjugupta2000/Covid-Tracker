function updateMap() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);
      rsp.data.forEach((element) => {
        latitude = element.latitude;
        longitude = element.longitude;

        color=element.infected;
        if(color>=0 && color<25){
            color="rgb(255, 230, 230)";
        }else if(color<50){
            color="rgb(255, 153, 153)"
        }else if(color<100){
            color="rgb(255, 77, 77)";
        }else if(color<150){
            color="rgb(255, 0, 0)"
        }else if(color<200){
            color="rgb(204, 0, 0)"
        }else if(color<250){
            color="rgb(153, 0, 0)"
        }
        else if(color<300){
            color="rgb(77, 0, 0)"
        }else{
            color="rgb(26, 0, 0)"
        }
        new maplibregl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

let interval=20000;
setInterval(updateMap, interval);

