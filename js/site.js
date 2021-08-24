//gets values from the page
function getValues(){
    let sequence=document.getElementById("stringInput").value;
    let processedSequence=processString(sequence);
    let reversedSequence=reverseString(processedSequence);
    let check=checkPalindrome(processedSequence,reversedSequence);
    displayData(check,reversedSequence);
}
//Processes the sequence to remove spaces , capital letters and special characters
function processString(string){
    let processedString = '';
    // detects if there are special characters
    let specialCharacters='/[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+/';
    for(let i=0; i<=string.length-1;i++){
        if(!(specialCharacters.includes(string[i]))){
            processedString+=string[i];
        }
    }
    processedString=processedString.toLowerCase();
    return processedString;
}
function reverseString(string){
    let reversedString='';
    for(let i=string.length-1;i>=0;i--){
        reversedString+=string[i];
    }
    return reversedString;

}
function checkPalindrome(string, reversedString){
    if(string==reversedString){
        return true;
    }else{
        return false;
    }

}
function displayData(checkResult,reversedString){
    let jumboTron=document.getElementById("jumbotronOutput");
    let jumboTemplate=document.getElementById("jumboTemplate");
    let jumboElement=document.importNode(jumboTemplate.content,true);
    let jumboText=jumboElement.querySelectorAll("p");
    if(checkResult){
        jumboText.textContent=`the string is a palindrome, the reversed string is ${reversedString}`;
    }else{
        jumboText.textContent=`the string is a palindrome, the reversed string is ${reversedString}`;
    }
    jumboTron.appendChild(jumboText);



}