const Park = function (name, price, collectionOfDinosaurs) {
    this.name = name
    this.price = price
    this.collectionOfDinosaurs = collectionOfDinosaurs
}


Park.prototype.addDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    this.collectionOfDinosaurs.shift(dinosaur);
}

Park.prototype.dinosaurWithMostVisitors = function(){
    maxVisitors = function(){ 
    Math.max(this.dinosaur.guestsAttractedPerDay)
    return this.collectionOfDinosaurs(maxVisitors)
}
}
module.exports = Park;