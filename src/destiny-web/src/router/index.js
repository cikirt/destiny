import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import WriterLayout from '../views/layout/WriterLayout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    role: ['admin','editor']     will control the page role (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if fasle ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  {
    path: '/authredirect',
    component: _import('login/authredirect'),
    hidden: true
  },
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '',
    component: WriterLayout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index'),
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  }
]
// ,
// {
//   path: '/documentation',
//   component: Layout,
//   redirect: '/documentation/index',
//   meta: {
//     title: 'documentation',
//     icon: 'documentation',
//     role: ['admin']
//   },
//   children: [
//     {
//       path: 'index',
//       component: _import('documentation/index'),
//       name: 'documentation',
//       meta: { title: 'documentation', icon: 'documentation', noCache: true, role: ['admin'] }
//     }
//   ]
// }
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/outline',
    component: Layout,
    redirect: '/outline/index',
    meta: { role: ['writer'] },
    children: [
      {
        path: 'index',
        component: _import('outline/index'),
        name: 'outline',
        meta: {
          title: 'outline',
          icon: 'lock',
          role: ['writer']
        }
      }
    ]
  },
  {
    path: '/players',
    component: Layout,
    redirect: '/players/index',
    meta: { role: ['writer'] },
    children: [
      {
        path: 'index',
        component: _import('players/index'),
        name: 'players',
        meta: {
          title: 'players',
          icon: 'lock',
          role: ['writer']
        }
      }
    ]
  },
  {
    path: '/chapter',
    component: Layout,
    redirect: '/chapter/index',
    meta: { role: ['writer'] },
    children: [
      {
        path: 'index',
        component: _import('chapter/index'),
        name: 'chapter',
        meta: {
          title: 'chapter',
          icon: 'lock',
          role: ['writer']
        }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'index',
        component: _import('permission/index'),
        name: 'permission',
        meta: {
          title: 'permission',
          icon: 'lock',
          role: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    meta: { role: ['admin'] },
    children: [
      {
        path: 'index',
        component: _import('svg-icons/index'),
        name: 'icons',
        meta: { title: 'icons', icon: 'icon', noCache: true, role: ['admin'] }
      }
    ]
  },

  {
    path: '/components',
    component: Layout,
    redirect: 'noredirect',
    name: 'component-demo',
    meta: {
      title: 'components',
      icon: 'component',
      role: ['admin']
    },
    children: [
      {
        path: 'tinymce',
        component: _import('components-demo/tinymce'),
        name: 'tinymce-demo',
        meta: { title: 'tinymce', role: ['admin'] }
      },
      {
        path: 'markdown',
        component: _import('components-demo/markdown'),
        name: 'markdown-demo',
        meta: { title: 'markdown', role: ['admin'] }
      },
      {
        path: 'json-editor',
        component: _import('components-demo/jsonEditor'),
        name: 'jsonEditor-demo',
        meta: { title: 'jsonEditor', role: ['admin'] }
      },
      {
        path: 'dnd-list',
        component: _import('components-demo/dndList'),
        name: 'dndList-demo',
        meta: { title: 'dndList', role: ['admin'] }
      },
      {
        path: 'splitpane',
        component: _import('components-demo/splitpane'),
        name: 'splitpane-demo',
        meta: { title: 'splitPane', role: ['admin'] }
      },
      {
        path: 'avatar-upload',
        component: _import('components-demo/avatarUpload'),
        name: 'avatarUpload-demo',
        meta: { title: 'avatarUpload', role: ['admin'] }
      },
      {
        path: 'dropzone',
        component: _import('components-demo/dropzone'),
        name: 'dropzone-demo',
        meta: { title: 'dropzone', role: ['admin'] }
      },
      {
        path: 'sticky',
        component: _import('components-demo/sticky'),
        name: 'sticky-demo',
        meta: { title: 'sticky', role: ['admin'] }
      },
      {
        path: 'count-to',
        component: _import('components-demo/countTo'),
        name: 'countTo-demo',
        meta: { title: 'countTo', role: ['admin'] }
      },
      {
        path: 'mixin',
        component: _import('components-demo/mixin'),
        name: 'componentMixin-demo',
        meta: { title: 'componentMixin', role: ['admin'] }
      },
      {
        path: 'back-to-top',
        component: _import('components-demo/backToTop'),
        name: 'backToTop-demo',
        meta: { title: 'backToTop', role: ['admin'] }
      }
    ]
  },

  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'charts',
    meta: {
      title: 'charts',
      icon: 'chart',
      role: ['admin']
    },
    children: [
      {
        path: 'keyboard',
        component: _import('charts/keyboard'),
        name: 'keyboardChart',
        meta: { title: 'keyboardChart', noCache: true, role: ['admin'] }
      },
      {
        path: 'line',
        component: _import('charts/line'),
        name: 'lineChart',
        meta: { title: 'lineChart', noCache: true, role: ['admin'] }
      },
      {
        path: 'mixchart',
        component: _import('charts/mixChart'),
        name: 'mixChart',
        meta: { title: 'mixChart', noCache: true, role: ['admin'] }
      }
    ]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table/complex-table',
    name: 'example',
    meta: {
      title: 'example',
      icon: 'example',
      role: ['admin']
    },
    children: [
      {
        path: '/example/table',
        component: _import('example/table/index'),
        redirect: '/example/table/complex-table',
        name: 'Table',
        meta: {
          title: 'Table',
          icon: 'table',
          role: ['admin']
        },
        children: [
          {
            path: 'dynamic-table',
            component: _import('example/table/dynamicTable/index'),
            name: 'dynamicTable',
            meta: { title: 'dynamicTable', role: ['admin'] }
          },
          {
            path: 'drag-table',
            component: _import('example/table/dragTable'),
            name: 'dragTable',
            meta: { title: 'dragTable', role: ['admin'] }
          },
          {
            path: 'inline-edit-table',
            component: _import('example/table/inlineEditTable'),
            name: 'inlineEditTable',
            meta: { title: 'inlineEditTable', role: ['admin'] }
          },
          {
            path: 'complex-table',
            component: _import('example/table/complexTable'),
            name: 'complexTable',
            meta: { title: 'complexTable', role: ['admin'] }
          }
        ]
      },
      {
        path: 'tab/index',
        icon: 'tab',
        component: _import('example/tab/index'),
        name: 'tab',
        meta: { title: 'tab', role: ['admin'] }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: 'noredirect',
    name: 'form',
    meta: {
      title: 'form',
      icon: 'form',
      role: ['admin']
    },
    children: [
      {
        path: 'create-form',
        component: _import('form/create'),
        name: 'createForm',
        meta: { title: 'createForm', icon: 'table' }
      },
      {
        path: 'edit-form',
        component: _import('form/edit'),
        name: 'editForm',
        meta: { title: 'editForm', icon: 'table' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404',
      role: ['admin']
    },
    children: [
      {
        path: '401',
        component: _import('errorPage/401'),
        name: 'page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: _import('errorPage/404'),
        name: 'page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'log',
        component: _import('errorLog/index'),
        name: 'errorLog',
        meta: { title: 'errorLog', icon: 'bug', role: ['admin'] }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'excel',
    meta: {
      title: 'excel',
      icon: 'excel',
      role: ['admin']
    },
    children: [
      {
        path: 'export-excel',
        component: _import('excel/exportExcel'),
        name: 'exportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'export-selected-excel',
        component: _import('excel/selectExcel'),
        name: 'selectExcel',
        meta: { title: 'selectExcel' }
      },
      {
        path: 'upload-excel',
        component: _import('excel/uploadExcel'),
        name: 'uploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'download',
        component: _import('zip/index'),
        name: 'exportZip',
        meta: { title: 'exportZip', icon: 'zip', role: ['admin'] }
      }
    ]
  },

  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'index',
        component: _import('theme/index'),
        name: 'theme',
        meta: { title: 'theme', icon: 'theme', role: ['admin'] }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    meta: { role: ['admin'] },
    children: [
      {
        path: 'index',
        component: _import('clipboard/index'),
        name: 'clipboardDemo',
        meta: { title: 'clipboardDemo', icon: 'clipboard', role: ['admin'] }
      }
    ]
  },

  {
    path: '/i18n',
    component: Layout,
    meta: { role: ['admin'] },
    children: [
      {
        path: 'index',
        component: _import('i18n-demo/index'),
        name: 'i18n',
        meta: { title: 'i18n', icon: 'international', role: ['admin'] }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
