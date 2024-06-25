const express = require('express');
const app = express();

app.get("/api/customers", (req, res, next) => {
    const customers = [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        { id: 3, name: "Mike Johnson", age: 40 },
        { id: 4, name: "Jane Doe", age: 28 },
        { id: 5, name: "Micheal Page", age: 36 },
        { id: 6, name: "Peter Alter", age: 39 }
      ];
    res.json(customers);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
