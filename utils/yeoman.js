'use strict';

let path = require('path');
let configUtils = require('./config');
let _ = require('underscore.string');
let lodash = require('lodash');

// Needed directory paths
const baseName = path.basename(process.cwd());

/**
 * Get the base directory
 * @return {String}
 */
let getBaseDir = () => {
  return baseName;
};

/**
 * Get all settings (paths and the like) from components name
 * @param {String} componentName The components name
 * @param {String} style Style language to use [optional]
 * @return {Object} Component settings
 */
let getAllSettingsFromComponentName = (componentName, style) => {

  if(!style) {
    style = 'stylus';
  }

  // Clean up the path and pull it to parts
  let cleanedPaths = getCleanedPathName(componentName);
  let componentParts = cleanedPaths.split('/');
  let componentBaseName = _.capitalize(componentParts.pop());
  let componentPartPath = componentParts.join('/');

  // Get the components displayName property
  let componentFullName = _.classify(_.replaceAll(componentName, '/', '_'));

  // Configure Styles
  let stylePaths = configUtils.getChoiceByKey('path', 'style');
  let styleSettings = configUtils.getChoiceByKey('style', style);

  // Configure components
  let componentPath = configUtils.getChoiceByKey('path', 'component');

  // Configure tests
  let testRelativePath = path.relative(`/${componentPartPath}`, '/');

  const styleName = getComponentStyleName(componentBaseName);

  let settings = {
    style: {
      webpackPath: `${componentPartPath}/${componentBaseName}${styleSettings.suffix}`,
      path: `${stylePaths.path}/`,
      fileName: `${componentBaseName}${styleSettings.suffix}`,
      className: styleName,
      suffix: styleSettings.suffix
    },
    component: {
      webpackPath: `${componentPartPath}/${componentBaseName}.jsx`,
      path: `${componentPath.path}/${componentPartPath}/`,
      fileName: `${componentBaseName}.jsx`,
      fileNameContainer: `${componentBaseName}Container.jsx`,
      className: `${componentBaseName}`,
      styleName: styleName,
      displayName: `${componentFullName}`,
      suffix: '.jsx'
    },
    test: {
      path: `${componentPath.path}/${componentPartPath}/`,
      relativePath: testRelativePath ? `${testRelativePath}/` : './',
      className: `${componentBaseName}`,
      fileName: `${componentBaseName}.test.js`
    }
  };

  return settings;
};

/**
 * Get a cleaned path name for a given path
 * @param {String} path
 * @param {String} suffix [optional]
 * @return {String}
 */
let getCleanedPathName = (path, suffix) => {

  if(!suffix) {
    suffix = '';
  }

  // If we have filesystem separators, use them to build the full path
  let pathArray = path.split('/');

  // Build the full components name
  return pathArray.map((path) => {
    return _.camelize(_.slugify(_.humanize(path)));
  }).join('/') + _.capitalize(suffix);
};

/**
 * Get the css/less/whatever style name to use
 * @param  {String} path
 * @return {String}
 */
let getComponentStyleName = (path) => {
  let fileName = path.split('/').pop();
  let parts = fileName.split(/(?=[A-Z])/);

  return `ops-${_.slugify(_.humanize(parts.join('-'))).toLowerCase()}`;
};

/**
 * Get a js friendly application name
 * @param  {String} appName The input application name [optional]
 * @return {String}
 */
let getAppName = (appName) => {

  // If appName is not given, use the current directory
  if(appName === undefined) {
    appName = getBaseDir();
  }

  return _.camelize(_.slugify(_.humanize(appName)));
};

/**
 * Get the wanted destination path
 * @param  {String} name Name of the file
 * @param  {String} type The type to use (e.g. action, store, ...)
 * @param  {Suffix} suffix The suffix to use for the file (e.g. Store, Actions, ...)
 * @return {String} Final path
 */
let getDestinationPath = (name, type, suffix) => {

  let cleanedPaths = getCleanedPathName(name, suffix);
  let fsParts = cleanedPaths.split('/');
  let actionBaseName = _.capitalize(fsParts.pop());
  let partPath = fsParts.join('/');

  let fsPath = configUtils.getChoiceByKey('path', type).path;

  let parts = [ fsPath ];
  if(partPath.length > 0) {
    parts.push(partPath);
  }
  parts.push(actionBaseName);
  let fullPath = parts.join('/');

  return `${fullPath}.js`;
};

/**
 * Get the destinations class name
 * @param  {String} name Name of the file
 * @param  {String} type The type to use (e.g. action, store, ...)
 * @param  {Suffix} suffix The suffix to use for the file (e.g. Store, Actions, ...)
 * @return {String} The javascript class name to use
 */
let getDestinationClassName = (name, type, suffix) => {

  let fixedName = getDestinationPath(name, type, suffix);
  return _.capitalize(fixedName.split('/').pop().split('.js')[0]);
};

module.exports = {
  getBaseDir: getBaseDir,
  getAllSettingsFromComponentName: getAllSettingsFromComponentName,
  getAppName: getAppName,
  getCleanedPathName: getCleanedPathName,
  getComponentStyleName: getComponentStyleName,
  getDestinationPath: getDestinationPath,
  getDestinationClassName: getDestinationClassName
};
