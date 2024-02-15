function convertToArray(obj: Record<string, string>) {
    
    return Object.entries(obj);
}

var obj = { Daddy: 'Joseph', Mummy: 'Claire', Brother: 'Richard' };
var result = convertToArray(obj);

console.log(result);