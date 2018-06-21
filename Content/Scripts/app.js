'use strict';

(function (factory) {
    window.App = factory({});
}(function (App) {

    var Token = NeAdmin.Utils.createStorage('_app_token_');
    var UserInfo = NeAdmin.Utils.createStorage('_app_userinfo_');
    var navData = {
        menuType: 'menubar',
        menuItems: [{
                icon: '<i class="ne-icon-smile"></i>',
                title: '封面',
                href: '/views/hello.html'
            },
            {
                icon: '<i class="ne-icon-puzzle"></i>',
                title: 'UI组件',
                href: '',
                submenu: {
                    menuType: 'sidebar',
                    menuItems: [{
                            icon: '<i class="ne-icon-home"></i>',
                            title: '一级菜单',
                            href: '/views/ui/index.html'
                        },
                        {
                            type: 'heading',
                            title: 'UI基础'
                        },
                        {
                            icon: '<i class="ne-icon-doc"></i>',
                            title: '排版基础',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                    icon: '',
                                    title: '文字',
                                    href: '/views/ui/font.html'
                                }, {
                                    icon: '',
                                    title: '色彩',
                                    href: '/views/ui/color.html'
                                }, {
                                    icon: '',
                                    title: '文章结构',
                                    href: '/views/ui/typegraphy.html'
                                }]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-layout"></i>',
                            title: '布局基础',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '栅格化',
                                        href: '/views/ui/row.html'
                                    },
                                    {
                                        icon: '',
                                        title: '可伸缩盒子',
                                        href: '/views/ui/cell.html'
                                    },
                                    {
                                        icon: '',
                                        title: '比例控制盒子',
                                        href: '/views/ui/adaptivebox.html'
                                    }
                                ]
                            }
                        },
                        {
                            type: 'heading',
                            title: 'UI组件'
                        },
                        {
                            icon: '<i class="ne-icon-pencil"></i>',
                            title: '数据输入',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                    icon: '',
                                    title: '按钮',
                                    href: '/views/ui/button.html'
                                }, {
                                    icon: '',
                                    title: '表单',
                                    href: '',
                                    submenu: {
                                        menuType: '',
                                        menuItems: [{
                                            icon: '',
                                            title: '表单录入',
                                            href: '/views/ui/form.html'
                                        }, {
                                            icon: '',
                                            title: '表单验证',
                                            href: '/views/ui/validate.html'
                                        }]
                                    }
                                }, {
                                    icon: '',
                                    title: '选择器',
                                    href: '/views/ui/picker.html'
                                }, {
                                    icon: '',
                                    title: '穿梭框',
                                    href: '/views/ui/shuttle.html'
                                }, {
                                    icon: '',
                                    title: '上传',
                                    href: '/views/ui/uploads.html'
                                }, {
                                    icon: '',
                                    title: '滑动输入条',
                                    href: '/views/ui/range.html'
                                }, {
                                    icon: '',
                                    title: '文本编辑器',
                                    href: '/views/ui/htmleditor.html'
                                }, {
                                    icon: '',
                                    title: '图片裁剪器',
                                    href: '/views/ui/imgeditor.html'
                                }]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-calender"></i>',
                            title: '数据展现',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                    icon: '',
                                    title: '标签、徽标',
                                    href: '/views/ui/badge.html'
                                }, {
                                    icon: '',
                                    title: '表格',
                                    href: '',
                                    submenu: {
                                        menuType: '',
                                        menuItems: [{
                                            icon: '',
                                            title: '普通表格',
                                            href: '/views/ui/table.html'
                                        }, {
                                            icon: '',
                                            title: '动态表格',
                                            href: '/views/ui/datatable.html'
                                        }]
                                    }
                                }, {
                                    icon: '',
                                    title: '列表',
                                    href: '/views/ui/list.html'
                                }, {
                                    icon: '',
                                    title: '面板',
                                    href: '/views/ui/panel.html'
                                }, {
                                    icon: '',
                                    title: '时间轴',
                                    href: '/views/ui/stepline.html'
                                }, {
                                    icon: '',
                                    title: '树形控件',
                                    href: '/views/ui/tree.html'
                                }, {
                                    icon: '',
                                    title: '选项卡',
                                    href: '/views/ui/tabbar.html'
                                }, {
                                    icon: '',
                                    title: '走马灯',
                                    href: '/views/ui/carousel.html'
                                }]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-bulb"></i>',
                            title: '信息反馈',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                    icon: '',
                                    title: '加载中',
                                    href: '/views/ui/toast.html'
                                }, {
                                    icon: '',
                                    title: '进度条',
                                    href: '/views/ui/progress.html'
                                }, {
                                    icon: '',
                                    title: '警告提示',
                                    href: '/views/ui/notice.html'
                                }, {
                                    icon: '',
                                    title: '通知提醒',
                                    href: '/views/ui/message.html'
                                }, {
                                    icon: '',
                                    title: '对话框',
                                    href: '/views/ui/dialog.html'
                                }, {
                                    icon: '',
                                    title: '气泡确认框',
                                    href: '/views/ui/popover.html'
                                }]
                            }
                        },
                        {
                            type: 'heading',
                            title: '其他'
                        },
                        {
                            icon: '<i class="ne-icon-pin"></i>',
                            title: '锚点',
                            href: '/views/ui/href.html'
                        },
                        {
                            icon: '<i class="ne-icon-iarrow-up-o"></i>',
                            title: '回到顶部',
                            href: ''
                        }
                    ]
                }
            },
            {
                icon: '<i class="ne-icon-docs"></i>',
                title: '模版页面',
                href: '',
                submenu: {
                    menuType: 'menubar',
                    menuItems: [{
                            icon: '<i class="ne-icon-edit"></i>',
                            title: '表单页',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '基础表单',
                                        href: '/views/mod/form/basic.html'
                                    },
                                    {
                                        icon: '',
                                        title: '分步表单',
                                        href: '/views/mod/form/step.html'
                                    },
                                    {
                                        icon: '',
                                        title: '高级表单',
                                        href: '/views/mod/form/advanced.html'
                                    }
                                ]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-list"></i>',
                            title: '列表页',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '搜索表格',
                                        href: '/views/mod/list/table.html'
                                    },
                                    {
                                        icon: '',
                                        title: '标准列表',
                                        href: '/views/mod/list/basic.html'
                                    },
                                    {
                                        icon: '',
                                        title: '卡片列表',
                                        href: '/views/mod/list/card.html'
                                    }
                                ]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-news"></i>',
                            title: '详情页',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '基础详情页',
                                        href: '/views/mod/profile/basic.html'
                                    },

                                    {
                                        icon: '',
                                        title: '高级详情页',
                                        href: '/views/mod/profile/advanced.html'
                                    }
                                ]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-barchart"></i>',
                            title: '统计类页',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '工作台',
                                        href: '/views/mod/statistics/workplace.html'
                                    },
                                    {
                                        icon: '',
                                        title: '监控页',
                                        href: '/views/mod/statistics/monitor.html'
                                    },
                                    {
                                        icon: '',
                                        title: '分析页',
                                        href: '/views/mod/statistics/analysis.html'
                                    }
                                ]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-success-o"></i>',
                            title: '结果页',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '成功',
                                        href: '/views/mod/result/success.html'
                                    },
                                    {
                                        icon: '',
                                        title: '失败',
                                        href: '/views/mod/result/fail.html'
                                    }
                                ]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-ghost"></i>',
                            title: '异常页',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '403',
                                        href: '/views/mod/exception/403.html'
                                    },

                                    {
                                        icon: '',
                                        title: '404',
                                        href: '/views/mod/exception/404.html'
                                    },

                                    {
                                        icon: '',
                                        title: '500',
                                        href: '/views/mod/exception/500.html'
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                icon: '<i class="ne-icon-book"></i>',
                title: '说明文档',
                href: '',
                submenu: {
                    menuType: 'menubar',
                    menuItems: [{
                            icon: '<i class="ne-icon-info-o"></i>',
                            title: '介绍',
                            href: '/views/doc/about.html'
                        },
                        {
                            icon: '<i class="ne-icon-star"></i>',
                            title: '设计价值观',
                            href: '/views/doc/sense.html'
                        },
                        {
                            icon: '<i class="ne-icon-flag"></i>',
                            title: '原则',
                            href: '/views/doc/rule.html'
                        },
                        {
                            icon: '<i class="ne-icon-grid"></i>',
                            title: '实践案例',
                            href: '/views/doc/case.html'
                        },
                        {
                            icon: '<i class="ne-icon-reading"></i>',
                            title: '文档',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '开始使用',
                                        href: ''
                                    },
                                    {
                                        icon: '',
                                        title: '入门',
                                        href: '',
                                        submenu: {
                                            menuType: '',
                                            menuItems: [{
                                                icon: '',
                                                title: '布局',
                                                href: ''
                                            }, {
                                                icon: '',
                                                title: '路由和菜单',
                                                href: ''
                                            }, {
                                                icon: '',
                                                title: '新增页面',
                                                href: ''
                                            }]
                                        }
                                    },
                                    {
                                        icon: '',
                                        title: '进阶',
                                        href: '',
                                        submenu: {
                                            menuType: '',
                                            menuItems: [{
                                                    icon: '',
                                                    title: '更换主题',
                                                    href: ''
                                                },
                                                {
                                                    icon: '',
                                                    title: '错误处理',
                                                    href: ''
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                icon: '<i class="ne-icon-ellipsis_horizontal"></i>',
                title: '更多',
                href: '',
                submenu: {
                    menuType: '',
                    menuItems: [{
                            icon: '<i class="ne-icon-cup"></i>',
                            title: '问卷设计',
                            href: '/views/demo/questionnaire/editor.html'
                        }, {
                            icon: '<i class="ne-icon-direction"></i>',
                            title: '侧栏导航测试',
                            href: '',
                            submenu: {
                                menuType: 'sidebar',
                                menuItems: [{
                                        icon: '<i class="ne-icon-home"></i>',
                                        title: '一级菜单',
                                        href: '/views/demos/创建问卷.html'
                                    },
                                    {
                                        type: 'heading',
                                        title: '分类标题'
                                    },
                                    {
                                        icon: '<i class="ne-icon-smile"></i>',
                                        title: '一级菜单',
                                        href: '',
                                        submenu: {
                                            menuType: '',
                                            menuItems: [{
                                                    icon: '',
                                                    title: '二级菜单',
                                                    href: ''
                                                },
                                                {
                                                    icon: '',
                                                    title: '二级菜单',
                                                    href: '',
                                                    submenu: {
                                                        menuType: '',
                                                        menuItems: [{
                                                                icon: '',
                                                                title: '三级菜单',
                                                                href: ''
                                                            },
                                                            {
                                                                icon: '',
                                                                title: '三级菜单',
                                                                href: ''
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        icon: '<i class="ne-icon-rocket"></i>',
                                        title: '一级菜单',
                                        href: '',
                                        submenu: {
                                            menuType: '',
                                            menuItems: [{
                                                    icon: '',
                                                    title: '二级菜单',
                                                    href: ''
                                                },
                                                {
                                                    icon: '',
                                                    title: '二级菜单',
                                                    href: ''
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            icon: '<i class="ne-icon-directions"></i>',
                            title: '多级菜单测试',
                            href: '',
                            submenu: {
                                menuType: '',
                                menuItems: [{
                                        icon: '',
                                        title: '三级菜单',
                                        href: ''
                                    },
                                    {
                                        icon: '',
                                        title: '三级菜单',
                                        href: '',
                                        submenu: {
                                            menuType: '',
                                            menuItems: [{
                                                    icon: '',
                                                    title: '四级菜单',
                                                    href: ''
                                                },

                                                {
                                                    icon: '',
                                                    title: '四级菜单',
                                                    href: ''
                                                },

                                                {
                                                    icon: '',
                                                    title: '四级菜单',
                                                    href: ''
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }

    /*** Process ***/
    function requestApi(ajaxObj) {
        var url = ajaxObj.type == 'get' ? ajaxObj.url + '?' + Ne.dom.url.parameterToStr(ajaxObj.data) : ajaxObj.url;
        var data = ajaxObj.data;
        var token = Token.get();

        if (ajaxObj.debug == true) {
            ajaxObj.beforeSend && ajaxObj.beforeSend();
            setTimeout(function () {
                ajaxObj.success();
                ajaxObj.complete && ajaxObj.complete();
            }, 500);
            return;
        }
        Ne.ajax({
            type: ajaxObj.type || 'post',
            //contentType: 'Application/json',
            dataType: ajaxObj.dataType || 'json',
            url: url,
            data: ajaxObj.type != 'get' ? data : null,
            timeout: ajaxObj.timeout || 10000,
            async: ajaxObj.async || true,
            cache: ajaxObj.cache || false,
            beforeSend: function (XHR) {
                XHR.setRequestHeader("Authorization", token);
                if (typeof (ajaxObj.beforeSend) == 'function') {
                    ajaxObj.beforeSend(XHR);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                if (typeof (ajaxObj.error) == 'function') {
                    ajaxObj.error(XMLHttpRequest, textStatus);
                }
                if (XMLHttpRequest.status == 900) {
                    Ne.dialog.alert('操作失败', '抱歉，由于您太长时间未操作，系统会话已结束，需要您重新登录', function () {
                        App.logout();
                    });
                }
            },
            dataFilter: function (responseText, dataType) {
                return responseText
            },
            success: function (infoObj) {
                if (Ne._.isString(infoObj)) {
                    try {
                        infoObj = JSON.parse(infoObj);
                    } catch (e) {
                        infoObj = {};
                    }
                }
                ajaxObj.success(infoObj);
            },
            complete: function (XHR, TS) {
                if (typeof (ajaxObj.complete) == 'function') {
                    ajaxObj.complete(XHR, TS);
                }
            }
        });
    }

    function requestToken(acc, pwd, callback) {
        requestApi({
            type: 'get',
            url: '/Pad/Login',
            data: {
                Account: acc,
                Password: pwd
            },
            debug: true,
            success: function (responseJson) {
                responseJson = {
                    Code: 0,
                    UserInfo: {
                        name: '周小明',
                        sex: '男',
                        headimg: ''
                    },
                    Token: 'XIOSD_DWKODKLSD_WDMOWJIOIODW_DWODW__'
                };
                if (responseJson.Code == 0) {
                    responseJson.success = true;
                    callback(responseJson);
                } else {
                    responseJson.success = false;
                    switch (responseJson.Code) {
                        case 100: //账号错误
                            responseJson.msg = '账号错误';
                            break;
                        case 101: //密码错误
                            responseJson.msg = '密码错误';
                            break;
                        case 200: //自动登陆数据认证失败
                            responseJson.msg = '自动登陆数据认证失败';
                            break;
                        case 201: //自动登陆超过有效期
                            responseJson.msg = '自动登陆超过有效期';
                            break;
                        case 500: //程序错误
                            responseJson.msg = '程序错误';
                            break;
                        default: //未知错误
                            responseJson.msg = '未知错误';
                            break;
                    }
                    callback(responseJson);
                }
            },
            error: function (xhr, status) {
                callback({
                    success: false,
                    msg: status
                });
            }
        });
    }

    /*** Exports ***/
    App.init = function () {
        NeAdmin.init({
            indexPath: '/views/hello.html',
            onCheckLogin: function () {
                return Token.get() && UserInfo.get();
            },
            onLoginSubmit: function (account, password, complateFn) {
                requestToken(account, password, function (res) {
                    if (res.success) {
                        Token.set(res.Token);
                        UserInfo.set(res.UserInfo);
                        NeAdmin.setData({
                            user: {
                                name: res.UserInfo.name
                            },
                            nav: navData
                        });
                        complateFn(true);
                    } else {
                        complateFn(res.msg);
                    }
                });
            },
            onLogout: function () {
                Token.remove();
                UserInfo.remove();
            }
        });
    }

    App.requestApi = requestApi;

    return App;
}));


function hideInputPicker() {
    var el_chatcontroller = document.querySelector('#j-chatcontroller'),
        el_expandpicker = el_chatcontroller.querySelector('.ne-chat-inputpicker.expand');
    if (el_expandpicker) {
        el_expandpicker.style.maxHeight = '0px';
        el_expandpicker.classList.remove('expand');
        el_chatcontroller.querySelector('.ne-mask').classList.add('none');
    }
}

function showInputPicker(type) {
    var el_chatcontroller = document.querySelector('#j-chatcontroller');
    var el_targetpicker = el_chatcontroller.querySelector('#j-' + type + 'picker');
    hideInputPicker();
    el_chatcontroller.querySelector('.ne-mask').classList.remove('none');
    el_targetpicker.style.maxHeight = el_targetpicker.scrollHeight + 'px';
    el_targetpicker.classList.add('expand');
}