var text1 = "Uwielbiam JavaScript";
var text2 = "Jestem świetnym programistą";

function getLongerOne(a,b){
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

console.log(getLongerOne(text1, text2));