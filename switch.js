//if input =1, "y","yes", output = continue...
// if input = 0, "n","no", output =end....
let input =1;
switch(input) {
  case 1:
    //document.write("continue...");
    console.log("continue...");
    break;
  case "y":
    document.write("continue...");
    break;
  case "yes":
    document.write("continue...");
    break;
  case 0:
    document.write("end...");
    break;
  case "n":
    document.write("end...");
    break;
  case "no" :
    document.write("end...");
    break;
}