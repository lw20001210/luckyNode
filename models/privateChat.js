const Sequelize = require("sequelize");
const sequelize = require("../mysql/sequlize");
const privateChatModel = sequelize.define(
    "privateChat",
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true, //主键
            autoIncrement: true,
            unique: true, //唯一性
        },
        fromUid: {
            type: Sequelize.INTEGER,
        },
        toUid: {
            type: Sequelize.INTEGER,
        },
        message: {
            type: Sequelize.JSON,
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0//未读,已读,-1已删除
        },
        createTime: {
            type: Sequelize.STRING(100),
            defaultValue: Date.now(),
        },
    },
    { timestamps: false } //这个它会自动生成两个时间字段，我不需要·，所以弄掉了
);

module.exports = privateChatModel;
