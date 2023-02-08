import { _decorator, Component, Node, Label } from "cc";
const { ccclass, property } = _decorator;

@ccclass("UpdateRow")
export class UpdateRow extends Component {
  @property({ type: Label })
  userName: Label = null;
  @property({ type: Label })
  userScore: Label = null;

  start() {}
  
  updateRow(data) {
    this.userName.string = data.name;
    this.userScore = data.score;
  }

  update(deltaTime: number) {}
}
