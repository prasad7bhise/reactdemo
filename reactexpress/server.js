const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'Lionel ', lastname: 'Messi'},
        {id: 2, firstName: 'Neymar', lastname: 'Jr'},
        {id: 3, firstName: 'Antoine ', lastname: 'Griezmann'}
    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));