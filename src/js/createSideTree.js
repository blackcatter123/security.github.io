// import { Graph, NodeEvent, treeToGraphData } from "@antv/g6";
// import axios from "axios";
let isSystemLearning;
let treeData = [
  {
    id: "民航安全技术管理知识图谱",
    size: 40,
    grade: 1,
    isPass: 2,
    children: [
      {
        id: "人身检查模块",
        size: 30,
        grade: 2,
        children: [
          {
            id: "手工人身检查岗位",
            size: 25,
            grade: 3,
            children: [
              {
                id: "手工人身检查的要求",
                size: 20,
                grade: 4,
              },
              {
                id: "手工人身检查的操作流程",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "手持金属探测器",
            size: 25,
            grade: 3,
            children: [
              {
                id: "手持金属探测器的使用操作",
                size: 20,
                grade: 4,
              },
              {
                id: "常见的手持探测仪型号",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "通过式金属探测门",
            size: 25,
            grade: 3,
            children: [
              {
                id: "金属探测门的原理",
                size: 20,
                grade: 4,
              },
              {
                id: "影响安全门探测的因素",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "毫米波人体成像安检仪",
            size: 25,
            grade: 3,
            children: [
              {
                id: "毫米波安检仪的原理",
                size: 20,
                grade: 4,
              },
              {
                id: "毫米波安检仪的判图",
                size: 20,
                grade: 4,
              },
            ],
          },
        ],
      },
      {
        id: "民航运输基础知识模块 (危险品)",
        size: 30,
        grade: 2,
        children: [
          {
            id: "第1类:爆炸品",
            size: 25,
            grade: 3,
            children: [
              {
                id: "1.1项:质量爆炸风险",
                size: 20,
                grade: 4,
              },
              {
                id: "1.3项:燃烧爆炸风险",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第2类:气体",
            size: 25,
            grade: 3,
            children: [
              {
                id: "2.1项:易燃气体",
                size: 20,
                grade: 4,
              },
              {
                id: "2.2项:非易燃无毒气体",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第3类:易燃液体",
            size: 25,
            grade: 3,
          },
          {
            id: "第4类:易燃固体",
            size: 25,
            grade: 3,
            children: [
              {
                id: "4.1项:易燃固体",
                size: 20,
                grade: 4,
              },
              {
                id: "4.3项:遇水释放易燃气体",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第5类:氧化性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "5.1项:氧化剂",
                size: 20,
                grade: 4,
              },
              {
                id: "5.2项:有机过氧化物",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第6类:毒性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "6.1项:毒性物质",
                size: 20,
                grade: 4,
              },
              {
                id: "6.2项:感染性物质",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第7类:放射性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "Ⅰ级:低风险",
                size: 20,
                grade: 4,
              },
              {
                id: "Ⅲ级:高风险",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第8类:腐蚀性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "酸性腐蚀品",
                size: 20,
                grade: 4,
              },
              {
                id: "碱性腐蚀品",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第9类:杂项危险品",
            size: 25,
            grade: 3,
            children: [
              {
                id: "锂电池运输规范",
                size: 20,
                grade: 4,
              },
              {
                id: "磁性物品与航空器干扰",
                size: 20,
                grade: 4,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "民航安全技术管理知识图谱",
    size: 40,
    grade: 1,
    isPass: 2,
    children: [
      {
        id: "人身检查模块",
        size: 30,
        grade: 2,
        children: [
          {
            id: "通过式金属探测门",
            size: 25,
            grade: 3,
            children: [
              {
                id: "金属探测门的原理",
                size: 20,
                grade: 4,
                isPass: 1,
              },
              {
                id: "影响安全门探测的因素",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "毫米波人体成像安检仪",
            size: 25,
            grade: 3,
            children: [
              {
                id: "毫米波安检仪的原理",
                size: 20,
                grade: 4,
              },
              {
                id: "毫米波安检仪的判图",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "手持金属探测器",
            size: 25,
            grade: 3,
            children: [
              {
                id: "手持金属探测器的使用操作",
                size: 20,
                grade: 4,
              },
              {
                id: "常见的手持探测仪型号",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "手工人身检查岗位",
            size: 25,
            grade: 3,
            children: [
              {
                id: "手工人身检查的要求",
                size: 20,
                grade: 4,
              },
              {
                id: "手工人身检查的操作流程",
                size: 20,
                grade: 4,
              },
            ],
          },
        ],
      },
      {
        id: "民航运输基础知识模块 (危险品)",
        size: 30,
        grade: 2,
        children: [
          {
            id: "第1类:爆炸品",
            size: 25,
            grade: 3,
            children: [
              {
                id: "1.1项:质量爆炸风险",
                size: 20,
                grade: 4,
              },
              {
                id: "1.3项:燃烧爆炸风险",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第2类:气体",
            size: 25,
            grade: 3,
            children: [
              {
                id: "2.1项:易燃气体",
                size: 20,
                grade: 4,
              },
              {
                id: "2.2项:非易燃无毒气体",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第3类:易燃液体",
            size: 25,
            grade: 3,
          },
          {
            id: "第4类:易燃固体",
            size: 25,
            grade: 3,
            children: [
              {
                id: "4.1项:易燃固体",
                size: 20,
                grade: 4,
              },
              {
                id: "4.3项:遇水释放易燃气体",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第5类:氧化性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "5.1项:氧化剂",
                size: 20,
                grade: 4,
              },
              {
                id: "5.2项:有机过氧化物",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第6类:毒性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "6.1项:毒性物质",
                size: 20,
                grade: 4,
              },
              {
                id: "6.2项:感染性物质",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第7类:放射性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "Ⅰ级:低风险",
                size: 20,
                grade: 4,
              },
              {
                id: "Ⅲ级:高风险",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第8类:腐蚀性物质",
            size: 25,
            grade: 3,
            children: [
              {
                id: "酸性腐蚀品",
                size: 20,
                grade: 4,
              },
              {
                id: "碱性腐蚀品",
                size: 20,
                grade: 4,
              },
            ],
          },
          {
            id: "第9类:杂项危险品",
            size: 25,
            grade: 3,
            children: [
              {
                id: "锂电池运输规范",
                size: 20,
                grade: 4,
              },
              {
                id: "磁性物品与航空器干扰",
                size: 20,
                grade: 4,
              },
            ],
          },
        ],
      },
    ],
  },
];

let feedbackPage1 = document.querySelector(".form");
feedbackPage1.addEventListener("submit", (event) => {
  event.preventDefault();
  hiddenPage.style.display = "none";
  getTreeData(defaultNum);
});


function getTreeData(num) {
      isSystemLearning = num;
      createTree(treeData[num]);
      if (defaultNum == 0) {
        alert("您好！这是我们为您制定的系统学习路径,开始学习吧！");
      } else {
        alert(
          "您好！在自由探索的学习模式中,你可以学习任意你有兴趣或有疑问的知识点"
        );
      }
}

function createTree(data) {
  const graph = new G6.Graph({
    container: "container",
    data: G6.treeToGraphData(data),
    autoFit: {
      type: "view",
      options: {
        direction: "both",
      },
    },
    node: {
      style: {
        size: (d) => d.size,
        fill: (d) => {
          if (d.grade === 1) {
            return "#0050b3";
          } else if (d.grade === 2) {
            return "#096dd9";
          } else if (d.grade === 3) {
            return "#40a9ff";
          } else {
            return "#69c0ff";
          }
        },
        cursor: "pointer",
        haloStroke: "#cccccc",
        labelText: (d) => d.id,
        labelPlacement: "bottom",
        labelBackground: true,
        labelOffsetX: 4,
        labelBackgroundShadowColor: "black",
        labelBackgroundRadius: 2,

        badge: () => {
          if (isSystemLearning == 1) {
            return false;
          } else {
            return true;
          }
        }, // 是否显示徽标
        badges: (e) => {
          if (e.isPass == undefined) {
            return [{ text: "未通过", placement: "right-center" }];
          } else if (e.isPass == 1) {
            return [{ text: "已通过", placement: "right-center" }];
          } else if (e.isPass == 2) {
            return [{ text: "五级安检员", placement: "right-center" }];
          }
        },
        badgePalette: (e) => {
          if (e.isPass == undefined) {
            return ["#F4664A"];
          } else if (e.isPass == 1) {
            return ["#00af57ff"];
          } else if (e.isPass == 2) {
            return ["#F6BD16"];
          }
        }, // 徽标的背景色板
        badgeFontSize: (e) => {
          if (e.grade == 1) {
            return 10;
          } else if (e.grade == 2) {
            return 8;
          } else if (e.grade == 3) {
            return 7;
          } else if (e.grade == 4) {
            return 6;
          }
        }, // 徽标字体大小
      },
      animation: {
        enter: false,
      },
      state: {
        selected: {
          lineWidth: 2,
          stroke: "white",
        },
      },
    },
    edge: {
      type: "polyline",
      style: {
        stroke: "white",
        radius: 4,
        router: {
          type: "orth",
        },
      },
      animation: {
        enter: false,
      },
    },
    layout: {
      type: "indented",
      direction: "LR",
      indent: 40,
      getHeight: () => 20,
      getWidth: () => 32,
    },
    behaviors: [
      {
        type: "click-select",
        degree: 0,
        unselectedState: "inactive",
      },
      "collapse-expand",
      "drag-canvas",
    ],
    plugins: [
      {
        type: "tooltip",
        trigger: "click",
        enterable: true,
        getContent: (e, items) => {
          let result = `<p  style="font-weight: bolder;font-size:0.8rem">你当前所在的目录为:<span style="font-weight:bolder;font-size:1rem">${
            items[0].depth + 1
          }级目录</span></p>
          <p><span style="color:orange;font-size:1rem">·${
            items[0].id
          }</span></p><p class="enterIn" onclick="enterTeachPage()">点击进入学习</p>`;
          return result;
        },
      },
      {
        type: "toolbar",
        position: "top-right",
        // style: {
        //   height: "30px",
        //   width: "30px",
        //   marginRight: "20px",
        //   backgroundColor: "#ffffff",
        // },
        style: {
          height: "30px",
          width: "55px",
          marginRight: "20px",
          backgroundColor: "#ffffff",
        },
        getItems: () => [
          { id: "auto-fit", value: "auto-fit" },
          { id: "zoom-in", value: "zoom-in" },
        ],
        onClick: (value) => {
          // 处理按钮点击事件
          if (value === "auto-fit") {
            graph.fitView();
          } else if (value === "zoom-in") {
            graph.zoomBy(1.1);
          }
        },
      },
      {
        type: "watermark",
        text: "基于AI agent的民航安检教学辅助平台",
        width: 400,
        opacity: 0.05, // 透明度
        rotate: Math.PI / 12, // 旋转角度
        backgroundRepeat: "repeat",
        backgroundPosition: "middle",
      },
    ],
  });
  // graph.on(NodeEvent.POINTER_OVER, (element) => {
  //   console.log(element);
  // });
  graph.render();
}
