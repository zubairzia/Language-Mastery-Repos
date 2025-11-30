// masses in kg
const Aslam_mass = 60;
const Wasim_mass = 71;

// heights in metres (convert ft → m: 1 ft = 0.3048 m)
const Aslam_height = 5.9 * 0.3048;   // ≈ 1.80 m
const Wasim_height = 6.2 * 0.3048;   // ≈ 1.89 m

// BMI calculation
const Aslam_BMI = Aslam_mass / (Aslam_height ** 2);
const Wasim_BMI = Wasim_mass / (Wasim_height ** 2);

const markHigherBMI = Aslam_BMI > Wasim_BMI;

console.log(`Aslam's BMI: ${Aslam_BMI.toFixed(2)}`);
console.log(`Wasim's BMI: ${Wasim_BMI.toFixed(2)}`);
console.log(`Mark has higher BMI: ${markHigherBMI}`);
