import React, { useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LocalizationContext } from '../../context/LocalizationContext';
import { ThemeContext } from '../../context/ThemeContext';
import { setEnLang, setRuLang, setUzLang } from '../../redux/lang/langAction';
import { setDarkMode } from '../../redux/theme/themeAction';
import { SaveChangesBtn } from '../SaveChangesBtn/SaveChangesBtn';
import {
  SettingsSelectArrow,
  SettingsThemeInput,
  SettingsThemeLabel,
} from './settings.styles';
import { lang } from '../../lang/lang';

export const Settings = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const inputRef = useRef();
  const navigate = useNavigate();

  const { lang: language, setLang } = useContext(LocalizationContext);

  const setLanguageFunc = (language) => {
    setLang(language);
    localStorage.setItem('lang', language);
    dispatch(setUzLang(language));
    dispatch(setRuLang(language));
    dispatch(setEnLang(language));
  };
  localStorage.setItem('theme', theme);

  const selectedInput = localStorage.getItem('theme') != '';

  const [defaultChecked, setDefaultChecked] = useState(selectedInput);

  const themeCheckbox = () => {
    dispatch(setDarkMode(theme));

    if (selectedInput !== true) {
      setTheme('dark');
    } else {
      setTheme('');
    }
    setDefaultChecked(!defaultChecked);
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <section style={{ height: '100vh' }} className="py-56">
      <div className="container">
        <div style={{ width: '719px' }} className="relative mx-auto">
          <h2
            className={`text-lg ${
              lang.ru ? 'font-normal' : 'font-poppins'
            } mb-8 dark:text-white`}
          >
            {lang[language].ProfilePage.ProfileSettingPage.ProfileSettingTitle}
          </h2>
          <div className="relative">
            <p className="text-neutral-600 dark:text-white">
              {lang[language].ProfilePage.ProfileSettingPage.ProfileSettingLang}
            </p>
            <SettingsSelectArrow></SettingsSelectArrow>
            <select
              defaultValue={language}
              onChange={(evt) => setLanguageFunc(evt.target.value)}
              className="w-full text-sm focus:outline-gray-400 cursor-pointer rounded bg-editProfileInput appearance-none mt-2 py-3 px-5"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="uz">O'zbek</option>
            </select>
          </div>
          <div className="mt-4 border-b-2 border-b-gray-400 pb-10 mb-8">
            <p className="dark:text-white mb-1">
              {lang[language].ProfilePage.ProfileSettingPage.ProfileSetTheme}
            </p>
            <SettingsThemeInput
              className="hidden"
              ref={inputRef}
              defaultChecked={defaultChecked}
              onChange={themeCheckbox}
              type="checkbox"
              id="switch"
            />
            <SettingsThemeLabel for="switch"></SettingsThemeLabel>
          </div>
          <SaveChangesBtn
            onClick={handleClick}
            text={lang[language].SaveChangesBtn}
          />
        </div>
      </div>
    </section>
  );
};
