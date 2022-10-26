import router from '.'

/* 静态页面路由 */
let staticRouter = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/AppLogin')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/AppRegister')
  }, {
    path: '/',
    menu: true,
    name: 'layout',
    component: () => import('@/views/layout/TheLayout'),
    children: [
      {
        path: '/index',
        name: 'index',
        title: 'menu.home',
        icon: 'el-icon-s-home',
        component: () => import('@/views/pages/PageHome'),
        
      }, {
        path: '/table',
        name: 'table',
        title: 'menu.table',
        icon: 'el-icon-search',
        component: () => import('@/views/pages/PageTable'),
        hide:true,
      }, {
        path: '/forms',
        name: 'forms',
        title: 'menu.form',
        icon: 'el-icon-tickets',
        component: () => import('@/views/layout/TheLayoutEmpty'),
        children: [
          {
            path: '/forms/base',
            name: 'formsBase',
            title: 'menu.formBase',
            component: () => import('@/views/pages/forms/PageFormsBase')
          }, {
            path: '/forms/edit',
            name: 'formsEdit',
            title: 'menu.richText',
            component: () => import('@/views/pages/forms/PageFormsEdit')
          }
        ]
      }, {
        path: '/charts',
        name: 'charts',
        title: 'menu.chart',
        icon: 'el-icon-picture',
        component: () => import('@/views/pages/PageCharts'),
        hide:true,
      }, {
        path: '/errorDemo',
        name: 'errorDemo',
        title: 'menu.error',
        icon: 'el-icon-error',
        component: () => import('@/views/layout/TheLayoutEmpty'),
        children: [
          {
            path: '/errorDemo/403',
            name: 'errorDemo403',
            title: 'error.error403',
            component: () => import('@/views/error/AppError403'),
            hide:true,
          }, {
            path: '/errorDemo/404',
            name: 'errorDemo404',
            title: 'error.error404',
            component: () => import('@/views/error/AppError404')
          }, {
            path: '/errorDemo/500',
            name: 'errorDemo500',
            title: 'error.error500',
            component: () => import('@/views/error/AppError500')
          }
        ]
      }, {
        path: '/drag',
        name: 'drag',
        title: 'menu.drag',
        icon: 'el-icon-rank',
        component: () => import('@/views/pages/PageDrag')
      }, {
        path: '/user',
        name: 'user',
        title: 'menu.settings',
        icon: 'el-icon-setting',
        component: () => import('@/views/layout/TheLayoutEmpty'),
        children: [
          {
            path: '/user/password',
            name: 'userPassword',
            title: 'menu.modifyPass',
            component: () => import('@/views/pages/user/PageUserPassword')
          }, {
            path: '/user/permissions',
            name: 'userPermissions',
            title: 'menu.permissions',
            component: () => import('@/views/pages/user/PageUserPermissions')
          }
        ]
      }, {
        path: '/about',
        name: 'about',
        title: 'menu.about',
        icon: 'el-icon-star-off',
        component: () => import('@/views/pages/PageAbout')
      }
    ]
  }, {
    path: '/error/403',
    name: 'error403',
    component: () => import('@/views/error/AppError403')
  }, {
    path: '/error/500',
    name: 'error500',
    component: () => import('@/views/error/AppError500'),
    hide:true,
  }, {
    path: '*',
    name: 'error404',
    component: () => import('@/views/error/AppError404'),
    hide:true,
  }
]

getHideRuter(staticRouter)

function getHideRuter(allRouter) {
  allRouter.forEach((item,index)=>{
    if (item.hide == true) {
      allRouter.splice(index,1)
    }
    if (item.children != undefined&&item.children.length > 0) {
      return getHideRuter(item.children)
    }
  })
  return allRouter
}





export default staticRouter
