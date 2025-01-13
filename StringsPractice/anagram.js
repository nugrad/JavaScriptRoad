function areanagrams(str1,str2){
    let normalize=str=>str.toLowerCase().split('').sort().join('');
    return normalize(str1)===normalize(str2);
}
console.log(areanagrams("listen","silent"));