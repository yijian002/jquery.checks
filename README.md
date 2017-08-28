# Checks plugin

Lightweight plugin checkboxes and radio buttons for jQuery and Zepto.

## Options
```js
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
	<input type="radio" name="demo" checked />Checked
</label>

<label>
	<input type="radio" name="demo" disabled />Disabled
</label>

<label>
	<input type="radio" name="demo" checked disabled />Checked + Disabled
</label>
```

```html
<label>
	<input type="checkbox" checked />Checked
</label>

<label>
	<input type="checkbox" disabled />Disabled
</label>

<label>
	<input type="checkbox" checked disabled />Checked + Disabled
</label>
```