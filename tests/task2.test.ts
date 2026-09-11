import { describe, it, expect } from "vitest";
import { calculateDiscount, formatGreeting, repeatText } from "../src/task2-any";

describe("Task 2: Охота на any", () => {
  it("calculateDiscount должен работать с числами", () => {
    expect(calculateDiscount(100, 10)).toBe(90);
    expect(calculateDiscount(50, 5)).toBe(45);
  });

  it("formatGreeting должен работать со строками и булевыми", () => {
    expect(formatGreeting("Алиса", true)).toBe("Добрый день, Алиса");
    expect(formatGreeting("Боб", false)).toBe("Привет, Боб");
  });

  it("repeatText должен повторять строку нужное количество раз", () => {
    expect(repeatText("ha", 3)).toBe("hahaha");
    expect(repeatText("x", 1)).toBe("x");
  });
});