// THEME Animals
// parentclass
class Animal {
  constructor(name, sex, diet, offspring, fictional) {
    this._name = name
    this._sex = sex
    this._diet = diet
    this._offspring = offspring
    this._fictional = fictional
  }
  
  get name() {
    return this._name
  }
  
  get sex(){
    return this._sex
  }
  
  get diet () {
   return this._diet
  }
  
  
  get fictional () {
    return this._fictional
  }
  
  get offspring(){
    return this._offspring
  }
  
  speak() {
    console.log(`Hello I am a ${this._name} and i like to eat ${this._diet}`)
  }
}

// subclasses
class Bird extends Animal {
  constructor (name, sex, diet, offspring, fictional, canFly, wingspan, nestLocation, isMigratory) {
    super(name, sex, diet, offspring, fictional)
    this._canFly = canFly
    this._wingspan = wingspan
    this._nestLocation = nestLocation
    this._isMigratory = isMigratory
  }
  
  get canFly() {
    return this._canFly
  }
  get featherType() {
    return this._featherType
  }
  get nestLocation() {
    return this._nestLocation
  }
  get isMigratory() {
    return this._isMigratory
  }
  
  fly() {
    if (this._canFly)
        console.log(`look at me, i'm FLYING and my wingspan is ${this._wingspan}. all hail me`)
    else 
      console.log(`oh no i can't fly. but i can probably do other cool things`)
  }
  
  speak() {
    console.log(`i'm a bird, look at my wings. i've got a wingspan of ${this._wingspan}, i ${this._isMigratory ? 'do' : "don't"} migrate`)
  }
}



class Reptile extends Animal{
  constructor(name,sex,diet,offspring,fictional,eggs,legs){
    super(name,sex,diet,offspring,fictional)
    this._eggs = eggs
    this._legs = legs
  }
  get eggs(){
    return this._eggs
  }
  get legs(){
    return this._legs
  }
  layEggs(){
    console.log(`I am laying eggs.`)
  }
  run(){
    console.log(`I am a reptile and I run with ${this._legs} legs.`)
  }
}
  
class Mammal extends Animal {
  constructor(name, sex, diet, offspring, fictional, liveBirth, ){
    super(name, sex, diet, offspring, fictional)
    this._liveBirth = liveBirth
    }
  
    get liveBirth(){
      return this._liveBirth
    }
  
  
  givingBirth() {
    if (this._liveBirth)
        console.log("I am a Mammal and give birth to live babies")
    else 
      console.log(" lay eggs cause I ain't raising that baby inside of me so Im not a Mammal")
  }
  
}
  

  
  
class Insect extends Animal {
  constructor(name, sex, diet, offspring, fictional, eyes, legs, canFly) {
    super(name, sex, diet, offspring, fictional)
    this._eyes = eyes
    this._legs = legs
    this._canFly = canFly
  }
  
  get eyes() {
    return this._eyes
  }
  
  get legs() {
    return this._legs
  }
  
 get canFly() {
   return this._canFly
 }
  
 swarm() {
   console.log(`The ${this.name} has swarmed your picnic.`)
 }
  
  speak() {
    console.log(`BUZZ OFF`)
  }
}


//
//
// instances 


let animals = [
  new Bird('penguin', 'male', 'sardines', 4, false, false, 30, "Antarctica", true),
  new Insect('fly', 'female', 'garbage', 150, false, 2, 6, true),
  new Reptile('Nagini','male','deer',50,false,20,0),
  new Mammal('Elephant', 'female', 'vegetarian', 1, false, true)
];
            
let Manticon = new Insect('praying mantis', 'female', 'worms', 5, false, 2, 6, true)


let usePolymorphism = () => {
  console.log('~~~~~HERE ARE THE ANIMALS~~~~~')
  animals.forEach(animal => {
    animal.speak()
    
  })
}

usePolymorphism()

console.log(animals)
