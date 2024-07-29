const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middlewire 
app.use(cors());
app.use(express.json());


app.get('/',(req,res) => {
    res.send('car is running')
})

app.listen(port, () => {
    console.log(`car is runing on port ${port}`);
})