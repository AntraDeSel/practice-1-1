import { describe, it, expect } from "vitest";
import { greet, applyDiscount, getErrorMessage } from "../src/task3-null";

describe("Task 3: null и undefined", () => {
  it("greet должен работать с именем", () => {
    expect(greet("Алиса")).toBe("Привет, Алиса!");
  });

  it("greet должен работать без имени (undefined)", () => {
    expect(greet(undefined)).toBe("Привет, Гость!");
  });

  it("applyDiscount должен применять скидку", () => {
    expect(applyDiscount(100, 10)).toBe(90);
  });

  it("applyDiscount должен работать без скидки (null)", () => {
    expect(applyDiscount(100, null)).toBe(100);
  });

  it("getErrorMessage должен обрабатывать известные коды", () => {
    expect(getErrorMessage(404)).toBe("Не найдено");
    expect(getErrorMessage(500)).toBe("Внутренняя ошибка");
  });

  it("getErrorMessage должен работать без кода (undefined)", () => {
    expect(getErrorMessage(undefined)).toBe("Неизвестная ошибка");
  });

  it("getErrorMessage должен обрабатывать неизвестный код", () => {
    expect(getErrorMessage(403)).toBe("Ошибка 403");
  });
});