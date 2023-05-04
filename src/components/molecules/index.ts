import UI001 from "./UI001";
import UI002 from "./UI002";
import UI003 from "./UI003";
import UI004 from "./UI004";

export const molecules = [
  {
    id: "UI001",
    content: UI001,
    json: {
      id: "UI001",
      texts: ["매일 밤 11시", "수거가 시작됩니다."],
    },
  },
  {
    id: "UI002",
    content: UI002,
    json: {
      id: "UI002",
      pickupText: "수거: ${month}/${day}(${shortWeek}) 밤 11시",
      deliveryText: "배송: ${month}/${day}(${shortWeek}) 아침 7시",
      buttonText: "변경",
      type: "section",
      globalStateName: "orderData",
    },
  },
  {
    id: "UI003",
    content: UI003,
    json: {
      id: "UI003",
      imageUrl:
        "https://ws-devel-demo.s3.ap-northeast-2.amazonaws.com/20220511/laundrybag.png",
    },
  },
  {
    id: "UI004",
    content: UI004,
    json: {
      id: "UI004",
      imageSourceType: "local",
      imageName: "truck",
      text: "배송비는 3,000원이며 19,800원 이상 주문시 무료 배송입니다.",
    },
  },
];
