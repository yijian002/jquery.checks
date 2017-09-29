/*
    jquery.checks.js
    @author Vic 
    https://github.com/yijian002/jquery.checks
*/

(function($) {

    'use strict';

    $.fn.checks = function(options) {
        var setting = $.extend({
            class_radio: 'ico-radio',
            class_checkbox: 'ico-checkbox',
            class_checked: 'sed',
            class_disabled: 'disabled',
            types: ['radio', 'checkbox']
        }, options || {});

        var CLASS_CHECKS = 'helper-checks';

        var app = {
            el: null,
            _is_label: false,
            _type: '',
            _class: '',
            getClass: function(el) {
                return CLASS_CHECKS + '-' + el.attr('type') + '-' + el.attr('name');
            },
            renderRadio: function() {
                var $radio = $('<div class="' + setting.class_radio + '"></div>')
                    .addClass(CLASS_CHECKS)
                    .addClass(this._class);

                if (this.el.prop('checked')) {
                    $radio.addClass(setting.class_checked);
                }

                if (this.el.attr('disabled') !== undefined) {
                    $radio.addClass(setting.class_disabled);
                }

                this.el.after($radio);
            },
            renderCheckbox: function() {
                var $checkbox = $('<div class="' + setting.class_checkbox + '"></div>')
                    .addClass(CLASS_CHECKS)
                    .addClass(this._class);

                if (this.el.prop('checked')) {
                    $checkbox.addClass(setting.class_checked);
                }

                if (this.el.attr('disabled') !== undefined) {
                    $checkbox.addClass(setting.class_disabled);
                }

                this.el.after($checkbox);
            },
            render: function() {
                this.el.hide();

                if (this._type === 'radio') {
                    this.renderRadio();
                } else if (this._type === 'checkbox') {
                    this.renderCheckbox();
                }
            },
            setRadio: function($it) {
                if ($it.hasClass(setting.class_disabled)) {
                    return;
                }

                var $inp = $it.prev('input'),
                    $radios = $('.' + this.getClass($inp));

                $radios.removeClass(setting.class_checked);
                $it.addClass(setting.class_checked);
                
                $inp.prop('checked', true);
                $inp.triggerHandler('click');
            },
            setCheckbox: function($it) {
                if ($it.hasClass(setting.class_disabled)) {
                    return;
                }

                var $inp = $it.prev('input');
                $it.toggleClass(setting.class_checked);
                
                $inp.prop('checked', $it.hasClass(setting.class_checked));
                $inp.triggerHandler('click');
            },
            bindRadio: function() {
                var _this = this;

                if (this._is_label) {
                    this.el.parent().on('click', function(event) {
                        _this.setRadio($(this).find('.' + CLASS_CHECKS));
                        event.stopPropagation();
                        return false;
                    });
                }
                else {
                    this.el.next('.' + CLASS_CHECKS).on('click', function(event) {
                        _this.setRadio($(this));
                        event.stopPropagation();
                    });
                }
            },
            bindCheckbox: function() {
                var _this = this;

                if (this._is_label) {
                    this.el.parent().on('click', function(event) {
                        _this.setCheckbox($(this).find('.' + CLASS_CHECKS));
                        event.stopPropagation();
                        return false;
                    });
                }
                else {
                    this.el.next('.' + CLASS_CHECKS).on('click', function(event) {
                        _this.setCheckbox($(this));
                        event.stopPropagation();
                    });
                }
            },
            bind: function() {
                this._is_label = this.el.parent()[0].tagName === 'LABEL';

                if (this._type === 'radio') {
                    this.bindRadio();
                } else if (this._type === 'checkbox') {
                    this.bindCheckbox();
                }                
            },
            init: function() {
                this._class = this.getClass(this.el);

                this.render();
                this.bind();
            }
        };

        function init() {
            app.el = $(this);
            app._type = app.el.attr('type');

            if ($.inArray(app._type, setting.types) < 0) {
                return;
            }

            app.init();
        }

        this.each(function() {
            init.call(this);
        });

        return this;
    };

}(window.jQuery || window.Zepto));
