class Person {
    private _firstName: string = '';
    get firstName(): string {
        return this._firstName;
    }
    set firstName(name: string) {
		this._firstName = name.toUpperCase();
    }
}
const p = new Person();
console.log(p.firstName);
p.firstName = 'Asaad';
console.log(p.firstName);
