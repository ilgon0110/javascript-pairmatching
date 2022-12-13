class Validations {
  static isValidFeat(userFeat) {
    const regex = /[1-3|Q]/g;
    if (!regex.test(userFeat)) {
      throw new Error('[ERROR] 알맞은 기능이나 종료 숫자를 입력해주세요');
    }
  }

  static isValidPairMatching(userPairMatching) {
    const [course, level, mission] = userPairMatching.split(',');
    if (course !== '프론트엔드' && course !== '백엔드') {
      throw new Error('[ERROR] 알맞은 과정을 입력해주세요');
    }
    if (!this.validPairMatching(level.trim(), mission.trim())) {
      throw new Error('[ERROR] 알맞은 레벨과 미션을 입력해주세요');
    }
  }

  static validPairMatching(inputLevel, inputMission) {
    const levelOneMissions = ['자동차경주', '로또', '숫자야구게임'];
    const levelTwoMissions = ['장바구니', '결제', '지하철노선도'];
    const levelFourMissions = ['성능개선', '배포'];
    if (
      (inputLevel === '레벨1' && levelOneMissions.includes(inputMission)) ||
      (inputLevel === '레벨2' && levelTwoMissions.includes(inputMission)) ||
      (inputLevel === '레벨4' && levelFourMissions.includes(inputMission))
    ) {
      return true;
    }
    return false;
  }
}

module.exports = Validations;
