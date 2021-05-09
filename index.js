/*=====================================================================
* FileName: index.js
* Author: qidaink
* FileInstructions: Cloud And Sea 站点中添加 live2d 插件
*=======================================================================*/

/* global hexo */

'use strict';  /* 启用strict模式 */

/*---------------------------------------------------------------------*/
//设置 myliverd 默认值
hexo.config.myliverd = Object.assign({
  enable: false,
  local: false,
  cdnPath: "https://unpkg.com/hexo-qidaink-live2d@1.1.0/live2d-widget/autoload.js"
}, hexo.config.myliverd);
const live2d_config = hexo.config.myliverd;

/*---------------------------------------------------------------------*/
//加载 live2d
//异步加载：defer (live2d使用到了jquery依赖，所以需要使用defer)
if (live2d_config.enable){
  /* 本地加载 */
  if(live2d_config.local == true){
    /* 本地加载需安装依赖：npm install @next-theme/utils */
    const Util = require('@next-theme/utils');
    const utils = new Util(hexo, __dirname);

    hexo.extend.filter.register('theme_inject', injects => {
      injects.bodyEnd.raw('live2d', '<script defer src="{{ url_for("live2d-widget/autoload.js") }}"></script>');
    });

    hexo.extend.generator.register('live2d', () => {
      return {
        path: 'live2d-widget/autoload.js',
        data: utils.getFileContent('live2d-widget/autoload.js')
      };
    });
  }
  /* CDN加载 */
  else{
    hexo.extend.filter.register('theme_inject', injects => {
      /* ${}为模板字符串，在此函数中使用时外部为反引号 `` */
      injects.bodyEnd.raw('live2d', `<script defer src= ${ live2d_config.cdnPath }></script>`);
    });
  }
}
else{
  return;
}
