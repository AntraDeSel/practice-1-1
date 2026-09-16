// 1. Функция приветствия.
// Если name передан (например, "Алиса"), вернуть строку: "Привет, Алиса!"
// Если name равен undefined, вернуть строку: "Привет, Гость!"
export function greet(name: string | undefined): string {
  if (name !== undefined) {
    return "Привет, " + name + "!";
  } 
  return "Привет, Гость!";
}

// 2. Функция расчета итоговой цены.
// Если discount передан (например, 10), вернуть: price - discount
// Если discount равен null, вернуть: price (без изменений)
export function applyDiscount(price: number, discount: number | null): number {
  if (typeof discount === "number") {
    return price - discount;
  }
  if (discount == null) {
    return price;
  }
}

// 3. Функция получения текста ошибки по коду.
// Если code === undefined, вернуть: "Неизвестная ошибка"
// Если code === 404, вернуть: "Не найдено"
// Если code === 500, вернуть: "Внутренняя ошибка"
// Для любого другого числа вернуть: "Ошибка <code>" (например, "Ошибка 403")
export function getErrorMessage(code: number | undefined): string {
  if (code === 404) {
    return "Не найдено";
  }
  if (code === 500) {
    return "Внутренняя ошибка";
  }
  if (code === undefined) {
    return "Неизвестная ошибка"
  }
  else {
    return "Ошибка " + code
  }
}