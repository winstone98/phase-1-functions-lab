// Code your solution in this file!
/**
 * 
 * @param {Number} pickUpLctn 
 * @param {Number} scubaHq 
 * @returns 
 */
function distanceFromHqInBlocks(pickUpLctn){ 
    let scubaHq=42;
    if (pickUpLctn>scubaHq){
    return pickUpLctn-scubaHq;
    } return scubaHq-pickUpLctn;
    console.log(`Distance Below 42:${scubaHq-pickUpLctn}`)
}
const distanceInBlocks=distanceFromHqInBlocks(34)
console.log(`Distance is:${distanceInBlocks}`)
// function for calculating distance between blocksApart
function distanceFromHqInFeet(pickUpLctn) {
    let blocksApart = distanceFromHqInBlocks(pickUpLctn);
    return blocksApart * 264;
}
// function for calculating travelled distance in Feet
function distanceTravelledInFeet(start, finish) {
    if (finish > start) {
        return ((finish - start) * 264);
    } return ((start - finish) * 264);
}
// function for calculatingFare Prices
function calculatesFarePrice(start, destination) {
    let JourneyPath = distanceTravelledInFeet(start, destination);

    if (JourneyPath <= 400) {
        return 0;
    } else if (JourneyPath > 400 && JourneyPath <= 2000) {
        return ((JourneyPath - 400) * 0.02);
    } else if (JourneyPath > 2000 && JourneyPath <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
const fareprice=calculatesFarePrice()
console.log(`The total price is:${fareprice}`)