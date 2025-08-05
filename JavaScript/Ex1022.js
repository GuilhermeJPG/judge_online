const input = require("fs").readFileSync("stdin", "utf-8");
const lines = input.split("\n");

const n = parseInt(lines[0]);

function mdc(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

for (var i = 0; i < n; i++) {
  const caso = lines[i + 1];
  const elementos = caso.split(" ");

  const [N1, El1, D1, Op, N2, El2, D2] = elementos;
  const D2_ok = D2.replace(";", " ");
  const [N1_num, D1_num, N2_num, D2_num] = [N1, D1, N2, D2_ok].map(Number);

  if (Op === "+") {
    const Num = N1_num * D2_num + N2_num * D1_num;
    const Den = D1_num * D2_num;

    const divisor = mdc(Math.abs(Num), Math.abs(Den));
    const num_simp = Num / divisor;
    const den_simp = Den / divisor;

    console.log(`${Num}/${Den} = ${num_simp}/${den_simp}`);
  } else if (Op === "-") {
    const Num = N1_num * D2_num - N2_num * D1_num;
    const Den = D1_num * D2_num;
    const divisor = mdc(Math.abs(Num), Math.abs(Den));
    const num_simp = Num / divisor;
    const den_simp = Den / divisor;

    console.log(`${Num}/${Den} = ${num_simp}/${den_simp}`);
  } else if (Op === "*") {
    const Num = N1_num * N2_num;
    const Den = D1_num * D2_num;
    const divisor = mdc(Math.abs(Num), Math.abs(Den));
    const num_simp = Num / divisor;
    const den_simp = Den / divisor;

    console.log(`${Num}/${Den} = ${num_simp}/${den_simp}`);
  } else if (Op === "/") {
    const Num = N1_num * D2_num;
    const Den = N2_num * D1_num;
    const divisor = mdc(Math.abs(Num), Math.abs(Den));
    const num_simp = Num / divisor;
    const den_simp = Den / divisor;

    console.log(`${Num}/${Den} = ${num_simp}/${den_simp}`);
  }
}
