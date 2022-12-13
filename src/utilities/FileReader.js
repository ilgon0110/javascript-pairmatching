const { readdirSync, readFileSync } = require('fs');

class FileReader {
  static read() {
    const filedir = readdirSync('./resources');
    const crewLists = filedir.map((file) =>
      readFileSync(`./resources/${file}`, 'utf-8'),
    );
    return crewLists.map((name) =>
      name.split('\r\n').filter((len) => len.length > 0),
    );
  }
}

module.exports = FileReader;
