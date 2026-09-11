import { describe, it, expect } from "vitest";
import { canWithdraw, getStatusMessage, freezeAccount, AccountState } from "../src/task5-states";

describe("Task 5: Моделирование состояний", () => {
  it("canWithdraw должен возвращать true для активного счёта", () => {
    const state: AccountState = { status: "active", balance: 1000 };
    expect(canWithdraw(state)).toBe(true);
  });

  it("canWithdraw должен возвращать false для замороженного счёта", () => {
    const state: AccountState = { status: "frozen", balance: 500, reason: "подозрение" };
    expect(canWithdraw(state)).toBe(false);
  });

  it("canWithdraw должен возвращать false для закрытого счёта", () => {
    const state: AccountState = { status: "closed", closedAt: "2024-01-01" };
    expect(canWithdraw(state)).toBe(false);
  });

  it("getStatusMessage для активного счёта", () => {
    const state: AccountState = { status: "active", balance: 1500 };
    expect(getStatusMessage(state)).toBe("Счёт активен. Баланс: 1500 руб.");
  });

  it("getStatusMessage для замороженного счёта", () => {
    const state: AccountState = { status: "frozen", balance: 300, reason: "по решению суда" };
    expect(getStatusMessage(state)).toBe("Счёт заморожен. Причина: по решению суда. Баланс: 300 руб.");
  });

  it("getStatusMessage для закрытого счёта", () => {
    const state: AccountState = { status: "closed", closedAt: "2024-06-15" };
    expect(getStatusMessage(state)).toBe("Счёт закрыт с 2024-06-15");
  });

  it("freezeAccount должен замораживать активный счёт", () => {
    const state: AccountState = { status: "active", balance: 1000 };
    const frozen = freezeAccount(state, "подозрительная активность");
    expect(frozen.status).toBe("frozen");
    if (frozen.status === "frozen") {
      expect(frozen.reason).toBe("подозрительная активность");
      expect(frozen.balance).toBe(1000);
    }
  });

  it("freezeAccount не должен менять уже замороженный счёт", () => {
    const state: AccountState = { status: "frozen", balance: 500, reason: "старая причина" };
    const result = freezeAccount(state, "новая причина");
    expect(result.status).toBe("frozen");
    if (result.status === "frozen") {
      expect(result.reason).toBe("старая причина");
    }
  });

  it("freezeAccount не должен менять закрытый счёт", () => {
    const state: AccountState = { status: "closed", closedAt: "2024-01-01" };
    const result = freezeAccount(state, "попытка заморозки");
    expect(result.status).toBe("closed");
  });
});