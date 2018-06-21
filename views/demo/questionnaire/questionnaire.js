'use strict';

//渲染问卷
function renderQuestionnaire(tpl, data) {
    var v_questionnaire_model = Ne.render.vtpl(tpl);
    var v_questionnaire = new v_questionnaire_model({});
    var el_questionnaire = v_questionnaire.dom;
    el_questionnaire.addEventListener('change', function (event) {
        var el_input = event.target;
        var el_question = Ne.dom(el_input).parents('.q-panel')[0];
        var questionOrder = el_question.getAttribute('data-order');
        var checkedOptions = el_question.querySelectorAll(':checked');
        var checkedOptionsOrder = [];
        Array.prototype.slice.call(checkedOptions).forEach(function (o) {
            var order = Ne.dom(o).parents('.q-option')[0].getAttribute('data-order');
            checkedOptionsOrder.push({
                order: order
            });
        });
        validateQuestion(el_question);
        onQuestionAnswerChange(questionOrder, checkedOptionsOrder);
    });
    if (data) {
        data = setData(data);
    }

    function handleDataLogics(data) {
        data.questions.forEach(function (q) {
            var flag = true;
            if (q.logics.length > 0) {
                flag = false;
                q.logics.forEach(function (logic) {
                    logic.options.forEach(function (i) {
                        var _q = data.questions[logic.question - 1].options[i - 1];
                        if (_q.isdefault) {
                            flag = true;
                            return false;
                        }
                    });
                });
            }
            q.visiable = flag;
        });
        return data;
    }

    function setAnswer(answers) {
        var el_questions = el_questionnaire.querySelectorAll('.q-panel');
        answers.forEach(function (answer) {
            var el_question = el_questions[answer.order - 1];
            setQuestionAnswer(el_question, answer);
        });
    }

    function onQuestionAnswerChange(questionOrder, checkedOptions) {
        var logicQuestions = el_questionnaire.querySelectorAll('[data-logic-question="' + questionOrder + '"]');
        Array.prototype.slice.call(logicQuestions).forEach(function (q) {
            var logicOptions = q.getAttribute('data-logic-options').split(',');
            var flag = true;
            if (logicOptions.length > 0) {
                flag = false;
                Array.prototype.slice.call(checkedOptions).forEach(function (o) {
                    logicOptions.forEach(function (n) {
                        if (n == o.order) {
                            flag = true;
                            return false;
                        }
                    });
                });
            }
            if (flag) {
                q.classList.remove('none');
            } else {
                var options = q.querySelectorAll('.q-option');
                var order = q.getAttribute('data-order');
                var type = q.getAttribute('data-type');
                Array.prototype.slice.call(options).forEach(function (o) {
                    if (type == 1 || type == 2) {
                        var optionInput = o.querySelector('input');
                        var isdefault = o.getAttribute('data-isdefault');
                        var isextend = o.getAttribute('data-isextend');
                        optionInput.checked = isdefault == 'true';
                        var extendInput = o.querySelector('.q-options-input');
                        if (isextend == 'true') {
                            var extendInput = o.querySelector('.q-options-input');
                            extendInput.value = '';
                        }
                    } else if (type == 4) {
                        var extendInput = o.querySelector('.q-options-input');
                        extendInput.value = '';
                    }
                    onQuestionAnswerChange(order,[]);
                });
                q.classList.add('none');
            }
            q.classList[flag ? 'remove' : 'add']('none');
        });
    }

    function setQuestionAnswer(el_question, answer) {
        var el_options = el_question.querySelectorAll('.q-option');
        Array.prototype.slice.call(el_options).forEach(function (el_option) {
            var optionOrder = parseInt(el_option.getAttribute('data-order'));
            var optionInput = el_option.querySelector('input');
            var hasAnswer = false;
            answer.answers.forEach(function (a) {
                if (a.order == optionOrder) {
                    if ((optionInput.type == 'radio' || optionInput.type == 'checkbox')) {
                        optionInput.checked = true;
                        if (el_option.getAttribute('data-isextend') == 'true') {
                            var extendInput = el_option.querySelector('.q-options-input');
                            extendInput.value = a.extend || '';
                        }
                    } else if (optionInput.type == 'text') {
                        optionInput.value = a.extend || '';
                    }
                    hasAnswer = true;
                    return false;
                }
            });
            if (!hasAnswer) {
                if ((optionInput.type == 'radio' || optionInput.type == 'checkbox')) {
                    optionInput.checked = false;
                    if (el_option.getAttribute('data-isextend') == 'true') {
                        var extendInput = el_option.querySelector('.q-options-input');
                        extendInput.value = '';
                    }
                } else if (optionInput.type == 'text') {
                    optionInput.value = '';
                }
            }
        });
        onQuestionAnswerChange(answer.order, answer.answers);
    }

    function getAnswer() {
        var answers = [];
        var el_questions = el_questionnaire.querySelectorAll('.q-panel');
        Array.prototype.slice.call(el_questions).forEach(function (el_question) {
            var answer = getQuestionAnswer(el_question);
            answers.push(answer);
        });
        return answers;
    }

    function getQuestionAnswer(el_question) {
        var answers = [];
        var el_options = el_question.querySelectorAll('.q-option');
        var id = parseInt(el_question.getAttribute('data-id'));
        var order = parseInt(el_question.getAttribute('data-order'));
        var type = parseInt(el_question.getAttribute('data-type'));
        Array.prototype.slice.call(el_options).forEach(function (el_option) {
            var optionOrder = parseInt(el_option.getAttribute('data-order'));
            var optionScore = parseInt(el_option.getAttribute('data-score'));
            var optionInput = el_option.querySelector('input');
            if ((optionInput.type == 'radio' || optionInput.type == 'checkbox') && optionInput.checked) {
                var answer = {};
                answer.order = optionOrder;
                if (el_option.getAttribute('data-isextend') == 'true') {
                    var extendInput = el_option.querySelector('.q-options-input');
                    answer.extend = extendInput.value;
                }
                answer.score = optionScore;
                answers.push(answer);
            } else if (optionInput.type == 'text') {
                var answer = {};
                answer.order = optionOrder;
                answer.extend = optionInput.value;
                answer.score = optionScore;
                answers.push(answer);
            }
        });
        return {
            id: id,
            order: order,
            type: type,
            answers: answers
        }
    }

    function setData(data) {
        data = handleDataLogics(data);
        v_questionnaire.setData(data);
        return data;
    }

    function validateQuestion(el_question) {
        if (el_question.validateing) {
            var isrequired = el_question.getAttribute('data-required');
            var type = parseInt(el_question.getAttribute('data-type'));
            var flag = true;
            if (isrequired == 'true' && !el_question.classList.contains('none')) {
                var answer = getQuestionAnswer(el_question);
                if (answer.answers.length > 0) {
                    if (type == 4) {
                        answer.answers.forEach(function (a) {
                            if (a.extend.length < 1) {
                                flag = false;
                                return false;
                            }
                        });
                    }
                } else {
                    flag = false;
                }
            }

            if (!flag) {
                el_question.classList.add('q-panel-error');
            } else {
                el_question.classList.remove('q-panel-error');
            }
            return flag;
        } else {
            return true;
        }
    }

    function validate() {
        var flag = true;
        var el_questions = el_questionnaire.querySelectorAll('.q-panel');
        Array.prototype.slice.call(el_questions).forEach(function (el_question) {
            el_question.validateing = true;
            if (validateQuestion(el_question) === false) {
                flag = false;
            }
        });
        return flag;
    }

    return {
        el: el_questionnaire,
        setData: setData,
        getData: function () {
            return data;
        },
        setAnswer: setAnswer,
        getAnswer: getAnswer,
        validate: validate
    };
}

//创建问卷
function CreateQuestionnaire(tpl, qtpl, data) {
    function Questionnaire(config) {
        var _this = this;
        _this.id = 0;
        _this.title = '';
        _this.description = '';
        _this.questions = [];
        _this.el = Ne.dom.render(tpl);
        _this.container = _this.el.querySelector('.questionnaire-questions');
        _this.qeditorTpl = _this.container.innerHTML;
        _this.logicBinder = Ne.modal({
            content: _this.el.querySelector('.questionnaire-logicbinder'),
            style: {
                width: '500px',
            },
            onshow: function (curq, callback) {
                var _modal = this;
                var isExit = function (order) {
                    var flag = false;
                    curq.logics.forEach(function (l) {
                        if (l.question == order) {
                            flag = true;
                            return false;
                        }
                    });
                    return flag;
                }
                var el_selector_question = _modal.querySelector('[data-control="question"]');
                var el_selector_options = _modal.querySelector('[data-control="options"]');
                var el_selector_submit = _modal.querySelector('[data-control="submit"]');
                el_selector_options.innerHTML = '';
                el_selector_options.parentElement.classList.add('none');
                var question = '<option value="-1"></option>';
                _this.questions.forEach(function (q) {
                    q = q.config;
                    if ((q.type == 1 || q.type == 2) && q.order < curq.order && !isExit(q.order)) {
                        question += '<option value="' + q.order + '">' + q.content +
                            '</option>';
                    }
                });
                el_selector_question.innerHTML = question;
                el_selector_question.onchange = function () {
                    if (this.value == -1) {
                        el_selector_options.innerHTML = "";
                        el_selector_options.parentElement.classList.add('none');
                    } else {
                        el_selector_options.parentElement.classList.remove('none');
                        var q = _this.questions[this.value - 1].config;
                        var options = '';
                        var optionsName = 'addlogic_' + Ne._.random(0, 100000);
                        q.options.forEach(function (o, i) {
                            options +=
                                '<div class="ne-cell" style="padding-left:0;"><span class="ne-cell-left">' +
                                '<input type="checkbox" name="' + optionsName +
                                '" id="' + (optionsName + i) + '" value="' + (i + 1) +
                                '">' +
                                '<label class="ne-checkbox" for="' + (optionsName + i) +
                                '"></label>' +
                                '</span><span class="ne-cell-center">' + o.content +
                                '</span></div>';
                        });
                        el_selector_options.innerHTML = options;
                    }
                }
                el_selector_submit.onclick = function () {
                    var q = parseInt(el_selector_question.value);
                    var o = [];
                    Array.prototype.slice.call(el_selector_options.querySelectorAll(':checked'))
                        .forEach(function (n) {
                            o.push(parseInt(n.value));
                        });
                    callback(q, o);
                    _this.logicBinder.hide();
                }
            }
        });
        _this.container.innerHTML = "";
        if (config) {
            config.questions.forEach(function (item) {
                _this.createQuestion(item);
            });
            _this.title = config.title;
            _this.description = config.description;
            _this.id = config.id;
        }
        _this.el.querySelector('.questionnaire-title').innerText = _this.title;
        _this.el.querySelector('.questionnaire-desc').innerText = _this.description;
    }
    Questionnaire.prototype.createQuestion = function (config) {
        var _this = this;
        if (Ne._.isNumber(config)) {
            config = {
                type: config,
                required: false,
                keypoint: false,
                content: '问题描述',
                options: [{
                        content: '选项描述',
                        jump: 0,
                        score: 0,
                        isdefault: false,
                        isrequired: false,
                        iseditable: false,
                        ismutex: false
                    },
                    {
                        content: '选项描述',
                        jump: 0,
                        score: 0,
                        isdefault: false,
                        isrequired: false,
                        iseditable: false,
                        ismutex: false
                    }
                ],
                logics: []
            }
            config.order = _this.questions.length + 1;
        }
        var question = createQuestion(_this.qeditorTpl, config, {
            movetoprev: function () {
                if (question.el.previousElementSibling) {
                    var curIndex = question.config.order - 1;
                    var prevIndex = curIndex - 1;
                    var tmp = _this.questions[curIndex];
                    _this.questions[curIndex] = _this.questions[prevIndex];
                    _this.questions[prevIndex] = tmp;
                    _this.resetOrder();
                    question.el.parentElement.insertBefore(question.el, question.el.previousElementSibling);
                }
            },
            movetonext: function () {
                if (question.el.nextElementSibling) {
                    var curIndex = question.config.order - 1;
                    var nextIndex = curIndex + 1;
                    var tmp = _this.questions[curIndex];
                    _this.questions[curIndex] = _this.questions[nextIndex];
                    _this.questions[nextIndex] = tmp;
                    _this.resetOrder();
                    question.el.parentElement.insertBefore(question.el.nextElementSibling,
                        question.el);
                }
            },
            remove: function () {
                _this.removeQuestion(question);
            },
            copy: function (c) {
                _this.copyQuestion(question);
            },
            edit: function () {

            },
            bindLogic: function (config, callback) {
                _this.logicBinder.show(config, callback);
            }
        });
        _this.addQuestion(question);
    }
    Questionnaire.prototype.addQuestion = function (question) {
        this.container.appendChild(question.el);
        this.questions.push(question);
    }
    Questionnaire.prototype.removeQuestion = function (question) {
        var _index = -1;
        this.questions.forEach(function (item, index) {
            if (question.el == item.el) {
                _index = index;
                return false;
            }
        });
        if (_index >= 0) {
            this.questions.splice(_index, 1);
            this.container.removeChild(question.el);
            this.resetOrder();
        }
    }
    Questionnaire.prototype.copyQuestion = function (question) {
        var _this = this;
        var cc = Ne._.clone(question.config);
        cc.order = _this.questions.length + 1;
        var _qq = _this.createQuestion(cc);
    }
    Questionnaire.prototype.resetOrder = function () {
        this.questions.forEach(function (question, index) {
            question.resetOrder(index + 1);
        });
    }
    Questionnaire.prototype.getJson = function () {
        var res = {
            id: this.id,
            title: this.title,
            description: this.description,
            questions: []
        }
        this.questions.forEach(function (question) {
            res.questions.push(question.config);
        });
        return res;
    }
    //创建问题编辑器
    function createQuestion(qeditorTpl, config, actionHandlers) {
        function move(arr, x, y) {
            var tmp = arr[x];
            arr[x] = arr[y];
            arr[y] = tmp;
            return arr;
        }

        function remove(arr, index) {
            arr.splice(index, 1);
            return arr;
        }

        function add(arr, item) {
            arr.push(item);
            return arr;
        }

        function queryControls(container, selector) {
            var actions = {};
            Array.prototype.slice.call(container.querySelectorAll('[' + selector + ']')).forEach(function (
                action) {
                var name = action.getAttribute(selector);
                actions[name] = action;
            });
            return actions;
        }

        function columnsControl(table, colIndex, show) {
            Array.prototype.slice.call(table.querySelectorAll('[data-colindex="' + colIndex + '"]')).forEach(
                function (cell) {
                    cell.classList[show ? 'remove' : 'add']('none');
                });
        }

        function resetOptionsTable(table, type) {
            Array.prototype.slice.call(table.querySelectorAll('[type="checkbox"]')).forEach(
                function (n) {
                    n.checked = false;
                });
            Array.prototype.slice.call(table.querySelectorAll('[type="radio"]')).forEach(
                function (n) {
                    n.checked = false;
                });
            if (type == 1) {
                columnsControl(table, 2, true); //跳题
                columnsControl(table, 3, true); //分值
                columnsControl(table, 4, true); //允许填空
                columnsControl(table, 5, false); //选项互斥
                columnsControl(table, 6, false); //必填
                columnsControl(table, 7, false); //默认-checkbox
                columnsControl(table, 8, true); //默认-radio
            } else if (type == 2) {
                columnsControl(table, 2, false); //跳题
                columnsControl(table, 3, true); //分值
                columnsControl(table, 4, true); //允许填空
                columnsControl(table, 5, true); //选项互斥
                columnsControl(table, 6, false); //必填
                columnsControl(table, 7, true); //默认-checkbox
                columnsControl(table, 8, false); //默认-radio
            } else if (type == 4) {
                columnsControl(table, 2, false); //跳题
                columnsControl(table, 3, true); //分值
                columnsControl(table, 4, false); //允许填空
                columnsControl(table, 5, false); //选项互斥
                columnsControl(table, 6, true); //必填
                columnsControl(table, 7, false); //默认-checkbox
                columnsControl(table, 8, false); //默认-radio
            }
        }

        function renderOption(tpl_tr, objs, index, onEditCallback) {
            var optionsName = QUESTION_INDEX + "_editor_options_";
            var el = Ne.dom.render('<table>' + tpl_tr + '</table>').querySelector('tr');
            var obj = objs[index];
            var controls = queryControls(el, 'data-optionedit-control');

            el.index = index;

            controls['content'].value = obj.content;
            controls['content'].oninput = function () {
                obj.content = this.value;
                onEditCallback(objs);
            }
            controls['jump'].value = obj.jump || 0;
            controls['jump'].oninput = function () {
                obj.jump = parseInt(this.value);
                onEditCallback(objs);
            }
            controls['remove'].onclick = function () {
                el.parentElement.removeChild(el);
                objs = remove(objs, el.index);
                onEditCallback(objs);
            }
            controls['movetoprev'].onclick = function () {
                if (el.previousElementSibling) {
                    var el_index = el.index;
                    el.index = el_index - 1;
                    el.previousElementSibling.index = el_index;
                    el.parentElement.insertBefore(el, el.previousElementSibling);
                    objs = move(objs, el_index, el_index - 1);
                    onEditCallback(objs);
                }
            }
            controls['movetonext'].onclick = function () {
                if (el.nextElementSibling) {
                    var el_index = el.index;
                    el.index = el_index + 1;
                    el.nextElementSibling.index = el_index;
                    el.parentElement.insertBefore(el.nextElementSibling, el);
                    objs = move(objs, el_index + 1, el_index);
                    onEditCallback(objs);
                }
            }
            controls['score'].value = obj.score || 0;
            controls['score'].oninput = function () {
                obj.score = parseFloat(this.value);
                onEditCallback(objs);
            }
            controls['isdefault'].name = optionsName + "_isdefault";
            controls['isdefault'].id = controls['isdefault'].name + "_" + index;
            controls['isdefault'].nextElementSibling.setAttribute('for', controls['isdefault'].id);
            controls['isdefault'].onchange = function () {
                obj.isdefault = this.checked;
                onEditCallback(objs);
            }
            controls['isdefault2'].name = optionsName + "_isdefault2";
            controls['isdefault2'].id = controls['isdefault2'].name + "_" + index;
            controls['isdefault2'].nextElementSibling.setAttribute('for', controls['isdefault2'].id);
            controls['isdefault2'].onchange = function () {
                objs.forEach(function (n) {
                    n.isdefault = false;
                });
                obj.isdefault = this.checked;
                onEditCallback(objs);
            }
            controls['isrequired'].name = optionsName + "_isrequired";
            controls['isrequired'].id = controls['isrequired'].name + "_" + index;
            controls['isrequired'].nextElementSibling.setAttribute('for', controls['isrequired'].id);
            controls['isrequired'].onchange = function () {
                obj.isrequired = this.checked;
                onEditCallback(objs);
            }
            controls['ismutex'].name = optionsName + "_ismutex";
            controls['ismutex'].id = controls['ismutex'].name + "_" + index;
            controls['ismutex'].nextElementSibling.setAttribute('for', controls['ismutex'].id);
            controls['ismutex'].onchange = function () {
                obj.ismutex = this.checked;
                onEditCallback(objs);
            }
            controls['iseditable'].name = optionsName + "_iseditable";
            controls['iseditable'].id = controls['iseditable'].name + "_" + index;
            controls['iseditable'].nextElementSibling.setAttribute('for', controls['iseditable'].id);
            controls['iseditable'].onchange = function () {
                obj.iseditable = this.checked;
                onEditCallback(objs);
            }
            return el;
        }

        function renderOptions(tpl_tr, objs, onEditCallback) {
            var trs = document.createDocumentFragment();
            objs.forEach(function (obj, index) {
                trs.appendChild(renderOption(tpl_tr, objs, index, function (options) {
                    onEditCallback(options);
                }));
            });
            return trs;
        }

        function renderLogic(logics, index, onEditCallback) {
            var el = Ne.dom.render(
                '<div class="ne-cell padding-0 margin-bottom-10"><div class="ne-cell-center"><input type="text" class="ne-input" data-logicedit-control="input" readonly></div><div class="ne-cell-right"><button class="ne-btn ne-btn-default" data-logicedit-control="remove"><i class="ne-icon-trash"></i></button></div></div>'
            );
            var logic = logics[index];
            var controls = queryControls(el, 'data-logicedit-control');


            controls['remove'].onclick = function () {
                el.parentElement.removeChild(el);
                logics = remove(logics, index);
                onEditCallback(logics);
            }
            if (logic.question != -1) {
                controls['input'].value = '依赖于第' + logic.question + '题的第' + logic.options.join('、') + '个选项';
            }
            controls['input'].onclick = function () {
                actionHandlers['bindLogic'](config, function (q, o) {
                    if (q != -1) {
                        logic.question = q;
                        logic.options = o;
                        controls['input'].value = '依赖于第' + logic.question + '题的第' + logic.options.join(
                            '、') + '个选项';
                        onEditCallback(logics);
                    }
                });
            }
            return el;
        }

        function renderLogics(logics, onEditCallback) {
            var rows = document.createDocumentFragment();
            logics.forEach(function (logic, index) {
                rows.appendChild(renderLogic(logics, index, function (logics) {
                    onEditCallback(logics);
                }));
            });
            return rows;
        }

        function initEditor(el_question_editor, config, onEditCallback, onCompleteCallback) {
            //编辑器-选项
            var el_editor_options = el_question_editor.querySelector('.q-editor-options');
            var el_editor_addoption = el_question_editor.querySelector('[data-editor-control="addoption"]');
            var tpl_table = el_editor_options.innerHTML;
            var el_editor_options_table = Ne.dom.render(tpl_table);
            var el_editor_options_table_tbody = el_editor_options_table.querySelector('tbody');
            var tpl_tr = el_editor_options_table_tbody.innerHTML;
            el_editor_addoption.onclick = function () {
                config.options = add(config.options, {
                    content: '选项描述',
                    jump: 0,
                    score: 0,
                    isdefault: false,
                    isrequired: false,
                    iseditable: false,
                    ismutex: false
                });
                onEditCallback(config);
                el_editor_options_table_tbody.appendChild(renderOption(tpl_tr, config.options, config.options
                    .length - 1,
                    function (options) {
                        config.options = options;
                        onEditCallback(config);
                    }));
                resetOptionsTable(el_editor_options_table, config.type);
            }
            el_editor_options.innerHTML = "";
            el_editor_options_table_tbody.innerHTML = "";
            el_editor_options_table_tbody.appendChild(renderOptions(tpl_tr, config.options, function (options) {
                config.options = options;
                onEditCallback(config);
            }));
            el_editor_options.appendChild(el_editor_options_table);
            resetOptionsTable(el_editor_options_table, config.type);
            //编辑器-内容
            var el_editor_content = el_question_editor.querySelector('[data-editor-control="content"]');
            el_editor_content.value = config.content;
            el_editor_content.oninput = function () {
                config.content = this.value;
                onEditCallback(config);
            }
            //编辑器-题型
            var el_editor_type = el_question_editor.querySelector('[data-editor-control="type"]');
            el_editor_type.value = config.type;
            el_editor_type.onchange = function () {
                config.type = this.value;
                config.options.forEach(function (n) {
                    n.isdefault = false;
                    n.isrequired = false;
                    n.iseditable = false;
                    n.ismutex = false;
                });
                onEditCallback(config);
                resetOptionsTable(el_editor_options, config.type);
            }
            //编辑器-是否必答
            var el_editor_required1 = el_question_editor.querySelector('[data-editor-control="isrequired1"]');
            var el_editor_required2 = el_question_editor.querySelector('[data-editor-control="isrequired2"]');
            var required_name = QUESTION_INDEX + '_editor_required';
            el_editor_required1.name = required_name;
            el_editor_required2.name = required_name;
            el_editor_required1.id = required_name + "_1";
            el_editor_required2.id = required_name + "_2";
            el_editor_required1.nextElementSibling.setAttribute('for', el_editor_required1.id);
            el_editor_required2.nextElementSibling.setAttribute('for', el_editor_required2.id);
            if (config.required) {
                el_editor_required1.checked = true;
            } else {
                el_editor_required2.checked = true;
            }
            el_editor_required1.onchange = el_editor_required2.onchange = function () {
                config.required = this.value == 1;
                onEditCallback(config);
            }
            //编辑器-是否重点题目
            var el_editor_keypoint1 = el_question_editor.querySelector('[data-editor-control="iskeypoint1"]');
            var el_editor_keypoint2 = el_question_editor.querySelector('[data-editor-control="iskeypoint2"]');
            var keypoint_name = QUESTION_INDEX + '_editor_keypoint';
            el_editor_keypoint1.name = keypoint_name;
            el_editor_keypoint2.name = keypoint_name;
            el_editor_keypoint1.id = keypoint_name + "_1";
            el_editor_keypoint2.id = keypoint_name + "_2";
            el_editor_keypoint1.nextElementSibling.setAttribute('for', el_editor_keypoint1.id);
            el_editor_keypoint2.nextElementSibling.setAttribute('for', el_editor_keypoint2.id);
            if (config.keypoint) {
                el_editor_keypoint1.checked = true;
            } else {
                el_editor_keypoint2.checked = true;
            }
            el_editor_keypoint1.onchange = el_editor_keypoint2.onchange = function () {
                config.keypoint = this.value == 1;
                onEditCallback(config);
            }
            //编辑器-完成编辑
            var el_editor_submit = el_question_editor.querySelector('[data-editor-control="submit"]');
            el_editor_submit.onclick = function () {
                onCompleteCallback(config);
            }
            //编辑器-依赖逻辑
            var el_editor_addlogic = el_question_editor.querySelector('[data-editor-control="addlogic"]');
            var el_editor_logics = el_question_editor.querySelector('[data-editor-control="logics"]');
            el_editor_addlogic.onclick = function () {
                if (el_editor_logics.querySelector('.q-editor-emptysmg')) {
                    el_editor_logics.innerHTML = "";
                }
                var logic = {
                    question: -1,
                    options: []
                };
                config.logics = add(config.logics, logic);
                onEditCallback(config);
                el_editor_logics.appendChild(renderLogic(config.logics, config.logics.length - 1, function (
                    logics) {
                    if (logics.length == 0) {
                        el_editor_logics.innerHTML =
                            '<div class="q-editor-emptysmg">未添加任何依赖逻辑</div>';
                    }
                    config.logics = logics;
                    onEditCallback(config);
                }));
            }
            var logicsgroup = renderLogics(config.logics, function (logics) {
                if (logics.length == 0) {
                    el_editor_logics.innerHTML = '<div class="q-editor-emptysmg">未添加任何依赖逻辑</div>';
                }
                config.logics = logics;
                onEditCallback(config);
            });
            if (logicsgroup.children.length > 0) {
                el_editor_logics.innerHTML = "";
                el_editor_logics.appendChild(logicsgroup);
            }
        }

        var el_question = Ne.dom.render(qeditorTpl);
        var el_question_preview = el_question.querySelector('.q-preview');
        var el_question_editor = el_question.querySelector('.q-editor');

        var QUESTION_INDEX = 'question_' + (new Date()).getTime() + '_' + Ne._.random(0, 100000);
        config.index = QUESTION_INDEX;

        var v_question_preview_model = Ne.render.vtpl(qtpl);
        var v_question_preview = new v_question_preview_model(config);
        el_question_preview.appendChild(v_question_preview.dom);

        initEditor(el_question_editor, config, function (c) {
            config = c;
            v_question_preview.setData(config);
        }, function (config) {
            el_question_editor.classList.add('none');
            actionHandlers.edit(config);
        });

        el_question.querySelector('.header-title>span').innerText = '题目' + config.order;

        //操作区
        var actions = queryControls(el_question, 'data-action');
        actions['edit'].onclick = function () {
            el_question_editor.classList.remove('none');
        }
        actions['remove'].onclick = function () {
            actionHandlers.remove(config);
        }
        actions['copy'].onclick = function () {
            actionHandlers.copy(config);
        }
        actions['movetoprev'].onclick = function () {
            actionHandlers.movetoprev(config);
        }
        actions['movetonext'].onclick = function () {
            actionHandlers.movetonext(config);
        }

        return {
            el: el_question,
            config: config,
            resetOrder: function (order) {
                config.order = order;
                el_question.querySelector('.header-title>span').innerText = '题目' + config.order;
                v_question_preview.setData(config);
            }
        }
    }

    return new Questionnaire(data);
}
 

