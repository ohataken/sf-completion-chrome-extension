# sf-completion-chrome-extension

Salesforce への機械的な入力を助ける Google Chrome 拡張です。仕様に従ったJSON文字列を受け取り、フォームの内容を書き換えます。Google スプレッドシートや Google Apps Script などで JSON 文字列を生成し、1回のコピー & ペーストで Salesforce への入力を済ませることができます。

# Download

[Chrome Web Store sf-completion-chrome-extension](https://chrome.google.com/webstore/detail/sf-completion-chrome-extension/dmkbchoicclicdcmoefljimmafnfaiga)

# 入力文字列の仕様

以下のような JSON 文字列を受け付けます。

```json
{
  "items": [
    {
      "labelName": "対応日時",
      "valueType": "text",
      "value": "2021/08/09"
    },
    {
      "labelName": "対応の要旨",
      "valueType": "textarea",
      "value": "先日お問い合わせいただいたチケット番号 #12345 についてご返答のため架電。ご理解いただけたご様子。"
    },
    {
      "labelName": "キャンペーン対象者",
      "valueType": "checkbox",
      "value": true
    },
    {
      "labelName": "誕生月",
      "valueType": "select",
      "value": "6月"
    }
  ]
}
```

## items

フォームの項目を配列で持ちます。

## labelName

フォームのラベル (label タグ) の文字列を指定します。このラベルに対応する入力欄の値を変更します。

## valueType

以下のいずれかの値を受け付けます。入力欄の形式にあったものを指定してください。

* text (1行の入力欄)
* textarea (複数行の入力欄)
* checkbox (チェックボックス)
* select (プルダウン)

## value

入力欄の値を指定します。

valueType が text または textarea の場合、文字列を指定してください。

```json
{
  "labelName": "対応の要旨",
  "valueType": "textarea",
  "value": "先日お問い合わせいただいたチケット番号 #12345 についてご返答のため架電。ご理解いただけたご様子。"
}
```

valueType が checkbox の場合、 true または false を指定してください。

```json
{
  "labelName": "キャンペーン対象者",
  "valueType": "checkbox",
  "value": true
}
```

valueType が select の場合、選択肢の値を指定してください。

```json
{
  "labelName": "誕生月",
  "valueType": "select",
  "value": "6月"
}
```
