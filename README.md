# first_sudoku

## URL

https://sudoku.mx244.com/

## サイト概要

Vanilla JavaScript で作成した数独アプリです。

難易度を選択し、通常の数独のように遊ぶことができます。

設定画面で、数独の補助機能を ON/OFF することもできます。

ルールは通常の数独同様、3×3 のブロックに区切られている 9×9 の正方形の枠内に、1〜9 までの数字を重複させずに埋めていき、全て埋まればクリアです。

miss 回数に上限は設けていないので、何度でもチャレンジできます。

Timer 機能もあるので、クリアまでの時間をタイムアタックしてみるのも良いでしょう。

<img src="https://data-m244.s3.amazonaws.com/first_sudoku/Difficulty_selection.gif" alt="難易度選択" width="36%" /> <img src="https://data-m244.s3.amazonaws.com/first_sudoku/setting.gif" alt="設定" width="60%" />
<img src="https://data-m244.s3.amazonaws.com/first_sudoku/Highlight_same_numbers.gif" alt="同じ数字をハイライト" width="36%" /> <img src="https://data-m244.s3.amazonaws.com/first_sudoku/Mistake.gif" alt="missカウント" width="36%" /> 

## 制作背景

ポートフォリオのために初めて作成したアプリです。

HTML、CSS、JavaScript の学習のため、

100% Vanilla JavaScript で作成しています。

iOS アプリの「ナンプレ　パズル」 と言うアプリを参考に作成しました。

## 使用技術

### 使用言語

- HTML
- CSS
- JavaScript

### デザイン

- figma

## インフラ構成図

<img src="https://data-m244.s3.amazonaws.com/first_sudoku/first_sudoku_infra.jpg" alt="インフラ構成図" width="80%" />

## 機能

TopPage :

- 難易度選択機能

数独画面 :

- 問題自動作成
- 初期画面でカーソルを数字が入っていないマスへセットされる。
- エリアハイライト
  - 選択したマスを基準に縦、横、3×3のグループがハイライトする。
- 同じ数字をハイライト
  - エリアの数字を選択すると、すでに表示されている同じ数字をハイライトする。
- Miss判定
  - 間違った数字をマスに入力すると、エラー動作が行われ、missの回数がカウントされる。
- タイマー機能
  - 画面表示後から時間を計測する。
  - 一時停止/再開 ができる。
- リセット機能
  - 問題を更新し、初めからスタートする。
- 戻る機能
  - TopPageへ戻る
- 使用済み数字の非表示
  - エリアに同じ数字が9個入力されている場合、入力ボタンからその数字が非表示になる。
- 設定画面表示
  - 歯車アイコンをクリック/タップで設定画面を表示する。
  
設定画面 :

- エリアハイライト機能を ON/OFF できる。
- 同じ数字のハイライト機能を ON/OFF できる。
- 閉じるボタン
  - ボタンをクリック、または、モーダル部分をクリックで設定画面を閉じる。
    

