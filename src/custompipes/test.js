function test(a, b, c, d, e, f) {
  console.log("normal");
  console.log(a, b, c, d, e, f);
}

function test2(a, ...remaing) {
  console.log("...rest");
  console.log(a);
  console.log("remaing", remaing);
}

test(1, 2, 3, 4, 5, 6);
test2(1, 2, 3, 4, 5, 62);

const ob = {
  sno: 123,
  name: "gop",
  loc: "hyd",
};

const up = {
  ...ob,
  loc: "TEST",
};

console.log(up);
