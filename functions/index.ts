import { renderHtml } from "./template";

export default {
  async fetch(request: Request): Promise<Response> {
    // JST (UTC+9) で現在日時を取得
    const now = new Date(Date.now() + 9 * 60 * 60 * 1000);
    const month = now.getUTCMonth() + 1; // 1-12
    const year = now.getUTCFullYear();

    let thanksYear: number;
    let nextYear: number;

    if (month >= 11) {
      // 11月・12月: 今年度は終わり、来年度を楽しみに
      thanksYear = year;
      nextYear = year + 1;
    } else {
      // 1月〜10月: 昨年度はありがとう、今年度を楽しみに
      thanksYear = year - 1;
      nextYear = year;
    }

    const html = renderHtml(thanksYear, nextYear);

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Cache-Control": "no-cache",
      },
    });
  },
};
