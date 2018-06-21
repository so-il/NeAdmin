var NeAdmin = {};
if (window.parent.NeAdmin && window.parent.NeAdmin.go) {
    var parentWindow = window.parent;
    var parentDocument = parentWindow.document;
    var parentView = parentDocument.querySelector('.neadmin-view.active');
    NeAdmin = parentWindow.NeAdmin;
    parentView._dialogs = parentView._dialogs || [];
    //捕获链接进行路由过滤
    document.addEventListener('click', function (event) {
        NeAdmin.routeListener(event);
    });
    //刷新当前页
    NeAdmin.reload = function () {
        parentView._dialogs.forEach(function (dialog) {
            dialog.parentElement.removeChild(dialog);
        });
        location.reload();
    }
    //反馈控件
    Ne.dialog = parentWindow.Ne.dialog;
    Ne.toast = parentWindow.Ne.toast;
    //弹出窗
    var _modal = Ne.modal;
    Ne.modal = function (config) {
        var obj = _modal(config);
        parentDocument.body.appendChild(obj.el);
        parentView._dialogs.push(obj.el);
        return obj;
    }
}