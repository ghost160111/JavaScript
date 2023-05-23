let john = { name: "John Doe" },
    lily = { name: "Lily Bush" },
    peter = { name: "Peter Drucker" };

let userRoles = new Map([
    [john, "admin"],
    [lily, "editor"],
    [peter, "subscriber"],
]);

for (const role of userRoles.entries()) {
    console.log(`${role[0].name}: ${role[1]}`);
}
