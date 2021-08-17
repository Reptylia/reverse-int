module.exports = function reverse (n) {
    let lolly = [];
    let minus = 0;
    for(let i = 0;i < String(n).length;i++) {
        if(String(n)[i] != '-') {
      lolly.push(String(n)[i]);
        } else {
        minus = 1;
        }
    }
    let poppy = lolly.reverse().join("");
   
    return +poppy;
}
