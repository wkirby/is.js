# Welcome to is.js

Introducing `is.js`: a small utility library for checking variable formats. Need to know if a variable is a valid URL? How about an email address? Date formatted correctly? `is.js` is the tool for you.

## How do I use it?

`is.js` has no dependencies, just include the minified version in the `head` of your HTML file.

```html
<script src="path/to/is.min.js"></script>
<script type="text/javascript">
	var foo = "john.doe@email.com";
	if ( is.email(foo) ) {
		window.alert("Yep!");
	} else {
		window.alert("Nope!");
	}
</script>
```

If everything goes according to plan, the above code will alert "Yep!". The following functions are available:

<table>
	<tr><th colspan="2">Format Checking</th></tr>
	
	<tr>
		<td> <code>is.email( email )</code> </th>
		<td>Checks for valid email address, using a RegEx similar to that found in HTML5 form validation.</td>
	</tr>

	<tr>
		<td> <code>is.url( url )</code> </th>
		<td>Checks for a valid URL. Requires http/https/ftp prefix.</td>
	</tr>

	<tr>
		<td> <code>is.date( date )</code> </th>
		<td>Checks for a valid US date format, using / delimiters. Matches 01/01/2001, 1/1/2001, and 01/1/01.</td>
	</tr>

	<tr>
		<td> <code>is.phone( phone )</code> </th>
		<td>Checks for a 10-digit phone number with multiple delimiters. Matches (111) 222-3333, 1112223333, and 111-222-3333.</td>
	</tr>

	<tr><th colspan="2">Type Checking</th></tr>

	<tr>
		<td> <code>is.string( string )</code> </th>
		<td>Checks whether a variable is a String object.</td>
	</tr>

	<tr>
		<td> <code>is.number( number )</code> </th>
		<td>Checks whether a variable is a Number object.</td>
	</tr>

	<tr>
		<td> <code>is.bool( bool )</code> </th>
		<td>Checks whether a variable is a Boolean object.</td>
	</tr>

	<tr>
		<td> <code>is.array( array )</code> </th>
		<td>Checks whether a variable is an Array object.</td>
	</tr>


	<tr><th colspan="2">Number Checking</th></tr>

	<tr>
		<td> <code>is.wholeNum( number )</code> </th>
		<td>Checks whether input is a whole number. Accepts both numbers and strings.</td>
	</tr>

	<tr>
		<td> <code>is.even( number )</code> </th>
		<td>Checks whether input is an even number. Accepts both numbers and strings.</td>
	</tr>

	<tr>
		<td> <code>is.odd( number )</code> </th>
		<td>Checks whether input is an odd number. Accepts both numbers and strings.</td>
	</tr>
</table>

## Your RegEx Sucks!

Thanks! I agree! In fact, most RegEx have issues. That's why `is.js` lets you set your own RegEx by calling the RegEx setters. **These RegEx setters take a String argument, and thus need to be double-escaped.**

<table>
	<tr>
		<td> <code>is.setEmailRegex( string )</code> </th>
		<td>Sets the regex for checking email addresses.</td>
	</tr>

	<tr>
		<td> <code>is.setURLRegex( string )</code> </th>
		<td>Sets the regex for checking URLs.</td>
	</tr>

	<tr>
		<td> <code>is.setDateRegex( string )</code> </th>
		<td>Sets the regex for checking dates.</td>
	</tr>

	<tr>
		<td> <code>is.setPhoneRegex( string )</code> </th>
		<td>Sets the regex for checking phone numbers.</td>
	</tr>
</table>

## Change Log

* _11.01.13 - version 1.0.1 - 1kb_
	* Updated URL Regex to John Gruber v2.0 (http://daringfireball.net/2010/07/improved_regex_for_matching_urls)

* _05.26.13 - version 1.0.0 - 1kb_
	* Initial release.

## Credits

@wakirby, @ncallaway