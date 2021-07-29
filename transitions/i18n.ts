import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { filterOptionsEn } from "./en/filterOptions";
import { transactionsEn } from "./en/transactions";
import { deleteModalEn } from "./en/deleteModal";
import { filterOptionsPl } from "./pl/filterOptions";
import { transactionsPl } from "./pl/transactions";
import { deleteModalPl } from "./pl/deleteModal";
i18n
  .use(LanguageDetector)

  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          filterOptions: {
            ...filterOptionsEn,
          },
          transactions: {
            ...transactionsEn,
          },
          deleteModal: {
            ...deleteModalEn,
          },
        },
      },
      pl: {
        translation: {
          filterOptions: {
            ...filterOptionsPl,
          },
          transactions: {
            ...transactionsPl,
          },
          deleteModal: {
            ...deleteModalPl,
          },
        },
      },
    },
  });

export default i18n;
