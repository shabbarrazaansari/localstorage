let meobj = {
    me:"shabbar",
    age:27
};
console.log(meobj);

let objserialized = JSON.stringify(meobj);
console.log(objserialized);
localStorage.setItem("me",objserialized);
let deserialized = JSON.parse(localStorage.getItem("me"));