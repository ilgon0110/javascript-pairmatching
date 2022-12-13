const CrewModels = require('./CrewModels');

class GameModels {
  #frontCrews;
  #backCrews;

  constructor() {
    this.crewModels = new CrewModels();
  }

  genCrew() {
    const [frontCrews, backCrews] = this.crewModels.genCrews();
    this.#frontCrews = frontCrews;
    this.#backCrews = backCrews;
  }
}

module.exports = GameModels;
