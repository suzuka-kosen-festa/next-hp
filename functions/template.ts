export function renderHtml(thanksYear: number, nextYear: number): string {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${thanksYear}年度鈴鹿高専祭</title>
  <meta name="description" content="${thanksYear}年度鈴鹿高専祭にご参加いただき、ありがとうございました。${nextYear}年度をお楽しみに！" />
  <meta property="og:title" content="${thanksYear}年度鈴鹿高専祭" />
  <meta property="og:description" content="${thanksYear}年度鈴鹿高専祭にご参加いただき、ありがとうございました。${nextYear}年度をお楽しみに！" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
</head>
<body>
  <div class="container">
    <h1><span class="year">${thanksYear}年度</span>鈴鹿高専祭にご参加いただき、ありがとうございました</h1>
    <p><span class="year">${nextYear}年度</span>をお楽しみに！</p>
  </div>
</body>
</html>`;
}
