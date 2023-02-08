import {
  _decorator,
  Component,
  Node,
  Prefab,
  JsonAsset,
  Input,
  ScrollView,
  instantiate,
  Label,
  ScrollViewComponent,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("infinite")
export class infinite extends Component {
  @property({ type: Prefab })
  data: Prefab = null;
  @property({ type: JsonAsset })
  jsondata: JsonAsset = null;

  start() {
    let list_element = this.node.getComponent(ScrollView).content;
    let dataofuser = this.jsondata.json.data

    for (let index = 0; index < dataofuser.length; index++) {
      let NEW_Ad = instantiate(this.data);
      let rank = NEW_Ad.getChildByName("Rank");
      rank.getComponent(Label).string = dataofuser[index].id;

      let name = NEW_Ad.getChildByName("Name");
      name.getComponent(Label).string = dataofuser[index].full_name;

      let score = NEW_Ad.getChildByName("Score");
      score.getComponent(Label).string = dataofuser[index].score;
      list_element.addChild(NEW_Ad);
    }
  }

  onLoad() {
    // this.node.on(ScrollView.EventType.BOUNCE_TOP, this.add, this);
    // this.node.on(ScrollView.EventType.BOUNCE_BOTTOM, this.addNode, this);
    this.node.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.addNode, this);
    this.node.on(ScrollView.EventType.SCROLL_TO_TOP, this.add, this);
  }
  addNode() {
    let dataofuser = this.jsondata.json.data;
    let list_element = this.node.getComponent(ScrollView).content.children[0];

    list_element.setSiblingIndex(dataofuser.length - 1);
  }
  add() {
    let dataofuser = this.jsondata.json.data;
    let list_element =
      this.node.getComponent(ScrollView).content.children[
        dataofuser.length - 1
      ];

    list_element.setSiblingIndex(0);
  }
  update(deltaTime: number) {}
}
