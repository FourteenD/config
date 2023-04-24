module.exports = {
  // 每行代码的最大长度
  printWidth: 80,
  // 一个制表符等于几个空格
  tabWidth: 2,
  // 是否使用制表符而不是空格
  useTabs: false,
  // 是否在语句末尾添加分号
  semi: true,
  // 是否使用单引号而不是双引号
  singleQuote: false,
  // 对象属性是否强制使用引号
  quoteProps: "as-needed",
  // 在JSX中是否使用单引号而不是双引号
  jsxSingleQuote: false,
  // 数组或对象最后一个元素后是否添加逗号
  trailingComma: "es5",
  // 是否在对象的花括号之间添加空格
  bracketSpacing: true,
  // 在JSX中是否将>放在最后一行的末尾，而不是新起一行
  jsxBracketSameLine: false,
  // 箭头函数参数是否始终使用括号
  arrowParens: "always",
  // 是否在文件顶部插入一个特殊的注释，指定这是格式化过的代码
  requirePragma: false,
  // 是否在文件顶部插入一个特殊的注释，指定这是格式化过的代码
  insertPragma: false,
  // 是否在Markdown文本中保留换行符
  proseWrap: "preserve",
  // HTML空格敏感度
  htmlWhitespaceSensitivity: "css",
  // 是否缩进Vue文件中的script和style标签
  vueIndentScriptAndStyle: false,
  // 换行符类型
  endOfLine: "auto",
  // 是否格式化嵌入式语言（如HTML中的JS代码）
  embeddedLanguageFormatting: "auto",
  /** 其它示例 **/
  // 插件
  plugins: ["prettier-plugin-packagejson"],
  // 覆盖
  overrides: [
    {
      files: "*.test.js",
      options: {
        semi: true,
      },
    },
    {
      files: ["*.html", "legacy/**/*.js"],
      options: {
        tabWidth: 4,
      },
    },
  ],
};
