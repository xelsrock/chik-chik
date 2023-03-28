export const API_URL = 'https://secret-pretty-situation.glitch.me/';

/* Доступные методы:
GET /api - получить список услуг
GET /api?service={n} - получить список барберов
GET /api?spec={n} - получить список месяца работы барбера
GET /api?spec={n}&month={n} - получить список часов работы барбера
GET /api?spec={n}&month={n}&day={n} - получить список свободных часов барбера
POST /api/order - оформить заказ */