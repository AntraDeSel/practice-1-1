export function calculateDiscount(price: any, discount: any): any {
  return price - discount;
}

export function formatGreeting(name: any, isFormal: any): any {
  if (isFormal) {
    return "Добрый день, " + name;
  }
  return "Привет, " + name;
}

export function repeatText(text: any, count: any): any {
  return text.repeat(count);
}