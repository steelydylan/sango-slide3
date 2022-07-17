<!-- classes: title -->

import { YouTube } from '../src/youtube'
import { Sanko } from '../src/sanko'
import { LinkImage } from '../src/link-image'

<!-- ![](https://www.conoha.jp/wing/wptheme/sango/images/preview_image01.png) -->


# SANGO WEBINAR

2022.7.20

---

## ご案内

- チャット欄は参加者と発表者がコミュニケーションをするためにご活用ください
- セッションに関する質問はチャット欄にご記入ください
- ハッシュタグは**#sangowp**です
- 発表スライドは後で公開します


---


## steelydylan



<!-- block-start: grid -->

<!-- block-start: column -->

![](https://avatars.githubusercontent.com/u/2508691?v=4)

- SANGO 現開発者
- 息子 11ヶ月


<div style={{ display: 'flex' }}>
<a href="https://twitter.com/steelydylan" className="twitter-btn" style={{ marginRight: '20px' }}>@steelydylan</a>

<a href="https://twitter.com/sangowp" className="twitter-btn">@sangowp</a>
</div>

<!-- block-end: column -->

<!-- block-start: column -->

去年2021年の1月よりSANGOの開発を引き継いで行っています。

<Sanko 
  url="https://saruwakakun.com/sango/sango-team"
  title="SANGOの運営チームについて"
  subtitle="SANGOカスタマイズガイド"
/>

<!-- block-end: column -->

<!-- block-end: grid -->

---


## この勉強会の目的

<!-- block-start: grid -->

<!-- block-start: column -->

- SANGO 3.0の機能を抑える
- SANGO Landの活用方法を押さえる


<!-- block-end -->

<!-- block-start: column -->

![](https://www.conoha.jp/wing/wptheme/sango/images/preview_image02.png)

<!-- block-end -->

<!-- block-end -->

---

## 今日のアジェンダ

| 時刻          | 内容                                                       | 発表者       | 
| ------------- | ---------------------------------------------------------- | ------------ | 
| 20:00 ~ 20:10              | オープニング                                               |              | 
| 20:10 ~ 20:50 | SANGO 3.0の新機能紹介及び今後の展望                              | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 20:50 ~ 21:00 | SANGO Landで追加されたブロックの紹介                              | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 21:00 ~ 21:10 | SANGO Landの使い方と投稿方法紹介                              | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 
| 20:10 ~ 21:30 | SANGOブロックのカスタマイズのLT（ライトニングトーク）           |<img src="https://pbs.twimg.com/profile_images/1466045863823032320/8gf4XL6z_400x400.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} />   | 
| 21:30 ~ 22:00 | 質問への回答やフリートーク           | <img src="https://pbs.twimg.com/profile_images/818482682904518656/ACNavHHW_x96.jpg" style={{ width: '40px', height: '40px', verticalAlign: 'middle', borderRadius: '50%' }} /> | 

---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO WEBINAR

---

## SANGO 3.0の新機能

- 高速化機能の充実
- エディター機能の強化
  - 記事一覧ブロック
  - 参考ブロック
- コンテンツブロックの機能強化
- theme.jsonを追加

---

## 高速化機能の充実

- 一度読み込んだページをキャッシュする（β機能）
- HTMLを圧縮してキャッシュする
- SANGOテーマのCSSをインラインで読み込む
- SANGOテーマの2系以前のCSSを読み込まない
- SANGOテーマのJavaScriptをインラインで読み込む
- カスタムCSSのfooter出力を停止する
- jQueryを読み込まない

---

## 高速化機能実装の目的

不具合の原因になったりするプラグインを減らしたい。今回のアプデで以下のプラグインが減らせる

- Autoptimize
- WP Super Cacheなど

---

## キャッシュ機能

そもそもキャッシュとは、計算結果をあらかじめ保存しておいてその結果を返す仕組み。

- ブラウザーキャッシュ
- サーバーキャッシュ ← 今回の機能はこれ

---

## キャッシュ削除タイミング

- 記事更新時
- プラグインアップデート時
- SANGO テーマ更新時
- カスタマイザーの更新時

---

## キャッシュ削除

キャッシュ削除はツールバーより

![](/assets/delete-cache.png)


---

## エディター機能の強化

- 記事一覧ブロック
- 参考ブロック

---

## 記事一覧ブロック

長すぎるタイトルを短くして記事をピックアップ表示したい場合などに有効

![](/assets/another-title.png)

---

## 記事一覧ブロック

![](/assets/column.png)

---

## 記事一覧ブロック

![](/assets/decoration.png)

---

## 記事一覧ブロック

サイドバーなどに記事一覧を設置して現在のカテゴリーに基づいて

記事を表示したいときなどに便利

![](/assets/current-category.png)

![](/assets/same-category.png)

---

## 参考ブロック

新たに参考ブロックのデザインを2パターン用意

<!-- block-start: grid -->

<!-- block-start: column -->

![](https://saruwakakun.com/sango/wp-content/uploads/2022/07/1012b2c81ac8409a8900c5fba2708fd9.png)


<!-- block-end: column -->

<!-- block-start: column -->

![](https://saruwakakun.com/sango/wp-content/uploads/2022/07/15174ccb0bdee5edc3e0f49f03ec4547-1000x294.png)

<!-- block-end -->

<!-- block-end -->

---

## コンテンツブロック機能の強化

以下のコンテンツをコンテンツブロックとして設定可能に

- ヘッダー
- フッター
- 記事下コンテンツ
- 404ページ

---

## ヘッダー

- ヘッダーブロックを使おう

![](/assets/header.png)


---

## ヘッダー


通知ブロックも合わせて使うと便利

---

## フッター

- フッターブロックを使おう
- カラム数を設定できるから通常のフッターより便利

![](/assets/footer.png)

---

## 記事下コンテンツ

以下のコンテンツを丸っと置き換えられます！

![](/assets/entry-footer.png)

---

## 404ページ

ここの部分を置き換えられます

![](/assets/404.png)

---

## theme.jsonを追加

全体的なデザインを調整できます。ブロックでスタイリングできない範囲を設定するイメージ

- フォントの種類
- タイポグラフィー
- ブロック間のギャップ
- メインカラム、サイドカラムの割合
- メインカラムとサイドカラムのギャップ
- 角丸や影の具合

---

## theme.json


### メインカラムとサイドカラムの割合を変えたい

子テーマのtheme.jsonに以下を記述

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "custom": {
      "wrap": {
        "side": "40%"
      }
    }
  }
}
```

---

## theme.json


### メインカラムとサイドカラムのギャップを変えたい

子テーマのtheme.jsonに以下を記述

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "custom": {
      "wrap": {
        "gap": "50px"
      }
    }
  }
}
```

---

## theme.json

### 角丸具合を変えたい

子テーマのtheme.jsonに以下を記述

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 2,
  "settings": {
    "custom": {
      "rounded": {
        "medium": "4px",
        "small": "2px"
      }
    }
  }
}
```

---

## フィルター機能の強化

SANGOテーマの文言や画像を簡単なPHPで差し替えられます。

- 404画像
- 404タイトル
- この記事を書いた人

---

## フィルター機能

### 404ページ


```php
// タイトルを変えたい
add_filter('sng_notfound_title', function () {
  return "404 Not Found";
});
```


```php
// 画像を変えたい
add_filter('sng_notfound_image', function () {
  return "ここに画像のパス";
});
```

---

## フィルター機能

### この記事を書いた人


```php
add_filter('sng_author_label', function () {
  return "この記事の監修者";
});
```

---
<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# 最近追加した機能の紹介


---


## クリック率計測機能

コンテンツブロック内のリンクのクリック率を計測できます！

<Sanko
  url="https://saruwakakun.com/sango/sango-content-block"
  title="広告管理やサイトのパーツ作りに大活躍！SANGO コンテンツブロックについて"
  subtitle="SANGO カスタマイズガイド"
/>

---

## ABテスト機能

コンテンツブロック同士のABテストができます。
クリック率比較などに利用できます。

<Sanko
  url="https://saruwakakun.com/sango/sango-block-ab-test"
  title="【SANGO ABテストブロック】の使い方"
  subtitle="SANGO カスタマイズガイド"
/>

---
<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO Landのブロック紹介


---

## SANGO Landのブロック紹介

<!-- block-start: grid -->

<!-- block-start: column -->

<Sanko
  url="https://www.sangoland.app/users/sangowp/a2c19e29-0f3d-47bf-b1c3-34803efa8f0f"
  title="画像比較ブロック"
  subtitle="SANGO Land"
/>

<Sanko
  url="https://www.sangoland.app/users/sangowp/84f027d5-51de-4080-95c2-281b77b83b94"
  title="ウィンドウ下に固定で表示されるCTA"
  subtitle="SANGO Land"
/>

<Sanko
  url="https://www.sangoland.app/users/nojihata/05c48742-b534-4a31-98ce-110a205e52e6"
  title="アニメーションブロック"
  subtitle="SANGO Land"
/>

<Sanko
  url="https://www.sangoland.app/users/nojihata/e76f8111-f7a8-4acd-a567-69d67db91ea3"
  title="マイクロコピー付きアフィリエイト用ボタン"
  subtitle="SANGO Land"
/>

<!-- block-end: column -->

<!-- block-start: column -->

<Sanko
  url="https://www.sangoland.app/users/nojihata/e76f8111-f7a8-4acd-a567-69d67db91ea3"
  title="マイクロコピー付きアフィリエイト用ボタン"
  subtitle="SANGO Land"
/>

<Sanko
  url="https://www.sangoland.app/users/sangowp/5df1ba25-c208-4ac3-82fe-2cb7d27f6fd3"
  title="その場でYouTubeを再生するボタン"
  subtitle="SANGO Land"
/>

<Sanko
  url="https://www.sangoland.app/users/chabesu/ddcad5a2-1d95-4f10-b20c-aaf0acf54ebb"
  title="棒グラフと折れ線グラフが作れるブロック"
  subtitle="SANGO Land"
/>

<Sanko
  url="https://www.sangoland.app/users/nojihata/1c782f03-4271-4c5b-ba41-a43fdfc3ad4d"
  title="広告を明示するブロック"
  subtitle="SANGO Land"
/>

<!-- block-end -->

<!-- block-end -->


---

## ライトニングトーク

- <img src="https://pbs.twimg.com/profile_images/1466045863823032320/8gf4XL6z_400x400.jpg" style={{ width: '100px', height: '100px', verticalAlign: 'middle', borderRadius: '50%' }} /> @nojihata_com


---



<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->


# SANGO WEBINAR

質問コーナー

---

<!-- classes: title -->
<!-- background: '/assets/section.jpeg' -->



# SANGO WEBINAR

ご静聴ありがとうございました！
