# 安装
```
npm install -g gulp-cli
npm install
```
# 运行
```
gulp watch

```
ts文档[https://www.tslang.cn/docs/handbook/gulp.html]

# 更新代码
```
git pull https://github.com/microsoft/vscode.git master

```
# 修改文件

D:\github.com\Devout-Snail\vscode\extensions\search-result\src\extension.ts
94:			async provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentLink[]> {
94:			async provideDocumentLinks(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentLink[] | any> {
