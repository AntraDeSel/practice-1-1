// Тип состояния банковского счёта (Discriminated Union)
// Поле status — это "метка", по которой компилятор понимает, какой вариант передан
export type AccountState =
  | { status: "active"; balance: number }
  | { status: "frozen"; balance: number; reason: string }
  | { status: "closed"; closedAt: string };

// Функция проверки возможности снятия средств
// Возвращает true только если счёт активен
export function canWithdraw(state: AccountState): boolean {
  // Напишите код здесь
  // Подсказка: используйте if / else if, проверяя поле status 

}

// Функция получения описания состояния
// Для active: "Счёт активен. Баланс: <balance> руб."
// Для frozen: "Счёт заморожен. Причина: <reason>. Баланс: <balance> руб."
// Для closed: "Счёт закрыт с <closedAt>"
export function getStatusMessage(state: AccountState): string {
  // Напишите код здесь
}

// Функция заморозки счёта
// Принимает активный счёт и причину, возвращает замороженный счёт
// Если счёт не активен — возвращает его без изменений
export function freezeAccount(state: AccountState, reason: string): AccountState {
  // Напишите код здесь
}