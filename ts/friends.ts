class Friends {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean = false) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }

    print(): void {
        console.log(`${this.name} | ${this.age} | ${this.email} | ${this.bff}`);
    }
}

let friends: Friends[] = [];

friends.push(new Friends("Nick", 27, "nick@gmail.com"));
friends.push(new Friends("Ronny", 27, "ronny@gmail.com", true));
friends.push(new Friends("Layke", 27, "layke@gmail.com"));
friends.push(new Friends("Matt", 27, "mattgmail.com"));
friends.push(new Friends("Brady", 27, "brady@gmail.com"));

for(let friend of friends) {
    friend.print();
}