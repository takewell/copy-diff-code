# copy-diff-code
gitbook 教材内のコードコピペを省力化する Chrome 拡張

![image](https://user-images.githubusercontent.com/22574053/37599705-b4fd8f80-2bc8-11e8-9989-77013b4ad9a4.png)

## Features

- `code` タグのコンテンツをクリップボードにコピーする
- diffであった場合 の `+` 行は `+` を除去 `-` 行は行そのものを除去する

## Example

<code>
  +const diff = '+';
  -const udiff = '-';
  console.log(diff);
</code>

上記のような`code`であった場合クリップボードには次の内容がコピーされる。

```
const diff = '+';
console.log(diff);
```
