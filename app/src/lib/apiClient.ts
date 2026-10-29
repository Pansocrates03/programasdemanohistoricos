const API_BASE_URL = "https://api.programasdemanohistoricos.mx";

export const apiUrl = (path: string): string => new URL(path, API_BASE_URL).toString();
