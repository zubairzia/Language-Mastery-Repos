// name declaration
const X_person = "Aslam Malik";
const Y_person = "Wasim Gola";

// masses in kg
const X_mass = 60;
const Y_mass = 71;

// heights in metres (convert ft → m: 1 ft = 0.3048 m)
const X_height = 5.9 * 0.3048;   // ≈ 1.80 m
const Y_height = 6.2 * 0.3048;   // ≈ 1.89 m

// BMI calculation
const X_BMI = X_mass / (X_height ** 2);
const Y_BMI = Y_mass / (Y_height ** 2);

const HigherBMI = X_BMI > Y_BMI;

if (X_BMI > Y_BMI) {
    const msg = X_person+"'s BMI:"+X_BMI.toFixed(2)+" is Higher Than"+Y_person+"'s BMI:"+Y_BMI.toFixed(2);
    console.log(msg);
}
else{
    const msg = "Wasims's BMI:"+Y_BMI.toFixed(2)+" is Higher Than Aslam's BMI:"+X_BMI.toFixed(2);
    console.log(msg);
}
console.log(`Aslam's BMI: ${X_BMI.toFixed(2)}`);
console.log(`Wasim's BMI: ${Y_BMI.toFixed(2)}`)
