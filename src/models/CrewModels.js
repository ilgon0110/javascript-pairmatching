const FileReader = require('../utilities/FileReader');

class CrewModels {
  genCrews() {
    const [backCrews, frontCrews] = FileReader.read();
    return [frontCrews, backCrews];
  }
}

module.exports = CrewModels;
