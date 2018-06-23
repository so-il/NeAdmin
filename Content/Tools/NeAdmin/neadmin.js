'use strict';

/****************************************************************** 
 * @neui extend
 ******************************************************************/

(function (Ne) {
    var el_aside = document.querySelector('.neadmin-aside');
    var el_navbar = document.querySelector('.neadmin-navbar');
    var el_header = document.querySelector('.neadmin-header');
    var el_body = document.querySelector('.neadmin-body');

    //fn
    var LoginInfo = function () {
        var storagename = '_neadmin_logininfo';
        return {
            get: function () {
                var logininfo = localStorage.getItem(storagename);
                if (logininfo) {
                    logininfo = JSON.parse(logininfo);
                }
                return logininfo;
            },
            set: function (logininfoObj) {
                localStorage.setItem(storagename, JSON.stringify(logininfoObj));
            },
            remove: function () {
                localStorage.removeItem(storagename);
            }
        };
    }();

    function loginSubmit(el_form, handler) {
        var el_input_username = el_form.querySelector('input[name="username"]'),
            el_input_password = el_form.querySelector('input[name="password"]'),
            el_checkbox_rememberme = el_form.querySelector('#login_checkbox_rememberme'),
            el_btn_submit = el_form.querySelector('button[type="submit"]');
        //valify
        if (el_input_username.value != '' && el_input_password.value != '') {
            Ne.acts(el_btn_submit).showloading();
            handler(el_input_username.value, el_input_password.value, function () {
                Ne.acts(el_btn_submit).hideloading();
                el_input_password.value = '';
                if (el_checkbox_rememberme.checked) {
                    LoginInfo.set({
                        acc: el_input_username.value
                    });
                } else {
                    el_input_username.value = '';
                    LoginInfo.remove();
                }
            });
        } else {
            Ne.dialog.alert('提示', '请输入账号和密码');
        }
    }

    function fixContentHeight() {
        var headerHeight = el_header.offsetHeight;
        var contentHeight = (document.documentElement.clientHeight - headerHeight);
        el_body.style.top = headerHeight + 'px';
        el_body.style.minHeight = contentHeight + 'px';
        if (el_aside.classList.contains('fixed')) {
            var headerHeight = el_header.offsetHeight;
            el_aside.style.top = headerHeight + 'px';
            el_aside.classList.add('fixed');
        }
    }

    function renderMenu(menu, menuId) {
        var menuType = menu.menuType ? 'ne-' + menu.menuType : '';
        var menuGroup = Ne.dom.render('<ul id="' + menuId + '" class="ne-menu ' + menuType + '" ne-role="menubar"></ul>');
        menu.menuItems && menu.menuItems.forEach(function (item, index) {
            var hasSubmenu = item.submenu && item.submenu.menuItems.length > 0;
            var submenuIsSidebar = hasSubmenu && item.submenu.menuType == 'sidebar';
            var href = item.href && item.href.toLowerCase() != '' ? item.href : 'javascript:;';
            var pathname = href != 'javascript:;' ? Ne.dom.url.parse(href).pathname : '';
            var id = menuId + '_' + index;
            var submenuId = id + '_submenu';
            var menuItemHtml = '';
            if (item.type == 'heading') {
                menuItemHtml = '<li class="heading"><span>' + item.title + '</span></li>';
            } else {
                menuItemHtml = '<li>' +
                    '<a href="' + href + '" data-pathname="' + pathname + '" class="ne-menu-link" ne-role="menulink" ne-tap="toggle:menulink" >' +
                    '<span class="ne-menu-link-icon">' + item.icon + '</span>' +
                    '<span class="ne-menu-link-title">' + item.title + '</span>' +
                    (hasSubmenu && !submenuIsSidebar ? '<span class="ne-menu-link-arrow"></span>' : '') +
                    '</a>' +
                    '</li>'
            }
            var menuItem = Ne.dom.render(menuItemHtml);
            if (hasSubmenu) {
                var submenu = renderMenu(item.submenu, submenuId);
                if (submenuIsSidebar) {
                    menuItem.children[0].setAttribute('data-sidebar', submenuId);
                    submenu.classList.add('none');
                    el_aside.querySelector('.ne-sidebar-wrap').appendChild(submenu);
                } else {
                    menuItem.appendChild(submenu);
                }
            }
            menuGroup.appendChild(menuItem);
        });
        return menuGroup;
    }

    function setNav(obj) {
        el_aside.appendChild(Ne.dom.render(
            '<div class="ne-sidebar-toggler" ne-tap="toggleSidebar:neadmin-main">' +
            '<i class="ne-icon-menu"></i>' +
            '</div>' +
            '<div class="ne-sidebar-wrap"></div>'
        ));
        if (obj.menuType == 'sidebar') {
            var clearMenuType = function (menu) {
                menu.menuType = '';
                if (menu.menuItems) {
                    menu.menuItems.forEach(function (items) {
                        if (items.submenu) {
                            items.submenu = clearMenuType(items.submenu);
                        }
                    });
                }
                return menu;
            }
            obj = clearMenuType(obj);
            obj.menuType = 'sidebar';
            var menubar = renderMenu(obj, 'nemenu');
            el_aside.querySelector('.ne-sidebar-wrap').appendChild(menubar);
            el_aside.classList.add('block');
        } else {
            obj.menuType = 'menubar';
            var menubar = renderMenu(obj, 'nemenu');
            menubar.classList.add('ne-menubar-top');
            el_navbar.appendChild(menubar);
        }

    }

    function toggleSidebar(cls) {
        if (cls == 'fixed') {
            if (!el_aside.classList.contains(cls)) {
                var headerHeight = el_header.offsetHeight;
                el_aside.style.top = headerHeight + 'px';
                el_aside.classList.add('fixed');
            } else {
                el_aside.style.top = 0;
                el_aside.classList.remove('fixed');
            }
        } else {
            el_aside.classList[el_aside.classList.contains(cls) ? 'remove' : 'add'](cls);
        }
    }

    function exOrColSidebar(toExpand, sidebar) {
        sidebar = Ne._.isString(sidebar) ? el_aside.querySelector(sidebar) : sidebar;
        var cur_sidebar = el_aside.querySelector('.ne-sidebar.block');
        if (cur_sidebar) {
            cur_sidebar.classList.remove('block');
            cur_sidebar.classList.add('none');
        }
        if (toExpand) {
            sidebar.classList.add('block');
            sidebar.classList.remove('none');
            el_aside.classList.add('block');
        } else {
            sidebar.classList.add('none');
            sidebar.classList.remove('block');
            el_aside.classList.remove('block');
        }
    }

    Ne.component('neadmin-start', {
        props: {
            show: function () {
                var el = this;
                el.classList.remove('neadmin-start-out');
                el.classList.add('neadmin-start-in');
                setTimeout(function () {
                    el.querySelector('.neadmin-start-title').classList.add('showanimate');
                }, 300);
            },
            hide: function () {
                var el = this;
                setTimeout(function () {
                    el.classList.remove('neadmin-start-in');
                    setTimeout(function () {
                        el.querySelector('.neadmin-start-title').classList.remove('showanimate');
                    }, 100);
                }, 1500);
            }
        }
    });

    Ne.component('neadmin-login', {
        props: {
            onsubmit: function (handler) {
                var el_form = this.querySelector('form.neadmin-login-form');
                el_form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    loginSubmit(el_form, handler);
                });
            },
            submit: function (handler) {
                var el_form = this.querySelector('form.neadmin-login-form');
                loginSubmit(el_form, handler);
            },
            show: function () {
                var target = this;
                var el_form = target.querySelector('form.neadmin-login-form');
                //显示login模块
                target.classList.remove('neadmin-login-out');
                target.classList.add('neadmin-login-in');
                //如果记住了账号，插入值到登录表单中
                var logininfo = LoginInfo.get();
                if (logininfo && logininfo.acc) {
                    el_form.querySelector('input[name="username"]').value = logininfo.acc;
                    el_form.querySelector('#login_checkbox_rememberme').setAttribute('checked', 'checked');
                }
            },
            hide: function () {
                var el = this;
                el.classList.remove('neadmin-login-in');
                el.classList.add('neadmin-login-out');
                setTimeout(function () {
                    el.classList.remove('neadmin-login-out');
                }, 300);
            }
        }
    });

    Ne.component('neadmin-main', {
        props: {
            show: function () {
                this.classList.add('neadmin-main-in');
                fixContentHeight();
            },
            hide: function () {
                this.classList.remove('neadmin-main-in');
            },
            setUserInfo: function (_userinfo) {
                this.querySelector('#j-usrname').innerText = 'Hi,' + _userinfo.name;
            },
            setNav: function (obj) {
                setNav(obj);
            },
            setTheme: function (_themesetting) {
                if (_themesetting.color) {
                    var color = Ne.dom.url.parse("/Content/Tools/NeAdmin/themes/" + _themesetting.color + ".css");
                    var c = document.querySelector('#themeColor');
                    document.querySelector('[name="checkbox_theme"]:checked').checked = false;
                    var ccc = document.querySelector('[name="checkbox_theme"][value="' + _themesetting.color + '"]');
                    ccc.checked = true;
                    if (c.href != color.href) {
                        c.href = color.href;
                    }
                }
                if (_themesetting.sidebar.collapse) {
                    toggleSidebar('collapse');
                    document.querySelector('#themesetting-sidebarcollapse').value = 1;
                }
                if (_themesetting.sidebar.fixed) {
                    toggleSidebar('fixed');
                    document.querySelector('#themesetting-sidebarfixed').value = 1;
                }
                if (_themesetting.sidebar.cling) {
                    toggleSidebar('cling');
                    document.querySelector('#themesetting-sidebarcling').value = 1;
                }
                if (_themesetting.header.fixed) {
                    el_header.classList.add('neadmin-header-fixed');
                    document.querySelector('#themesetting-headerfixed').value = 1;
                    fixContentHeight();
                } else {
                    el_header.classList.remove('neadmin-header-fixed');
                    fixContentHeight();
                }
            },
            toggleSidebar: function () {
                toggleSidebar('collapse');
            },
            fixedSidebar: function () {
                toggleSidebar('fixed');
            },
            clingSidebar: function () {
                toggleSidebar('cling');
            },
            fixedHeader: function () {
                if (!el_header.classList.contains('neadmin-header-fixed')) {
                    el_header.classList.add('neadmin-header-fixed');
                    fixContentHeight();
                } else {
                    el_header.classList.remove('neadmin-header-fixed');
                    fixContentHeight();
                }
            },
            collapseSidebar: function () {
                var expandItem = el_header.querySelector('.ne-menubar-top>li.expand');
                if (expandItem) {
                    var link = expandItem.querySelector('a.ne-menu-link');
                    link && link.click();
                } else {
                    el_aside.classList.remove('block');
                    el_aside.classList.remove('block');
                }
            }
        }
    });

    Ne.component('neadmin-setting', {
        props: {
            show: function () {
                var el = this;
                el.classList.remove('neadmin-setting-out');
                el.classList.add('neadmin-setting-in');
            },
            hide: function () {
                var el = this;
                el.classList.remove('neadmin-setting-in');
                el.classList.add('neadmin-setting-out');
                setTimeout(function () {
                    el.classList.remove('neadmin-setting-out');
                }, 300);
            }
        }
    });

    Ne.component('menulink', {
        props: {
            toggle: function () {
                var topMenubar = Ne.dom(this).parents('[ne-role="menubar"]');
                topMenubar = topMenubar[topMenubar.length - 1];
                var hasSubmenu = this.nextElementSibling || this.getAttribute('data-sidebar');
                var topMenubarIsSidebar = topMenubar.classList.contains('ne-sidebar');
                var submenuIsSidebar = this.getAttribute('data-sidebar');
                if (hasSubmenu) {
                    var classList = this.parentElement.classList;
                    var toExpand = !classList.contains('expand');
                    if (!topMenubarIsSidebar) {
                        Array.prototype.slice.call(el_navbar.querySelectorAll('li.expand')).forEach(function (n, i) {
                            n.classList.remove('expand');
                        });
                    }
                    Ne.dom(this).parents('li').each(function (i, n) {
                        n.classList.add('expand');
                    });
                    classList[toExpand ? 'add' : 'remove']('expand');
                    if (submenuIsSidebar) {
                        exOrColSidebar(toExpand, '#' + this.getAttribute('data-sidebar'));
                    }
                } else {
                    Array.prototype.slice.call(document.querySelectorAll('ul[ne-role="menubar"] li.active')).forEach(function (n, i) {
                        n.classList.remove('active');
                    });
                    Array.prototype.slice.call(el_navbar.querySelectorAll('li.expand')).forEach(function (n, i) {
                        n.classList.remove('expand');
                    });
                    Ne.dom(this).parents('li').each(function (i, n) {
                        n.classList.add('active');
                    });
                    if (topMenubarIsSidebar) {
                        var sidebarId = topMenubar.id;
                        var belongTo = el_navbar.querySelector('.ne-menu-link[data-sidebar="' + sidebarId + '"]');
                        Ne.dom(belongTo).parents('li').each(function (i, n) {
                            n.classList.add('active');
                        });
                        exOrColSidebar(true, topMenubar);
                    } else {
                        el_aside.classList.remove('block');
                    }
                }
            }
        }
    });

})(Ne);


/****************************************************************** 
 * @neadmin
 ******************************************************************/
;
(function (factory) {
    window.NeAdmin = factory({});
}(function (App) {

    /*************** Utils ****************/
    var Utils = function (exports) {
        exports.onReady = function (callback) {
            if (document.readyState != 'loading') {
                callback();
            } else {
                document.addEventListener('DOMContentLoaded', callback);
            }
        }
        exports.extend = function (obj) {
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                for (var key in source) {
                    obj[key] = source[key];
                }
            }
            return obj;
        }
        exports.parseUrl = function (url) {
            var a = document.createElement('a');
            a.href = url;
            return a;
        }
        exports.isString = function (obj) {
            return typeof (obj) == 'string' || false;
        }
        exports.createStorage = function () {
            function storage(name, type) {
                this.name = name;
                this.value = null;
                this.type = type || localStorage;
            }
            storage.prototype.get = function () {
                if (!this.value) {
                    var value = this.type.getItem(this.name);
                    if (value) {
                        value = JSON.parse(value);
                        this.value = value;
                    }
                }
                return this.value;
            }
            storage.prototype.set = function (value) {
                this.type.setItem(this.name, JSON.stringify(value));
                this.value = value;
            }
            storage.prototype.remove = function () {
                this.type.removeItem(this.name);
                this.value = null;
            }
            return function (name, type) {
                return new storage(name, type);
            }
        }();

        return exports;
    }({});

    /*************** Router ***************/
    var Router = function () {
        var settings = {}
        var VIEW_ARR = {};
        var el_viewConainer;
        var veiw_in_data = {};
        var defaultPath;
        //路由轨迹记录
        var HistoryStates = function () {
            var key = '__historyStates__';
            return {
                _temp_: [],
                get: function () {
                    if (this._temp_.length == 0) {
                        this._temp_ = JSON.parse(sessionStorage.getItem(key)) || [];
                    }
                    return this._temp_;
                },
                set: function () {
                    sessionStorage.setItem(key, JSON.stringify(this._temp_));
                },
                push: function (state) {
                    this.get().push(state);
                    this.set();
                },
                pop: function () {
                    var state = this.get().pop();
                    this.set();
                    return state;
                },
                clear: function () {
                    this._temp_ = [];
                    this.set();
                }
            }
        }();

        function loadView(href, callback) {
            var url = Ne.dom.url.parse(href);
            var view = queryView(url.pathname);
            if (!view) {
                view = createView(url);
                addView(view);
            } else {
                updateView(view, url);
            }
            toggleView(view);
            var menuitem = document.querySelector('.ne-menu-link[data-pathname="' + url.pathname + '"]');
            menuitem && Ne.acts(menuitem).toggle();
            callback && callback();
        }

        function toggleView(view_in) {
            var view_out = toggleView.VIEW_CURR;
            if (view_in != view_out) {
                view_in.classList.add('active');
                view_out && view_out.classList.remove('active');
                toggleView.VIEW_CURR = view_in;

                var view_iframe = view_in.querySelector('iframe');
                if (view_iframe && view_iframe.contentWindow && view_iframe.contentWindow.viewOnShow) {
                    view_iframe.contentWindow.viewOnShow(veiw_in_data);
                }
            }
        }

        function queryView(pathname) {
            return VIEW_ARR[pathname];
        }

        function updateView(view, url) {
            if (view.getAttribute('data-href') != url.href) {
                view.setAttribute('data-pathname', url.pathname);
                view.setAttribute('data-href', url.href);
                view._pathname = url.pathname;
                view.querySelector('iframe').src = url.href;
            }
        }

        function deleteView(view) {
            if (view) {
                delete VIEW_ARR[view._pathname];
                view._dialogs && view._dialogs.forEach(function (dialog) {
                    dialog.parentElement.removeChild(dialog);
                });
                var view_iframe = view.querySelector('iframe');
                if (view_iframe && view_iframe.contentWindow && view_iframe.contentWindow.viewOnDestroy) {
                    view_iframe.contentWindow.viewOnDestroy();
                }
                el_viewConainer.removeChild(view);
            }
        }

        function addView(view) {
            VIEW_ARR[view._pathname] = view;
            el_viewConainer.appendChild(view);
        }

        function createView(url) {
            var view = '<div class="neadmin-view" ne-role="neadmin-view" data-pathname="' + url.pathname + '" data-href="' + url.href + '"></div>';
            view = Ne.dom.render(view);
            view._pathname = url.pathname;
            view._href = url.href;
            Ne.toast.showLoading();
            Ne.ajax({
                type: 'HEAD',
                url: url.href,
                success: function () {
                    var view_iframe = Ne.dom.render('<iframe class="neadmin-view-iframe" src="' + url.href + '" seamless="seamless" scrolling="no"></iframe>');
                    view_iframe.onload = function () {
                        iframeFitContentHeight(this);
                        if (view_iframe && view_iframe.contentWindow && view_iframe.contentWindow.viewOnShow) {
                            view_iframe.contentWindow.viewOnShow(veiw_in_data);
                        }
                        Ne.toast.hide();
                    }
                    autoIframeHeight(view_iframe);
                    view.appendChild(view_iframe);
                },
                error: function (xhr) {
                    var content = '';
                    if (xhr.status == 404) {
                        content = '<div class="ne-cell">' +
                            '<div class="ne-cell-left">' +
                            '<img src="/Content/Images/404.svg" />' +
                            '</div>' +
                            '<div class="ne-cell-center">' +
                            '<strong>404</strong>' +
                            '<p>抱歉，你访问的页面不存在</p>' +
                            '</div>' +
                            '</div>';
                    } else if (xhr.status == 500) {
                        content = '<div class="ne-cell">' +
                            '<div class="ne-cell-left">' +
                            '<img src="/Content/Images/500.svg" />' +
                            '</div>' +
                            '<div class="ne-cell-center">' +
                            '<strong>500</strong>' +
                            '<p>抱歉，服务器出错了</p>' +
                            '</div>' +
                            '</div>';
                    } else if (xhr.status == 403) {
                        content = '<div class="ne-cell">' +
                            '<div class="ne-cell-left">' +
                            '<img src="/Content/Images/403.svg" />' +
                            '</div>' +
                            '<div class="ne-cell-center">' +
                            '<strong>403</strong>' +
                            '<p>抱歉，你无权访问该页面</p>' +
                            '</div>' +
                            '</div>';
                    } else if (xhr.status == 401) {
                        content = '<div class="ne-cell">' +
                            '<div class="ne-cell-left">' +
                            '<img src="/Content/Images/401.svg" />' +
                            '</div>' +
                            '<div class="ne-cell-center">' +
                            '<strong>401</strong>' +
                            '<p>未授权，登录失败</p>' +
                            '</div>' +
                            '</div>';
                    } else {
                        content = '未知错误，' + xhr.status;
                    }
                    content = '<div class="neadmin-pagestatus"><div class="neadmin-pagestatus-content"><p>' + content + '</p></div></div>';
                    view.appendChild(Ne.dom.render(content));
                    Ne.toast.hide();
                }
            });

            return view;
        }

        function init(settings) {
            settings = settings;
            el_viewConainer = settings.viewContainer;
            defaultPath = settings.defaultPath;

            function route() {
                var __href = location.href;
                if (location.hash && location.hash.slice(1, 6) == '?url=') {
                    __href = location.hash;
                }
                var url = Ne.dom.url.getParameter('url', decodeURI(__href));
                if (url) {
                    loadView(url);
                } else {
                    go({
                        url: defaultPath
                    });
                }
            }


            //兼容ie
            if (!history.pushState) {
                history.pushState = function (state, title, url) {
                    window.location.hash = url;
                }
                window.addEventListener('hashchange', function (event) {
                    route();
                });
            } else {
                window.addEventListener('popstate', function (event) {
                    route();
                });
            }
            route();
        }

        function back(options) {
            options = Ne._.isObject(options) ? options : {
                url: options
            };

            var states = HistoryStates.get();
            if (states.length == 0) {
                history.go(-1);
                return false;
            }

            var index = options.url || states[states.length - 1].back;
            if (Ne._.isString(index)) {
                var count = 0;
                var __index = Ne.dom.url.parse(index).pathname.toLowerCase();
                for (var i = states.length - 1; i >= 0; i--) {
                    count--;
                    var __r = Ne.dom.url.parse(states[i].referrer).pathname.toLowerCase();
                    if (__r == __index) {
                        break;
                    }
                }
                index = count;
            }
            var state = null;
            for (var i = 0; i > index; i--) {
                state = HistoryStates.pop();
                deleteView(queryView(Ne.dom.url.parse(state.url).pathname));
            }
            veiw_in_data = options.data || {};
            history.go(index);
        }

        function go(options) {
            options = Ne._.isString(options) ? {
                url: options
            } : options;
            var __href = location.href;
            if (location.hash && location.hash.slice(1, 6) == '?url=') {
                __href = location.hash;
            }
            var currPath = Ne.dom.url.getParameter('url', __href);
            currPath = Ne.dom.url.parse(currPath);
            options = Ne._.extend({
                url: '',
                back: -1,
                target: '_self',
                data: {},
                referrer: currPath.href
            }, options);
            //附带的请求数据
            veiw_in_data = options.data;
            //记录路由路径
            HistoryStates.push(options);
            history.pushState(null, '', '?url=' + encodeURIComponent(options.url));

            loadView(options.url, function () {
                if (options.target == '_self') {
                    var referrerView = queryView(currPath.pathname);
                    if (currPath.pathname != Ne.dom.url.parse(options.url).pathname) {
                        deleteView(referrerView);
                    }
                }
            });
        }

        function iframeFitContentHeight(iframe) {
            var contentHeight = iframe.contentDocument.body.scrollHeight;
            iframe.style.height = contentHeight + 'px';
        }

        function autoIframeHeight(iframe) {
            function iframeReady(iframe, callback) {
                if (iframe.contentDocument && iframe.contentDocument.readyState != 'loading') {
                    callback();
                }
            }

            function iframeInerval(iframe) {
                if (iframe) {
                    iframeReady(iframe, function () {
                        iframeFitContentHeight(iframe);
                    });
                    iframe._autoheight && clearTimeout(iframe._autoheight);
                    iframe._autoheight = setTimeout(function () {
                        iframeInerval(iframe);
                    }, 200);
                } else {
                    console.log('eqwewqeq');
                }
            }

            iframeInerval(iframe);
        }

        return {
            init: init,
            go: go,
            back: back,
            clear: function () {
                HistoryStates.clear();
            }
        }
    }();


    /****************** view Handle ******************/
    var view_start = Ne.acts('.neadmin-start');
    var view_login = Ne.acts('.neadmin-login');
    var view_main = Ne.acts('.neadmin-main');
    var view_setting = Ne.acts('.neadmin-setting');

    /****************** Datas ******************/
    var CONFIG, UserInfo, NavData, ThemeSetting;

    /****************** Exports ******************/

    /******设置相关******/
    App.setData = function (obj) {
        NavData.set(obj.nav);
        UserInfo.set(obj.user);
    }

    /******权限相关******/
    //初始化
    App.init = function (config) {
        function showMain() {
            view_main.setUserInfo(UserInfo.get());
            view_main.setNav(NavData.get());
            view_main.setTheme(ThemeSetting.get());
            Router.init({
                viewContainer: document.querySelector('.neadmin-content'),
                defaultPath: CONFIG.indexPath
            });
            view_main.show();
        }

        //保存配置
        CONFIG = config;
        //创建Storage
        var AppId = CONFIG.appId || 'main';
        UserInfo = Utils.createStorage('_app_' + AppId + '_userinfo');
        NavData = Utils.createStorage('_app_' + AppId + '_navdata');
        ThemeSetting = Utils.createStorage('_app_' + AppId + '_themesetting');
        //初始化风格设置
        var themesetting = ThemeSetting.get();
        if (!themesetting) {
            ThemeSetting.set({
                color: 'dark',
                sidebar: {
                    fixed: true,
                    collapse: true,
                    cling: false
                },
                header: {
                    fixed: true
                }
            });
        }
        //展示启动页
        view_start.show();
        //检查是否已登陆
        if (CONFIG.onCheckLogin()) {
            showMain();
        } else {
            view_login.show();
        }
        //隐藏启动页
        view_start.hide();

        //注册事件：登录提交处理逻辑
        view_login.onsubmit(function (account, password, complete) {
            CONFIG.onLoginSubmit(account, password, function (res) {
                if (res === true) {
                    view_login.hide();
                    showMain();
                } else {
                    Ne.dialog.alert('登陆失败', res);
                }
                complete();
            });
        });

        //注册事件：捕获链接进行路由过滤
        document.addEventListener('click', function (event) {
            App.routeListener(event);
        });
    }
    //退出登录
    App.logout = function () {
        UserInfo.remove();
        NavData.remove();
        Router.clear();
        CONFIG.onLogout();
        location.href = location.pathname;
    }

    /******路由相关******/
    //路由监听
    App.routeListener = function (event) {
        function _listenLink(e) {
            var link = e.target || e.touches[0];
            link = _queryLink(link);
            if (link) {
                e.preventDefault();
                e.stopPropagation();
                _handleLink(link);
            }
        }

        function _queryLink(el) {
            return el.tagName.toLowerCase() == 'a' ? el : el.parentElement ? _queryLink(el.parentElement) : null;
        }

        function _handleLink(link) {
            if (link.classList.contains('back')) {
                //返回
                if (link.href && link.href != '') {
                    App.back(link.href);
                } else {
                    App.back();
                }
            } else if (!link.href || link.href == '' || link.href == '#' || link.getAttribute('href').indexOf('#') === 0 || link.getAttribute('href').indexOf('javascript:') === 0) {

            } else {
                //正常切换
                App.go({
                    url: link.href,
                    target: link.target || '_self'
                });
            }
        }

        _listenLink(event);
    }
    //路由前进
    App.go = function (options) {
        Router.go(options);
    }
    //路由后退
    App.back = function (options) {
        Router.back(options);
    }
    /******风格设置相关******/
    App.fixedSidebar = function () {
        view_main.fixedSidebar();
        var themesetting = ThemeSetting.get();
        themesetting.sidebar.fixed = themesetting.sidebar.fixed ? false : true;
        ThemeSetting.set(themesetting);
    };
    App.clingSidebar = function () {
        view_main.clingSidebar();
        var themesetting = ThemeSetting.get();
        themesetting.sidebar.cling = themesetting.sidebar.cling ? false : true;
        ThemeSetting.set(themesetting);
    };
    App.toggleSidebar = function () {
        view_main.toggleSidebar();
        var themesetting = ThemeSetting.get();
        themesetting.sidebar.collapse = themesetting.sidebar.collapse ? false : true;
        ThemeSetting.set(themesetting);
    };
    App.changeTheme = function () {
        var color = document.querySelector('[name="checkbox_theme"]:checked').value;
        var c = document.querySelector('#themeColor');
        c.href = "/Content/Tools/NeAdmin/themes/" + color + ".css";
        var themesetting = ThemeSetting.get();
        themesetting.color = color;
        ThemeSetting.set(themesetting);
    };
    App.fixedHeader = function () {
        view_main.fixedHeader();
        var themesetting = ThemeSetting.get();
        themesetting.header.fixed = themesetting.header.fixed ? false : true;
        ThemeSetting.set(themesetting);
    };
    App.collapseSidebar = function () {
        view_main.collapseSidebar();
    };
    /******工具相关******/
    App.Utils = Utils;
    return App;
}));