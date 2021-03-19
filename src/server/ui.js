export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('My Sample React Project') // edit me!
    .addItem('Sheet Editor', 'openDialog')
    .addItem('Sheet Editor (Bootstrap)', 'openDialogBootstrap')
    .addItem('Web App Sheet Editor', 'openWebApp')
    .addItem('About me', 'openAboutSidebar');

  menu.addToUi();
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor');
};

export const openDialogBootstrap = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-bootstrap')
    .setWidth(600)
    .setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (Bootstrap)');
};

export const openWebApp = () => {
  let html = HtmlService.createHtmlOutputFromFile('web-app-launcher');
  SpreadsheetApp.getUi().showModalDialog(html, 'Launching Web App ... ');
};

export const getWebAppUrl = () => {
  return ScriptApp.getService().getUrl();
};

export const doGet = (e) => {
  return HtmlService.createHtmlOutputFromFile('web-app-demo');
};

export const openAboutSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('sidebar-about-page');
  SpreadsheetApp.getUi().showSidebar(html);
};
