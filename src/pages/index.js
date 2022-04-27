/** (I) CONSTANTS and VARIABLES */

/** кнопки на странице */
const headerSection = document.querySelector('.header');
const headerMenuBtnElement = headerSection.querySelector('.header__button-menu');
const settingsMenuBtnElement = headerSection.querySelector('#settings-button');
const sidebarSection = document.querySelector('.sidebar');
const sidebarSettingsSection = document.querySelector('.sidebar-settings');
const crossBtnElement = document.querySelector('.sidebar__button-cross');
const crossBtnSettingsElement = document.querySelector('.sidebar-settings__button-cross');

console.log(settingsMenuBtnElement, sidebarSettingsSection, crossBtnSettingsElement);
/** (II) FUNCTIONS */
const openSidebar = () => {
  sidebarSection.classList.toggle('sidebar_opened');
};
const openSidebarSettings = () => {
  sidebarSettingsSection.classList.toggle('sidebar-settings_opened');
};

const closeSidebar = () => {
  sidebarSection.classList.remove('sidebar_opened');
};
const closeSidebarSettings = () => {
  sidebarSettingsSection.classList.remove('sidebar-settings_opened');
};

/** (III) EVENT HANDLERS */
headerMenuBtnElement.addEventListener('click', openSidebar);
settingsMenuBtnElement.addEventListener('click', openSidebarSettings);

crossBtnElement.addEventListener('click', closeSidebar);
crossBtnSettingsElement.addEventListener('click', closeSidebarSettings);
