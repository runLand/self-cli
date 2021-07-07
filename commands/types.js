//选择不同的项目类型，返回不同的分支
const files = [
  {
    type: 'list',
    message: 'please choose project type:',
    name: 'type',
    choices: [
      "Vue",
      "React"
    ],
    filter: val => val.toLowerCase()
  },
  {
    type: 'list',
    message: 'please choose project ui:',
    name: 'ui',
    choices: [
      "element-ui",
      "ant-design-vue",
      "none"
    ],
    filter: val => val.toLowerCase()
  },
]

module.exports = files;