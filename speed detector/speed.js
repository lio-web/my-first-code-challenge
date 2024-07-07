function speedInput(speed){
 const speedLimmit="70"
 let  demeritpoints="0"
 if (speed > speedLimit) {
    demeritPoints = Math.floor((speed - speedLimit) / 5);
    //it divides the speed above 70 by 5
  }
}
function calculate(){
    const demeritPoints= calculateDemeritPoints(speed);
if (demeritPoints>0){
    return ("points",demeritPoints);
}else if (demeritpoints>12){
    return ("License suspended")
}else{
    return "OK"
    //returns "OK"if the speed is below 70km/hr
}
}
