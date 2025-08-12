// パッケージのインポート
import dotenv from "dotenv";
import express from "express";
import { initDB } from "./config/db.js";

// 環境変数の読み込み
dotenv.config();

// Expressアプリケーションのインスタンスを作成
const app = express();
const PORT = process.env.PORT || 5001; // ポート番号を環境変数から取得、なければ5001を使用

// ルートエンドポイントの作成
app.get("/", (req, res) => {
  try {
    // データベースからデータを取得する例
    // const [result] = await sql`SELECT NOW();`;
    // res.json({ message: "Hello, World!", databaseTime: result.now });

    res.send("Server is up and runningtokyo");
  } catch (error) {
    // console.error("Error fetching from database:", error);
    // res.status(500).send("Internal Server Error");
  }
});

console.log(process.env.PORT);

// サーバーの起動
// app.listen(PORT, () => {
//   console.log(`Server is up and running on PORT:${PORT}`);
// });

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
