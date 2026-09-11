import { describe, it, expect } from "vitest";
import { convert, formatCurrency } from "../src/task4-union";

describe("Task 4: Union types", () => {
  it("convert должен конвертировать RUB в USD", () => {
    expect(convert(900, "RUB", "USD")).toBe(10);
  });

  it("convert должен конвертировать USD в EUR", () => {
    // 10 USD = 900 RUB = 9 EUR
    expect(convert(10, "USD", "EUR")).toBe(9);
  });

  it("convert должен возвращать то же значение, если валюты совпадают", () => {
    expect(convert(100, "RUB", "RUB")).toBe(100);
  });

  it("convert должен конвертировать EUR в RUB", () => {
    expect(convert(5, "EUR", "RUB")).toBe(500);
  });

  it("formatCurrency должен форматировать строку", () => {
    expect(formatCurrency(100, "RUB")).toBe("100 RUB");
    expect(formatCurrency(50.5, "USD")).toBe("50.5 USD");
  });
});