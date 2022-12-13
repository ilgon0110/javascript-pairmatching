const { readdirSync, readFile } = require('fs');
const FileReader = require('../utilities/FileReader');

class CrewModels {
  #frontCrews;
  #backCrews;

  genCrews() {
    const [backCrews, frontCrews] = FileReader.read();
    this.#frontCrews = frontCrews;
    this.#backCrews = backCrews;
    console.log(this.#frontCrews, this.#backCrews);
  }
}

module.exports = CrewModels;
