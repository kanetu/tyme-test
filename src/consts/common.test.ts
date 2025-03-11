import { 
    tierOptions, 
    themeOptions, 
    timeOptions, 
    priceOptions, 
    categoryOptions 
} from "./common";

describe("Constants file", () => {
  test("themeOptions should have correct values", () => {
    expect(themeOptions).toEqual([
      { id: 1, value: "Light", text: "Light" },
      { id: 2, value: "Halloween", text: "Halloween" },
      { id: 3, value: "Colorful", text: "Colorful" },
      { id: 4, value: "Dark", text: "Dark" },
    ]);
  });

  test("tierOptions should contain 'Premium' and 'Deluxe'", () => {
    const values = tierOptions.map((option) => option.value);
    expect(values).toContain("Premium");
    expect(values).toContain("Deluxe");
  });

  test("timeOptions should only have 'Latest' and 'Oldest'", () => {
    const values = timeOptions.map((option) => option.value);
    expect(values).toEqual(["Latest", "Oldest"]);
  });

  test("priceOptions should have correct sorting order", () => {
    expect(priceOptions).toEqual([
      { id: 1, value: "lowToHigh", text: "Low to high" },
      { id: 2, value: "highToLow", text: "High to low" },
    ]);
  });

  test("categoryOptions should include 'Legendary' and 'Mythic'", () => {
    const values = categoryOptions.map((option) => option.value);
    expect(values).toContain("Legendary");
    expect(values).toContain("Mythic");
  });

  test("categoryOptions should have 10 items", () => {
    expect(categoryOptions.length).toBe(10);
  });
});
