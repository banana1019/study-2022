const express = require("express"); // express 모듈을 가져온다.
const app = express(); // 위 function을 이용해서 새로운 express app을 만든다.
const port = 5000;

// mongoose 모듈을 가져와서 어플리케이션과 mongoDB를 연결한다.
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://nana:sksk1019@cluster0.rpnegaj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

// root 디렉토리에 오면 'Hello World'를 출력해준다.
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 5000번 포트에서 앱을 실행을 해준다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// mongodb+srv://nana:<password>@cluster0.rpnegaj.mongodb.net/?retryWrites=true&w=majority
