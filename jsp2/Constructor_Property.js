function Dog(name) {
    this.name = name
}
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true
    }
    return false
}
let myDog = new Dog("Black")
let ischeckDog = joinDogFraternity(myDog)
console.log(ischeckDog)