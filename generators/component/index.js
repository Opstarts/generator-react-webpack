'use strict';
let generator = require('yeoman-generator');
let utils = require('../../utils/all');

module.exports = generator.Base.extend({

  constructor: function() {
    generator.Base.apply(this, arguments);
    this.argument('name', { type: String, required: true });
    this.option('stateless', {
      desc: 'Create a stateless component instead of a full one',
      defaults: false
    });

    this.option('testOnly', {
      desc: 'Creates only the accompanying test file',
      defaults: false
    });
  },

  writing: function() {

    let settings = utils.yeoman.getAllSettingsFromComponentName(this.name, this.config.get('style'));
    let componentType = this.options.stateless ? 'Stateless' : 'Base';

    if (!this.options.testOnly) {
      // Create the style template
      this.fs.copyTpl(
        this.templatePath(`styles/Component${settings.style.suffix}`),
        this.destinationPath(settings.style.path + settings.style.fileName),
        settings
      );

      // Create the component
      this.fs.copyTpl(
        this.templatePath(`components/${componentType}.js`),
        this.destinationPath(settings.component.path + settings.component.fileName),
        settings
      );

      // Create the component container
      //this.fs.copyTpl(
        //this.templatePath('components/Container.js'),
        //this.destinationPath(settings.component.path + settings.component.fileNameContainer),
        //settings
      //);
    }

    // Create the unit test
    this.fs.copyTpl(
      this.templatePath('tests/JestBase.js'),
      this.destinationPath(settings.test.path + settings.test.fileName),
      settings
    );
  }
});
