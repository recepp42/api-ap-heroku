const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
app.options('*', cors({{
        credentials: true,
        origin: 'https://zen-clarke-0d9d12.netlify.app/'}));

app.get('/', (req, res) => res.send('‘I modified this API'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
