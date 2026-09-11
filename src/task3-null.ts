// 1. Функция приветствия.
// Если name передан (например, "Алиса"), вернуть строку: "Привет, Алиса!"
// Если name равен undefined, вернуть строку: "Привет, Гость!"
export function greet(name: string | undefined): string {
  // Напишите код здесь
}

// 2. Функция расчета итоговой цены.
// Если discount передан (например, 10), вернуть: price - discount
// Если discount равен null, вернуть: price (без изменений)
export function applyDiscount(price: number, discount: number | null): number {
  // Напишите код здесь
}

// 3. Функция получения текста ошибки по коду.
// Если code === undefined, вернуть: "Неизвестная ошибка"
// Если code === 404, вернуть: "Не найдено"
// Если code === 500, вернуть: "Внутренняя ошибка"
// Для любого другого числа вернуть: "Ошибка <code>" (например, "Ошибка 403")
export function getErrorMessage(code: number | undefined): string {
  // Напишите код здесь
}