class Mutability {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  getImmutableCopy() {
    return Object.freeze(this);
  }
}

function isImmutable(obj) {
  if (obj === null || typeof obj !== "object") {
    return true; // Primitives and null are considered immutable
  }

  if (Array.isArray(obj)) {
    // Arrays are considered mutable, but we can check their elements
    return obj.every((element) => isImmutable(element));
  }

  if (
    obj instanceof Date ||
    obj instanceof RegExp ||
    obj instanceof Map ||
    obj instanceof Set
  ) {
    return true; // Specific types are considered immutable
  }

  // For objects, we check if all properties are also immutable
  for (const key in obj) {
    if (!isImmutable(obj[key])) {
      return false;
    }
  }

  return true;
}

/** Tests */
const instance = new Mutability(1, 2, 3);
const immutableObject = instance.getImmutableCopy();
console.log(instance.sum());
console.log(immutableObject.sum());

console.log("original >> ", isImmutable(instance));
console.log("immutable object >> ", isImmutable(immutableObject));
