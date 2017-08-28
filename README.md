# Checks plugin

Lightweight plugin checkboxes and radio buttons for jQuery and Zepto.

## Options
```
$('input[type=radio], input[type=checkbox]').checks({
	class_radio: 'ico-radio',
	class_checkbox: 'ico-checkbox',
	class_checked: 'sed',
	class_disabled: 'disabled'
});
```

## HTML
```html
<label>
	<input type="radio" name="pop" value="left_bottom" checked />左下角
</label>
<label>
	<input type="radio" name="pop" value="right_bottom" />右下角
</label>
<label>
	<input type="radio" name="pop" value="none" />无
</label>
```

```html
<label>
	<input type="checkbox" name="open" />启用
</label>
```