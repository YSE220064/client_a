require('dotenv').config();
    const messageModule = require('./message');
    const resultMessage = messageModule.create(process.env.NAME, process.env.NUMBER);
    const fs = require('fs');
    fs.writeFile('result.txt', resultMessage, (err) => {
        if (err) throw err;
        console.log('多分　result.txt　できたはず！');
    }
);