import axios from "axios";
axios.defaults.baseURL = 'https://shope-b3.thaihm.site/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUwZmNkZDIxOGRiMDcxNzQ2NmI2MGIiLCJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJhdmF0YXIiOiJodHRwczovL21lZGlhLmlzdG9ja3Bob3RvLmNvbS9waG90b3MvYnVzaW5lc3NtYW4tc2lsaG91ZXR0ZS1hcy1hdmF0YXItb3ItZGVmYXVsdC1wcm9maWxlLXBpY3R1cmUtcGljdHVyZS1pZDQ3NjA4NTE5OD9rPTIwJm09NDc2MDg1MTk4JnM9NjEyeDYxMiZ3PTAmaD04SjNWZ09aYWJfT2lZb0l1WmZpTUl2dWNGWUI4dldZbEtuU2pLdUtlWVFNPSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMi0xMC0yMFQwNzo0NjozNy4zNDFaIiwidXBkYXRlZEF0IjoiMjAyMi0xMS0wOVQxMTowOTozNi42MjlaIiwiX192IjowLCJpYXQiOjE2NjgwNzA5NzR9.S4nlPSRhY0d9212PdPbiuYRRMA8Z-txtxTnyJ2tLSiI"

export default axios