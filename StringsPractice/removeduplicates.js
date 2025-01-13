function removeduplicate(str){
    return[...new Set(str)].join('');
}
console.log(removeduplicate("programming"));