export const $ = sel => document.querySelector(sel);

export const formatQueryURL = (baseURL, query) => `${baseURL}?q=${query}`;
