/*! BuildToolsCookbook v2.0.0 | (c) 2023 R A H U L J A I S W A L (RJ) | MIT License |  */
(function () {
	'use strict';

	/**
	 * Element.matches() polyfill (simple version)
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	 */
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	document.addEventListener('click', function (event) {
		if (!event.target.matches('#click-me')) return;
		alert('You clicked me!');
	}, false);

	/*!
	 * jQuery JavaScript Library v3.6.3
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright OpenJS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2022-12-20T21:28Z
	 */
	( function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket trac-14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : undefined, function( window, noGlobal ) {

	var arr = [];

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var flat = arr.flat ? function( array ) {
		return arr.flat.call( array );
	} : function( array ) {
		return arr.concat.apply( [], array );
	};


	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

			// Support: Chrome <=57, Firefox <=52
			// In some browsers, typeof returns "function" for HTML <object> elements
			// (i.e., `typeof document.createElement( "object" ) === "function"`).
			// We don't want to classify *any* DOM node as a function.
			// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
			// Plus for old WebKit, typeof returns "function" for HTML collections
			// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
			return typeof obj === "function" && typeof obj.nodeType !== "number" &&
				typeof obj.item !== "function";
		};


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};


	var document = window.document;



		var preservedScriptAttributes = {
			type: true,
			src: true,
			nonce: true,
			noModule: true
		};

		function DOMEval( code, node, doc ) {
			doc = doc || document;

			var i, val,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {

					// Support: Firefox 64+, Edge 18+
					// Some browsers don't support the "nonce" property on scripts.
					// On the other hand, just using `getAttribute` is not enough as
					// the `nonce` attribute is reset to an empty string whenever it
					// becomes browsing-context connected.
					// See https://github.com/whatwg/html/issues/2369
					// See https://html.spec.whatwg.org/#nonce-attributes
					// The `node.getAttribute` check was added for the sake of
					// `jQuery.globalEval` so that it can fake a nonce-containing node
					// via an object.
					val = node[ i ] || node.getAttribute && node.getAttribute( i );
					if ( val ) {
						script.setAttribute( i, val );
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.6.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		even: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return ( i + 1 ) % 2;
			} ) );
		},

		odd: function() {
			return this.pushStack( jQuery.grep( this, function( _elem, i ) {
				return i % 2;
			} ) );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					copy = options[ name ];

					// Prevent Object.prototype pollution
					// Prevent never-ending loop
					if ( name === "__proto__" || target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
						src = target[ name ];

						// Ensure proper type for the source value
						if ( copyIsArray && !Array.isArray( src ) ) {
							clone = [];
						} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
							clone = {};
						} else {
							clone = src;
						}
						copyIsArray = false;

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a provided context; falls back to the global one
		// if not specified.
		globalEval: function( code, options, doc ) {
			DOMEval( code, { nonce: options && options.nonce }, doc );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
							[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return flat( ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
		function( _i, name ) {
			class2type[ "[object " + name + "]" ] = name.toLowerCase();
		} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.9
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://js.foundation/
	 *
	 * Date: 2022-12-19
	 */
	( function( window ) {
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		nonnativeSelectorCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ( {} ).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		pushNative = arr.push,
		push = arr.push,
		slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[ i ] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
			"ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
		identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
			"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +

			// "Attribute values must be CSS identifiers [capture 5]
			// or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
			whitespace + "*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +

			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
			whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
			"*" ),
		rdescend = new RegExp( whitespace + "|>" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace +
				"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
				"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rhtml = /HTML$/i,
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
		funescape = function( escape, nonHex ) {
			var high = "0x" + escape.slice( 1 ) - 0x10000;

			return nonHex ?

				// Strip the backslash prefix from a non-hex escape sequence
				nonHex :

				// Replace a hexadecimal escape sequence with the encoded Unicode code point
				// Support: IE <=11+
				// For values outside the Basic Multilingual Plane (BMP), manually construct a
				// surrogate pair
				high < 0 ?
					String.fromCharCode( high + 0x10000 ) :
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" +
					ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		inDisabledFieldset = addCombinator(
			function( elem ) {
				return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			( arr = slice.call( preferredDoc.childNodes ) ),
			preferredDoc.childNodes
		);

		// Support: Android<4.0
		// Detect silently failing push.apply
		// eslint-disable-next-line no-unused-expressions
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				pushNative.apply( target, slice.call( els ) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;

				// Can't trust NodeList.length
				while ( ( target[ j++ ] = els[ i++ ] ) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
			setDocument( context );
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

					// ID selector
					if ( ( m = match[ 1 ] ) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( ( elem = context.getElementById( m ) ) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && ( elem = newContext.getElementById( m ) ) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[ 2 ] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!nonnativeSelectorCache[ selector + " " ] &&
					( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

					// Support: IE 8 only
					// Exclude object elements
					( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

					newSelector = selector;
					newContext = context;

					// qSA considers elements outside a scoping root when evaluating child or
					// descendant combinators, which is not what we want.
					// In such cases, we work around the behavior by prefixing every selector in the
					// list with an ID selector referencing the scope context.
					// The technique has to be used as well when a leading combinator is used
					// as such selectors are not recognized by querySelectorAll.
					// Thanks to Andrew Dupont for this technique.
					if ( nodeType === 1 &&
						( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;

						// We can use :scope instead of the ID hack if the browser
						// supports it & if we're not changing the context.
						if ( newContext !== context || !support.scope ) {

							// Capture the context ID, setting it first if necessary
							if ( ( nid = context.getAttribute( "id" ) ) ) {
								nid = nid.replace( rcssescape, fcssescape );
							} else {
								context.setAttribute( "id", ( nid = expando ) );
							}
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
								toSelector( groups[ i ] );
						}
						newSelector = groups.join( "," );
					}

					try {

						// `qSA` may not throw for unrecognized parts using forgiving parsing:
						// https://drafts.csswg.org/selectors/#forgiving-selector
						// like the `:has()` pseudo-class:
						// https://drafts.csswg.org/selectors/#relational
						// `CSS.supports` is still expected to return `false` then:
						// https://drafts.csswg.org/css-conditional-4/#typedef-supports-selector-fn
						// https://drafts.csswg.org/css-conditional-4/#dfn-support-selector
						if ( support.cssSupportsSelector &&

							// eslint-disable-next-line no-undef
							!CSS.supports( "selector(:is(" + newSelector + "))" ) ) {

							// Support: IE 11+
							// Throw to get to the same code path as an error directly in qSA.
							// Note: once we only support browser supporting
							// `CSS.supports('selector(...)')`, we can most likely drop
							// the `try-catch`. IE doesn't implement the API.
							throw new Error();
						}

						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
						nonnativeSelectorCache( selector, true );
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {

			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {

				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return ( cache[ key + " " ] = value );
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement( "fieldset" );

		try {
			return !!fn( el );
		} catch ( e ) {
			return false;
		} finally {

			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}

			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split( "|" ),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[ i ] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( ( cur = cur.nextSibling ) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return ( name === "input" || name === "button" ) && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction( function( argument ) {
			argument = +argument;
			return markFunction( function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
						seed[ j ] = !( matches[ j ] = seed[ j ] );
					}
				}
			} );
		} );
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Support: IE <=8
		// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
		// https://bugs.jquery.com/ticket/4833
		return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9 - 11+, Edge 12 - 18+
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( preferredDoc != document &&
			( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
		// Safari 4 - 5 only, Opera <=11.6 - 12.x only
		// IE/Edge & older browsers don't support the :scope pseudo-class.
		// Support: Safari 6.0 only
		// Safari 6.0 supports :scope but it's an alias of :root there.
		support.scope = assert( function( el ) {
			docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
			return typeof el.querySelectorAll !== "undefined" &&
				!el.querySelectorAll( ":scope fieldset div" ).length;
		} );

		// Support: Chrome 105+, Firefox 104+, Safari 15.4+
		// Make sure forgiving mode is not used in `CSS.supports( "selector(...)" )`.
		//
		// `:is()` uses a forgiving selector list as an argument and is widely
		// implemented, so it's a good one to test against.
		support.cssSupportsSelector = assert( function() {
			/* eslint-disable no-undef */

			return CSS.supports( "selector(*)" ) &&

				// Support: Firefox 78-81 only
				// In old Firefox, `:is()` didn't use forgiving parsing. In that case,
				// fail this test as there's no selector to test against that.
				// `CSS.supports` uses unforgiving parsing
				document.querySelectorAll( ":is(:jqfake)" ) &&

				// `*` is needed as Safari & newer Chrome implemented something in between
				// for `:has()` - it throws in `qSA` if it only contains an unsupported
				// argument but multiple ones, one of which is supported, are fine.
				// We want to play safe in case `:is()` gets the same treatment.
				!CSS.supports( "selector(:is(*,:jqfake))" );

			/* eslint-enable */
		} );

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert( function( el ) {
			el.className = "i";
			return !el.getAttribute( "className" );
		} );

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert( function( el ) {
			el.appendChild( document.createComment( "" ) );
			return !el.getElementsByTagName( "*" ).length;
		} );

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert( function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		} );

		// ID filter and find
		if ( support.getById ) {
			Expr.filter[ "ID" ] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute( "id" ) === attrId;
				};
			};
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter[ "ID" ] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode( "id" );
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find[ "ID" ] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( ( elem = elems[ i++ ] ) ) {
							node = elem.getAttributeNode( "id" );
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find[ "TAG" ] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,

					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( ( elem = results[ i++ ] ) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert( function( el ) {

				var input;

				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll( "[selected]" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push( "~=" );
				}

				// Support: IE 11+, Edge 15 - 18+
				// IE 11/Edge don't find elements on a `[name='']` query in some cases.
				// Adding a temporary attribute to the document before the selection works
				// around the issue.
				// Interestingly, IE 10 & older don't seem to have the issue.
				input = document.createElement( "input" );
				input.setAttribute( "name", "" );
				el.appendChild( input );
				if ( !el.querySelectorAll( "[name='']" ).length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
						whitespace + "*(?:''|\"\")" );
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll( ":checked" ).length ) {
					rbuggyQSA.push( ":checked" );
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push( ".#.+[+~]" );
				}

				// Support: Firefox <=3.6 - 5 only
				// Old Firefox doesn't throw on a badly-escaped identifier.
				el.querySelectorAll( "\\\f" );
				rbuggyQSA.push( "[\\r\\n\\f]" );
			} );

			assert( function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement( "input" );
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll( "[name=d]" ).length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: Opera 10 - 11 only
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll( "*,:x" );
				rbuggyQSA.push( ",.*:" );
			} );
		}

		if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector ) ) ) ) {

			assert( function( el ) {

				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			} );
		}

		if ( !support.cssSupportsSelector ) {

			// Support: Chrome 105+, Safari 15.4+
			// `:has()` uses a forgiving selector list as an argument so our regular
			// `try-catch` mechanism fails to catch `:has()` with arguments not supported
			// natively like `:has(:contains("Foo"))`. Where supported & spec-compliant,
			// we now use `CSS.supports("selector(:is(SELECTOR_TO_BE_TESTED))")`, but
			// outside that we mark `:has` as buggy.
			rbuggyQSA.push( ":has" );
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {

				// Support: IE <9 only
				// IE doesn't have `contains` on `document` so we need to check for
				// `documentElement` presence.
				// We need to fall back to `a` when `documentElement` is missing
				// as `ownerDocument` of elements within `<template/>` may have
				// a null one - a default behavior of all modern browsers.
				var adown = a.nodeType === 9 && a.documentElement || a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				) );
			} :
			function( a, b ) {
				if ( b ) {
					while ( ( b = b.parentNode ) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

				// Choose the first element that is related to our preferred document
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( a == document || a.ownerDocument == preferredDoc &&
					contains( preferredDoc, a ) ) {
					return -1;
				}

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				if ( b == document || b.ownerDocument == preferredDoc &&
					contains( preferredDoc, b ) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {

			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				return a == document ? -1 :
					b == document ? 1 :
					/* eslint-enable eqeqeq */
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( ( cur = cur.parentNode ) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( ( cur = cur.parentNode ) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[ i ] === bp[ i ] ) {
				i++;
			}

			return i ?

				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[ i ], bp[ i ] ) :

				// Otherwise nodes in our document sort first
				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				/* eslint-disable eqeqeq */
				ap[ i ] == preferredDoc ? -1 :
				bp[ i ] == preferredDoc ? 1 :
				/* eslint-enable eqeqeq */
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		setDocument( elem );

		if ( support.matchesSelector && documentIsHTML &&
			!nonnativeSelectorCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch ( e ) {
				nonnativeSelectorCache( expr, true );
			}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( context.ownerDocument || context ) != document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {

		// Set document vars if needed
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		if ( ( elem.ownerDocument || elem ) != document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return ( sel + "" ).replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( ( elem = results[ i++ ] ) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {

				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[ 1 ] = match[ 1 ].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
					match[ 5 ] || "" ).replace( runescape, funescape );

				if ( match[ 2 ] === "~=" ) {
					match[ 3 ] = " " + match[ 3 ] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {

				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[ 1 ] = match[ 1 ].toLowerCase();

				if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

					// nth-* requires argument
					if ( !match[ 3 ] ) {
						Sizzle.error( match[ 0 ] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[ 4 ] = +( match[ 4 ] ?
						match[ 5 ] + ( match[ 6 ] || 1 ) :
						2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
					match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

					// other types prohibit arguments
				} else if ( match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[ 6 ] && match[ 2 ];

				if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[ 3 ] ) {
					match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&

					// Get excess from tokenize (recursively)
					( excess = tokenize( unquoted, true ) ) &&

					// advance to the next closing parenthesis
					( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

					// excess is a negative index
					match[ 0 ] = match[ 0 ].slice( 0, excess );
					match[ 2 ] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() {
						return true;
					} :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					( pattern = new RegExp( "(^|" + whitespace +
						")" + className + "(" + whitespace + "|$)" ) ) && classCache(
							className, function( elem ) {
								return pattern.test(
									typeof elem.className === "string" && elem.className ||
									typeof elem.getAttribute !== "undefined" &&
										elem.getAttribute( "class" ) ||
									""
								);
					} );
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					/* eslint-disable max-len */

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
					/* eslint-enable max-len */

				};
			},

			"CHILD": function( type, what, _argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, _context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( ( node = node[ dir ] ) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}

									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( ( node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {

								// Use previously-cached element index if available
								if ( useCache ) {

									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || ( node[ expando ] = {} );

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										( outerCache[ node.uniqueID ] = {} );

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {

									// Use the same loop as above to seek `elem` from the start
									while ( ( node = ++nodeIndex && node && node[ dir ] ||
										( diff = nodeIndex = 0 ) || start.pop() ) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] ||
													( node[ expando ] = {} );

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													( outerCache[ node.uniqueID ] = {} );

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {

				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction( function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[ i ] );
								seed[ idx ] = !( matches[ idx ] = matched[ i ] );
							}
						} ) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {

			// Potentially complex pseudos
			"not": markFunction( function( selector ) {

				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction( function( seed, matches, _context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( ( elem = unmatched[ i ] ) ) {
								seed[ i ] = !( matches[ i ] = elem );
							}
						}
					} ) :
					function( elem, _context, xml ) {
						input[ 0 ] = elem;
						matcher( input, null, xml, results );

						// Don't keep the element (issue #299)
						input[ 0 ] = null;
						return !results.pop();
					};
			} ),

			"has": markFunction( function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			} ),

			"contains": markFunction( function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
				};
			} ),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {

				// lang value must be a valid identifier
				if ( !ridentifier.test( lang || "" ) ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( ( elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
					return false;
				};
			} ),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement &&
					( !document.hasFocus || document.hasFocus() ) &&
					!!( elem.type || elem.href || ~elem.tabIndex );
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {

				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return ( nodeName === "input" && !!elem.checked ) ||
					( nodeName === "option" && !!elem.selected );
			},

			"selected": function( elem ) {

				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					// eslint-disable-next-line no-unused-expressions
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {

				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos[ "empty" ]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE <10 only
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( ( attr = elem.getAttribute( "type" ) ) == null ||
						attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo( function() {
				return [ 0 ];
			} ),

			"last": createPositionalPseudo( function( _matchIndexes, length ) {
				return [ length - 1 ];
			} ),

			"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			} ),

			"even": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"odd": createPositionalPseudo( function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ?
					argument + length :
					argument > length ?
						length :
						argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} ),

			"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			} )
		}
	};

	Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
				if ( match ) {

					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[ 0 ].length ) || soFar;
				}
				groups.push( ( tokens = [] ) );
			}

			matched = false;

			// Combinators
			if ( ( match = rcombinators.exec( soFar ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,

					// Cast descendant combinators to space
					type: match[ 0 ].replace( rtrim, " " )
				} );
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
					( match = preFilters[ type ]( match ) ) ) ) {
					matched = match.shift();
					tokens.push( {
						value: matched,
						type: type,
						matches: match
					} );
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :

				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[ i ].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?

			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( ( elem = elem[ dir ] ) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || ( elem[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] ||
								( outerCache[ elem.uniqueID ] = {} );

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( ( oldCache = uniqueCache[ key ] ) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return ( newCache[ 2 ] = oldCache[ 2 ] );
							} else {

								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[ i ]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[ 0 ];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[ i ], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( ( elem = unmatched[ i ] ) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction( function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts(
					selector || "*",
					context.nodeType ? [ context ] : context,
					[]
				),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?

					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( ( elem = temp[ i ] ) ) {
						matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {

						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( ( elem = matcherOut[ i ] ) ) {

								// Restore matcherIn since elem is not yet a final match
								temp.push( ( matcherIn[ i ] = elem ) );
							}
						}
						postFinder( null, ( matcherOut = [] ), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) &&
							( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

							seed[ temp ] = !( results[ temp ] = elem );
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		} );
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[ 0 ].type ],
			implicitRelative = leadingRelative || Expr.relative[ " " ],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					( checkContext = context ).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );

				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
				matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
			} else {
				matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {

					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[ j ].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens
							.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,

					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
					len = elems.length;

				if ( outermost ) {

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					outermostContext = context == document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;

						// Support: IE 11+, Edge 17 - 18+
						// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
						// two documents; shallow comparisons work.
						// eslint-disable-next-line eqeqeq
						if ( !context && elem.ownerDocument != document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( ( matcher = elementMatchers[ j++ ] ) ) {
							if ( matcher( elem, context || document, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {

						// They will have gone through all possible matchers
						if ( ( elem = !matcher && elem ) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( ( matcher = setMatchers[ j++ ] ) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {

						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
									setMatched[ i ] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {

			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[ i ] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache(
				selector,
				matcherFromGroupMatchers( elementMatchers, setMatchers )
			);

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( ( selector = compiled.selector || selector ) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[ 0 ] = match[ 0 ].slice( 0 );
			if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

				context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
					.replace( runescape, funescape ), context ) || [] )[ 0 ];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[ i ];

				// Abort if we hit a combinator
				if ( Expr.relative[ ( type = token.type ) ] ) {
					break;
				}
				if ( ( find = Expr.find[ type ] ) ) {

					// Search, expanding context for leading sibling combinators
					if ( ( seed = find(
						token.matches[ 0 ].replace( runescape, funescape ),
						rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
							context
					) ) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert( function( el ) {

		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
	} );

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert( function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute( "href" ) === "#";
	} ) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		} );
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert( function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	} ) ) {
		addHandle( "value", function( elem, _name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		} );
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert( function( el ) {
		return el.getAttribute( "disabled" ) == null;
	} ) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
					( val = elem.getAttributeNode( name ) ) && val.specified ?
						val.value :
						null;
			}
		} );
	}

	return Sizzle;

	} )( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	}
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
		// Strict HTML recognition (trac-11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, _i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, _i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, _i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			if ( elem.contentDocument != null &&

				// Support: IE 11+
				// <object> elements with no `data` attribute has an object
				// `contentDocument` with a `null` prototype.
				getProto( elem.contentDocument ) ) {

				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if ( nodeName( elem, "template" ) ) {
				elem = elem.content || elem;
			}

			return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( _i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the primary Deferred
				primary = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							primary.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( primary.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return primary.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
			}

			return primary.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See trac-6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, _key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
							value :
							value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( _all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (trac-9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see trac-8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (trac-14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var documentElement = document.documentElement;



		var isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem );
			},
			composed = { composed: true };

		// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
		// Check attachment across shadow DOM boundaries when possible (gh-3504)
		// Support: iOS 10.0-10.2 only
		// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
		// leading to errors. We need to check for `getRootNode`.
		if ( documentElement.getRootNode ) {
			isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem ) ||
					elem.getRootNode( composed ) === elem.ownerDocument;
			};
		}
	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				isAttached( elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = elem.nodeType &&
				( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (trac-11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (trac-14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

		// Support: IE <=9 only
		// IE <=9 replaces <option> tags with their contents when inserted outside of
		// the select element.
		div.innerHTML = "<option></option>";
		support.option = !!div.lastChild;
	} )();


	// We have to close these tags to support XHTML (trac-13200)
	var wrapMap = {

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: IE <=9 only
	if ( !support.option ) {
		wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
	}


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, attached, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (trac-12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			attached = isAttached( elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( attached ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 - 11+
	// focus() and blur() are asynchronous, except when they are no-op.
	// So expect focus to be synchronous when the element is already active,
	// and blur to be synchronous when the element is not already active.
	// (focus and blur are always synchronous in other supported browsers,
	// this just defines when we can count on it).
	function expectSync( elem, type ) {
		return ( elem === safeActiveElement() ) === ( type === "focus" );
	}

	// Support: IE <=9 only
	// Accessing document.activeElement can throw unexpectedly
	// https://bugs.jquery.com/ticket/13393
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Only attach events to objects that accept data
			if ( !acceptData( elem ) ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = Object.create( null );
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),

				// Make a writable jQuery.Event from the native event object
				event = jQuery.event.fix( nativeEvent ),

				handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// If the event is namespaced, then each handler is only invoked if it is
					// specially universal or its namespaces are a superset of the event's.
					if ( !event.rnamespace || handleObj.namespace === false ||
						event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (trac-13208)
					// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (trac-13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
							return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
							return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			click: {

				// Utilize native event to ensure correct state for checkable inputs
				setup: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Claim the first handler
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						// dataPriv.set( el, "click", ... )
						leverageNative( el, "click", returnTrue );
					}

					// Return false to allow normal processing in the caller
					return false;
				},
				trigger: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Force setup before triggering a click
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						leverageNative( el, "click" );
					}

					// Return non-false to allow normal event-path propagation
					return true;
				},

				// For cross-browser consistency, suppress native .click() on links
				// Also prevent it if we're currently inside a leveraged native-event stack
				_default: function( event ) {
					var target = event.target;
					return rcheckableType.test( target.type ) &&
						target.click && nodeName( target, "input" ) &&
						dataPriv.get( target, "click" ) ||
						nodeName( target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	// Ensure the presence of an event listener that handles manually-triggered
	// synthetic events by interrupting progress until reinvoked in response to
	// *native* events that it fires directly, ensuring that state changes have
	// already occurred before other listeners are invoked.
	function leverageNative( el, type, expectSync ) {

		// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
		if ( !expectSync ) {
			if ( dataPriv.get( el, type ) === undefined ) {
				jQuery.event.add( el, type, returnTrue );
			}
			return;
		}

		// Register the controller as a special universal handler for all event namespaces
		dataPriv.set( el, type, false );
		jQuery.event.add( el, type, {
			namespace: false,
			handler: function( event ) {
				var notAsync, result,
					saved = dataPriv.get( this, type );

				if ( ( event.isTrigger & 1 ) && this[ type ] ) {

					// Interrupt processing of the outer synthetic .trigger()ed event
					// Saved data should be false in such cases, but might be a leftover capture object
					// from an async native handler (gh-4350)
					if ( !saved.length ) {

						// Store arguments for use when handling the inner native event
						// There will always be at least one argument (an event object), so this array
						// will not be confused with a leftover capture object.
						saved = slice.call( arguments );
						dataPriv.set( this, type, saved );

						// Trigger the native event and capture its result
						// Support: IE <=9 - 11+
						// focus() and blur() are asynchronous
						notAsync = expectSync( this, type );
						this[ type ]();
						result = dataPriv.get( this, type );
						if ( saved !== result || notAsync ) {
							dataPriv.set( this, type, false );
						} else {
							result = {};
						}
						if ( saved !== result ) {

							// Cancel the outer synthetic event
							event.stopImmediatePropagation();
							event.preventDefault();

							// Support: Chrome 86+
							// In Chrome, if an element having a focusout handler is blurred by
							// clicking outside of it, it invokes the handler synchronously. If
							// that handler calls `.remove()` on the element, the data is cleared,
							// leaving `result` undefined. We need to guard against this.
							return result && result.value;
						}

					// If this is an inner synthetic event for an event with a bubbling surrogate
					// (focus or blur), assume that the surrogate already propagated from triggering the
					// native event and prevent that from happening again here.
					// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
					// bubbling surrogate propagates *after* the non-bubbling base), but that seems
					// less bad than duplication.
					} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
						event.stopPropagation();
					}

				// If this is a native event triggered above, everything is now in order
				// Fire an inner synthetic event with the original arguments
				} else if ( saved.length ) {

					// ...and capture the result
					dataPriv.set( this, type, {
						value: jQuery.event.trigger(

							// Support: IE <=9 - 11+
							// Extend with the prototype to reset the above stopImmediatePropagation()
							jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
							saved.slice( 1 ),
							this
						)
					} );

					// Abort handling of the native event
					event.stopImmediatePropagation();
				}
			}
		} );
	}

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (trac-504, trac-13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
		which: true
	}, jQuery.event.addProp );

	jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
		jQuery.event.special[ type ] = {

			// Utilize native event if possible so blur/focus sequence is correct
			setup: function() {

				// Claim the first handler
				// dataPriv.set( this, "focus", ... )
				// dataPriv.set( this, "blur", ... )
				leverageNative( this, type, expectSync );

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function() {

				// Force setup before trigger
				leverageNative( this, type );

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// Suppress native focus or blur if we're currently inside
			// a leveraged native-event stack
			_default: function( event ) {
				return dataPriv.get( event.target, type );
			},

			delegateType: delegateType
		};
	} );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

		rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.get( src );
			events = pdataOld.events;

			if ( events ) {
				dataPriv.remove( dest, "handle events" );

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = flat( args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (trac-8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl && !node.noModule ) {
									jQuery._evalUrl( node.src, {
										nonce: node.nonce || node.getAttribute( "nonce" )
									}, doc );
								}
							} else {

								// Unwrap a CDATA section containing script contents. This shouldn't be
								// needed as in XML documents they're already not visible when
								// inspecting element contents and in HTML documents they have no
								// meaning but we're preserving that logic for backwards compatibility.
								// This will be removed completely in 4.0. See gh-4904.
								DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && isAttached( node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html;
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = isAttached( elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var rcustomProp = /^--/;


	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

	var whitespace = "[\\x20\\t\\r\\n\\f]";


	var rtrimCSS = new RegExp(
		"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
		"g"
	);




	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			// Support: Chrome <=64
			// Don't get tricked when zoom affects offsetWidth (gh-4029)
			div.style.position = "absolute";
			scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableTrDimensionsVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (trac-8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			},

			// Support: IE 9 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Behavior in IE 9 is more subtle than in newer versions & it passes
			// some versions of this test; make sure not to make it pass there!
			//
			// Support: Firefox 70+
			// Only Firefox includes border widths
			// in computed dimensions. (gh-4529)
			reliableTrDimensions: function() {
				var table, tr, trChild, trStyle;
				if ( reliableTrDimensionsVal == null ) {
					table = document.createElement( "table" );
					tr = document.createElement( "tr" );
					trChild = document.createElement( "div" );

					table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
					tr.style.cssText = "border:1px solid";

					// Support: Chrome 86+
					// Height set through cssText does not get applied.
					// Computed height then comes back as 0.
					tr.style.height = "1px";
					trChild.style.height = "9px";

					// Support: Android 8 Chrome 86+
					// In our bodyBackground.html iframe,
					// display for all div elements is set to "inline",
					// which causes a problem only in Android 8 Chrome 86.
					// Ensuring the div is display: block
					// gets around this issue.
					trChild.style.display = "block";

					documentElement
						.appendChild( table )
						.appendChild( tr )
						.appendChild( trChild );

					trStyle = window.getComputedStyle( tr );
					reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
						parseInt( trStyle.borderTopWidth, 10 ) +
						parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

					documentElement.removeChild( table );
				}
				return reliableTrDimensionsVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			isCustomProp = rcustomProp.test( name ),

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, trac-12537)
		//   .css('--customProperty) (gh-3144)
		if ( computed ) {

			// Support: IE <=9 - 11+
			// IE only supports `"float"` in `getPropertyValue`; in computed styles
			// it's only available as `"cssFloat"`. We no longer modify properties
			// sent to `.css()` apart from camelCasing, so we need to check both.
			// Normally, this would create difference in behavior: if
			// `getPropertyValue` returns an empty string, the value returned
			// by `.css()` would be `undefined`. This is usually the case for
			// disconnected elements. However, in IE even disconnected elements
			// with no styles return `"none"` for `getPropertyValue( "float" )`
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( isCustomProp && ret ) {

				// Support: Firefox 105+, Chrome <=105+
				// Spec requires trimming whitespace for custom properties (gh-4926).
				// Firefox only trims leading whitespace. Chrome just collapses
				// both leading & trailing whitespace to a single space.
				//
				// Fall back to `undefined` if empty string returned.
				// This collapses a missing definition with property defined
				// and set to an empty string but there's no standard API
				// allowing us to differentiate them without a performance penalty
				// and returning `undefined` aligns with older jQuery.
				//
				// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
				// as whitespace while CSS does not, but this is not a problem
				// because CSS preprocessing replaces them with U+000A LINE FEED
				// (which *is* CSS whitespace)
				// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
				ret = ret.replace( rtrimCSS, "$1" ) || undefined;
			}

			if ( ret === "" && !isAttached( elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style,
		vendorProps = {};

	// Return a vendor-prefixed property or undefined
	function vendorPropName( name ) {

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
	function finalPropName( name ) {
		var final = jQuery.cssProps[ name ] || vendorProps[ name ];

		if ( final ) {
			return final;
		}
		if ( name in emptyStyle ) {
			return name;
		}
		return vendorProps[ name ] = vendorPropName( name ) || name;
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function setPositiveNumber( _elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5

			// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
			// Use an explicit zero to avoid NaN (gh-3964)
			) ) || 0;
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),

			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
			// Fake content-box until we know it's needed to know the true value.
			boxSizingNeeded = !support.boxSizingReliable() || extra,
			isBorderBox = boxSizingNeeded &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox,

			val = curCSS( elem, dimension, styles ),
			offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}


		// Support: IE 9 - 11 only
		// Use offsetWidth/offsetHeight for when box sizing is unreliable.
		// In those cases, the computed value can be trusted to be border-box.
		if ( ( !support.boxSizingReliable() && isBorderBox ||

			// Support: IE 10 - 11+, Edge 15 - 18+
			// IE/Edge misreport `getComputedStyle` of table rows with width/height
			// set in CSS while `offset*` properties report correct values.
			// Interestingly, in some cases IE 9 doesn't suffer from this issue.
			!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

			// Fall back to offsetWidth/offsetHeight when value is "auto"
			// This happens for inline elements with no explicit setting (gh-3571)
			val === "auto" ||

			// Support: Android <=4.1 - 4.3 only
			// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

			// Make sure the element is visible & connected
			elem.getClientRects().length ) {

			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

			// Where available, offsetWidth/offsetHeight approximate border box dimensions.
			// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
			// retrieved value as a content box dimension.
			valueIsBorderBox = offsetProp in elem;
			if ( valueIsBorderBox ) {
				val = elem[ offsetProp ];
			}
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"gridArea": true,
			"gridColumn": true,
			"gridColumnEnd": true,
			"gridColumnStart": true,
			"gridRow": true,
			"gridRowEnd": true,
			"gridRowStart": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (trac-7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug trac-9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (trac-7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
				// "px" to a few hardcoded values.
				if ( type === "number" && !isCustomProp ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( _i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),

					// Only read styles.position if the test has a chance to fail
					// to avoid forcing a reflow.
					scrollboxSizeBuggy = !support.scrollboxSize() &&
						styles.position === "absolute",

					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
					boxSizingNeeded = scrollboxSizeBuggy || extra,
					isBorderBox = boxSizingNeeded &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra ?
						boxModelAdjustment(
							elem,
							dimension,
							extra,
							isBorderBox,
							styles
						) :
						0;

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && scrollboxSizeBuggy ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
				) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
						tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};

			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// Use proper attribute retrieval (trac-12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classNames, cur, curValue, className, i, finalValue;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classNames = classesToArray( value );

			if ( classNames.length ) {
				return this.each( function() {
					curValue = getClass( this );
					cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						for ( i = 0; i < classNames.length; i++ ) {
							className = classNames[ i ];
							if ( cur.indexOf( " " + className + " " ) < 0 ) {
								cur += className + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							this.setAttribute( "class", finalValue );
						}
					}
				} );
			}

			return this;
		},

		removeClass: function( value ) {
			var classNames, cur, curValue, className, i, finalValue;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classNames = classesToArray( value );

			if ( classNames.length ) {
				return this.each( function() {
					curValue = getClass( this );

					// This expression is here for better compressibility (see addClass)
					cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						for ( i = 0; i < classNames.length; i++ ) {
							className = classNames[ i ];

							// Remove *all* instances
							while ( cur.indexOf( " " + className + " " ) > -1 ) {
								cur = cur.replace( " " + className + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							this.setAttribute( "class", finalValue );
						}
					}
				} );
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var classNames, className, i, self,
				type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			classNames = classesToArray( value );

			return this.each( function() {
				if ( isValidValue ) {

					// Toggle individual class names
					self = jQuery( this );

					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
								"" :
								dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (trac-14686, trac-14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (trac-2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (trac-9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (trac-6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {

					// Handle: regular nodes (via `this.ownerDocument`), window
					// (via `this.document`) & document (via `this`).
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this.document || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = { guid: Date.now() };

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, parserErrorElem;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {}

		parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
		if ( !xml || parserErrorElem ) {
			jQuery.error( "Invalid XML: " + (
				parserErrorElem ?
					jQuery.map( parserErrorElem.childNodes, function( el ) {
						return el.textContent;
					} ).join( "\n" ) :
					data
			) );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		if ( a == null ) {
			return "";
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} ).filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} ).map( function( _i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// trac-7653, trac-8125, trac-8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );

	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes trac-9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
										( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
											.concat( match[ 2 ] );
								}
							}
							match = responseHeaders[ key.toLowerCase() + " " ];
						}
						return match == null ? null : match.join( ", " );
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (trac-10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket trac-12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// trac-9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
						uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Use a noop converter for missing script but not if jsonp
				if ( !isSuccess &&
					jQuery.inArray( "script", s.dataTypes ) > -1 &&
					jQuery.inArray( "json", s.dataTypes ) < 0 ) {
					s.converters[ "text script" ] = function() {};
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( _i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );

	jQuery.ajaxPrefilter( function( s ) {
		var i;
		for ( i in s.headers ) {
			if ( i.toLowerCase() === "content-type" ) {
				s.contentType = s.headers[ i ] || "";
			}
		}
	} );


	jQuery._evalUrl = function( url, options, doc ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (trac-11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,

			// Only evaluate the response if it is successful (gh-4126)
			// dataFilter is not invoked for failure responses, so using it instead
			// of the default converter is kludgy but it works.
			converters: {
				"text script": function() {}
			},
			dataFilter: function( response ) {
				jQuery.globalEval( response, options, doc );
			}
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// trac-1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see trac-8605, trac-14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// trac-14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain or forced-by-attrs requests
		if ( s.crossDomain || s.scriptAttrs ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" )
						.attr( s.scriptAttrs || {} )
						.prop( { charset: s.scriptCharset, src: s.url } )
						.on( "load error", callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						} );

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( _i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( {
			padding: "inner" + name,
			content: type,
			"": "outer" + name
		}, function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( _i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},

		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );

	jQuery.each(
		( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( _i, name ) {

			// Handle event binding
			jQuery.fn[ name ] = function( data, fn ) {
				return arguments.length > 0 ?
					this.on( name, null, data, fn ) :
					this.trigger( name );
			};
		}
	);




	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	// Require that the "whitespace run" starts from a non-whitespace
	// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
	var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};

	jQuery.trim = function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "$1" );
	};



	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function() {
			return jQuery;
		} );
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (trac-13566)
	if ( typeof noGlobal === "undefined" ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );

	/*!
	  * Bootstrap v4.6.0 (https://getbootstrap.com/)
	  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	  */
	(function (global, factory) {
	  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
	  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
	  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
	}(undefined, (function (exports, $, Popper) {
	  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
	  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	  }

	  function _extends() {
	    _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.6.0): util.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	   * --------------------------------------------------------------------------
	   */
	  /**
	   * ------------------------------------------------------------------------
	   * Private TransitionEnd Helpers
	   * ------------------------------------------------------------------------
	   */

	  var TRANSITION_END = 'transitionend';
	  var MAX_UID = 1000000;
	  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

	  function toType(obj) {
	    if (obj === null || typeof obj === 'undefined') {
	      return "" + obj;
	    }

	    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
	  }

	  function getSpecialTransitionEndEvent() {
	    return {
	      bindType: TRANSITION_END,
	      delegateType: TRANSITION_END,
	      handle: function handle(event) {
	        if ($__default['default'](event.target).is(this)) {
	          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
	        }

	        return undefined;
	      }
	    };
	  }

	  function transitionEndEmulator(duration) {
	    var _this = this;

	    var called = false;
	    $__default['default'](this).one(Util.TRANSITION_END, function () {
	      called = true;
	    });
	    setTimeout(function () {
	      if (!called) {
	        Util.triggerTransitionEnd(_this);
	      }
	    }, duration);
	    return this;
	  }

	  function setTransitionEndSupport() {
	    $__default['default'].fn.emulateTransitionEnd = transitionEndEmulator;
	    $__default['default'].event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	  }
	  /**
	   * --------------------------------------------------------------------------
	   * Public Util Api
	   * --------------------------------------------------------------------------
	   */


	  var Util = {
	    TRANSITION_END: 'bsTransitionEnd',
	    getUID: function getUID(prefix) {
	      do {
	        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
	      } while (document.getElementById(prefix));

	      return prefix;
	    },
	    getSelectorFromElement: function getSelectorFromElement(element) {
	      var selector = element.getAttribute('data-target');

	      if (!selector || selector === '#') {
	        var hrefAttr = element.getAttribute('href');
	        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
	      }

	      try {
	        return document.querySelector(selector) ? selector : null;
	      } catch (_) {
	        return null;
	      }
	    },
	    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
	      if (!element) {
	        return 0;
	      } // Get transition-duration of the element


	      var transitionDuration = $__default['default'](element).css('transition-duration');
	      var transitionDelay = $__default['default'](element).css('transition-delay');
	      var floatTransitionDuration = parseFloat(transitionDuration);
	      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

	      if (!floatTransitionDuration && !floatTransitionDelay) {
	        return 0;
	      } // If multiple durations are defined, take the first


	      transitionDuration = transitionDuration.split(',')[0];
	      transitionDelay = transitionDelay.split(',')[0];
	      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
	    },
	    reflow: function reflow(element) {
	      return element.offsetHeight;
	    },
	    triggerTransitionEnd: function triggerTransitionEnd(element) {
	      $__default['default'](element).trigger(TRANSITION_END);
	    },
	    supportsTransitionEnd: function supportsTransitionEnd() {
	      return Boolean(TRANSITION_END);
	    },
	    isElement: function isElement(obj) {
	      return (obj[0] || obj).nodeType;
	    },
	    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
	      for (var property in configTypes) {
	        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
	          var expectedTypes = configTypes[property];
	          var value = config[property];
	          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

	          if (!new RegExp(expectedTypes).test(valueType)) {
	            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
	          }
	        }
	      }
	    },
	    findShadowRoot: function findShadowRoot(element) {
	      if (!document.documentElement.attachShadow) {
	        return null;
	      } // Can find the shadow root otherwise it'll return the document


	      if (typeof element.getRootNode === 'function') {
	        var root = element.getRootNode();
	        return root instanceof ShadowRoot ? root : null;
	      }

	      if (element instanceof ShadowRoot) {
	        return element;
	      } // when we don't find a shadow root


	      if (!element.parentNode) {
	        return null;
	      }

	      return Util.findShadowRoot(element.parentNode);
	    },
	    jQueryDetection: function jQueryDetection() {
	      if (typeof $__default['default'] === 'undefined') {
	        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
	      }

	      var version = $__default['default'].fn.jquery.split(' ')[0].split('.');
	      var minMajor = 1;
	      var ltMajor = 2;
	      var minMinor = 9;
	      var minPatch = 1;
	      var maxMajor = 4;

	      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
	        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
	      }
	    }
	  };
	  Util.jQueryDetection();
	  setTransitionEndSupport();

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME = 'alert';
	  var VERSION = '4.6.0';
	  var DATA_KEY = 'bs.alert';
	  var EVENT_KEY = "." + DATA_KEY;
	  var DATA_API_KEY = '.data-api';
	  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
	  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
	  var EVENT_CLOSE = "close" + EVENT_KEY;
	  var EVENT_CLOSED = "closed" + EVENT_KEY;
	  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
	  var CLASS_NAME_ALERT = 'alert';
	  var CLASS_NAME_FADE = 'fade';
	  var CLASS_NAME_SHOW = 'show';
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Alert = /*#__PURE__*/function () {
	    function Alert(element) {
	      this._element = element;
	    } // Getters


	    var _proto = Alert.prototype;

	    // Public
	    _proto.close = function close(element) {
	      var rootElement = this._element;

	      if (element) {
	        rootElement = this._getRootElement(element);
	      }

	      var customEvent = this._triggerCloseEvent(rootElement);

	      if (customEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._removeElement(rootElement);
	    };

	    _proto.dispose = function dispose() {
	      $__default['default'].removeData(this._element, DATA_KEY);
	      this._element = null;
	    } // Private
	    ;

	    _proto._getRootElement = function _getRootElement(element) {
	      var selector = Util.getSelectorFromElement(element);
	      var parent = false;

	      if (selector) {
	        parent = document.querySelector(selector);
	      }

	      if (!parent) {
	        parent = $__default['default'](element).closest("." + CLASS_NAME_ALERT)[0];
	      }

	      return parent;
	    };

	    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
	      var closeEvent = $__default['default'].Event(EVENT_CLOSE);
	      $__default['default'](element).trigger(closeEvent);
	      return closeEvent;
	    };

	    _proto._removeElement = function _removeElement(element) {
	      var _this = this;

	      $__default['default'](element).removeClass(CLASS_NAME_SHOW);

	      if (!$__default['default'](element).hasClass(CLASS_NAME_FADE)) {
	        this._destroyElement(element);

	        return;
	      }

	      var transitionDuration = Util.getTransitionDurationFromElement(element);
	      $__default['default'](element).one(Util.TRANSITION_END, function (event) {
	        return _this._destroyElement(element, event);
	      }).emulateTransitionEnd(transitionDuration);
	    };

	    _proto._destroyElement = function _destroyElement(element) {
	      $__default['default'](element).detach().trigger(EVENT_CLOSED).remove();
	    } // Static
	    ;

	    Alert._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $element = $__default['default'](this);
	        var data = $element.data(DATA_KEY);

	        if (!data) {
	          data = new Alert(this);
	          $element.data(DATA_KEY, data);
	        }

	        if (config === 'close') {
	          data[config](this);
	        }
	      });
	    };

	    Alert._handleDismiss = function _handleDismiss(alertInstance) {
	      return function (event) {
	        if (event) {
	          event.preventDefault();
	        }

	        alertInstance.close(this);
	      };
	    };

	    _createClass(Alert, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION;
	      }
	    }]);

	    return Alert;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME] = Alert._jQueryInterface;
	  $__default['default'].fn[NAME].Constructor = Alert;

	  $__default['default'].fn[NAME].noConflict = function () {
	    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
	    return Alert._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$1 = 'button';
	  var VERSION$1 = '4.6.0';
	  var DATA_KEY$1 = 'bs.button';
	  var EVENT_KEY$1 = "." + DATA_KEY$1;
	  var DATA_API_KEY$1 = '.data-api';
	  var JQUERY_NO_CONFLICT$1 = $__default['default'].fn[NAME$1];
	  var CLASS_NAME_ACTIVE = 'active';
	  var CLASS_NAME_BUTTON = 'btn';
	  var CLASS_NAME_FOCUS = 'focus';
	  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
	  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
	  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
	  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
	  var SELECTOR_INPUT = 'input:not([type="hidden"])';
	  var SELECTOR_ACTIVE = '.active';
	  var SELECTOR_BUTTON = '.btn';
	  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
	  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
	  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Button = /*#__PURE__*/function () {
	    function Button(element) {
	      this._element = element;
	      this.shouldAvoidTriggerChange = false;
	    } // Getters


	    var _proto = Button.prototype;

	    // Public
	    _proto.toggle = function toggle() {
	      var triggerChangeEvent = true;
	      var addAriaPressed = true;
	      var rootElement = $__default['default'](this._element).closest(SELECTOR_DATA_TOGGLES)[0];

	      if (rootElement) {
	        var input = this._element.querySelector(SELECTOR_INPUT);

	        if (input) {
	          if (input.type === 'radio') {
	            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
	              triggerChangeEvent = false;
	            } else {
	              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

	              if (activeElement) {
	                $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE);
	              }
	            }
	          }

	          if (triggerChangeEvent) {
	            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
	            if (input.type === 'checkbox' || input.type === 'radio') {
	              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
	            }

	            if (!this.shouldAvoidTriggerChange) {
	              $__default['default'](input).trigger('change');
	            }
	          }

	          input.focus();
	          addAriaPressed = false;
	        }
	      }

	      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
	        if (addAriaPressed) {
	          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
	        }

	        if (triggerChangeEvent) {
	          $__default['default'](this._element).toggleClass(CLASS_NAME_ACTIVE);
	        }
	      }
	    };

	    _proto.dispose = function dispose() {
	      $__default['default'].removeData(this._element, DATA_KEY$1);
	      this._element = null;
	    } // Static
	    ;

	    Button._jQueryInterface = function _jQueryInterface(config, avoidTriggerChange) {
	      return this.each(function () {
	        var $element = $__default['default'](this);
	        var data = $element.data(DATA_KEY$1);

	        if (!data) {
	          data = new Button(this);
	          $element.data(DATA_KEY$1, data);
	        }

	        data.shouldAvoidTriggerChange = avoidTriggerChange;

	        if (config === 'toggle') {
	          data[config]();
	        }
	      });
	    };

	    _createClass(Button, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$1;
	      }
	    }]);

	    return Button;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
	    var button = event.target;
	    var initialButton = button;

	    if (!$__default['default'](button).hasClass(CLASS_NAME_BUTTON)) {
	      button = $__default['default'](button).closest(SELECTOR_BUTTON)[0];
	    }

	    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
	      event.preventDefault(); // work around Firefox bug #1540995
	    } else {
	      var inputBtn = button.querySelector(SELECTOR_INPUT);

	      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
	        event.preventDefault(); // work around Firefox bug #1540995

	        return;
	      }

	      if (initialButton.tagName === 'INPUT' || button.tagName !== 'LABEL') {
	        Button._jQueryInterface.call($__default['default'](button), 'toggle', initialButton.tagName === 'INPUT');
	      }
	    }
	  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
	    var button = $__default['default'](event.target).closest(SELECTOR_BUTTON)[0];
	    $__default['default'](button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
	  });
	  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
	    // ensure correct active class is set to match the controls' actual values/states
	    // find all checkboxes/readio buttons inside data-toggle groups
	    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

	    for (var i = 0, len = buttons.length; i < len; i++) {
	      var button = buttons[i];
	      var input = button.querySelector(SELECTOR_INPUT);

	      if (input.checked || input.hasAttribute('checked')) {
	        button.classList.add(CLASS_NAME_ACTIVE);
	      } else {
	        button.classList.remove(CLASS_NAME_ACTIVE);
	      }
	    } // find all button toggles


	    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

	    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
	      var _button = buttons[_i];

	      if (_button.getAttribute('aria-pressed') === 'true') {
	        _button.classList.add(CLASS_NAME_ACTIVE);
	      } else {
	        _button.classList.remove(CLASS_NAME_ACTIVE);
	      }
	    }
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME$1] = Button._jQueryInterface;
	  $__default['default'].fn[NAME$1].Constructor = Button;

	  $__default['default'].fn[NAME$1].noConflict = function () {
	    $__default['default'].fn[NAME$1] = JQUERY_NO_CONFLICT$1;
	    return Button._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$2 = 'carousel';
	  var VERSION$2 = '4.6.0';
	  var DATA_KEY$2 = 'bs.carousel';
	  var EVENT_KEY$2 = "." + DATA_KEY$2;
	  var DATA_API_KEY$2 = '.data-api';
	  var JQUERY_NO_CONFLICT$2 = $__default['default'].fn[NAME$2];
	  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

	  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

	  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

	  var SWIPE_THRESHOLD = 40;
	  var Default = {
	    interval: 5000,
	    keyboard: true,
	    slide: false,
	    pause: 'hover',
	    wrap: true,
	    touch: true
	  };
	  var DefaultType = {
	    interval: '(number|boolean)',
	    keyboard: 'boolean',
	    slide: '(boolean|string)',
	    pause: '(string|boolean)',
	    wrap: 'boolean',
	    touch: 'boolean'
	  };
	  var DIRECTION_NEXT = 'next';
	  var DIRECTION_PREV = 'prev';
	  var DIRECTION_LEFT = 'left';
	  var DIRECTION_RIGHT = 'right';
	  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
	  var EVENT_SLID = "slid" + EVENT_KEY$2;
	  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
	  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
	  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
	  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
	  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
	  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
	  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
	  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
	  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
	  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
	  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
	  var CLASS_NAME_CAROUSEL = 'carousel';
	  var CLASS_NAME_ACTIVE$1 = 'active';
	  var CLASS_NAME_SLIDE = 'slide';
	  var CLASS_NAME_RIGHT = 'carousel-item-right';
	  var CLASS_NAME_LEFT = 'carousel-item-left';
	  var CLASS_NAME_NEXT = 'carousel-item-next';
	  var CLASS_NAME_PREV = 'carousel-item-prev';
	  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
	  var SELECTOR_ACTIVE$1 = '.active';
	  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
	  var SELECTOR_ITEM = '.carousel-item';
	  var SELECTOR_ITEM_IMG = '.carousel-item img';
	  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
	  var SELECTOR_INDICATORS = '.carousel-indicators';
	  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
	  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
	  var PointerType = {
	    TOUCH: 'touch',
	    PEN: 'pen'
	  };
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Carousel = /*#__PURE__*/function () {
	    function Carousel(element, config) {
	      this._items = null;
	      this._interval = null;
	      this._activeElement = null;
	      this._isPaused = false;
	      this._isSliding = false;
	      this.touchTimeout = null;
	      this.touchStartX = 0;
	      this.touchDeltaX = 0;
	      this._config = this._getConfig(config);
	      this._element = element;
	      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
	      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
	      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

	      this._addEventListeners();
	    } // Getters


	    var _proto = Carousel.prototype;

	    // Public
	    _proto.next = function next() {
	      if (!this._isSliding) {
	        this._slide(DIRECTION_NEXT);
	      }
	    };

	    _proto.nextWhenVisible = function nextWhenVisible() {
	      var $element = $__default['default'](this._element); // Don't call next when the page isn't visible
	      // or the carousel or its parent isn't visible

	      if (!document.hidden && $element.is(':visible') && $element.css('visibility') !== 'hidden') {
	        this.next();
	      }
	    };

	    _proto.prev = function prev() {
	      if (!this._isSliding) {
	        this._slide(DIRECTION_PREV);
	      }
	    };

	    _proto.pause = function pause(event) {
	      if (!event) {
	        this._isPaused = true;
	      }

	      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
	        Util.triggerTransitionEnd(this._element);
	        this.cycle(true);
	      }

	      clearInterval(this._interval);
	      this._interval = null;
	    };

	    _proto.cycle = function cycle(event) {
	      if (!event) {
	        this._isPaused = false;
	      }

	      if (this._interval) {
	        clearInterval(this._interval);
	        this._interval = null;
	      }

	      if (this._config.interval && !this._isPaused) {
	        this._updateInterval();

	        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
	      }
	    };

	    _proto.to = function to(index) {
	      var _this = this;

	      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

	      var activeIndex = this._getItemIndex(this._activeElement);

	      if (index > this._items.length - 1 || index < 0) {
	        return;
	      }

	      if (this._isSliding) {
	        $__default['default'](this._element).one(EVENT_SLID, function () {
	          return _this.to(index);
	        });
	        return;
	      }

	      if (activeIndex === index) {
	        this.pause();
	        this.cycle();
	        return;
	      }

	      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

	      this._slide(direction, this._items[index]);
	    };

	    _proto.dispose = function dispose() {
	      $__default['default'](this._element).off(EVENT_KEY$2);
	      $__default['default'].removeData(this._element, DATA_KEY$2);
	      this._items = null;
	      this._config = null;
	      this._element = null;
	      this._interval = null;
	      this._isPaused = null;
	      this._isSliding = null;
	      this._activeElement = null;
	      this._indicatorsElement = null;
	    } // Private
	    ;

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default, config);
	      Util.typeCheckConfig(NAME$2, config, DefaultType);
	      return config;
	    };

	    _proto._handleSwipe = function _handleSwipe() {
	      var absDeltax = Math.abs(this.touchDeltaX);

	      if (absDeltax <= SWIPE_THRESHOLD) {
	        return;
	      }

	      var direction = absDeltax / this.touchDeltaX;
	      this.touchDeltaX = 0; // swipe left

	      if (direction > 0) {
	        this.prev();
	      } // swipe right


	      if (direction < 0) {
	        this.next();
	      }
	    };

	    _proto._addEventListeners = function _addEventListeners() {
	      var _this2 = this;

	      if (this._config.keyboard) {
	        $__default['default'](this._element).on(EVENT_KEYDOWN, function (event) {
	          return _this2._keydown(event);
	        });
	      }

	      if (this._config.pause === 'hover') {
	        $__default['default'](this._element).on(EVENT_MOUSEENTER, function (event) {
	          return _this2.pause(event);
	        }).on(EVENT_MOUSELEAVE, function (event) {
	          return _this2.cycle(event);
	        });
	      }

	      if (this._config.touch) {
	        this._addTouchEventListeners();
	      }
	    };

	    _proto._addTouchEventListeners = function _addTouchEventListeners() {
	      var _this3 = this;

	      if (!this._touchSupported) {
	        return;
	      }

	      var start = function start(event) {
	        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
	          _this3.touchStartX = event.originalEvent.clientX;
	        } else if (!_this3._pointerEvent) {
	          _this3.touchStartX = event.originalEvent.touches[0].clientX;
	        }
	      };

	      var move = function move(event) {
	        // ensure swiping with one touch and not pinching
	        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
	          _this3.touchDeltaX = 0;
	        } else {
	          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
	        }
	      };

	      var end = function end(event) {
	        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
	          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
	        }

	        _this3._handleSwipe();

	        if (_this3._config.pause === 'hover') {
	          // If it's a touch-enabled device, mouseenter/leave are fired as
	          // part of the mouse compatibility events on first tap - the carousel
	          // would stop cycling until user tapped out of it;
	          // here, we listen for touchend, explicitly pause the carousel
	          // (as if it's the second time we tap on it, mouseenter compat event
	          // is NOT fired) and after a timeout (to allow for mouse compatibility
	          // events to fire) we explicitly restart cycling
	          _this3.pause();

	          if (_this3.touchTimeout) {
	            clearTimeout(_this3.touchTimeout);
	          }

	          _this3.touchTimeout = setTimeout(function (event) {
	            return _this3.cycle(event);
	          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
	        }
	      };

	      $__default['default'](this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
	        return e.preventDefault();
	      });

	      if (this._pointerEvent) {
	        $__default['default'](this._element).on(EVENT_POINTERDOWN, function (event) {
	          return start(event);
	        });
	        $__default['default'](this._element).on(EVENT_POINTERUP, function (event) {
	          return end(event);
	        });

	        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
	      } else {
	        $__default['default'](this._element).on(EVENT_TOUCHSTART, function (event) {
	          return start(event);
	        });
	        $__default['default'](this._element).on(EVENT_TOUCHMOVE, function (event) {
	          return move(event);
	        });
	        $__default['default'](this._element).on(EVENT_TOUCHEND, function (event) {
	          return end(event);
	        });
	      }
	    };

	    _proto._keydown = function _keydown(event) {
	      if (/input|textarea/i.test(event.target.tagName)) {
	        return;
	      }

	      switch (event.which) {
	        case ARROW_LEFT_KEYCODE:
	          event.preventDefault();
	          this.prev();
	          break;

	        case ARROW_RIGHT_KEYCODE:
	          event.preventDefault();
	          this.next();
	          break;
	      }
	    };

	    _proto._getItemIndex = function _getItemIndex(element) {
	      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
	      return this._items.indexOf(element);
	    };

	    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
	      var isNextDirection = direction === DIRECTION_NEXT;
	      var isPrevDirection = direction === DIRECTION_PREV;

	      var activeIndex = this._getItemIndex(activeElement);

	      var lastItemIndex = this._items.length - 1;
	      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

	      if (isGoingToWrap && !this._config.wrap) {
	        return activeElement;
	      }

	      var delta = direction === DIRECTION_PREV ? -1 : 1;
	      var itemIndex = (activeIndex + delta) % this._items.length;
	      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
	    };

	    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
	      var targetIndex = this._getItemIndex(relatedTarget);

	      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

	      var slideEvent = $__default['default'].Event(EVENT_SLIDE, {
	        relatedTarget: relatedTarget,
	        direction: eventDirectionName,
	        from: fromIndex,
	        to: targetIndex
	      });
	      $__default['default'](this._element).trigger(slideEvent);
	      return slideEvent;
	    };

	    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
	      if (this._indicatorsElement) {
	        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
	        $__default['default'](indicators).removeClass(CLASS_NAME_ACTIVE$1);

	        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

	        if (nextIndicator) {
	          $__default['default'](nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
	        }
	      }
	    };

	    _proto._updateInterval = function _updateInterval() {
	      var element = this._activeElement || this._element.querySelector(SELECTOR_ACTIVE_ITEM);

	      if (!element) {
	        return;
	      }

	      var elementInterval = parseInt(element.getAttribute('data-interval'), 10);

	      if (elementInterval) {
	        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
	        this._config.interval = elementInterval;
	      } else {
	        this._config.interval = this._config.defaultInterval || this._config.interval;
	      }
	    };

	    _proto._slide = function _slide(direction, element) {
	      var _this4 = this;

	      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

	      var activeElementIndex = this._getItemIndex(activeElement);

	      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

	      var nextElementIndex = this._getItemIndex(nextElement);

	      var isCycling = Boolean(this._interval);
	      var directionalClassName;
	      var orderClassName;
	      var eventDirectionName;

	      if (direction === DIRECTION_NEXT) {
	        directionalClassName = CLASS_NAME_LEFT;
	        orderClassName = CLASS_NAME_NEXT;
	        eventDirectionName = DIRECTION_LEFT;
	      } else {
	        directionalClassName = CLASS_NAME_RIGHT;
	        orderClassName = CLASS_NAME_PREV;
	        eventDirectionName = DIRECTION_RIGHT;
	      }

	      if (nextElement && $__default['default'](nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
	        this._isSliding = false;
	        return;
	      }

	      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

	      if (slideEvent.isDefaultPrevented()) {
	        return;
	      }

	      if (!activeElement || !nextElement) {
	        // Some weirdness is happening, so we bail
	        return;
	      }

	      this._isSliding = true;

	      if (isCycling) {
	        this.pause();
	      }

	      this._setActiveIndicatorElement(nextElement);

	      this._activeElement = nextElement;
	      var slidEvent = $__default['default'].Event(EVENT_SLID, {
	        relatedTarget: nextElement,
	        direction: eventDirectionName,
	        from: activeElementIndex,
	        to: nextElementIndex
	      });

	      if ($__default['default'](this._element).hasClass(CLASS_NAME_SLIDE)) {
	        $__default['default'](nextElement).addClass(orderClassName);
	        Util.reflow(nextElement);
	        $__default['default'](activeElement).addClass(directionalClassName);
	        $__default['default'](nextElement).addClass(directionalClassName);
	        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
	        $__default['default'](activeElement).one(Util.TRANSITION_END, function () {
	          $__default['default'](nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
	          $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
	          _this4._isSliding = false;
	          setTimeout(function () {
	            return $__default['default'](_this4._element).trigger(slidEvent);
	          }, 0);
	        }).emulateTransitionEnd(transitionDuration);
	      } else {
	        $__default['default'](activeElement).removeClass(CLASS_NAME_ACTIVE$1);
	        $__default['default'](nextElement).addClass(CLASS_NAME_ACTIVE$1);
	        this._isSliding = false;
	        $__default['default'](this._element).trigger(slidEvent);
	      }

	      if (isCycling) {
	        this.cycle();
	      }
	    } // Static
	    ;

	    Carousel._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $__default['default'](this).data(DATA_KEY$2);

	        var _config = _extends({}, Default, $__default['default'](this).data());

	        if (typeof config === 'object') {
	          _config = _extends({}, _config, config);
	        }

	        var action = typeof config === 'string' ? config : _config.slide;

	        if (!data) {
	          data = new Carousel(this, _config);
	          $__default['default'](this).data(DATA_KEY$2, data);
	        }

	        if (typeof config === 'number') {
	          data.to(config);
	        } else if (typeof action === 'string') {
	          if (typeof data[action] === 'undefined') {
	            throw new TypeError("No method named \"" + action + "\"");
	          }

	          data[action]();
	        } else if (_config.interval && _config.ride) {
	          data.pause();
	          data.cycle();
	        }
	      });
	    };

	    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
	      var selector = Util.getSelectorFromElement(this);

	      if (!selector) {
	        return;
	      }

	      var target = $__default['default'](selector)[0];

	      if (!target || !$__default['default'](target).hasClass(CLASS_NAME_CAROUSEL)) {
	        return;
	      }

	      var config = _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

	      var slideIndex = this.getAttribute('data-slide-to');

	      if (slideIndex) {
	        config.interval = false;
	      }

	      Carousel._jQueryInterface.call($__default['default'](target), config);

	      if (slideIndex) {
	        $__default['default'](target).data(DATA_KEY$2).to(slideIndex);
	      }

	      event.preventDefault();
	    };

	    _createClass(Carousel, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$2;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default;
	      }
	    }]);

	    return Carousel;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
	  $__default['default'](window).on(EVENT_LOAD_DATA_API$1, function () {
	    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

	    for (var i = 0, len = carousels.length; i < len; i++) {
	      var $carousel = $__default['default'](carousels[i]);

	      Carousel._jQueryInterface.call($carousel, $carousel.data());
	    }
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME$2] = Carousel._jQueryInterface;
	  $__default['default'].fn[NAME$2].Constructor = Carousel;

	  $__default['default'].fn[NAME$2].noConflict = function () {
	    $__default['default'].fn[NAME$2] = JQUERY_NO_CONFLICT$2;
	    return Carousel._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$3 = 'collapse';
	  var VERSION$3 = '4.6.0';
	  var DATA_KEY$3 = 'bs.collapse';
	  var EVENT_KEY$3 = "." + DATA_KEY$3;
	  var DATA_API_KEY$3 = '.data-api';
	  var JQUERY_NO_CONFLICT$3 = $__default['default'].fn[NAME$3];
	  var Default$1 = {
	    toggle: true,
	    parent: ''
	  };
	  var DefaultType$1 = {
	    toggle: 'boolean',
	    parent: '(string|element)'
	  };
	  var EVENT_SHOW = "show" + EVENT_KEY$3;
	  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
	  var EVENT_HIDE = "hide" + EVENT_KEY$3;
	  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
	  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
	  var CLASS_NAME_SHOW$1 = 'show';
	  var CLASS_NAME_COLLAPSE = 'collapse';
	  var CLASS_NAME_COLLAPSING = 'collapsing';
	  var CLASS_NAME_COLLAPSED = 'collapsed';
	  var DIMENSION_WIDTH = 'width';
	  var DIMENSION_HEIGHT = 'height';
	  var SELECTOR_ACTIVES = '.show, .collapsing';
	  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Collapse = /*#__PURE__*/function () {
	    function Collapse(element, config) {
	      this._isTransitioning = false;
	      this._element = element;
	      this._config = this._getConfig(config);
	      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
	      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

	      for (var i = 0, len = toggleList.length; i < len; i++) {
	        var elem = toggleList[i];
	        var selector = Util.getSelectorFromElement(elem);
	        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
	          return foundElem === element;
	        });

	        if (selector !== null && filterElement.length > 0) {
	          this._selector = selector;

	          this._triggerArray.push(elem);
	        }
	      }

	      this._parent = this._config.parent ? this._getParent() : null;

	      if (!this._config.parent) {
	        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
	      }

	      if (this._config.toggle) {
	        this.toggle();
	      }
	    } // Getters


	    var _proto = Collapse.prototype;

	    // Public
	    _proto.toggle = function toggle() {
	      if ($__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    };

	    _proto.show = function show() {
	      var _this = this;

	      if (this._isTransitioning || $__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
	        return;
	      }

	      var actives;
	      var activesData;

	      if (this._parent) {
	        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
	          if (typeof _this._config.parent === 'string') {
	            return elem.getAttribute('data-parent') === _this._config.parent;
	          }

	          return elem.classList.contains(CLASS_NAME_COLLAPSE);
	        });

	        if (actives.length === 0) {
	          actives = null;
	        }
	      }

	      if (actives) {
	        activesData = $__default['default'](actives).not(this._selector).data(DATA_KEY$3);

	        if (activesData && activesData._isTransitioning) {
	          return;
	        }
	      }

	      var startEvent = $__default['default'].Event(EVENT_SHOW);
	      $__default['default'](this._element).trigger(startEvent);

	      if (startEvent.isDefaultPrevented()) {
	        return;
	      }

	      if (actives) {
	        Collapse._jQueryInterface.call($__default['default'](actives).not(this._selector), 'hide');

	        if (!activesData) {
	          $__default['default'](actives).data(DATA_KEY$3, null);
	        }
	      }

	      var dimension = this._getDimension();

	      $__default['default'](this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
	      this._element.style[dimension] = 0;

	      if (this._triggerArray.length) {
	        $__default['default'](this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
	      }

	      this.setTransitioning(true);

	      var complete = function complete() {
	        $__default['default'](_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
	        _this._element.style[dimension] = '';

	        _this.setTransitioning(false);

	        $__default['default'](_this._element).trigger(EVENT_SHOWN);
	      };

	      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
	      var scrollSize = "scroll" + capitalizedDimension;
	      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
	      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
	      this._element.style[dimension] = this._element[scrollSize] + "px";
	    };

	    _proto.hide = function hide() {
	      var _this2 = this;

	      if (this._isTransitioning || !$__default['default'](this._element).hasClass(CLASS_NAME_SHOW$1)) {
	        return;
	      }

	      var startEvent = $__default['default'].Event(EVENT_HIDE);
	      $__default['default'](this._element).trigger(startEvent);

	      if (startEvent.isDefaultPrevented()) {
	        return;
	      }

	      var dimension = this._getDimension();

	      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
	      Util.reflow(this._element);
	      $__default['default'](this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
	      var triggerArrayLength = this._triggerArray.length;

	      if (triggerArrayLength > 0) {
	        for (var i = 0; i < triggerArrayLength; i++) {
	          var trigger = this._triggerArray[i];
	          var selector = Util.getSelectorFromElement(trigger);

	          if (selector !== null) {
	            var $elem = $__default['default']([].slice.call(document.querySelectorAll(selector)));

	            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
	              $__default['default'](trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
	            }
	          }
	        }
	      }

	      this.setTransitioning(true);

	      var complete = function complete() {
	        _this2.setTransitioning(false);

	        $__default['default'](_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
	      };

	      this._element.style[dimension] = '';
	      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
	      $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
	    };

	    _proto.setTransitioning = function setTransitioning(isTransitioning) {
	      this._isTransitioning = isTransitioning;
	    };

	    _proto.dispose = function dispose() {
	      $__default['default'].removeData(this._element, DATA_KEY$3);
	      this._config = null;
	      this._parent = null;
	      this._element = null;
	      this._triggerArray = null;
	      this._isTransitioning = null;
	    } // Private
	    ;

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default$1, config);
	      config.toggle = Boolean(config.toggle); // Coerce string values

	      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
	      return config;
	    };

	    _proto._getDimension = function _getDimension() {
	      var hasWidth = $__default['default'](this._element).hasClass(DIMENSION_WIDTH);
	      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
	    };

	    _proto._getParent = function _getParent() {
	      var _this3 = this;

	      var parent;

	      if (Util.isElement(this._config.parent)) {
	        parent = this._config.parent; // It's a jQuery object

	        if (typeof this._config.parent.jquery !== 'undefined') {
	          parent = this._config.parent[0];
	        }
	      } else {
	        parent = document.querySelector(this._config.parent);
	      }

	      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
	      var children = [].slice.call(parent.querySelectorAll(selector));
	      $__default['default'](children).each(function (i, element) {
	        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
	      });
	      return parent;
	    };

	    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
	      var isOpen = $__default['default'](element).hasClass(CLASS_NAME_SHOW$1);

	      if (triggerArray.length) {
	        $__default['default'](triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
	      }
	    } // Static
	    ;

	    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
	      var selector = Util.getSelectorFromElement(element);
	      return selector ? document.querySelector(selector) : null;
	    };

	    Collapse._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $element = $__default['default'](this);
	        var data = $element.data(DATA_KEY$3);

	        var _config = _extends({}, Default$1, $element.data(), typeof config === 'object' && config ? config : {});

	        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
	          _config.toggle = false;
	        }

	        if (!data) {
	          data = new Collapse(this, _config);
	          $element.data(DATA_KEY$3, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Collapse, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$3;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default$1;
	      }
	    }]);

	    return Collapse;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
	    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
	    if (event.currentTarget.tagName === 'A') {
	      event.preventDefault();
	    }

	    var $trigger = $__default['default'](this);
	    var selector = Util.getSelectorFromElement(this);
	    var selectors = [].slice.call(document.querySelectorAll(selector));
	    $__default['default'](selectors).each(function () {
	      var $target = $__default['default'](this);
	      var data = $target.data(DATA_KEY$3);
	      var config = data ? 'toggle' : $trigger.data();

	      Collapse._jQueryInterface.call($target, config);
	    });
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME$3] = Collapse._jQueryInterface;
	  $__default['default'].fn[NAME$3].Constructor = Collapse;

	  $__default['default'].fn[NAME$3].noConflict = function () {
	    $__default['default'].fn[NAME$3] = JQUERY_NO_CONFLICT$3;
	    return Collapse._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$4 = 'dropdown';
	  var VERSION$4 = '4.6.0';
	  var DATA_KEY$4 = 'bs.dropdown';
	  var EVENT_KEY$4 = "." + DATA_KEY$4;
	  var DATA_API_KEY$4 = '.data-api';
	  var JQUERY_NO_CONFLICT$4 = $__default['default'].fn[NAME$4];
	  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

	  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

	  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

	  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

	  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

	  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

	  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
	  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
	  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
	  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
	  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
	  var EVENT_CLICK = "click" + EVENT_KEY$4;
	  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
	  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
	  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
	  var CLASS_NAME_DISABLED = 'disabled';
	  var CLASS_NAME_SHOW$2 = 'show';
	  var CLASS_NAME_DROPUP = 'dropup';
	  var CLASS_NAME_DROPRIGHT = 'dropright';
	  var CLASS_NAME_DROPLEFT = 'dropleft';
	  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
	  var CLASS_NAME_POSITION_STATIC = 'position-static';
	  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
	  var SELECTOR_FORM_CHILD = '.dropdown form';
	  var SELECTOR_MENU = '.dropdown-menu';
	  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
	  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
	  var PLACEMENT_TOP = 'top-start';
	  var PLACEMENT_TOPEND = 'top-end';
	  var PLACEMENT_BOTTOM = 'bottom-start';
	  var PLACEMENT_BOTTOMEND = 'bottom-end';
	  var PLACEMENT_RIGHT = 'right-start';
	  var PLACEMENT_LEFT = 'left-start';
	  var Default$2 = {
	    offset: 0,
	    flip: true,
	    boundary: 'scrollParent',
	    reference: 'toggle',
	    display: 'dynamic',
	    popperConfig: null
	  };
	  var DefaultType$2 = {
	    offset: '(number|string|function)',
	    flip: 'boolean',
	    boundary: '(string|element)',
	    reference: '(string|element)',
	    display: 'string',
	    popperConfig: '(null|object)'
	  };
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Dropdown = /*#__PURE__*/function () {
	    function Dropdown(element, config) {
	      this._element = element;
	      this._popper = null;
	      this._config = this._getConfig(config);
	      this._menu = this._getMenuElement();
	      this._inNavbar = this._detectNavbar();

	      this._addEventListeners();
	    } // Getters


	    var _proto = Dropdown.prototype;

	    // Public
	    _proto.toggle = function toggle() {
	      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED)) {
	        return;
	      }

	      var isActive = $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2);

	      Dropdown._clearMenus();

	      if (isActive) {
	        return;
	      }

	      this.show(true);
	    };

	    _proto.show = function show(usePopper) {
	      if (usePopper === void 0) {
	        usePopper = false;
	      }

	      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || $__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
	        return;
	      }

	      var relatedTarget = {
	        relatedTarget: this._element
	      };
	      var showEvent = $__default['default'].Event(EVENT_SHOW$1, relatedTarget);

	      var parent = Dropdown._getParentFromElement(this._element);

	      $__default['default'](parent).trigger(showEvent);

	      if (showEvent.isDefaultPrevented()) {
	        return;
	      } // Totally disable Popper for Dropdowns in Navbar


	      if (!this._inNavbar && usePopper) {
	        /**
	         * Check for Popper dependency
	         * Popper - https://popper.js.org
	         */
	        if (typeof Popper__default['default'] === 'undefined') {
	          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
	        }

	        var referenceElement = this._element;

	        if (this._config.reference === 'parent') {
	          referenceElement = parent;
	        } else if (Util.isElement(this._config.reference)) {
	          referenceElement = this._config.reference; // Check if it's jQuery element

	          if (typeof this._config.reference.jquery !== 'undefined') {
	            referenceElement = this._config.reference[0];
	          }
	        } // If boundary is not `scrollParent`, then set position to `static`
	        // to allow the menu to "escape" the scroll parent's boundaries
	        // https://github.com/twbs/bootstrap/issues/24251


	        if (this._config.boundary !== 'scrollParent') {
	          $__default['default'](parent).addClass(CLASS_NAME_POSITION_STATIC);
	        }

	        this._popper = new Popper__default['default'](referenceElement, this._menu, this._getPopperConfig());
	      } // If this is a touch-enabled device we add extra
	      // empty mouseover listeners to the body's immediate children;
	      // only needed because of broken event delegation on iOS
	      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


	      if ('ontouchstart' in document.documentElement && $__default['default'](parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
	        $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
	      }

	      this._element.focus();

	      this._element.setAttribute('aria-expanded', true);

	      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
	      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_SHOWN$1, relatedTarget));
	    };

	    _proto.hide = function hide() {
	      if (this._element.disabled || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED) || !$__default['default'](this._menu).hasClass(CLASS_NAME_SHOW$2)) {
	        return;
	      }

	      var relatedTarget = {
	        relatedTarget: this._element
	      };
	      var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);

	      var parent = Dropdown._getParentFromElement(this._element);

	      $__default['default'](parent).trigger(hideEvent);

	      if (hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      if (this._popper) {
	        this._popper.destroy();
	      }

	      $__default['default'](this._menu).toggleClass(CLASS_NAME_SHOW$2);
	      $__default['default'](parent).toggleClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
	    };

	    _proto.dispose = function dispose() {
	      $__default['default'].removeData(this._element, DATA_KEY$4);
	      $__default['default'](this._element).off(EVENT_KEY$4);
	      this._element = null;
	      this._menu = null;

	      if (this._popper !== null) {
	        this._popper.destroy();

	        this._popper = null;
	      }
	    };

	    _proto.update = function update() {
	      this._inNavbar = this._detectNavbar();

	      if (this._popper !== null) {
	        this._popper.scheduleUpdate();
	      }
	    } // Private
	    ;

	    _proto._addEventListeners = function _addEventListeners() {
	      var _this = this;

	      $__default['default'](this._element).on(EVENT_CLICK, function (event) {
	        event.preventDefault();
	        event.stopPropagation();

	        _this.toggle();
	      });
	    };

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
	      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
	      return config;
	    };

	    _proto._getMenuElement = function _getMenuElement() {
	      if (!this._menu) {
	        var parent = Dropdown._getParentFromElement(this._element);

	        if (parent) {
	          this._menu = parent.querySelector(SELECTOR_MENU);
	        }
	      }

	      return this._menu;
	    };

	    _proto._getPlacement = function _getPlacement() {
	      var $parentDropdown = $__default['default'](this._element.parentNode);
	      var placement = PLACEMENT_BOTTOM; // Handle dropup

	      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
	        placement = $__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
	      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
	        placement = PLACEMENT_RIGHT;
	      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
	        placement = PLACEMENT_LEFT;
	      } else if ($__default['default'](this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
	        placement = PLACEMENT_BOTTOMEND;
	      }

	      return placement;
	    };

	    _proto._detectNavbar = function _detectNavbar() {
	      return $__default['default'](this._element).closest('.navbar').length > 0;
	    };

	    _proto._getOffset = function _getOffset() {
	      var _this2 = this;

	      var offset = {};

	      if (typeof this._config.offset === 'function') {
	        offset.fn = function (data) {
	          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
	          return data;
	        };
	      } else {
	        offset.offset = this._config.offset;
	      }

	      return offset;
	    };

	    _proto._getPopperConfig = function _getPopperConfig() {
	      var popperConfig = {
	        placement: this._getPlacement(),
	        modifiers: {
	          offset: this._getOffset(),
	          flip: {
	            enabled: this._config.flip
	          },
	          preventOverflow: {
	            boundariesElement: this._config.boundary
	          }
	        }
	      }; // Disable Popper if we have a static display

	      if (this._config.display === 'static') {
	        popperConfig.modifiers.applyStyle = {
	          enabled: false
	        };
	      }

	      return _extends({}, popperConfig, this._config.popperConfig);
	    } // Static
	    ;

	    Dropdown._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $__default['default'](this).data(DATA_KEY$4);

	        var _config = typeof config === 'object' ? config : null;

	        if (!data) {
	          data = new Dropdown(this, _config);
	          $__default['default'](this).data(DATA_KEY$4, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    Dropdown._clearMenus = function _clearMenus(event) {
	      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
	        return;
	      }

	      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

	      for (var i = 0, len = toggles.length; i < len; i++) {
	        var parent = Dropdown._getParentFromElement(toggles[i]);

	        var context = $__default['default'](toggles[i]).data(DATA_KEY$4);
	        var relatedTarget = {
	          relatedTarget: toggles[i]
	        };

	        if (event && event.type === 'click') {
	          relatedTarget.clickEvent = event;
	        }

	        if (!context) {
	          continue;
	        }

	        var dropdownMenu = context._menu;

	        if (!$__default['default'](parent).hasClass(CLASS_NAME_SHOW$2)) {
	          continue;
	        }

	        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default['default'].contains(parent, event.target)) {
	          continue;
	        }

	        var hideEvent = $__default['default'].Event(EVENT_HIDE$1, relatedTarget);
	        $__default['default'](parent).trigger(hideEvent);

	        if (hideEvent.isDefaultPrevented()) {
	          continue;
	        } // If this is a touch-enabled device we remove the extra
	        // empty mouseover listeners we added for iOS support


	        if ('ontouchstart' in document.documentElement) {
	          $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
	        }

	        toggles[i].setAttribute('aria-expanded', 'false');

	        if (context._popper) {
	          context._popper.destroy();
	        }

	        $__default['default'](dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
	        $__default['default'](parent).removeClass(CLASS_NAME_SHOW$2).trigger($__default['default'].Event(EVENT_HIDDEN$1, relatedTarget));
	      }
	    };

	    Dropdown._getParentFromElement = function _getParentFromElement(element) {
	      var parent;
	      var selector = Util.getSelectorFromElement(element);

	      if (selector) {
	        parent = document.querySelector(selector);
	      }

	      return parent || element.parentNode;
	    } // eslint-disable-next-line complexity
	    ;

	    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
	      // If not input/textarea:
	      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
	      // If input/textarea:
	      //  - If space key => not a dropdown command
	      //  - If key is other than escape
	      //    - If key is not up or down => not a dropdown command
	      //    - If trigger inside the menu => not a dropdown command
	      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default['default'](event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
	        return;
	      }

	      if (this.disabled || $__default['default'](this).hasClass(CLASS_NAME_DISABLED)) {
	        return;
	      }

	      var parent = Dropdown._getParentFromElement(this);

	      var isActive = $__default['default'](parent).hasClass(CLASS_NAME_SHOW$2);

	      if (!isActive && event.which === ESCAPE_KEYCODE) {
	        return;
	      }

	      event.preventDefault();
	      event.stopPropagation();

	      if (!isActive || event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE) {
	        if (event.which === ESCAPE_KEYCODE) {
	          $__default['default'](parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
	        }

	        $__default['default'](this).trigger('click');
	        return;
	      }

	      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
	        return $__default['default'](item).is(':visible');
	      });

	      if (items.length === 0) {
	        return;
	      }

	      var index = items.indexOf(event.target);

	      if (event.which === ARROW_UP_KEYCODE && index > 0) {
	        // Up
	        index--;
	      }

	      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
	        // Down
	        index++;
	      }

	      if (index < 0) {
	        index = 0;
	      }

	      items[index].focus();
	    };

	    _createClass(Dropdown, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$4;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default$2;
	      }
	    }, {
	      key: "DefaultType",
	      get: function get() {
	        return DefaultType$2;
	      }
	    }]);

	    return Dropdown;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
	    event.preventDefault();
	    event.stopPropagation();

	    Dropdown._jQueryInterface.call($__default['default'](this), 'toggle');
	  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
	    e.stopPropagation();
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME$4] = Dropdown._jQueryInterface;
	  $__default['default'].fn[NAME$4].Constructor = Dropdown;

	  $__default['default'].fn[NAME$4].noConflict = function () {
	    $__default['default'].fn[NAME$4] = JQUERY_NO_CONFLICT$4;
	    return Dropdown._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$5 = 'modal';
	  var VERSION$5 = '4.6.0';
	  var DATA_KEY$5 = 'bs.modal';
	  var EVENT_KEY$5 = "." + DATA_KEY$5;
	  var DATA_API_KEY$5 = '.data-api';
	  var JQUERY_NO_CONFLICT$5 = $__default['default'].fn[NAME$5];
	  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

	  var Default$3 = {
	    backdrop: true,
	    keyboard: true,
	    focus: true,
	    show: true
	  };
	  var DefaultType$3 = {
	    backdrop: '(boolean|string)',
	    keyboard: 'boolean',
	    focus: 'boolean',
	    show: 'boolean'
	  };
	  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
	  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
	  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
	  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
	  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
	  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
	  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
	  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
	  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
	  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
	  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
	  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
	  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
	  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
	  var CLASS_NAME_BACKDROP = 'modal-backdrop';
	  var CLASS_NAME_OPEN = 'modal-open';
	  var CLASS_NAME_FADE$1 = 'fade';
	  var CLASS_NAME_SHOW$3 = 'show';
	  var CLASS_NAME_STATIC = 'modal-static';
	  var SELECTOR_DIALOG = '.modal-dialog';
	  var SELECTOR_MODAL_BODY = '.modal-body';
	  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
	  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
	  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
	  var SELECTOR_STICKY_CONTENT = '.sticky-top';
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Modal = /*#__PURE__*/function () {
	    function Modal(element, config) {
	      this._config = this._getConfig(config);
	      this._element = element;
	      this._dialog = element.querySelector(SELECTOR_DIALOG);
	      this._backdrop = null;
	      this._isShown = false;
	      this._isBodyOverflowing = false;
	      this._ignoreBackdropClick = false;
	      this._isTransitioning = false;
	      this._scrollbarWidth = 0;
	    } // Getters


	    var _proto = Modal.prototype;

	    // Public
	    _proto.toggle = function toggle(relatedTarget) {
	      return this._isShown ? this.hide() : this.show(relatedTarget);
	    };

	    _proto.show = function show(relatedTarget) {
	      var _this = this;

	      if (this._isShown || this._isTransitioning) {
	        return;
	      }

	      if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
	        this._isTransitioning = true;
	      }

	      var showEvent = $__default['default'].Event(EVENT_SHOW$2, {
	        relatedTarget: relatedTarget
	      });
	      $__default['default'](this._element).trigger(showEvent);

	      if (this._isShown || showEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._isShown = true;

	      this._checkScrollbar();

	      this._setScrollbar();

	      this._adjustDialog();

	      this._setEscapeEvent();

	      this._setResizeEvent();

	      $__default['default'](this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
	        return _this.hide(event);
	      });
	      $__default['default'](this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
	        $__default['default'](_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
	          if ($__default['default'](event.target).is(_this._element)) {
	            _this._ignoreBackdropClick = true;
	          }
	        });
	      });

	      this._showBackdrop(function () {
	        return _this._showElement(relatedTarget);
	      });
	    };

	    _proto.hide = function hide(event) {
	      var _this2 = this;

	      if (event) {
	        event.preventDefault();
	      }

	      if (!this._isShown || this._isTransitioning) {
	        return;
	      }

	      var hideEvent = $__default['default'].Event(EVENT_HIDE$2);
	      $__default['default'](this._element).trigger(hideEvent);

	      if (!this._isShown || hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._isShown = false;
	      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);

	      if (transition) {
	        this._isTransitioning = true;
	      }

	      this._setEscapeEvent();

	      this._setResizeEvent();

	      $__default['default'](document).off(EVENT_FOCUSIN);
	      $__default['default'](this._element).removeClass(CLASS_NAME_SHOW$3);
	      $__default['default'](this._element).off(EVENT_CLICK_DISMISS);
	      $__default['default'](this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

	      if (transition) {
	        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
	        $__default['default'](this._element).one(Util.TRANSITION_END, function (event) {
	          return _this2._hideModal(event);
	        }).emulateTransitionEnd(transitionDuration);
	      } else {
	        this._hideModal();
	      }
	    };

	    _proto.dispose = function dispose() {
	      [window, this._element, this._dialog].forEach(function (htmlElement) {
	        return $__default['default'](htmlElement).off(EVENT_KEY$5);
	      });
	      /**
	       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
	       * Do not move `document` in `htmlElements` array
	       * It will remove `EVENT_CLICK_DATA_API` event that should remain
	       */

	      $__default['default'](document).off(EVENT_FOCUSIN);
	      $__default['default'].removeData(this._element, DATA_KEY$5);
	      this._config = null;
	      this._element = null;
	      this._dialog = null;
	      this._backdrop = null;
	      this._isShown = null;
	      this._isBodyOverflowing = null;
	      this._ignoreBackdropClick = null;
	      this._isTransitioning = null;
	      this._scrollbarWidth = null;
	    };

	    _proto.handleUpdate = function handleUpdate() {
	      this._adjustDialog();
	    } // Private
	    ;

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default$3, config);
	      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
	      return config;
	    };

	    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
	      var _this3 = this;

	      var hideEventPrevented = $__default['default'].Event(EVENT_HIDE_PREVENTED);
	      $__default['default'](this._element).trigger(hideEventPrevented);

	      if (hideEventPrevented.isDefaultPrevented()) {
	        return;
	      }

	      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

	      if (!isModalOverflowing) {
	        this._element.style.overflowY = 'hidden';
	      }

	      this._element.classList.add(CLASS_NAME_STATIC);

	      var modalTransitionDuration = Util.getTransitionDurationFromElement(this._dialog);
	      $__default['default'](this._element).off(Util.TRANSITION_END);
	      $__default['default'](this._element).one(Util.TRANSITION_END, function () {
	        _this3._element.classList.remove(CLASS_NAME_STATIC);

	        if (!isModalOverflowing) {
	          $__default['default'](_this3._element).one(Util.TRANSITION_END, function () {
	            _this3._element.style.overflowY = '';
	          }).emulateTransitionEnd(_this3._element, modalTransitionDuration);
	        }
	      }).emulateTransitionEnd(modalTransitionDuration);

	      this._element.focus();
	    };

	    _proto._showElement = function _showElement(relatedTarget) {
	      var _this4 = this;

	      var transition = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1);
	      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

	      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
	        // Don't move modal's DOM position
	        document.body.appendChild(this._element);
	      }

	      this._element.style.display = 'block';

	      this._element.removeAttribute('aria-hidden');

	      this._element.setAttribute('aria-modal', true);

	      this._element.setAttribute('role', 'dialog');

	      if ($__default['default'](this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
	        modalBody.scrollTop = 0;
	      } else {
	        this._element.scrollTop = 0;
	      }

	      if (transition) {
	        Util.reflow(this._element);
	      }

	      $__default['default'](this._element).addClass(CLASS_NAME_SHOW$3);

	      if (this._config.focus) {
	        this._enforceFocus();
	      }

	      var shownEvent = $__default['default'].Event(EVENT_SHOWN$2, {
	        relatedTarget: relatedTarget
	      });

	      var transitionComplete = function transitionComplete() {
	        if (_this4._config.focus) {
	          _this4._element.focus();
	        }

	        _this4._isTransitioning = false;
	        $__default['default'](_this4._element).trigger(shownEvent);
	      };

	      if (transition) {
	        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
	        $__default['default'](this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
	      } else {
	        transitionComplete();
	      }
	    };

	    _proto._enforceFocus = function _enforceFocus() {
	      var _this5 = this;

	      $__default['default'](document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
	      .on(EVENT_FOCUSIN, function (event) {
	        if (document !== event.target && _this5._element !== event.target && $__default['default'](_this5._element).has(event.target).length === 0) {
	          _this5._element.focus();
	        }
	      });
	    };

	    _proto._setEscapeEvent = function _setEscapeEvent() {
	      var _this6 = this;

	      if (this._isShown) {
	        $__default['default'](this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
	          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
	            event.preventDefault();

	            _this6.hide();
	          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
	            _this6._triggerBackdropTransition();
	          }
	        });
	      } else if (!this._isShown) {
	        $__default['default'](this._element).off(EVENT_KEYDOWN_DISMISS);
	      }
	    };

	    _proto._setResizeEvent = function _setResizeEvent() {
	      var _this7 = this;

	      if (this._isShown) {
	        $__default['default'](window).on(EVENT_RESIZE, function (event) {
	          return _this7.handleUpdate(event);
	        });
	      } else {
	        $__default['default'](window).off(EVENT_RESIZE);
	      }
	    };

	    _proto._hideModal = function _hideModal() {
	      var _this8 = this;

	      this._element.style.display = 'none';

	      this._element.setAttribute('aria-hidden', true);

	      this._element.removeAttribute('aria-modal');

	      this._element.removeAttribute('role');

	      this._isTransitioning = false;

	      this._showBackdrop(function () {
	        $__default['default'](document.body).removeClass(CLASS_NAME_OPEN);

	        _this8._resetAdjustments();

	        _this8._resetScrollbar();

	        $__default['default'](_this8._element).trigger(EVENT_HIDDEN$2);
	      });
	    };

	    _proto._removeBackdrop = function _removeBackdrop() {
	      if (this._backdrop) {
	        $__default['default'](this._backdrop).remove();
	        this._backdrop = null;
	      }
	    };

	    _proto._showBackdrop = function _showBackdrop(callback) {
	      var _this9 = this;

	      var animate = $__default['default'](this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

	      if (this._isShown && this._config.backdrop) {
	        this._backdrop = document.createElement('div');
	        this._backdrop.className = CLASS_NAME_BACKDROP;

	        if (animate) {
	          this._backdrop.classList.add(animate);
	        }

	        $__default['default'](this._backdrop).appendTo(document.body);
	        $__default['default'](this._element).on(EVENT_CLICK_DISMISS, function (event) {
	          if (_this9._ignoreBackdropClick) {
	            _this9._ignoreBackdropClick = false;
	            return;
	          }

	          if (event.target !== event.currentTarget) {
	            return;
	          }

	          if (_this9._config.backdrop === 'static') {
	            _this9._triggerBackdropTransition();
	          } else {
	            _this9.hide();
	          }
	        });

	        if (animate) {
	          Util.reflow(this._backdrop);
	        }

	        $__default['default'](this._backdrop).addClass(CLASS_NAME_SHOW$3);

	        if (!callback) {
	          return;
	        }

	        if (!animate) {
	          callback();
	          return;
	        }

	        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
	        $__default['default'](this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
	      } else if (!this._isShown && this._backdrop) {
	        $__default['default'](this._backdrop).removeClass(CLASS_NAME_SHOW$3);

	        var callbackRemove = function callbackRemove() {
	          _this9._removeBackdrop();

	          if (callback) {
	            callback();
	          }
	        };

	        if ($__default['default'](this._element).hasClass(CLASS_NAME_FADE$1)) {
	          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

	          $__default['default'](this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
	        } else {
	          callbackRemove();
	        }
	      } else if (callback) {
	        callback();
	      }
	    } // ----------------------------------------------------------------------
	    // the following methods are used to handle overflowing modals
	    // todo (fat): these should probably be refactored out of modal.js
	    // ----------------------------------------------------------------------
	    ;

	    _proto._adjustDialog = function _adjustDialog() {
	      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

	      if (!this._isBodyOverflowing && isModalOverflowing) {
	        this._element.style.paddingLeft = this._scrollbarWidth + "px";
	      }

	      if (this._isBodyOverflowing && !isModalOverflowing) {
	        this._element.style.paddingRight = this._scrollbarWidth + "px";
	      }
	    };

	    _proto._resetAdjustments = function _resetAdjustments() {
	      this._element.style.paddingLeft = '';
	      this._element.style.paddingRight = '';
	    };

	    _proto._checkScrollbar = function _checkScrollbar() {
	      var rect = document.body.getBoundingClientRect();
	      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
	      this._scrollbarWidth = this._getScrollbarWidth();
	    };

	    _proto._setScrollbar = function _setScrollbar() {
	      var _this10 = this;

	      if (this._isBodyOverflowing) {
	        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
	        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
	        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
	        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

	        $__default['default'](fixedContent).each(function (index, element) {
	          var actualPadding = element.style.paddingRight;
	          var calculatedPadding = $__default['default'](element).css('padding-right');
	          $__default['default'](element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
	        }); // Adjust sticky content margin

	        $__default['default'](stickyContent).each(function (index, element) {
	          var actualMargin = element.style.marginRight;
	          var calculatedMargin = $__default['default'](element).css('margin-right');
	          $__default['default'](element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
	        }); // Adjust body padding

	        var actualPadding = document.body.style.paddingRight;
	        var calculatedPadding = $__default['default'](document.body).css('padding-right');
	        $__default['default'](document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
	      }

	      $__default['default'](document.body).addClass(CLASS_NAME_OPEN);
	    };

	    _proto._resetScrollbar = function _resetScrollbar() {
	      // Restore fixed content padding
	      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
	      $__default['default'](fixedContent).each(function (index, element) {
	        var padding = $__default['default'](element).data('padding-right');
	        $__default['default'](element).removeData('padding-right');
	        element.style.paddingRight = padding ? padding : '';
	      }); // Restore sticky content

	      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
	      $__default['default'](elements).each(function (index, element) {
	        var margin = $__default['default'](element).data('margin-right');

	        if (typeof margin !== 'undefined') {
	          $__default['default'](element).css('margin-right', margin).removeData('margin-right');
	        }
	      }); // Restore body padding

	      var padding = $__default['default'](document.body).data('padding-right');
	      $__default['default'](document.body).removeData('padding-right');
	      document.body.style.paddingRight = padding ? padding : '';
	    };

	    _proto._getScrollbarWidth = function _getScrollbarWidth() {
	      // thx d.walsh
	      var scrollDiv = document.createElement('div');
	      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
	      document.body.appendChild(scrollDiv);
	      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	      return scrollbarWidth;
	    } // Static
	    ;

	    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
	      return this.each(function () {
	        var data = $__default['default'](this).data(DATA_KEY$5);

	        var _config = _extends({}, Default$3, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

	        if (!data) {
	          data = new Modal(this, _config);
	          $__default['default'](this).data(DATA_KEY$5, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config](relatedTarget);
	        } else if (_config.show) {
	          data.show(relatedTarget);
	        }
	      });
	    };

	    _createClass(Modal, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$5;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default$3;
	      }
	    }]);

	    return Modal;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
	    var _this11 = this;

	    var target;
	    var selector = Util.getSelectorFromElement(this);

	    if (selector) {
	      target = document.querySelector(selector);
	    }

	    var config = $__default['default'](target).data(DATA_KEY$5) ? 'toggle' : _extends({}, $__default['default'](target).data(), $__default['default'](this).data());

	    if (this.tagName === 'A' || this.tagName === 'AREA') {
	      event.preventDefault();
	    }

	    var $target = $__default['default'](target).one(EVENT_SHOW$2, function (showEvent) {
	      if (showEvent.isDefaultPrevented()) {
	        // Only register focus restorer if modal will actually get shown
	        return;
	      }

	      $target.one(EVENT_HIDDEN$2, function () {
	        if ($__default['default'](_this11).is(':visible')) {
	          _this11.focus();
	        }
	      });
	    });

	    Modal._jQueryInterface.call($__default['default'](target), config, this);
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME$5] = Modal._jQueryInterface;
	  $__default['default'].fn[NAME$5].Constructor = Modal;

	  $__default['default'].fn[NAME$5].noConflict = function () {
	    $__default['default'].fn[NAME$5] = JQUERY_NO_CONFLICT$5;
	    return Modal._jQueryInterface;
	  };

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.6.0): tools/sanitizer.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
	   * --------------------------------------------------------------------------
	   */
	  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
	  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
	  var DefaultWhitelist = {
	    // Global attributes allowed on any supplied element below.
	    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
	    a: ['target', 'href', 'title', 'rel'],
	    area: [],
	    b: [],
	    br: [],
	    col: [],
	    code: [],
	    div: [],
	    em: [],
	    hr: [],
	    h1: [],
	    h2: [],
	    h3: [],
	    h4: [],
	    h5: [],
	    h6: [],
	    i: [],
	    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
	    li: [],
	    ol: [],
	    p: [],
	    pre: [],
	    s: [],
	    small: [],
	    span: [],
	    sub: [],
	    sup: [],
	    strong: [],
	    u: [],
	    ul: []
	  };
	  /**
	   * A pattern that recognizes a commonly useful subset of URLs that are safe.
	   *
	   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
	   */

	  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
	  /**
	   * A pattern that matches safe data URLs. Only matches image, video and audio types.
	   *
	   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
	   */

	  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

	  function allowedAttribute(attr, allowedAttributeList) {
	    var attrName = attr.nodeName.toLowerCase();

	    if (allowedAttributeList.indexOf(attrName) !== -1) {
	      if (uriAttrs.indexOf(attrName) !== -1) {
	        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
	      }

	      return true;
	    }

	    var regExp = allowedAttributeList.filter(function (attrRegex) {
	      return attrRegex instanceof RegExp;
	    }); // Check if a regular expression validates the attribute.

	    for (var i = 0, len = regExp.length; i < len; i++) {
	      if (attrName.match(regExp[i])) {
	        return true;
	      }
	    }

	    return false;
	  }

	  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
	    if (unsafeHtml.length === 0) {
	      return unsafeHtml;
	    }

	    if (sanitizeFn && typeof sanitizeFn === 'function') {
	      return sanitizeFn(unsafeHtml);
	    }

	    var domParser = new window.DOMParser();
	    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
	    var whitelistKeys = Object.keys(whiteList);
	    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

	    var _loop = function _loop(i, len) {
	      var el = elements[i];
	      var elName = el.nodeName.toLowerCase();

	      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
	        el.parentNode.removeChild(el);
	        return "continue";
	      }

	      var attributeList = [].slice.call(el.attributes);
	      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
	      attributeList.forEach(function (attr) {
	        if (!allowedAttribute(attr, whitelistedAttributes)) {
	          el.removeAttribute(attr.nodeName);
	        }
	      });
	    };

	    for (var i = 0, len = elements.length; i < len; i++) {
	      var _ret = _loop(i);

	      if (_ret === "continue") continue;
	    }

	    return createdDocument.body.innerHTML;
	  }

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$6 = 'tooltip';
	  var VERSION$6 = '4.6.0';
	  var DATA_KEY$6 = 'bs.tooltip';
	  var EVENT_KEY$6 = "." + DATA_KEY$6;
	  var JQUERY_NO_CONFLICT$6 = $__default['default'].fn[NAME$6];
	  var CLASS_PREFIX = 'bs-tooltip';
	  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
	  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
	  var DefaultType$4 = {
	    animation: 'boolean',
	    template: 'string',
	    title: '(string|element|function)',
	    trigger: 'string',
	    delay: '(number|object)',
	    html: 'boolean',
	    selector: '(string|boolean)',
	    placement: '(string|function)',
	    offset: '(number|string|function)',
	    container: '(string|element|boolean)',
	    fallbackPlacement: '(string|array)',
	    boundary: '(string|element)',
	    customClass: '(string|function)',
	    sanitize: 'boolean',
	    sanitizeFn: '(null|function)',
	    whiteList: 'object',
	    popperConfig: '(null|object)'
	  };
	  var AttachmentMap = {
	    AUTO: 'auto',
	    TOP: 'top',
	    RIGHT: 'right',
	    BOTTOM: 'bottom',
	    LEFT: 'left'
	  };
	  var Default$4 = {
	    animation: true,
	    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    selector: false,
	    placement: 'top',
	    offset: 0,
	    container: false,
	    fallbackPlacement: 'flip',
	    boundary: 'scrollParent',
	    customClass: '',
	    sanitize: true,
	    sanitizeFn: null,
	    whiteList: DefaultWhitelist,
	    popperConfig: null
	  };
	  var HOVER_STATE_SHOW = 'show';
	  var HOVER_STATE_OUT = 'out';
	  var Event = {
	    HIDE: "hide" + EVENT_KEY$6,
	    HIDDEN: "hidden" + EVENT_KEY$6,
	    SHOW: "show" + EVENT_KEY$6,
	    SHOWN: "shown" + EVENT_KEY$6,
	    INSERTED: "inserted" + EVENT_KEY$6,
	    CLICK: "click" + EVENT_KEY$6,
	    FOCUSIN: "focusin" + EVENT_KEY$6,
	    FOCUSOUT: "focusout" + EVENT_KEY$6,
	    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
	    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
	  };
	  var CLASS_NAME_FADE$2 = 'fade';
	  var CLASS_NAME_SHOW$4 = 'show';
	  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
	  var SELECTOR_ARROW = '.arrow';
	  var TRIGGER_HOVER = 'hover';
	  var TRIGGER_FOCUS = 'focus';
	  var TRIGGER_CLICK = 'click';
	  var TRIGGER_MANUAL = 'manual';
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Tooltip = /*#__PURE__*/function () {
	    function Tooltip(element, config) {
	      if (typeof Popper__default['default'] === 'undefined') {
	        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
	      } // private


	      this._isEnabled = true;
	      this._timeout = 0;
	      this._hoverState = '';
	      this._activeTrigger = {};
	      this._popper = null; // Protected

	      this.element = element;
	      this.config = this._getConfig(config);
	      this.tip = null;

	      this._setListeners();
	    } // Getters


	    var _proto = Tooltip.prototype;

	    // Public
	    _proto.enable = function enable() {
	      this._isEnabled = true;
	    };

	    _proto.disable = function disable() {
	      this._isEnabled = false;
	    };

	    _proto.toggleEnabled = function toggleEnabled() {
	      this._isEnabled = !this._isEnabled;
	    };

	    _proto.toggle = function toggle(event) {
	      if (!this._isEnabled) {
	        return;
	      }

	      if (event) {
	        var dataKey = this.constructor.DATA_KEY;
	        var context = $__default['default'](event.currentTarget).data(dataKey);

	        if (!context) {
	          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	          $__default['default'](event.currentTarget).data(dataKey, context);
	        }

	        context._activeTrigger.click = !context._activeTrigger.click;

	        if (context._isWithActiveTrigger()) {
	          context._enter(null, context);
	        } else {
	          context._leave(null, context);
	        }
	      } else {
	        if ($__default['default'](this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
	          this._leave(null, this);

	          return;
	        }

	        this._enter(null, this);
	      }
	    };

	    _proto.dispose = function dispose() {
	      clearTimeout(this._timeout);
	      $__default['default'].removeData(this.element, this.constructor.DATA_KEY);
	      $__default['default'](this.element).off(this.constructor.EVENT_KEY);
	      $__default['default'](this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

	      if (this.tip) {
	        $__default['default'](this.tip).remove();
	      }

	      this._isEnabled = null;
	      this._timeout = null;
	      this._hoverState = null;
	      this._activeTrigger = null;

	      if (this._popper) {
	        this._popper.destroy();
	      }

	      this._popper = null;
	      this.element = null;
	      this.config = null;
	      this.tip = null;
	    };

	    _proto.show = function show() {
	      var _this = this;

	      if ($__default['default'](this.element).css('display') === 'none') {
	        throw new Error('Please use show on visible elements');
	      }

	      var showEvent = $__default['default'].Event(this.constructor.Event.SHOW);

	      if (this.isWithContent() && this._isEnabled) {
	        $__default['default'](this.element).trigger(showEvent);
	        var shadowRoot = Util.findShadowRoot(this.element);
	        var isInTheDom = $__default['default'].contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

	        if (showEvent.isDefaultPrevented() || !isInTheDom) {
	          return;
	        }

	        var tip = this.getTipElement();
	        var tipId = Util.getUID(this.constructor.NAME);
	        tip.setAttribute('id', tipId);
	        this.element.setAttribute('aria-describedby', tipId);
	        this.setContent();

	        if (this.config.animation) {
	          $__default['default'](tip).addClass(CLASS_NAME_FADE$2);
	        }

	        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

	        var attachment = this._getAttachment(placement);

	        this.addAttachmentClass(attachment);

	        var container = this._getContainer();

	        $__default['default'](tip).data(this.constructor.DATA_KEY, this);

	        if (!$__default['default'].contains(this.element.ownerDocument.documentElement, this.tip)) {
	          $__default['default'](tip).appendTo(container);
	        }

	        $__default['default'](this.element).trigger(this.constructor.Event.INSERTED);
	        this._popper = new Popper__default['default'](this.element, tip, this._getPopperConfig(attachment));
	        $__default['default'](tip).addClass(CLASS_NAME_SHOW$4);
	        $__default['default'](tip).addClass(this.config.customClass); // If this is a touch-enabled device we add extra
	        // empty mouseover listeners to the body's immediate children;
	        // only needed because of broken event delegation on iOS
	        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

	        if ('ontouchstart' in document.documentElement) {
	          $__default['default'](document.body).children().on('mouseover', null, $__default['default'].noop);
	        }

	        var complete = function complete() {
	          if (_this.config.animation) {
	            _this._fixTransition();
	          }

	          var prevHoverState = _this._hoverState;
	          _this._hoverState = null;
	          $__default['default'](_this.element).trigger(_this.constructor.Event.SHOWN);

	          if (prevHoverState === HOVER_STATE_OUT) {
	            _this._leave(null, _this);
	          }
	        };

	        if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
	          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
	          $__default['default'](this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
	        } else {
	          complete();
	        }
	      }
	    };

	    _proto.hide = function hide(callback) {
	      var _this2 = this;

	      var tip = this.getTipElement();
	      var hideEvent = $__default['default'].Event(this.constructor.Event.HIDE);

	      var complete = function complete() {
	        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
	          tip.parentNode.removeChild(tip);
	        }

	        _this2._cleanTipClass();

	        _this2.element.removeAttribute('aria-describedby');

	        $__default['default'](_this2.element).trigger(_this2.constructor.Event.HIDDEN);

	        if (_this2._popper !== null) {
	          _this2._popper.destroy();
	        }

	        if (callback) {
	          callback();
	        }
	      };

	      $__default['default'](this.element).trigger(hideEvent);

	      if (hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      $__default['default'](tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
	      // empty mouseover listeners we added for iOS support

	      if ('ontouchstart' in document.documentElement) {
	        $__default['default'](document.body).children().off('mouseover', null, $__default['default'].noop);
	      }

	      this._activeTrigger[TRIGGER_CLICK] = false;
	      this._activeTrigger[TRIGGER_FOCUS] = false;
	      this._activeTrigger[TRIGGER_HOVER] = false;

	      if ($__default['default'](this.tip).hasClass(CLASS_NAME_FADE$2)) {
	        var transitionDuration = Util.getTransitionDurationFromElement(tip);
	        $__default['default'](tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
	      } else {
	        complete();
	      }

	      this._hoverState = '';
	    };

	    _proto.update = function update() {
	      if (this._popper !== null) {
	        this._popper.scheduleUpdate();
	      }
	    } // Protected
	    ;

	    _proto.isWithContent = function isWithContent() {
	      return Boolean(this.getTitle());
	    };

	    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
	      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
	    };

	    _proto.getTipElement = function getTipElement() {
	      this.tip = this.tip || $__default['default'](this.config.template)[0];
	      return this.tip;
	    };

	    _proto.setContent = function setContent() {
	      var tip = this.getTipElement();
	      this.setElementContent($__default['default'](tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
	      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
	    };

	    _proto.setElementContent = function setElementContent($element, content) {
	      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
	        // Content is a DOM node or a jQuery
	        if (this.config.html) {
	          if (!$__default['default'](content).parent().is($element)) {
	            $element.empty().append(content);
	          }
	        } else {
	          $element.text($__default['default'](content).text());
	        }

	        return;
	      }

	      if (this.config.html) {
	        if (this.config.sanitize) {
	          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
	        }

	        $element.html(content);
	      } else {
	        $element.text(content);
	      }
	    };

	    _proto.getTitle = function getTitle() {
	      var title = this.element.getAttribute('data-original-title');

	      if (!title) {
	        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
	      }

	      return title;
	    } // Private
	    ;

	    _proto._getPopperConfig = function _getPopperConfig(attachment) {
	      var _this3 = this;

	      var defaultBsConfig = {
	        placement: attachment,
	        modifiers: {
	          offset: this._getOffset(),
	          flip: {
	            behavior: this.config.fallbackPlacement
	          },
	          arrow: {
	            element: SELECTOR_ARROW
	          },
	          preventOverflow: {
	            boundariesElement: this.config.boundary
	          }
	        },
	        onCreate: function onCreate(data) {
	          if (data.originalPlacement !== data.placement) {
	            _this3._handlePopperPlacementChange(data);
	          }
	        },
	        onUpdate: function onUpdate(data) {
	          return _this3._handlePopperPlacementChange(data);
	        }
	      };
	      return _extends({}, defaultBsConfig, this.config.popperConfig);
	    };

	    _proto._getOffset = function _getOffset() {
	      var _this4 = this;

	      var offset = {};

	      if (typeof this.config.offset === 'function') {
	        offset.fn = function (data) {
	          data.offsets = _extends({}, data.offsets, _this4.config.offset(data.offsets, _this4.element) || {});
	          return data;
	        };
	      } else {
	        offset.offset = this.config.offset;
	      }

	      return offset;
	    };

	    _proto._getContainer = function _getContainer() {
	      if (this.config.container === false) {
	        return document.body;
	      }

	      if (Util.isElement(this.config.container)) {
	        return $__default['default'](this.config.container);
	      }

	      return $__default['default'](document).find(this.config.container);
	    };

	    _proto._getAttachment = function _getAttachment(placement) {
	      return AttachmentMap[placement.toUpperCase()];
	    };

	    _proto._setListeners = function _setListeners() {
	      var _this5 = this;

	      var triggers = this.config.trigger.split(' ');
	      triggers.forEach(function (trigger) {
	        if (trigger === 'click') {
	          $__default['default'](_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
	            return _this5.toggle(event);
	          });
	        } else if (trigger !== TRIGGER_MANUAL) {
	          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
	          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
	          $__default['default'](_this5.element).on(eventIn, _this5.config.selector, function (event) {
	            return _this5._enter(event);
	          }).on(eventOut, _this5.config.selector, function (event) {
	            return _this5._leave(event);
	          });
	        }
	      });

	      this._hideModalHandler = function () {
	        if (_this5.element) {
	          _this5.hide();
	        }
	      };

	      $__default['default'](this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

	      if (this.config.selector) {
	        this.config = _extends({}, this.config, {
	          trigger: 'manual',
	          selector: ''
	        });
	      } else {
	        this._fixTitle();
	      }
	    };

	    _proto._fixTitle = function _fixTitle() {
	      var titleType = typeof this.element.getAttribute('data-original-title');

	      if (this.element.getAttribute('title') || titleType !== 'string') {
	        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
	        this.element.setAttribute('title', '');
	      }
	    };

	    _proto._enter = function _enter(event, context) {
	      var dataKey = this.constructor.DATA_KEY;
	      context = context || $__default['default'](event.currentTarget).data(dataKey);

	      if (!context) {
	        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	        $__default['default'](event.currentTarget).data(dataKey, context);
	      }

	      if (event) {
	        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
	      }

	      if ($__default['default'](context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
	        context._hoverState = HOVER_STATE_SHOW;
	        return;
	      }

	      clearTimeout(context._timeout);
	      context._hoverState = HOVER_STATE_SHOW;

	      if (!context.config.delay || !context.config.delay.show) {
	        context.show();
	        return;
	      }

	      context._timeout = setTimeout(function () {
	        if (context._hoverState === HOVER_STATE_SHOW) {
	          context.show();
	        }
	      }, context.config.delay.show);
	    };

	    _proto._leave = function _leave(event, context) {
	      var dataKey = this.constructor.DATA_KEY;
	      context = context || $__default['default'](event.currentTarget).data(dataKey);

	      if (!context) {
	        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	        $__default['default'](event.currentTarget).data(dataKey, context);
	      }

	      if (event) {
	        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
	      }

	      if (context._isWithActiveTrigger()) {
	        return;
	      }

	      clearTimeout(context._timeout);
	      context._hoverState = HOVER_STATE_OUT;

	      if (!context.config.delay || !context.config.delay.hide) {
	        context.hide();
	        return;
	      }

	      context._timeout = setTimeout(function () {
	        if (context._hoverState === HOVER_STATE_OUT) {
	          context.hide();
	        }
	      }, context.config.delay.hide);
	    };

	    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
	      for (var trigger in this._activeTrigger) {
	        if (this._activeTrigger[trigger]) {
	          return true;
	        }
	      }

	      return false;
	    };

	    _proto._getConfig = function _getConfig(config) {
	      var dataAttributes = $__default['default'](this.element).data();
	      Object.keys(dataAttributes).forEach(function (dataAttr) {
	        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
	          delete dataAttributes[dataAttr];
	        }
	      });
	      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

	      if (typeof config.delay === 'number') {
	        config.delay = {
	          show: config.delay,
	          hide: config.delay
	        };
	      }

	      if (typeof config.title === 'number') {
	        config.title = config.title.toString();
	      }

	      if (typeof config.content === 'number') {
	        config.content = config.content.toString();
	      }

	      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

	      if (config.sanitize) {
	        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
	      }

	      return config;
	    };

	    _proto._getDelegateConfig = function _getDelegateConfig() {
	      var config = {};

	      if (this.config) {
	        for (var key in this.config) {
	          if (this.constructor.Default[key] !== this.config[key]) {
	            config[key] = this.config[key];
	          }
	        }
	      }

	      return config;
	    };

	    _proto._cleanTipClass = function _cleanTipClass() {
	      var $tip = $__default['default'](this.getTipElement());
	      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

	      if (tabClass !== null && tabClass.length) {
	        $tip.removeClass(tabClass.join(''));
	      }
	    };

	    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
	      this.tip = popperData.instance.popper;

	      this._cleanTipClass();

	      this.addAttachmentClass(this._getAttachment(popperData.placement));
	    };

	    _proto._fixTransition = function _fixTransition() {
	      var tip = this.getTipElement();
	      var initConfigAnimation = this.config.animation;

	      if (tip.getAttribute('x-placement') !== null) {
	        return;
	      }

	      $__default['default'](tip).removeClass(CLASS_NAME_FADE$2);
	      this.config.animation = false;
	      this.hide();
	      this.show();
	      this.config.animation = initConfigAnimation;
	    } // Static
	    ;

	    Tooltip._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $element = $__default['default'](this);
	        var data = $element.data(DATA_KEY$6);

	        var _config = typeof config === 'object' && config;

	        if (!data && /dispose|hide/.test(config)) {
	          return;
	        }

	        if (!data) {
	          data = new Tooltip(this, _config);
	          $element.data(DATA_KEY$6, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Tooltip, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$6;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default$4;
	      }
	    }, {
	      key: "NAME",
	      get: function get() {
	        return NAME$6;
	      }
	    }, {
	      key: "DATA_KEY",
	      get: function get() {
	        return DATA_KEY$6;
	      }
	    }, {
	      key: "Event",
	      get: function get() {
	        return Event;
	      }
	    }, {
	      key: "EVENT_KEY",
	      get: function get() {
	        return EVENT_KEY$6;
	      }
	    }, {
	      key: "DefaultType",
	      get: function get() {
	        return DefaultType$4;
	      }
	    }]);

	    return Tooltip;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'].fn[NAME$6] = Tooltip._jQueryInterface;
	  $__default['default'].fn[NAME$6].Constructor = Tooltip;

	  $__default['default'].fn[NAME$6].noConflict = function () {
	    $__default['default'].fn[NAME$6] = JQUERY_NO_CONFLICT$6;
	    return Tooltip._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$7 = 'popover';
	  var VERSION$7 = '4.6.0';
	  var DATA_KEY$7 = 'bs.popover';
	  var EVENT_KEY$7 = "." + DATA_KEY$7;
	  var JQUERY_NO_CONFLICT$7 = $__default['default'].fn[NAME$7];
	  var CLASS_PREFIX$1 = 'bs-popover';
	  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

	  var Default$5 = _extends({}, Tooltip.Default, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
	  });

	  var DefaultType$5 = _extends({}, Tooltip.DefaultType, {
	    content: '(string|element|function)'
	  });

	  var CLASS_NAME_FADE$3 = 'fade';
	  var CLASS_NAME_SHOW$5 = 'show';
	  var SELECTOR_TITLE = '.popover-header';
	  var SELECTOR_CONTENT = '.popover-body';
	  var Event$1 = {
	    HIDE: "hide" + EVENT_KEY$7,
	    HIDDEN: "hidden" + EVENT_KEY$7,
	    SHOW: "show" + EVENT_KEY$7,
	    SHOWN: "shown" + EVENT_KEY$7,
	    INSERTED: "inserted" + EVENT_KEY$7,
	    CLICK: "click" + EVENT_KEY$7,
	    FOCUSIN: "focusin" + EVENT_KEY$7,
	    FOCUSOUT: "focusout" + EVENT_KEY$7,
	    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
	    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
	  };
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Popover = /*#__PURE__*/function (_Tooltip) {
	    _inheritsLoose(Popover, _Tooltip);

	    function Popover() {
	      return _Tooltip.apply(this, arguments) || this;
	    }

	    var _proto = Popover.prototype;

	    // Overrides
	    _proto.isWithContent = function isWithContent() {
	      return this.getTitle() || this._getContent();
	    };

	    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
	      $__default['default'](this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
	    };

	    _proto.getTipElement = function getTipElement() {
	      this.tip = this.tip || $__default['default'](this.config.template)[0];
	      return this.tip;
	    };

	    _proto.setContent = function setContent() {
	      var $tip = $__default['default'](this.getTipElement()); // We use append for html objects to maintain js events

	      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

	      var content = this._getContent();

	      if (typeof content === 'function') {
	        content = content.call(this.element);
	      }

	      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
	      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
	    } // Private
	    ;

	    _proto._getContent = function _getContent() {
	      return this.element.getAttribute('data-content') || this.config.content;
	    };

	    _proto._cleanTipClass = function _cleanTipClass() {
	      var $tip = $__default['default'](this.getTipElement());
	      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

	      if (tabClass !== null && tabClass.length > 0) {
	        $tip.removeClass(tabClass.join(''));
	      }
	    } // Static
	    ;

	    Popover._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $__default['default'](this).data(DATA_KEY$7);

	        var _config = typeof config === 'object' ? config : null;

	        if (!data && /dispose|hide/.test(config)) {
	          return;
	        }

	        if (!data) {
	          data = new Popover(this, _config);
	          $__default['default'](this).data(DATA_KEY$7, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Popover, null, [{
	      key: "VERSION",
	      // Getters
	      get: function get() {
	        return VERSION$7;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default$5;
	      }
	    }, {
	      key: "NAME",
	      get: function get() {
	        return NAME$7;
	      }
	    }, {
	      key: "DATA_KEY",
	      get: function get() {
	        return DATA_KEY$7;
	      }
	    }, {
	      key: "Event",
	      get: function get() {
	        return Event$1;
	      }
	    }, {
	      key: "EVENT_KEY",
	      get: function get() {
	        return EVENT_KEY$7;
	      }
	    }, {
	      key: "DefaultType",
	      get: function get() {
	        return DefaultType$5;
	      }
	    }]);

	    return Popover;
	  }(Tooltip);
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'].fn[NAME$7] = Popover._jQueryInterface;
	  $__default['default'].fn[NAME$7].Constructor = Popover;

	  $__default['default'].fn[NAME$7].noConflict = function () {
	    $__default['default'].fn[NAME$7] = JQUERY_NO_CONFLICT$7;
	    return Popover._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$8 = 'scrollspy';
	  var VERSION$8 = '4.6.0';
	  var DATA_KEY$8 = 'bs.scrollspy';
	  var EVENT_KEY$8 = "." + DATA_KEY$8;
	  var DATA_API_KEY$6 = '.data-api';
	  var JQUERY_NO_CONFLICT$8 = $__default['default'].fn[NAME$8];
	  var Default$6 = {
	    offset: 10,
	    method: 'auto',
	    target: ''
	  };
	  var DefaultType$6 = {
	    offset: 'number',
	    method: 'string',
	    target: '(string|element)'
	  };
	  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
	  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
	  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
	  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
	  var CLASS_NAME_ACTIVE$2 = 'active';
	  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
	  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
	  var SELECTOR_NAV_LINKS = '.nav-link';
	  var SELECTOR_NAV_ITEMS = '.nav-item';
	  var SELECTOR_LIST_ITEMS = '.list-group-item';
	  var SELECTOR_DROPDOWN = '.dropdown';
	  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
	  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
	  var METHOD_OFFSET = 'offset';
	  var METHOD_POSITION = 'position';
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var ScrollSpy = /*#__PURE__*/function () {
	    function ScrollSpy(element, config) {
	      var _this = this;

	      this._element = element;
	      this._scrollElement = element.tagName === 'BODY' ? window : element;
	      this._config = this._getConfig(config);
	      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
	      this._offsets = [];
	      this._targets = [];
	      this._activeTarget = null;
	      this._scrollHeight = 0;
	      $__default['default'](this._scrollElement).on(EVENT_SCROLL, function (event) {
	        return _this._process(event);
	      });
	      this.refresh();

	      this._process();
	    } // Getters


	    var _proto = ScrollSpy.prototype;

	    // Public
	    _proto.refresh = function refresh() {
	      var _this2 = this;

	      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
	      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
	      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
	      this._offsets = [];
	      this._targets = [];
	      this._scrollHeight = this._getScrollHeight();
	      var targets = [].slice.call(document.querySelectorAll(this._selector));
	      targets.map(function (element) {
	        var target;
	        var targetSelector = Util.getSelectorFromElement(element);

	        if (targetSelector) {
	          target = document.querySelector(targetSelector);
	        }

	        if (target) {
	          var targetBCR = target.getBoundingClientRect();

	          if (targetBCR.width || targetBCR.height) {
	            // TODO (fat): remove sketch reliance on jQuery position/offset
	            return [$__default['default'](target)[offsetMethod]().top + offsetBase, targetSelector];
	          }
	        }

	        return null;
	      }).filter(function (item) {
	        return item;
	      }).sort(function (a, b) {
	        return a[0] - b[0];
	      }).forEach(function (item) {
	        _this2._offsets.push(item[0]);

	        _this2._targets.push(item[1]);
	      });
	    };

	    _proto.dispose = function dispose() {
	      $__default['default'].removeData(this._element, DATA_KEY$8);
	      $__default['default'](this._scrollElement).off(EVENT_KEY$8);
	      this._element = null;
	      this._scrollElement = null;
	      this._config = null;
	      this._selector = null;
	      this._offsets = null;
	      this._targets = null;
	      this._activeTarget = null;
	      this._scrollHeight = null;
	    } // Private
	    ;

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default$6, typeof config === 'object' && config ? config : {});

	      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
	        var id = $__default['default'](config.target).attr('id');

	        if (!id) {
	          id = Util.getUID(NAME$8);
	          $__default['default'](config.target).attr('id', id);
	        }

	        config.target = "#" + id;
	      }

	      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
	      return config;
	    };

	    _proto._getScrollTop = function _getScrollTop() {
	      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
	    };

	    _proto._getScrollHeight = function _getScrollHeight() {
	      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	    };

	    _proto._getOffsetHeight = function _getOffsetHeight() {
	      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
	    };

	    _proto._process = function _process() {
	      var scrollTop = this._getScrollTop() + this._config.offset;

	      var scrollHeight = this._getScrollHeight();

	      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

	      if (this._scrollHeight !== scrollHeight) {
	        this.refresh();
	      }

	      if (scrollTop >= maxScroll) {
	        var target = this._targets[this._targets.length - 1];

	        if (this._activeTarget !== target) {
	          this._activate(target);
	        }

	        return;
	      }

	      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
	        this._activeTarget = null;

	        this._clear();

	        return;
	      }

	      for (var i = this._offsets.length; i--;) {
	        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

	        if (isActiveTarget) {
	          this._activate(this._targets[i]);
	        }
	      }
	    };

	    _proto._activate = function _activate(target) {
	      this._activeTarget = target;

	      this._clear();

	      var queries = this._selector.split(',').map(function (selector) {
	        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
	      });

	      var $link = $__default['default']([].slice.call(document.querySelectorAll(queries.join(','))));

	      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
	        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
	        $link.addClass(CLASS_NAME_ACTIVE$2);
	      } else {
	        // Set triggered link as active
	        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
	        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

	        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

	        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
	      }

	      $__default['default'](this._scrollElement).trigger(EVENT_ACTIVATE, {
	        relatedTarget: target
	      });
	    };

	    _proto._clear = function _clear() {
	      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
	        return node.classList.contains(CLASS_NAME_ACTIVE$2);
	      }).forEach(function (node) {
	        return node.classList.remove(CLASS_NAME_ACTIVE$2);
	      });
	    } // Static
	    ;

	    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var data = $__default['default'](this).data(DATA_KEY$8);

	        var _config = typeof config === 'object' && config;

	        if (!data) {
	          data = new ScrollSpy(this, _config);
	          $__default['default'](this).data(DATA_KEY$8, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(ScrollSpy, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$8;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default$6;
	      }
	    }]);

	    return ScrollSpy;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](window).on(EVENT_LOAD_DATA_API$2, function () {
	    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
	    var scrollSpysLength = scrollSpys.length;

	    for (var i = scrollSpysLength; i--;) {
	      var $spy = $__default['default'](scrollSpys[i]);

	      ScrollSpy._jQueryInterface.call($spy, $spy.data());
	    }
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME$8] = ScrollSpy._jQueryInterface;
	  $__default['default'].fn[NAME$8].Constructor = ScrollSpy;

	  $__default['default'].fn[NAME$8].noConflict = function () {
	    $__default['default'].fn[NAME$8] = JQUERY_NO_CONFLICT$8;
	    return ScrollSpy._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$9 = 'tab';
	  var VERSION$9 = '4.6.0';
	  var DATA_KEY$9 = 'bs.tab';
	  var EVENT_KEY$9 = "." + DATA_KEY$9;
	  var DATA_API_KEY$7 = '.data-api';
	  var JQUERY_NO_CONFLICT$9 = $__default['default'].fn[NAME$9];
	  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
	  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
	  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
	  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
	  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
	  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
	  var CLASS_NAME_ACTIVE$3 = 'active';
	  var CLASS_NAME_DISABLED$1 = 'disabled';
	  var CLASS_NAME_FADE$4 = 'fade';
	  var CLASS_NAME_SHOW$6 = 'show';
	  var SELECTOR_DROPDOWN$1 = '.dropdown';
	  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
	  var SELECTOR_ACTIVE$2 = '.active';
	  var SELECTOR_ACTIVE_UL = '> li > .active';
	  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
	  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
	  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Tab = /*#__PURE__*/function () {
	    function Tab(element) {
	      this._element = element;
	    } // Getters


	    var _proto = Tab.prototype;

	    // Public
	    _proto.show = function show() {
	      var _this = this;

	      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default['default'](this._element).hasClass(CLASS_NAME_ACTIVE$3) || $__default['default'](this._element).hasClass(CLASS_NAME_DISABLED$1)) {
	        return;
	      }

	      var target;
	      var previous;
	      var listElement = $__default['default'](this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
	      var selector = Util.getSelectorFromElement(this._element);

	      if (listElement) {
	        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
	        previous = $__default['default'].makeArray($__default['default'](listElement).find(itemSelector));
	        previous = previous[previous.length - 1];
	      }

	      var hideEvent = $__default['default'].Event(EVENT_HIDE$3, {
	        relatedTarget: this._element
	      });
	      var showEvent = $__default['default'].Event(EVENT_SHOW$3, {
	        relatedTarget: previous
	      });

	      if (previous) {
	        $__default['default'](previous).trigger(hideEvent);
	      }

	      $__default['default'](this._element).trigger(showEvent);

	      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      if (selector) {
	        target = document.querySelector(selector);
	      }

	      this._activate(this._element, listElement);

	      var complete = function complete() {
	        var hiddenEvent = $__default['default'].Event(EVENT_HIDDEN$3, {
	          relatedTarget: _this._element
	        });
	        var shownEvent = $__default['default'].Event(EVENT_SHOWN$3, {
	          relatedTarget: previous
	        });
	        $__default['default'](previous).trigger(hiddenEvent);
	        $__default['default'](_this._element).trigger(shownEvent);
	      };

	      if (target) {
	        this._activate(target, target.parentNode, complete);
	      } else {
	        complete();
	      }
	    };

	    _proto.dispose = function dispose() {
	      $__default['default'].removeData(this._element, DATA_KEY$9);
	      this._element = null;
	    } // Private
	    ;

	    _proto._activate = function _activate(element, container, callback) {
	      var _this2 = this;

	      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default['default'](container).find(SELECTOR_ACTIVE_UL) : $__default['default'](container).children(SELECTOR_ACTIVE$2);
	      var active = activeElements[0];
	      var isTransitioning = callback && active && $__default['default'](active).hasClass(CLASS_NAME_FADE$4);

	      var complete = function complete() {
	        return _this2._transitionComplete(element, active, callback);
	      };

	      if (active && isTransitioning) {
	        var transitionDuration = Util.getTransitionDurationFromElement(active);
	        $__default['default'](active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
	      } else {
	        complete();
	      }
	    };

	    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
	      if (active) {
	        $__default['default'](active).removeClass(CLASS_NAME_ACTIVE$3);
	        var dropdownChild = $__default['default'](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

	        if (dropdownChild) {
	          $__default['default'](dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
	        }

	        if (active.getAttribute('role') === 'tab') {
	          active.setAttribute('aria-selected', false);
	        }
	      }

	      $__default['default'](element).addClass(CLASS_NAME_ACTIVE$3);

	      if (element.getAttribute('role') === 'tab') {
	        element.setAttribute('aria-selected', true);
	      }

	      Util.reflow(element);

	      if (element.classList.contains(CLASS_NAME_FADE$4)) {
	        element.classList.add(CLASS_NAME_SHOW$6);
	      }

	      if (element.parentNode && $__default['default'](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
	        var dropdownElement = $__default['default'](element).closest(SELECTOR_DROPDOWN$1)[0];

	        if (dropdownElement) {
	          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
	          $__default['default'](dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
	        }

	        element.setAttribute('aria-expanded', true);
	      }

	      if (callback) {
	        callback();
	      }
	    } // Static
	    ;

	    Tab._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $this = $__default['default'](this);
	        var data = $this.data(DATA_KEY$9);

	        if (!data) {
	          data = new Tab(this);
	          $this.data(DATA_KEY$9, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config]();
	        }
	      });
	    };

	    _createClass(Tab, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$9;
	      }
	    }]);

	    return Tab;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * Data Api implementation
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'](document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
	    event.preventDefault();

	    Tab._jQueryInterface.call($__default['default'](this), 'show');
	  });
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */

	  $__default['default'].fn[NAME$9] = Tab._jQueryInterface;
	  $__default['default'].fn[NAME$9].Constructor = Tab;

	  $__default['default'].fn[NAME$9].noConflict = function () {
	    $__default['default'].fn[NAME$9] = JQUERY_NO_CONFLICT$9;
	    return Tab._jQueryInterface;
	  };

	  /**
	   * ------------------------------------------------------------------------
	   * Constants
	   * ------------------------------------------------------------------------
	   */

	  var NAME$a = 'toast';
	  var VERSION$a = '4.6.0';
	  var DATA_KEY$a = 'bs.toast';
	  var EVENT_KEY$a = "." + DATA_KEY$a;
	  var JQUERY_NO_CONFLICT$a = $__default['default'].fn[NAME$a];
	  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
	  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
	  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
	  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
	  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
	  var CLASS_NAME_FADE$5 = 'fade';
	  var CLASS_NAME_HIDE = 'hide';
	  var CLASS_NAME_SHOW$7 = 'show';
	  var CLASS_NAME_SHOWING = 'showing';
	  var DefaultType$7 = {
	    animation: 'boolean',
	    autohide: 'boolean',
	    delay: 'number'
	  };
	  var Default$7 = {
	    animation: true,
	    autohide: true,
	    delay: 500
	  };
	  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
	  /**
	   * ------------------------------------------------------------------------
	   * Class Definition
	   * ------------------------------------------------------------------------
	   */

	  var Toast = /*#__PURE__*/function () {
	    function Toast(element, config) {
	      this._element = element;
	      this._config = this._getConfig(config);
	      this._timeout = null;

	      this._setListeners();
	    } // Getters


	    var _proto = Toast.prototype;

	    // Public
	    _proto.show = function show() {
	      var _this = this;

	      var showEvent = $__default['default'].Event(EVENT_SHOW$4);
	      $__default['default'](this._element).trigger(showEvent);

	      if (showEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._clearTimeout();

	      if (this._config.animation) {
	        this._element.classList.add(CLASS_NAME_FADE$5);
	      }

	      var complete = function complete() {
	        _this._element.classList.remove(CLASS_NAME_SHOWING);

	        _this._element.classList.add(CLASS_NAME_SHOW$7);

	        $__default['default'](_this._element).trigger(EVENT_SHOWN$4);

	        if (_this._config.autohide) {
	          _this._timeout = setTimeout(function () {
	            _this.hide();
	          }, _this._config.delay);
	        }
	      };

	      this._element.classList.remove(CLASS_NAME_HIDE);

	      Util.reflow(this._element);

	      this._element.classList.add(CLASS_NAME_SHOWING);

	      if (this._config.animation) {
	        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
	        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
	      } else {
	        complete();
	      }
	    };

	    _proto.hide = function hide() {
	      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
	        return;
	      }

	      var hideEvent = $__default['default'].Event(EVENT_HIDE$4);
	      $__default['default'](this._element).trigger(hideEvent);

	      if (hideEvent.isDefaultPrevented()) {
	        return;
	      }

	      this._close();
	    };

	    _proto.dispose = function dispose() {
	      this._clearTimeout();

	      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
	        this._element.classList.remove(CLASS_NAME_SHOW$7);
	      }

	      $__default['default'](this._element).off(EVENT_CLICK_DISMISS$1);
	      $__default['default'].removeData(this._element, DATA_KEY$a);
	      this._element = null;
	      this._config = null;
	    } // Private
	    ;

	    _proto._getConfig = function _getConfig(config) {
	      config = _extends({}, Default$7, $__default['default'](this._element).data(), typeof config === 'object' && config ? config : {});
	      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
	      return config;
	    };

	    _proto._setListeners = function _setListeners() {
	      var _this2 = this;

	      $__default['default'](this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
	        return _this2.hide();
	      });
	    };

	    _proto._close = function _close() {
	      var _this3 = this;

	      var complete = function complete() {
	        _this3._element.classList.add(CLASS_NAME_HIDE);

	        $__default['default'](_this3._element).trigger(EVENT_HIDDEN$4);
	      };

	      this._element.classList.remove(CLASS_NAME_SHOW$7);

	      if (this._config.animation) {
	        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
	        $__default['default'](this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
	      } else {
	        complete();
	      }
	    };

	    _proto._clearTimeout = function _clearTimeout() {
	      clearTimeout(this._timeout);
	      this._timeout = null;
	    } // Static
	    ;

	    Toast._jQueryInterface = function _jQueryInterface(config) {
	      return this.each(function () {
	        var $element = $__default['default'](this);
	        var data = $element.data(DATA_KEY$a);

	        var _config = typeof config === 'object' && config;

	        if (!data) {
	          data = new Toast(this, _config);
	          $element.data(DATA_KEY$a, data);
	        }

	        if (typeof config === 'string') {
	          if (typeof data[config] === 'undefined') {
	            throw new TypeError("No method named \"" + config + "\"");
	          }

	          data[config](this);
	        }
	      });
	    };

	    _createClass(Toast, null, [{
	      key: "VERSION",
	      get: function get() {
	        return VERSION$a;
	      }
	    }, {
	      key: "DefaultType",
	      get: function get() {
	        return DefaultType$7;
	      }
	    }, {
	      key: "Default",
	      get: function get() {
	        return Default$7;
	      }
	    }]);

	    return Toast;
	  }();
	  /**
	   * ------------------------------------------------------------------------
	   * jQuery
	   * ------------------------------------------------------------------------
	   */


	  $__default['default'].fn[NAME$a] = Toast._jQueryInterface;
	  $__default['default'].fn[NAME$a].Constructor = Toast;

	  $__default['default'].fn[NAME$a].noConflict = function () {
	    $__default['default'].fn[NAME$a] = JQUERY_NO_CONFLICT$a;
	    return Toast._jQueryInterface;
	  };

	  exports.Alert = Alert;
	  exports.Button = Button;
	  exports.Carousel = Carousel;
	  exports.Collapse = Collapse;
	  exports.Dropdown = Dropdown;
	  exports.Modal = Modal;
	  exports.Popover = Popover;
	  exports.Scrollspy = ScrollSpy;
	  exports.Tab = Tab;
	  exports.Toast = Toast;
	  exports.Tooltip = Tooltip;
	  exports.Util = Util;

	  Object.defineProperty(exports, '__esModule', { value: true });

	})));

	(function () {

		var RS = function (conf) {
			this.input 			= null;
			this.inputDisplay 	= null;
			this.slider 		= null;
			this.sliderWidth	= 0;
			this.sliderLeft		= 0;
			this.pointerWidth	= 0;
			this.pointerR		= null;
			this.pointerL		= null;
			this.activePointer	= null;
			this.selected 		= null;
			this.scale 			= null;
			this.step 			= 0;
			this.tipL			= null;
			this.tipR			= null;
			this.timeout		= null;
			this.valRange		= false;

			this.values = {
				start:	null,
				end:	null
			};
			this.conf = {
				target: 	null,
				values: 	null,
				set: 		null,
				range: 		false,
				width: 		null,
				scale:		true,
				labels:		true,
				tooltip:	true,
				step: 		null,
				disabled:	false,
				onChange:	null
			};

			this.cls = {
				container:	'rs-container',
				background: 'rs-bg',
				selected: 	'rs-selected',
				pointer: 	'rs-pointer',
				scale: 		'rs-scale',
				noscale:	'rs-noscale',
				tip: 		'rs-tooltip'
			};

			for (var i in this.conf) { if (conf.hasOwnProperty(i)) this.conf[i] = conf[i]; }

			this.init();
		};

		RS.prototype.init = function () {
			if (typeof this.conf.target === 'object') this.input = this.conf.target;
			else this.input = document.getElementById(this.conf.target.replace('#', ''));

			if (!this.input) return console.log('Cannot find target element...');

			this.inputDisplay = getComputedStyle(this.input, null).display;
			this.input.style.display = 'none';
			this.valRange = !(this.conf.values instanceof Array);

			if (this.valRange) {
				if (!this.conf.values.hasOwnProperty('min') || !this.conf.values.hasOwnProperty('max'))
					return console.log('Missing min or max value...');
			}
			return this.createSlider();
		};

		RS.prototype.createSlider = function () {
			this.slider = createElement('div', this.cls.container);
			this.slider.innerHTML = '<div class="rs-bg"></div>';
			this.selected = createElement('div', this.cls.selected);
			this.pointerL = createElement('div', this.cls.pointer, ['dir', 'left']);
			this.scale = createElement('div', this.cls.scale);

			if (this.conf.tooltip) {
				this.tipL = createElement('div', this.cls.tip);
				this.tipR = createElement('div', this.cls.tip);
				this.pointerL.appendChild(this.tipL);
			}
			this.slider.appendChild(this.selected);
			this.slider.appendChild(this.scale);
			this.slider.appendChild(this.pointerL);

			if (this.conf.range) {
				this.pointerR = createElement('div', this.cls.pointer, ['dir', 'right']);
				if (this.conf.tooltip) this.pointerR.appendChild(this.tipR);
				this.slider.appendChild(this.pointerR);
			}

			this.input.parentNode.insertBefore(this.slider, this.input.nextSibling);

	        if (this.conf.width) this.slider.style.width = parseInt(this.conf.width) + 'px';
			debugger
			this.sliderLeft = this.slider.getBoundingClientRect().left;
			this.sliderWidth = this.slider.clientWidth;
			this.pointerWidth = this.pointerL.clientWidth;

			if (!this.conf.scale) this.slider.classList.add(this.cls.noscale);

			return this.setInitialValues();	
		};

		RS.prototype.setInitialValues = function () {
			this.disabled(this.conf.disabled);

			if (this.valRange) this.conf.values = prepareArrayValues(this.conf);

			this.values.start = 0;
			this.values.end = this.conf.range ? this.conf.values.length - 1 : 0;


			if (this.conf.set && this.conf.set.length && checkInitial(this.conf)) {
				var vals = this.conf.set;

				if (this.conf.range) {
					this.values.start = this.conf.values.indexOf(vals[0]);
					this.values.end = this.conf.set[1] ? this.conf.values.indexOf(vals[1]) : null;
				}
				else this.values.end = this.conf.values.indexOf(vals[0]);
			}
			return this.createScale();
		};

		RS.prototype.createScale = function (resize) {
			this.step = this.sliderWidth / (this.conf.values.length - 1);

			for (var i = 0, iLen = this.conf.values.length; i < iLen; i++) {
				var span = createElement('span'),
					ins = createElement('ins');

				span.appendChild(ins);
				this.scale.appendChild(span);

				span.style.width = i === iLen - 1 ? 0 : this.step + 'px';

				if (!this.conf.labels) {
					if (i === 0 || i === iLen - 1) ins.innerHTML = this.conf.values[i];
				}
				else ins.innerHTML = this.conf.values[i];

				ins.style.marginLeft = (ins.clientWidth / 2) * - 1 + 'px';
			}
			return this.addEvents();
		};

		RS.prototype.updateScale = function () {
			this.step = this.sliderWidth / (this.conf.values.length - 1);

			var pieces = this.slider.querySelectorAll('span');

			for (var i = 0, iLen = pieces.length; i < iLen; i++)
				pieces[i].style.width = this.step + 'px';

			return this.setValues();
		};

		RS.prototype.addEvents = function () {
			var pointers = this.slider.querySelectorAll('.' + this.cls.pointer),
				pieces = this.slider.querySelectorAll('span');

			createEvents(document, 'mousemove touchmove', this.move.bind(this));
			createEvents(document, 'mouseup touchend touchcancel', this.drop.bind(this));

			for (var i = 0, iLen = pointers.length; i < iLen; i++)
				createEvents(pointers[i], 'mousedown touchstart', this.drag.bind(this));

			for (var i = 0, iLen = pieces.length; i < iLen; i++)
				createEvents(pieces[i], 'click', this.onClickPiece.bind(this));

			window.addEventListener('resize', this.onResize.bind(this));

			return this.setValues();
		};

		RS.prototype.drag = function (e) {
			e.preventDefault();

			if (this.conf.disabled) return;

			var dir = e.target.getAttribute('data-dir');
			if (dir === 'left') this.activePointer = this.pointerL;
			if (dir === 'right') this.activePointer = this.pointerR;

			return this.slider.classList.add('sliding');
		};

		RS.prototype.move = function (e) {
			if (this.activePointer && !this.conf.disabled) {
				var coordX = e.type === 'touchmove' ? e.touches[0].clientX : e.pageX,
					index = coordX - this.sliderLeft - (this.pointerWidth / 2);

				index = Math.round(index / this.step);

				if (index <= 0) index = 0;
				if (index > this.conf.values.length - 1) index = this.conf.values.length - 1;

				if (this.conf.range) {
					if (this.activePointer === this.pointerL) this.values.start = index;
					if (this.activePointer === this.pointerR) this.values.end = index;
				}
				else this.values.end = index;

				return this.setValues();
			}
		};

		RS.prototype.drop = function () {
			this.activePointer = null;
		};

		RS.prototype.setValues = function (start, end) {
			var activePointer = this.conf.range ? 'start' : 'end';

			if (start && this.conf.values.indexOf(start) > -1)
				this.values[activePointer] = this.conf.values.indexOf(start);

			if (end && this.conf.values.indexOf(end) > -1)
				this.values.end = this.conf.values.indexOf(end);

			if (this.conf.range && this.values.start > this.values.end)
				this.values.start = this.values.end;
				
			this.pointerL.style.left = (this.values[activePointer] * this.step - (this.pointerWidth / 2)) + 'px';

			if (this.conf.range) {
				if (this.conf.tooltip) {
					this.tipL.innerHTML = this.conf.values[this.values.start];
					this.tipR.innerHTML = this.conf.values[this.values.end];
				}
				this.input.value = this.conf.values[this.values.start] + ',' + this.conf.values[this.values.end];
				this.pointerR.style.left = (this.values.end * this.step - (this.pointerWidth / 2)) + 'px';
			}
			else {
				if (this.conf.tooltip)
					this.tipL.innerHTML = this.conf.values[this.values.end];
				this.input.value = this.conf.values[this.values.end];
			}

			if (this.values.end > this.conf.values.length - 1) this.values.end = this.conf.values.length - 1;
			if (this.values.start < 0) this.values.start = 0;

			this.selected.style.width = (this.values.end - this.values.start) * this.step + 'px';
			this.selected.style.left = this.values.start * this.step + 'px';		
			
			return this.onChange();
		};

		RS.prototype.onClickPiece = function (e) {

			if (this.conf.disabled) return;

			var idx = Math.round((e.clientX - this.sliderLeft) / this.step);

			if (idx > this.conf.values.length - 1) idx = this.conf.values.length - 1;
			if (idx < 0) idx = 0;

			if (this.conf.range) {
				if (idx - this.values.start <= this.values.end - idx) {
					this.values.start = idx;
				}
				else this.values.end = idx;
			}
			else this.values.end = idx;

			this.slider.classList.remove('sliding');

			return this.setValues();
		};

		RS.prototype.onChange = function () {
			var _this = this;

			if (this.timeout) clearTimeout(this.timeout);

			this.timeout = setTimeout(function () {
				if (_this.conf.onChange && typeof _this.conf.onChange === 'function') {		
					return _this.conf.onChange(_this.input.value, _this.values.end);
				}
			}, 500);
		};

		RS.prototype.onResize = function () {
			this.sliderLeft = this.slider.getBoundingClientRect().left;
			this.sliderWidth = this.slider.clientWidth;
			return this.updateScale();
		};

		RS.prototype.disabled = function (disabled) {
			this.conf.disabled = disabled;
			this.slider.classList[disabled ? 'add' : 'remove']('disabled');
		};

		RS.prototype.getValue = function () {
			return this.input.value;
		};

		RS.prototype.destroy = function () {
			this.input.style.display = this.inputDisplay;
			this.slider.remove();
		};

		var createElement = function (el, cls, dataAttr) {
			var element = document.createElement(el);
			if (cls) element.className = cls;
			if (dataAttr && dataAttr.length === 2)
				element.setAttribute('data-' + dataAttr[0], dataAttr[1]);

			return element;
		},

		createEvents = function (el, ev, callback) {
			var events = ev.split(' ');

			for (var i = 0, iLen = events.length; i < iLen; i++)
				el.addEventListener(events[i], callback);
		},

		prepareArrayValues = function (conf) {
			var values = [],
				range = conf.values.max - conf.values.min;

			if (!conf.step) {
				console.log('No step defined...');
				return [conf.values.min, conf.values.max];
			}

			for (var i = 0, iLen = (range / conf.step); i < iLen; i++)
				values.push(conf.values.min + i * conf.step);

			if (values.indexOf(conf.values.max) < 0) values.push(conf.values.max);

			return values;
		},

		checkInitial = function (conf) {
			if (!conf.set || conf.set.length < 1) return null;
			if (conf.values.indexOf(conf.set[0]) < 0) return null;

			if (conf.range) {
				if (conf.set.length < 2 || conf.values.indexOf(conf.set[1]) < 0) return null;
			}
			return true;
		};

		window.rSlider = RS;

	})();

	// import 


	let myPromise;


	$(function() {
	    addHTML();
	    toggleArtWorkImg();
	});
	 function addHTML() {
	   // debugger;
	    var el, i, domEl, fileName, xmlHttp;
	    
	    /*Iterate all DOM*/
	    //el = document.getElementsByTagName("*");
	    el = document.querySelectorAll('[w3-include-html]');
	    
	    myPromise = new Promise(function(resolve, reject) {
	        if(el.length) {
	            for (i = 0; i < el.length; i++) {
	                domEl = el[i];
	                
	                /*find the element having w3-include-html attribute*/
	                fileName = domEl.getAttribute("w3-include-html");
	                if (fileName) {
	                    
	                    /*http request with attribute value as file name*/
	                    xmlHttp = new XMLHttpRequest();
	                    xmlHttp.onreadystatechange = function() {
	                        if (this.readyState == 4) {
	                            if (this.status == 200) {
	                            domEl.innerHTML = this.responseText;
	                            }
	                            if (this.status == 404) {
	                            domEl.innerHTML = "Page not found.";
	                            }
	                            
	                            /* Remove the attribute and invoke the function again*/
	                            domEl.removeAttribute("w3-include-html");
	                            addHTML();
	                        }
	                    };
	                    xmlHttp.open("GET", fileName, true);
	                    xmlHttp.send();
	                    
	                    /*function ends*/
	                    return;
	                }
	            }
	            resolve(true);
	        }
	        else {
	            resolve(true);
	        }
	    });

	    myPromise.then(function(flag) {
	        if(flag) {
	            bindOpenMethods();
	        }
	    }).catch(function(){
	        bindOpenMethods();
	        console.log("Nothing to include");
	    });
	   
	 }

	 function bindOpenMethods() {
	    $(".toggleRegisterLoginPopup").off("click").on("click", function() {
	        openLoginModal(this);
	    });
	    $(".waitlist-cta-btn").off("click").on("click", function() {
				debugger;
	      let email = $(this).closest(".modal-content").find("#waitListEmail");
				  saveEmailInfo(email);
				});
	 }

	 function openLoginModal(elem) {
	    const isLogin = $(elem).attr("login");
	    if(isLogin == "enable") {
	        $("#registerModal").modal("hide");
	        $("#loginModal").modal("show");
	    } else {
	        $("#loginModal").modal("hide");
	        $("#registerModal").modal("show");
	    }  
	}

	function saveEmailInfo(input) {

	  $.ajax({
	    url: "https://abit-backend-production.up.railway.app/api/waitlist",
	    type: 'POST',
	    data: {
	      "email": JSON.stringify($(input).val())
	    },
	    contentType: "application/json; charset=utf-8",
	    success: function (data) {
	      $(input).val("");
	},
	    error: function (XMLHttpRequest, textStatus, errorThrown) {
	       $(input).val("");
	    }
	  });
	}
	function toggleArtWorkImg() {
	    setInterval(function() {
	        $(".gif-img").find("img.gif-person").toggleClass("d-none");
	    }, 2000);
	}

	function toggleAccordian(elem) {
	  debugger
	  if($(this).attr("tool") == undefined) {

	  let nextSibling = $(this).next(".collapse");
	  // let status = $(this).closest(".cstm-accordian").find(".collapse").hasClass("show");
	  // if(status) {
	  //   $(this).closest(".cstm-accordian").find(".collapse").toggleClass("show");
	  //   //$(this).closest(".cstm-accordian").find("img.toggle-icon").removeClass("d-none");
	  // }
	  $(nextSibling).toggleClass("show");

	  $(this).find("img.toggle-icon").toggleClass("d-none");
	}
	}

	$(function(){
	    $('.cstm-accordian .card-header').off("click").on("click", function(event) {

	      toggleAccordian.call(this, event);
	      // $("#collapseOne3").toggleClass("show");
	      // if(!$("#collapseOne3").hasClass("show")) {
	      //   $("#collapseOne3").addClass("show");
	      // } else {
	      //   $("#collapseOne3").removeClass("show");
	      // }
	    });

	    let flag=0;
	    $('.next').click(function(){
	      if(flag == 0){
	        $('.c1').css({'transform':'translateX(-100px) scale(0.7)','z-index':'9'});
	        $('.c2').css({'transform':'translateX(100px) scale(1.2)','z-index':'9'});
	        $('.c3').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
	        flag = 1;
	      } else if(flag == 1){
	        $('.c3').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
	        $('.c1').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
	        $('.c2').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
	        flag = 2;
	      }else if(flag == 2){
	        $('.c2').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
	        $('.c3').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
	        $('.c1').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
	        flag = 0;
	      }
	    });
	    $('.prev').click(function(){
	      if(flag == 0){
	        $('.c3').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
	        $('.c1').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
	        $('.c2').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
	        flag = 1;
	      } else if(flag == 1){
	        $('.c1').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
	        $('.c2').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
	        $('.c3').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
	        flag = 2;
	      }else if(flag == 2){
	        $('.c2').css({'transform':'translateX(-100px) scale(1)','z-index':'9'});
	        $('.c3').css({'transform':'translateX(100px) scale(1)','z-index':'9'});
	        $('.c1').css({'transform':'translateX(0) scale(1.5)','z-index':'99'});
	        flag = 0;
	      }
	    });
	  });

}());
