const jsonEnvironment = require('../data/EnvironmentData.json');

class Environment{

  getApp(){
    return process.env.App;
  }

  getApk() {
    return jsonEnvironment.apps[this.getApp()];
  }  

  getPaths(){

    let specsPath = "";
    
    jsonEnvironment.paths.forEach(path => {
      if ((path.app).includes(this.getApp())) {
        specsPath = path.path;
      }
    });
    return specsPath;
  }  

}
module.exports = Environment;

