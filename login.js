const fs = require("fs");
const login = require("fca-manhdz2004");

var credentials = {email: "BOT KARMA version 2.0.0", password: "mua file bot ib m.me/nguyenquoctruongan.info"}; // thông tin tk

login(credentials, (err, api) => {
    if(err) return console.error(err);
    // đăng nhập
    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState())); //tạo appstate
});