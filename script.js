let slider = document.getElementById("rangeSlider"); // Slider le liya
let output = document.getElementById("displayValue"); // Display element le liya

// Jab bhi slider ko move karenge, display update ho jayega
slider.oninput = () => (output.innerText = slider.value);





const Indicator= document.querySelector("[data-indicator]");
function setIndicator(color){
    Indicator.style.backgroundColor = color;
    Indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

setIndicator("#ccc")



function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";
    
    let characters = "";

   
    if (document.getElementById("lowercase").checked) {
        characters += lowercase;
    }
    if (document.getElementById("uppercase").checked) {
        characters += uppercase;
    }
    if (document.getElementById("numbers").checked) {
        characters += numbers;
    }
    if (document.getElementById("symbols").checked) {
        characters += symbols;
    }
    if (characters.length === 0) {
        alert("Please select at least one option for password generation.");
        return;}



    
    let password = "";
    const passwordLength = slider.value; 
    if(slider.value<4 ){
        setIndicator('#ff0000')
    }
    if((4<= slider.value && slider.value<=7) && ((document.getElementById("symbols").checked) && (document.getElementById("numbers").checked)) ){

        if((document.getElementById("lowercase").checked || document.getElementById("uppercase").checked)){
            setIndicator('#ffa500')
        }
        else{
            setIndicator('#ff0000')
        }
    }
    else{
        setIndicator('#ff0000')
    }
    if( (slider.value>7)   ){
        if(((document.getElementById("symbols").checked) && (document.getElementById("numbers").checked) && (document.getElementById("lowercase").checked ) && (document.getElementById("uppercase").checked) )){
            setIndicator('#008000')
        }
       else{

        setIndicator('#ffa500')
       }
    }
    for (let i = 0; i < passwordLength; i++) {
        const randomindex = Math.floor(Math.random() * characters.length);
        password += characters[randomindex];
    }

    // Show the generated password
    document.getElementById("generatedPassword").value = password;
}
