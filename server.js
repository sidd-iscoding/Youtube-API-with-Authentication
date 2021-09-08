const dotenv = require('dotenv');

//Load env vars
dotenv.config('config.env');

app.use(express.static('public'));

const port = process.env.PORT || 5000;
app.listen(port,function(){
    console.log(`listening at port ${port}`);
});
