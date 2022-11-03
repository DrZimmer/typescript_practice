// function calculateTax(income: number): number {
//   if (income < 50_000) return income * 1.2;
//   return income * 1.3;
// }
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  }
};
