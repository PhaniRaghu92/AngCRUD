let empObj = {
  sno: 100,
  name: "Gopi",
  mobileNo: 9380747570,
  address: {
    loc: "BLR",
    pin: 560100,
  },
};

let updatedObj = {
  ...empObj,
  mobileNo: 8885663566,
  address: {
    ...empObj.address,
    pin: 1234,
  },
};

console.log(empObj);
console.log(updatedObj);
