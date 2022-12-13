const GameModels = require('../models/GameModels');
const Validations = require('../utilities/Validations');
const GameView = require('../views/GameView');

class GameController {
  constructor() {
    this.model = new GameModels();
    this.view = new GameView();
  }

  start() {
    this.model.genCrew();
    this.getUserFeat();
  }

  getUserFeat() {
    this.view.readUserFeat(
      '기능을 선택하세요\n1. 페어 매칭\n2. 페어 조회\n3. 페어 초기화\nQ. 종료\n',
      (userFeat) => {
        try {
          Validations.isValidFeat(userFeat);
          if (userFeat === '1') {
            this.pairMatching();
          }
        } catch (error) {
          console.log(error);
        }
      },
    );
  }

  pairMatching() {
    this.view.readUserPairMatching(
      '#############################################\n과정: 백엔드 | 프론트엔드\n미션:\n- 레벨1: 자동차경주 | 로또 | 숫자야구게임\n- 레벨2: 장바구니 | 결제 | 지하철노선도\n- 레벨3:\n- 레벨4: 성능개선 | 배포\n- 레벨5:\n############################################\n과정, 레벨, 미션을 선택하세요.\nex) 백엔드, 레벨1, 자동차경주\n',
      (userPairMatching) => {
        Validations.isValidPairMatching(userPairMatching);
        console.log('성공');
      },
    );
  }
}

module.exports = GameController;
