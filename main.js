const person = {
    name:"James",
    address: {
        Tbilisi: {
            District:{
                Street:"Tamarashvili"
            }
        }
    },
    friends:[
        {closeFriend:{name:"Giga"}},
        {closeFriend:{name:"Temo"}}
    ]
} 

const deepCopy = (obj) =>{
    const result={};
    for (const key in obj){
        if(typeof obj[key] === "object"){
            if(Array.isArray(obj[key])){
                // array
                result[key]=obj[key].map(el=>deepCopy(el))
            }else{
                // object
                result[key] = deepCopy(obj[key]);
            }
        }else{
            // primitive
            result[key]=obj[key];
        }
    }
    return result;
}

// test
const person2 =deepCopy(person);
person2.name = "Temo";
person2.address.Tbilisi.District.Street = "Rustaveli";
person2.friends[0].closeFriend.name= "John";

console.log(person);
console.log(person2);