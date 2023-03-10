/*ლექცია #6 - დავალება #1 - დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს 
(string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith"
მნიშვნელობით და დააბრუნებს ახალ string-ს. არ გამოიყენო string.replace() ფუნქცია.*/

let str = "დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს";

function change(str, toReplace, toReplaceWith){

return str
.trim()
.split(toReplace)
.join(toReplaceWith)

}

console.log(change("დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს","სამ","ხუთ"))


/*ლექცია #6 - დავალება #2 - დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს 
string ტიპის მნიშვნელობას (წინადადებას), მასში ყოველ სიტყვას გადაწერს 
დიდი ასოთი და დააბრუნებს ახალ წინადადებას. */


let a = "Lecture #6 - Homework #2";

function upperCase(upper){
    a = a.toUpperCase();
    return a
}

// console.log("დავალება #2 - ",upperCase(a))



/*ლექცია #6 - დავალება #3 - დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს
და დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით.
მაგალითად: ჩავთვალოთ რომ გვაქვს [{name:"Lasha", age: 30},{name:"Saba", age:20}]. ფუნქციამ
უნდა დააბრუნოს [{name:"Saba", age: 20},{name:"Lasha", age:30}]. შეგიძლიათ გამოიყენოთ sort() ფუნქცია.*/


const user = [{name:"Lasha", age: 30},{name:"Saba", age:20},{name:"Nika", age:25},{name:"Kakhi", age:36}];

    function sortUsers(){
        user.sort((a,b) => parseFloat(a.age) - parseFloat(b.age))
        return user
    }

    // console.log("დავალება #3: ",sortUsers(user))
