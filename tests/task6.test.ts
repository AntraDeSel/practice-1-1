import { describe, it, expect } from "vitest";
import { parseStatus, canTransition, getNextStatuses } from "../src/task6-star";

describe("Task 6: Валидатор статусов (со звёздочкой)", () => {
  describe("parseStatus", () => {
    it("должен возвращать статус для валидной строки", () => {
      expect(parseStatus("new")).toBe("new");
      expect(parseStatus("processing")).toBe("processing");
      expect(parseStatus("delivered")).toBe("delivered");
    });

    it("должен возвращать null для недопустимой строки", () => {
      expect(parseStatus("unknown")).toBeNull();
      expect(parseStatus("")).toBeNull();
      expect(parseStatus("NEW")).toBeNull();
    });
  });

  describe("canTransition", () => {
    it("должен разрешать переход new -> processing", () => {
      expect(canTransition("new", "processing")).toBe(true);
    });

    it("должен разрешать переход new -> cancelled", () => {
      expect(canTransition("new", "cancelled")).toBe(true);
    });

    it("должен запрещать переход new -> shipped", () => {
      expect(canTransition("new", "shipped")).toBe(false);
    });

    it("должен разрешать переход processing -> shipped", () => {
      expect(canTransition("processing", "shipped")).toBe(true);
    });

    it("должен разрешать переход shipped -> delivered", () => {
      expect(canTransition("shipped", "delivered")).toBe(true);
    });

    it("должен запрещать переход из delivered куда-либо", () => {
      expect(canTransition("delivered", "cancelled")).toBe(false);
      expect(canTransition("delivered", "new")).toBe(false);
    });

    it("должен запрещать переход из cancelled куда-либо", () => {
      expect(canTransition("cancelled", "new")).toBe(false);
      expect(canTransition("cancelled", "processing")).toBe(false);
    });

    it("должен запрещать переход в тот же статус", () => {
      expect(canTransition("new", "new")).toBe(false);
    });
  });

  describe("getNextStatuses", () => {
    it("для new должен возвращать processing и cancelled", () => {
      const result = getNextStatuses("new");
      expect(result).toEqual(["processing", "cancelled"]);
    });

    it("для processing должен возвращать shipped и cancelled", () => {
      const result = getNextStatuses("processing");
      expect(result).toEqual(["shipped", "cancelled"]);
    });

    it("для shipped должен возвращать delivered", () => {
      const result = getNextStatuses("shipped");
      expect(result).toEqual(["delivered"]);
    });

    it("для delivered должен возвращать пустой массив", () => {
      expect(getNextStatuses("delivered")).toEqual([]);
    });

    it("для cancelled должен возвращать пустой массив", () => {
      expect(getNextStatuses("cancelled")).toEqual([]);
    });
  });
});