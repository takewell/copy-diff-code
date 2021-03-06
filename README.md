# copy-diff-code
gitbook github のコンテンツのコピペを省力化する Chrome 拡張

![image](https://user-images.githubusercontent.com/22574053/37599705-b4fd8f80-2bc8-11e8-9989-77013b4ad9a4.png)

## Target

- Gitbook packages
- GitHub README

## Features

- `code` タグのコンテンツをクリップボードにコピーする
- diffであった場合, `+` 行は `+` を除去 `-` 行は行そのものを除去する

## Example

```
+const diff = '+';
-const udiff = '-';
console.log(diff);
```

上記のような`code`であった場合クリップボードには次の内容がコピーされる。

```
const diff = '+';
console.log(diff);
```

## Installation

[Releases](https://github.com/takewell/copy-diff-code/releases) からソースをダウンロードし、
Chrome のアドレスバーから `chrome://extensions/` に遷移、デベロッパーモードに変更、`app`ディレクトリを選択する。

## Develop

`node.js` や `gulp` が グローバルインストールされている前提。
```
git clone git@github.com:takewell/copy-diff-code.git
npm i
gulp build
```
Chrome のアドレスバーから `chrome://extensions/` に遷移、デベロッパーモードに変更、`app`ディレクトリを選択する。

## ToDo

 - [ ] 別サイトへの対応 (できれば全てのサイトで可能にしたい)
 - [ ] GitHub の commit diff のコピーを可能にする
 - [ ] Code コンテンツ部分の色の反転がしたい
 - [ ] おじさんのアイコンを変えたい

## 参考にさせていただいたリンク

- https://github.com/howdy39/q-accelerator
- https://qiita.com/thr3a/items/702e58f5d793332a1001

