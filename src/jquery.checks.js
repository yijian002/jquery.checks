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
            bindRadio: function() {
                var _this = this;
                this.el.next('.' + CLASS_CHECKS).on('click', function() {
                    if ($(this).hasClass(setting.class_disabled)) {
                        return;
                    }

                    var $inp = $(this).prev('input'),
                        $radios = $('.' + _this.getClass($inp));

                    $radios.removeClass(setting.class_checked);
                    $(this).addClass(setting.class_checked);
                    $inp.trigger('click').prop('checked', true);
                });
            },
            bindCheckbox: function() {
                var _this = this;
                this.el.next('.' + CLASS_CHECKS).on('click', function() {
                    if ($(this).hasClass(setting.class_disabled)) {
                        return;
                    }

                    var $inp = $(this).prev('input');

                    $(this).toggleClass(setting.class_checked);
                    $inp.trigger('click').prop('checked', $(this).hasClass(setting.class_checked));
                });
            },
            bind: function() {
                if (this._type === 'radio') {
                    this.bindRadio();
                } else if (this._type === 'checkbox') {
                    this.bindCheckbox();
                }

                if (this.el.parent()[0].tagName === 'LABEL') {
                    this.el.parent().on('click', function(event) {
                        event.stopPropagation();
                        return false;
                    });
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
