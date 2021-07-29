import styled from "styled-components";
import { ActionButton } from "components/atoms/actionButton/actionButton";
import { Select } from "components/atoms/select/select";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export type TopNavProps = {
  title: string;
};

export type languageOption = {
  value: string;
  label: string;
};

const languages = [
  { value: "pl", label: "pl-Pl" },
  { value: "en", label: "en-En" },
];

const monthsName = [
  "Styczeń",
  "Luty",
  "Marzec",
  "Kwiecień",
  "Maj",
  "Czerwiec",
  "Lipiec",
  "Sierpień",
  "Wrzesień",
  "Pazdziernik",
  "Listopad",
  "Grudzień",
];

const monthsOption = monthsName.map((month) => {
  return { value: month, label: month };
});

export const TopNav: React.FC<TopNavProps> = ({ title }) => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(languages[0]);

  const changeLanguage = (value: languageOption) => {
    setLanguage(value);
    i18n.changeLanguage(value.value);
  };

  return (
    <TopNavStyled>
      <Heading>
        <h1> {title}</h1>
      </Heading>
      <ButtonSection>
        <SelectContainer>
          <Select data={monthsOption} />
        </SelectContainer>
        <SelectContainer>
          <Select data={languages} onChange={changeLanguage} value={language} />
        </SelectContainer>
        <ActionButton />
      </ButtonSection>
    </TopNavStyled>
  );
};

const TopNavStyled = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  margin: 1.5rem 0;
`;

const Heading = styled.header`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonSection = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 380px;
  justify-content: space-between;
  align-items: center;
`;

const SelectContainer = styled.div`
  width: 150px;
`;
