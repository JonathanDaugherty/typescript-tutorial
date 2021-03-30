"use strict";
var Friends = /** @class */ (function () {
    function Friends(name, age, email, bff) {
        if (bff === void 0) { bff = false; }
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friends.prototype.print = function () {
        console.log(this.name + " | " + this.age + " | " + this.email + " | " + this.bff);
    };
    return Friends;
}());
var friends = [];
friends.push(new Friends("Nick", 27, "nick@gmail.com"));
friends.push(new Friends("Ronny", 27, "ronny@gmail.com", true));
friends.push(new Friends("Layke", 27, "layke@gmail.com"));
friends.push(new Friends("Matt", 27, "mattgmail.com"));
friends.push(new Friends("Brady", 27, "brady@gmail.com"));
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var friend = friends_1[_i];
    friend.print();
}
