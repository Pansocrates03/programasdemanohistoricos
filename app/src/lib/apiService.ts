const API_BASE_URL = "https://api.programasdemanohistoricos.mx";

export const apiUrl = (path: string): string => new URL(path, API_BASE_URL).toString();

async function request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(apiUrl(path), init);

    if (!response.ok) {
        const responseText = await response.text();
        let message = responseText || response.statusText;

        if (responseText) {
            try {
                const errorData: unknown = JSON.parse(responseText);
                if (
                    typeof errorData === 'object' &&
                    errorData !== null &&
                    'error' in errorData &&
                    typeof errorData.error === 'string'
                ) {
                    message = errorData.error;
                }
            } catch {
                // The response may contain plain text instead of JSON.
            }
        }

        throw new Error(message || `Error HTTP ${response.status}`);
    }

    return response.json() as Promise<T>;
}

function jsonRequest<T>(path: string, method: 'POST' | 'PUT', data: unknown): Promise<T> {
    return request<T>(path, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
}

function formRequest<T>(path: string, method: 'POST' | 'PUT', data: FormData): Promise<T> {
    return request<T>(path, { method, body: data });
}

export const apiService = {
    get: <T>(path: string) => request<T>(path),
    post: <T>(path: string, data: unknown) => jsonRequest<T>(path, 'POST', data),
    put: <T>(path: string, data: unknown) => jsonRequest<T>(path, 'PUT', data),
    postForm: <T>(path: string, data: FormData) => formRequest<T>(path, 'POST', data),
    putForm: <T>(path: string, data: FormData) => formRequest<T>(path, 'PUT', data),
    delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};