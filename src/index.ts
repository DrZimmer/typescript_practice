// function calculateTax(income: number): number {
//   if (income < 50_000) return income * 1.2;
//   return income * 1.3;
// }
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union types
function kgToLbs(weight: number | string): number {
  //narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

//intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100

