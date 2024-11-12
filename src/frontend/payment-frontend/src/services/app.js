// src/services/api.js
const BASE_URL = "http://localhost:8000/api";  // Django's URL

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};