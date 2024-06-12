export async function fetchResource<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      // エラーハンドリング
      switch (response.status) {
        case 400:
          throw new Error('400 Bad Request: The server could not understand the request due to invalid syntax.');
        case 401:
          throw new Error('401 Unauthorized: The client must authenticate itself to get the requested response.');
        case 403:
          throw new Error('403 Forbidden: The client does not have access rights to the content.');
        case 404:
          throw new Error('404 Not Found: The server can not find the requested resource.');
        case 500:
          throw new Error(
            "500 Internal Server Error: The server has encountered a situation it doesn't know how to handle."
          );
        default:
          throw new Error(`Unexpected error: ${response.status.toString()} ${response.statusText.toString()}`);
      }
    }

    // レスポンスがJSON形式の場合の処理
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return (await response.json()) as T;
    }

    // テキスト形式のレスポンスの処理
    return (await response.text()) as unknown as T;
  } catch (error) {
    console.error('Fetch error:', (error as Error).message);
    throw error;
  }
}
