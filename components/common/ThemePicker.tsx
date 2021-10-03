import { THEMES, Theme } from '../../theme/theme';
import { useEffect, useState } from 'react';
import { useThemeDispatch, useThemeState } from '../../theme/ThemeContext';

const ENTER_KEY_CODE = 13;
const DOWN_ARROW_KEY_CODE = 40;
const UP_ARROW_KEY_CODE = 38;
const ESCAPE_KEY_CODE = 27;

const THEME_ALIAS: Record<Theme, string> = {
  blue: 'void blue',
  teal: 'memoized teal',
  green: 'nullish green',
  indigo: 'immutable indigo',
  orange: 'hoisted orange',
  purple: 'functional purple',
  gray: 'static gray',
};

const ThemePicker = ({ textColor }: { textColor: string }): JSX.Element => {
  const currentTheme = useThemeState();
  const updateTheme = useThemeDispatch();
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false);

  useEffect(() => {
    const SPACEBAR_KEY_CODE = [0, 32];
    const listContainer = document.querySelector('.dropdown__list-container');
    const listItems = Array.from(document.querySelectorAll('.dropdown__list-item'));
    const dropdownSelectedNode = document.querySelector('#dropdown__selected');
    const listItemIds = listItems.map(item => item.id);

    const handleEscape = event => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        setIsThemeSelectorOpen(false);
      }
    };

    const toggleThemeSelector = e => {
      const openDropDown = SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === ENTER_KEY_CODE;

      if (e.keyCode === ESCAPE_KEY_CODE) {
        setIsThemeSelectorOpen(false);
        closeThemeSelector();
      }

      if (e.type === 'click' || openDropDown) {
        setIsThemeSelectorOpen(!!isThemeSelectorOpen);
      }

      if (e.keyCode === DOWN_ARROW_KEY_CODE) {
        focusNextListItem(DOWN_ARROW_KEY_CODE);
      }

      if (e.keyCode === UP_ARROW_KEY_CODE) {
        focusNextListItem(UP_ARROW_KEY_CODE);
      }
    };

    const focusNextListItem = direction => {
      const activeElementId = document.activeElement.id;
      if (
        activeElementId === 'dropdown__selected' &&
        direction !== DOWN_ARROW_KEY_CODE &&
        direction !== UP_ARROW_KEY_CODE
      ) {
        setIsThemeSelectorOpen(true);
        document.querySelector<HTMLElement>(`#${listItemIds[0]}`).focus();
      } else {
        const currentActiveElementIndex = listItemIds.indexOf(activeElementId);
        if (direction === DOWN_ARROW_KEY_CODE) {
          const currentActiveElementIsNotLastItem = currentActiveElementIndex < listItemIds.length - 1;
          if (currentActiveElementIsNotLastItem) {
            const nextListItemId = listItemIds[currentActiveElementIndex + 1];
            document.querySelector<HTMLElement>(`#${nextListItemId}`).focus();
          }
        } else if (direction === UP_ARROW_KEY_CODE) {
          const currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0;
          if (currentActiveElementIsNotFirstItem) {
            const nextListItemId = listItemIds[currentActiveElementIndex - 1];
            document.querySelector<HTMLElement>(`#${nextListItemId}`).focus();
          }
        }
      }
    };

    const closeThemeSelector = () => {
      listContainer.setAttribute('aria-expanded', 'false');
      setIsThemeSelectorOpen(false);
    };

    const handleThemeMenuItemPress = e => {
      switch ((e as KeyboardEvent).keyCode) {
        case ENTER_KEY_CODE:
          updateTheme((e.srcElement as HTMLElement).id as Theme);
          closeThemeSelector();
          return;

        case DOWN_ARROW_KEY_CODE:
          focusNextListItem(DOWN_ARROW_KEY_CODE);
          return;

        case UP_ARROW_KEY_CODE:
          focusNextListItem(UP_ARROW_KEY_CODE);
          return;

        case ESCAPE_KEY_CODE:
          closeThemeSelector();
          return;

        default:
          return;
      }
    };

    listItems.forEach(item => {
      item.addEventListener('keydown', handleThemeMenuItemPress);
    });

    dropdownSelectedNode.addEventListener('keydown', toggleThemeSelector);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      dropdownSelectedNode.removeEventListener('keydown', toggleThemeSelector);
      document.removeEventListener('keydown', handleThemeMenuItemPress);
    };
  }, [isThemeSelectorOpen, updateTheme]);

  return (
    <div className="absolute space-y-1 w-20 sm:w-1/5 md:w-1/6 bg-transparent z-20 theme-picker-position">
      <label id="listbox-label" className={`block text-sm leading-5 font-medium ${textColor}`}>
        Theme
      </label>
      <div className={`relative group z-20`}>
        <span className="inline-block w-full rounded-md shadow-sm">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            id="dropdown__selected"
            className={`cursor-pointer z-20 w-full relative rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-${currentTheme} focus:border-${currentTheme}-300 transition ease-in-out duration-300 sm:text-sm sm:leading-5 motion-reduce:transition-none motion-reduce:transform-none`}
            onClick={() => setIsThemeSelectorOpen(!isThemeSelectorOpen)}
          >
            <div className="animate-morph flex items-center space-x-3">
              <span className={`animate-spin-slow flex-shrink-0 h-6 w-6 rounded-full bg-${currentTheme}-500`} />
              <span className="block truncate">{THEME_ALIAS[currentTheme]}</span>
            </div>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </span>
        {isThemeSelectorOpen && (
          <button
            onClick={() => setIsThemeSelectorOpen(false)}
            className="bg-black opacity-25 fixed inset-0 w-full h-full cursor-default"
            tabIndex={-1}
          ></button>
        )}
        {isThemeSelectorOpen && (
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg dropdown dropdown__list-container">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="dropdown__list max-h-56 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
            >
              {THEMES.map(theme => (
                <li
                  key={theme}
                  id={theme}
                  role="option"
                  aria-selected="true"
                  tabIndex={0}
                  value={theme}
                  className={`dropdown__list-item ${
                    currentTheme === theme
                      ? `bg-gradient-to-br from-${theme}-300 to-${theme}-300 hover:from-${currentTheme}-400 hover:to-${currentTheme}-600 focus:from-${currentTheme}-400 focus:to-${currentTheme}-600`
                      : `bg-gradient-to-br from-white to-white hover:from-${currentTheme}-400 hover:to-${currentTheme}-600 focus:from-${currentTheme}-400 focus:to-${currentTheme}-600`
                  } text-gray-900 font-normal hover:text-white focus:text-white hover:font-semibold focus:font-semibold focus:outline-none focus:shadow-outline-${currentTheme} focus:border-${currentTheme}-300 cursor-pointer select-none relative py-2 px-3`}
                  onClick={() => {
                    updateTheme(theme);
                    setIsThemeSelectorOpen(false);
                  }}
                >
                  <div className="animate-morph flex items-center space-x-3">
                    <span
                      className={`animate-spin-slow flex-shrink-0 h-6 w-6 rounded-full bg-${theme}-500 border-2 border-white`}
                    />
                    <span
                      className={`${currentTheme === theme ? 'font-semibold' : 'font-normal'} hidden sm:block truncate`}
                    >
                      {THEME_ALIAS[theme]}
                    </span>
                  </div>
                  {/* currentTheme === theme && (
                    <span
                      className={`absolute inset-y-0 right-0 flex items-center pr-4 text-${theme}-800 hover:text-${theme}-100`}
                    >
                      <svg className={`h-5 w-5 fill-current`} viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ) */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemePicker;
