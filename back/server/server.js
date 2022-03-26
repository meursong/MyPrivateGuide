const express = require("express");
const app = express();
const port = 3002;
const fs = require("fs");
var path = require("path");
var mime = require("mime");
const fileUpload = require("express-fileupload");

const cors = require("cors");
app.use("/", express.static(path.join(__dirname, "images")));

const mysql = require("mysql");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: "true",
  })
);
app.use(fileUpload());

app.post("/makeuseracc", (req, res) => {
  const acc = req.body.acc;
  let value = [
    acc.id,
    acc.password,
    acc.name,
    acc.bday,
    acc.gender,
    acc.email,
    acc.pNum,
    (type = "U"),
    acc.zip,
    acc.addr1,
    acc.addr2,
  ];
  var sql =
    "INSERT INTO user_info (id,password, name, bday, gender, email,pNum,type, zip, addr1, addr2) VALUES (?)";
  con.query(sql, [value], function (err, result) {
    if (err) {
      console.error(err.stack);
      res.status(500).send({ res: 0 });
    } else {
      console.log("Number of records inserted: " + result.affectedRows);
      res.send({ res: result.affectedRows });
    }
  });
});

app.post("/makeguideacc", (req, res) => {
  const acc = req.body.acc;
  const languages = req.body.acc.checkedValues;
  const lgg = languages.join();
  let value = [
    acc.id,
    acc.password,
    acc.name,
    acc.bday,
    acc.gender,
    acc.email,
    acc.pNum,
    lgg,
    (type = "G"),
    acc.zip,
    acc.addr1,
    acc.addr2,
    acc.filename,
  ];

  var sql =
    "INSERT INTO user_info (id,password, name, bday, gender, email,pNum,lgg,type,zip,addr1,addr2,profile) VALUES (?)";
  con.query(sql, [value], function (err, result) {
    if (err) {
      console.error(err.stack);
      res.status(500).send({ res: 0 });
    } else {
      console.log("Number of records inserted: " + result.affectedRows);
      res.send({ res: result.affectedRows });
    }
  });
});

app.post("/upload", (req, res) => {
  let uploadFile = req.files.file;
  const fileName = req.files.file.name;

  uploadFile.mv(`${__dirname}/images/${fileName}`, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.redirect("http://localhost:8080/");
  });
}),
  app.post("/userinfo", (req, res) => {
    var sql = "SELECT * FROM user_info where type = 'G'";
    con.query(sql, function (err, result) {
      if (err) {
        res.status(500).send({ res: 0 });
      } else {
        res.send({ res: result });
      }
    });
  });

app.get("/img", function (req, res) {
  var file = __dirname + "/images/${profile}";
  var filename = path.basename(file); // 파일 경로에서 파일명(확장자포함)만 추출
  var mimetype = mime.getType(file); // 파일의 타입(형식)을 가져옴
  res.setHeader("Content-disposition", "attachment; filename=" + filename); // 다운받아질 파일명 설정
  res.setHeader("Content-type", mimetype); // 파일 형식 지정
  console.log(filename);
  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
});

app.post("/login", (req, res) => {
  const acc = req.body.logInAcc;
  let id = acc.id;
  // let value = [logInAcc.id, logInAcc.password];
  var sql = "select id, password from user_info where id=? ";
  con.query(sql, [id], function (err, result) {
    if (err) {
      res.status(500).send({ res: 0 });
    } else {
      // req.session.uid = result[0].id;
      // req.session.isLogined = true;
      // req.session.save(function () {
      //   res.redirect("/");
      // });
      res.send({ res: result });
    }
  });
});

app.post("/userquery", (req, res) => {
  const acc = req.body.logInAcc;
  let id = acc.id;
  var sql = "select * from user_info where id=? ";
  con.query(sql, [id], function (err, result) {
    if (err) {
      res.status(500).send({ res: 0 });
    } else {
      res.send({ res: result });
    }
  });
});

var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
var options = {
  host: "localhost",
  port: 3002,
  user: "root",
  password: "1234",
  database: "proj_db",
};
var sessionStore = new MySQLStore(options);

app.use(
  session({
    secret: "asdfasffdas",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`);
});

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "proj_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
