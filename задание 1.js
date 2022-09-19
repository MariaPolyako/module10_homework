const promt="12";
const promt1=+promt;

console.log(typeof promt);

console.log(typeof promt1);

function even_or_odd(promt1) {
  if(promt1 % 2 === 0)
  {
    console.log("Even");
  }
  else
  {
    console.log("Odd");
  }
};

console.log(even_or_odd(promt1));

if (isNaN(promt1)) {
  console.log("Упс, кажется вы ошиблись.");
}
 