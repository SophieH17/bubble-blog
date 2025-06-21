import Mock from 'mockjs'
const Random = Mock.Random;

export const overviewData = Mock.mock({
    code:200, // 200 for success
    data: {
        "file": Random.float(60,100,2,2)+'M',
        "article|0-50": 0,
        "gallery|0-50": 0,
        "diary|0-50": 0,
        "shareable|0-50": 0,
        "project|0-50": 0,
    }
})