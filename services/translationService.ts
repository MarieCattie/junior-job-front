import errorTranslations from "@/static/errorTranslations.json";

interface ErrorTranslations {
    [key: string]: string;
}

export default {
    translateError(message: string, lang: string = 'ru'): string {
      const translations: ErrorTranslations = errorTranslations[lang] || errorTranslations['ru'];
      return translations[message] || message;
    },
  };