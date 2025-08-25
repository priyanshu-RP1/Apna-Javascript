const win = 25;
let user;
let computerwins = false;

while (!computerwins) {
  user = Number(prompt("Enter your choice, let's see who wins"));

  if (user === win) {
    console.log(" You win! Your guess was right:", user);
    computerwins = true;
  } else if (user > win) {
    console.log(" You entered a higher number. Try again.");
  } else {
    console.log(" Your guess is lower. Try with a higher number.");
  }
}