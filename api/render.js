const themes = require('./themes');
class Card {
    constructor ({
        typeImg,
        typeColor,
        typeValue,
        typeIcon,
        typeAnimation,
    }) {
        this.typeImg = typeImg;
        this.typeColor = typeColor;
        this.typeValue = typeValue;
        this.typeIcon = typeIcon;
        this.typeAnimation = typeAnimation;
    }
    render() {
        var outputImg = '';
        let baseWidth = '', baseHeight = '', iconX = '', iconY = '',
            animationCode = '', animationClass = '', icon = '',
            imgBorder = '', imgText = '';
        if (this.typeImg === "vertical") {
            baseWidth = themes.type.vertical.width;
            baseHeight = themes.type.vertical.height;
            iconX = themes.type.vertical.icon.x;
            iconY = themes.type.vertical.icon.y;
        } else if (this.typeImg === "horizontal" || this.typeImg === undefined) {
            baseWidth = themes.type.horizontal.width;
            baseHeight = themes.type.horizontal.height;
            iconX = themes.type.horizontal.icon.x;
            iconY = themes.type.horizontal.icon.y;
        }
        if (this.typeIcon === "green") {
            icon = themes.icon.green;
        } else if (this.typeIcon === "yellow") {
            icon = themes.icon.yellow;
        } else if (this.typeIcon === "red") {
            icon = themes.icon.red;
        } else if (this.typeIcon === "star") {
            icon = themes.icon.star;
        } else if (this.typeIcon === "warning") {
            icon = themes.icon.alert;
        }
        if (this.typeAnimation === "fadeIn") {
            animationClass = themes.animation.fadeIn.class;
            animationCode = themes.animation.fadeIn.code;
        } else if (this.typeAnimation === "fadeInRight") {
            animationClass = themes.animation.fadeInRight.class;
            animationCode = themes.animation.fadeInRight.code;
        } else if (this.typeAnimation === "fadeInLeft") {
            animationClass = themes.animation.fadeInLeft.class;
            animationCode = themes.animation.fadeInLeft.code;
        } else if (this.typeAnimation === "fadeInTop") {
            animationClass = themes.animation.fadeInTop.class;
            animationCode = themes.animation.fadeInTop.code;
        }
        if (this.typeColor === "green") {
            imgBorder = themes.borderColor.green;
        } else if (this.typeColor === "yellow") {
            imgBorder = themes.borderColor.yellow;
        } else if (this.typeColor === "red") {
            imgBorder = themes.borderColor.red;
        } else if (this.typeColor === "gh" || this.typeColor === undefined) {
            imgBorder = themes.borderColor.gh;
        } else {
            imgBorder = themes.borderColor.none;
        }
        if (this.typeValue === undefined) {
            imgText = 'No text found!';
        } else {
            imgText = this.typeValue;
        }

        outputImg += `<svg xmlns="http://www.w3.org/2000/svg" style="width: ${baseWidth}; height: ${baseHeight};" class="${animationClass}"><rect width="90%" height="80%" fill="#13181f" x="5%" y="26px" style="stroke: ${imgBorder}; stroke-width: 2;" rx="6px" ry="6px"></rect><text font-size="38px" x="${iconX}" y="${iconY}">${icon}</text>`
        if (this.typeImg === "horizontal") {
            outputImg += `<text font-size="24px" font-family="Sans-Serif" x="50%" y="66%" fill="#fff" text-anchor="middle">${imgText}</text>`;
        } else if (this.typeImg === "vertical") {
            outputImg += `<foreignObject x="7%" y="40px" width="85%" height="80%"><div xmlns="http://www.w3.org/1999/xhtml" style="text-align: center; vertical-align: middle; line-height: 30px; color: white; font-family: Sans-Serif; font-size: 24px; overflow-wrap: break-word; overflow: hidden;"><p>${imgText}</p></div></foreignObject>`
        }
        outputImg += animationCode;
        outputImg += `</svg>`;

        return outputImg;
    }
}
module.exports = Card;

//colors:
//  yellow: #ffbe0b;
//  green: #2dba4e;
//  red: #bd2c00;
//  gh: #21262D;
//  none: #0D1117;
//themes:
//  vertical
//  horizontal
//animations:
//  fadein
//  fadeintop
//  fadeinleft
//  fadeinright
//icons:
//  🟢
//  🟡
//  🔴
//  ⭐
//  ⚠️