console.log(" Welcom by Cesar Cipher  Encryption!!");

const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];
let  phrase= process.argv[2];

const shiftNumber = process.argv[3];

function cesar (){

       if (!phrase){
    console.log("Please write your message and your shift number"); } 

    let result = '';
    let char =  char.toLowerCase() ;

        for( i=0 ; i < alphabet.length ; i++ );
        const index = alphabet.indexOf(char);
        const shiftedIndex =  (index + shiftNumber)%26;

        if (shiftNumber < 0 ){
            shiftedIndex += 26 ; }
  let newChar =  alphabet[shiftedIndex];
  result += newChar;
   
  console.log("Encrypted message:", result);
}


