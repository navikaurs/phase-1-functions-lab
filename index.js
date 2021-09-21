// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance >= 42){
    return distance - 42
} 
else (distance < 42 ) 
    return 42 - distance
}

 function distanceFromHqInFeet(distance) {
    let dist = distanceFromHqInBlocks(distance)
    console.log (dist * 264)
    return (dist * 264)
 }
 function distanceTravelledInFeet(start , destination) {
     let blocks
     if ( start > destination ) 
        blocks = start - destination
    if (destination > start)
     blocks = destination - start
     return blocks * 264
 }
function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start , destination)
  let fare 
    if (feet <= 400){
        fare = 0
    }
    else if ( feet >400 && feet <= 2000){
        fare = ((feet - 400) * 2) /100 
    }
    else if (feet >2000 && feet < 2500) {
        fare = 25
    }
    else {
        fare = 'cannot travel that far'
    }
    return fare
}
