function VowelConsonant(Chr){
    let lowerlevelchr=(Chr == 'a' || Chr== 'e' || Chr == 'i' || Chr == 'o' || Chr == 'u');
    let Upperlevelchr=(Chr == 'A' || Chr == 'E' || Chr == 'I' || Chr == 'O' || Chr == 'U');

    if(lowerlevelchr || Upperlevelchr){
        console.log("Is a Vowel");
    }
    else {
        console.log("Is a Consonant");
    }
}
VowelConsonant("P");