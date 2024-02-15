function countProperties(_object: { name: string; age: number; city: string; number: string; level: string; }) {
    let keys = Object.keys(obj);
   
    return keys.length;
}

let _object = {
    name: 'Diane',
    age: 20,
    city: 'Nyarutarama',
    number: '0790139377',
    level: 'Y2'
};

console.log(countProperties(_object));
