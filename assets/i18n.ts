import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          filterOptions: {
            filters: "Filters",
            filter: "Filter",
            incomeExpenses: "Income / expenses",
            category: "Category",
            subCategory: "Sub category",
            sorting: "Sorting options",
            history: "History",
            value: "Value",
            save: "Save",
          },
          transactions: {
            category: "Category",
            comment: "Comment",
            action: "Action",
            edit: "Edit",
            cancel: "Cancel",
            delete: "Delete",
            plannedIncome: "Planned income",
            actualIncome: "Actual income",
            realizationPercent: "Realization percent %",
            commentShowMore: "Comment/Show more",
          },
          deleteModal: {
            sure: "Are you sure ?",
            doYouReally:
              "Are you sure you want to delete this expense / income? This information cannot be retrieved",
          },
        },
      },
      pl: {
        translation: {
          filterOptions: {
            filters: "Filtry",
            filter: "Filtruj",
            incomeExpenses: "Przychody / wydatki",
            category: "Kategoria",
            subCategory: "Pod kategoria",
            sorting: "Opcje sortowania",
            history: "Historia",
            value: "Kwota",
            save: "Zapisz",
          },
          transactions: {
            category: "Kategoria",
            comment: "Komentarz",
            action: "Akcja",
            edit: "Edytuj",
            cancel: "Anuluj",
            delete: "Usuń",
            plannedIncome: "Planowany przychód",
            actualIncome: "Rzeczywisty przychód",
            realizationPercent: "Procent realizacji %",
            commentShowMore: "Komentarz / pokaż więcej",
          },
          deleteModal: {
            sure: "Jesteś pewny?",
            doYouReally:
              "Czy na pewno checesz usunąć ten wydatek / przychód ? Informacje te nie mogą zostać odzyskane",
          },
        },
      },
    },
  });

export default i18n;
