import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

export function getCountryNameFromCode(code: string): string {
  const name = countries.getName(code.toUpperCase(), "en");
  return name || code; // fallback if not found
}
