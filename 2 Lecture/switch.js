//this is after condiitonals and part of it too 
age = 19;
switch (true) {
  case age === 10:
    console.log("You are a kid");
    break;
  case age > 10 && age < 18:
    console.log("You are a minor");
    break;
  case age >= 18:
    console.log("You are an adult");
    break;
}