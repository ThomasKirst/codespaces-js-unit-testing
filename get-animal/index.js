export function getAnimal(animal) {
  if (!animal) {
    return "I do not like animals at all!";
  }

  if (animal === "cat") {
    return "I totally like cats!";
  }

  return `I like ${animal}s!`;
}
