import * as publicUiFunctions from './ui';
import * as publicSheetFunctions from './sheets';

// Expose public functions by attaching to `global`
global.onOpen = publicUiFunctions.onOpen;
global.doGet = publicUiFunctions.doGet;
global.openDialog = publicUiFunctions.openDialog;
global.openDialogBootstrap = publicUiFunctions.openDialogBootstrap;
global.openAboutSidebar = publicUiFunctions.openAboutSidebar;
global.getSheetsDataActive = publicSheetFunctions.getSheetsDataActive;
global.getSheetsData = publicSheetFunctions.getSheetsData;
global.addSheet = publicSheetFunctions.addSheet;
global.deleteSheet = publicSheetFunctions.deleteSheet;
global.setActiveSheet = publicSheetFunctions.setActiveSheet;
global.getWebAppUrl = publicUiFunctions.getWebAppUrl;
global.getBoundSpreadsheetUrl = publicSheetFunctions.getBoundSpreadsheetUrl;
global.openWebApp = publicUiFunctions.openWebApp;
