function speedDetector(speed){
 //it checks the speed limit 
 if(speed<=70){
    return("OK");
 }else{
    //calculate the demerit points
    demeritPoints = Math.floor((speed - 70) / 5)
    // suspends the license if the demerit points exceed 12
    if(demeritPoints>12){
        return ("License suspended");
    }else{
        return ("points",demeritPoints)
    }
  }  
}


