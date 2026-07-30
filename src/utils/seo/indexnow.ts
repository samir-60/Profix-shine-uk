import { defaultSEO } from "./config";

export interface IndexNowResponse {
  success: boolean;
  message: string;
  statusCode?: number;
  targetUrl?: string;
  key?: string;
}

export async function submitIndexNow(urls: string[]): Promise<IndexNowResponse> {
  const host = new URL(defaultSEO.siteUrl).hostname;
  const key = defaultSEO.indexNowKey || "4c8f0e5b721a48b9918c5e6d2345ef89";
  const keyLocation = `${defaultSEO.siteUrl}/${key}.txt`;

  const payload = {
    host,
    key,
    keyLocation,
    urlList: urls.map((u) => (u.startsWith("http") ? u : `${defaultSEO.siteUrl}${u.startsWith("/") ? "" : "/"}${u}`)),
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 200 || res.status === 202) {
      return {
        success: true,
        message: `IndexNow ping successfully sent to Bing & search engines for ${urls.length} URL(s). Status: ${res.status}`,
        statusCode: res.status,
        key,
      };
    } else {
      return {
        success: false,
        message: `IndexNow submission returned HTTP status ${res.status}`,
        statusCode: res.status,
        key,
      };
    }
  } catch (err: any) {
    return {
      success: false,
      message: `Failed to ping IndexNow API: ${err?.message || "Network error"}`,
      key,
    };
  }
}
