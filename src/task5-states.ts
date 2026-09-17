// Тип состояния банковского счёта (Discriminated Union)
// Поле status — это "метка", по которой компилятор понимает, какой вариант передан
export type AccountState =
  | { status: "active"; balance: number }
  | { status: "frozen"; balance: number; reason: string }
  | { status: "closed"; closedAt: string };

// Функция проверки возможности снятия средств
export function canWithdraw(state: AccountState): boolean {
  if (state.status === "active") {
    return true;
  } else if (state.status === "frozen" || state.status === "closed") {
    return false;
  }
  return false;
}

// Функция получения описания состояния
export function getStatusMessage(state: AccountState): string {
  if (state.status === "active") {
    return `Счёт активен. Баланс: ${state.balance} руб.`;
  } else if (state.status === "frozen") {
    return `Счёт заморожен. Причина: ${state.reason}. Баланс: ${state.balance} руб.`;
  } else {
    return `Счёт закрыт с ${state.closedAt}`;
  }
}

// Функция заморозки счёта
export function freezeAccount(state: AccountState, reason: string): AccountState {
  if (state.status === "active") {
    return {
      status: "frozen",
      balance: state.balance,
      reason: reason,
    };
  } else {
    return state;
  }
}