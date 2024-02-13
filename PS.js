// const mystring = "hello world";
// console.log(mystring.length)

// const lowercaseStr = "hello";
// const uppercaseStr = "WORLD";
// console.log(lowercaseStr.toUpperCase( )); // Output: HELLO
// console.log(uppercaseStr.toLowerCase( )); // Output: world


// let username = "ali khan";
// console.log(username.trim())

// let username = " dskl    ";
// let password = "   sjkdf   ";
// if(username.trim() === "" && password.trim() === ""){
//     console.log("please enter your password and username")
// }
// else {
//     console.log(
//         "login"
//     )
// }
// let developer = "javascript developer , javascript is good language";
// // console.log(developer.substring(10,20))
// // console.log(developer.indexOf("hello"))
// console.log(developer.replaceAll('javascript','react js'));

// const str = "apple,banana,orange";
// const spliteString = str.split("|");
// console.log(spliteString );

// const developername = "ahmed";
// const language  = "javascript";
// // let fullDetaile = developername + " is "+ language + "   " +  "developer";

// let fullDetaile = `${developername} is  ${language}  developer`;
// console.log(fullDetaile)
// console.log(developername.concat("  ",language));
// console.log(developername)
// console.log(language);
// const name = "Alice";
// const age = 30;

// const message = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message);

// const multiline = `
// This is a multiline string.
// It can span multiple lines.
// Very convenient!
// `;

// console.log(multiline);

const email = "muhammadishfaq@gmail.com";
// console.log(email.startsWith("khan"))
if(email.endsWith("@gmail.com")){
    console.log("Your email is correct");
}
else {
    console.log("Your email format is not correct")
}