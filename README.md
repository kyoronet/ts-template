# ts-template
[![pipeline status](https://gitlab.com/kyoronet/ts-template/badges/master/pipeline.svg)](https://gitlab.com/kyoronet/ts-template/commits/master)
[![coverage report](https://gitlab.com/kyoronet/ts-template/badges/master/coverage.svg)](https://kyoronet.gitlab.io/ts-template/coverage/lcov-report/)

# CLI
| NPM コマンド | 説明                                                    |
| ------------ | ------------------------------------------------------- |
| `start`      | アプリのエンドポイント`dist/index.js`を実行します       |
| `build`      | アプリのフルビルドを行います                            |
| `dev`        | 継続的に`src`のソースファイルを監視し再コンパイルします |
| `test`       | Jestテストランナーを実行します                          |
| `lint`        | ESLintを実行します                                     |
| `doc`        | TypeDocを実行します                                     |

## 開発中
`yarn dev`を実行します。ソースファイルを監視し自動的に再コンパイルしてエンドポイントを再起動します。

## テスト中
`yarn test --watch`を実行します。`src`のソースファイルを監視し自動的に再テストを行います。

これにより`coverage/lcov-report/index.html`にカバレッジレポートを出力します。  
すべてのカバレッジレポートが必要な場合は、監視中に`a`を入力しすべてのテストを実施するか単に`yarn test`を実行します。

## コード品質
コード品質を保つために`yarn lint --fix`を実行します。  
コマンドを実行することでコードは整形されますが、エラーが出力される場合は、内容に従い整形してください。


# VSCode
## デバッグ
`Ctrl + Shift + D`でデバッガを開き、`Attach by Process ID`で開発中のプロセスにアタッチします。  
`Debug Jest Tests`でJestをVSCodeで起動します。

## コード品質
ESLintフィードバックをできるだけ早く見たい場合は、[ESLint拡張機能](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)インストールしてください。
