let bankAccount: {money: number, deposit: (val: number) => void} = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type BankAccount = {money: number, deposit: (val: number) => void };

let myself: {name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);