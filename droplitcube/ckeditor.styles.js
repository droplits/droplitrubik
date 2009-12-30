/*
$Id: ckeditor.styles.js,v 1.1.2.2 2009/12/16 11:32:04 wwalc Exp $
Copyright (c) 2003-2009, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */

CKEDITOR.addStylesSet( 'drupal',
[
	/* Block Styles */

	// These styles are already available in the "Format" combo, so they are
	// not needed here by default. You may enable them to avoid placing the
	// "Format" combo in the toolbar, maintaining the same features.

	{ name : 'Paragraph'		, element : 'p' },
	{ name : 'Heading 3'		, element : 'h3' },
	{ name : 'Heading 4'		, element : 'h4' },
	{ name : 'Heading 5'		, element : 'h5' },
	{ name : 'Heading 6'		, element : 'h6' },

	/* Inline Styles */

	// These are core styles available as toolbar buttons. You may opt enabling
	// some of them in the Styles combo, removing them from the toolbar.
	/*{ name : 'Underline'		, element : 'u' },*/
	/*{ name : 'Strikethrough'	, element : 'strike' },*/
	/*{ name : 'Subscript'		, element : 'sub' },*/
	/*{ name : 'Superscript'		, element : 'sup' },*/

	{ name : 'Computer Code'	, element : 'code' },

	/* Object Styles */

	{
		name : 'Pullquote',
		element : 'span',
		attributes :
		{
			'class' : 'pullquote'
		}
	},

	{
		name : 'Highlight Marker: Green',
		element : 'span',
		attributes :
		{
			'class' : 'highlight-green'
		}
	},

	{
		name : 'Highlight Marker: Yellow',
		element : 'span',
		attributes :
		{
			'class' : 'highlight-yellow'
		}
	},

	{
		name : 'Image on Left',
		element : 'img',
		attributes :
		{
			'class' : 'image-left',
			'border' : '0'
		}
	},

	{
		name : 'Image on Right',
		element : 'img',
		attributes :
		{
			'class' : 'image-right',
			'border' : '0'
		}
	}
]);