const questions = [
  {"Question":"Why so JavaScript and Java have similar name?",
  "A":"JavaScript is a stripped-down version of Java",
  "B":"JavaScript's syntax is loosely based on Java's",
  "C":"They both originated on the island of Java",
  "D":"None of the above",
  "Ans": "B"},
  {"Question":"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    "A":"The User's machine running a Web browser",
    "B":"The Web server",
    "C":"A central machine deep within Netscape's corporate offices",
    "D":"None of the above",
    "Ans":"A"},
  {"Question":"______ JavaScript is also called client-side JavaScript.",
    "A":"Microsoft",
    "B":"Navigator",
    "C": "LiveWire",
    "D": "Native",
    "Ans": "B"},
  {"Question":"__________ JavaScript is also called server-side JavaScript.",
    "A":"Microsoft",
    "B":"Navigator",
    "C": "LiveWire",
    "D": "Native",
    "Ans": "C"},
  {"Question":"What are variables used for in JavaScript Programs?",
    "A":"Storing numbers, dates, or other values",
    "B":"Varying randomly",
    "C": "Causing high-school algebra flashbacks",
    "D": "None of the above",
    "Ans": "A"},
  {"Question":"_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    "A":"Client-side",
    "B":"Server-side",
    "C": "Local",
    "D": "Native",
    "Ans": "A"},
    {"Question":"What should appear at the very end of your JavaScript?",
      "A":"The </script>",
      "B":"The <script LANGUAGE='JavaScript'>tag",
      "C": "The END statement",
      "D": "None of the above",
      "Ans": "A"},
    {"Question":"Which of the following can't be done with client-side JavaScript?",
      "A":"Validating a form",
      "B":"Sending a form's contents by email",
      "C": "Storing the form's contents to a database file on the server",
      "D": "None of the above",
      "Ans": "C"},
    {"Question":" Which of the following are capabilities of functions in JavaScript?",
      "A":"Return a value",
      "B":"Accept parameters and Return a value",
      "C": "Accept parameters",
      "D": "None of the above",
      "Ans": "C"},
    {"Question":"Which of the following is not a valid JavaScript variable name?",
      "A":"2names",
      "B":"A_first_and_last_names",
      "C": "FirstAndLast",
      "D": "None of the above",
      "Ans": "A"},
    {"Question":"______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
      "A":"<SCRIPT>",
      "B":"<BODY>",
      "C": "<HEAD>",
      "D": "<TITLE>",
      "Ans": "A"},
    {"Question":"How does JavaScript store dates in a date object?",
      "A":"The number of milliseconds since January 1st, 1970",
      "B":"The number of days since January 1st, 1900",
      "C": "The number of seconds since Netscape's public stock offering.",
      "D": "None of the above",
      "Ans": "A"},
    {"Question":"Which of the following attribute can hold the JavaScript version?",
      "A":"LANGUAGE",
      "B":"SCRIPT",
      "C": "VERSION",
      "D": "None of the above",
      "Ans": "A"},
    {"Question": "What is the correct JavaScript syntax to write 'Hello World'?",
      "A":"System.out.println('Hello World')",
      "B":"println ('Hello World')",
      "C": "document.write('Hello World')",
      "D": "response.write('Hello World')",
      "Ans": "C"},
    {"Question": "Which of the following way can be used to indicate the LANGUAGE attribute?",
      "A":"<LANGUAGE='JavaScriptVersion'>",
      "B":"<SCRIPT LANGUAGE='JavaScriptVersion'>",
      "C": "<SCRIPT LANGUAGE='JavaScriptVersion'>JavaScript</SCRIPT>",
      "D": "<SCRIPT LANGUAGE='JavaScriptVersion'!>JavaScript</SCRIPT>",
      "Ans": "C"},
    {"Question": "Inside which HTML element do we put the JavaScript?",
      "A":"<js>",
      "B":"<scripting>",
      "C": "<script>",
      "D": "<javascript>",
      "Ans": "C"},
    {"Question": "What is the correct syntax for referring to an external script called 'abc.js'?",
      "A":"<script href='abc.js'>",
      "B":"<script name='abc.js'>",
      "C":"<script src='abc.js'>",
      "D": "None of the above",
      "Ans": "C"},
    {"Question": "Which types of image maps can be used with JavaScript?",
      "A":"Server-side image maps",
      "B":"Client-side image maps",
      "C":"Server-side image maps and Client-side image maps",
      "D": "None of the above",
      "Ans": "B"},
    {"Question": " Which of the following navigator object properties is the same in both Netscape and IE?",
      "A":"navigator.appCodeName",
      "B":"navigator.appName",
      "C":"navigator.appVersion",
      "D": "None of the above",
      "Ans": "A"},
    {"Question": "Which is the correct way to write a JavaScript array?",
      "A":"var txt = new Array(1:'tim',2:'kim',3:'jim')",
      "B":"var txt = new Array:1=('tim')2=('kim')3=('jim')",
      "C":"var txt = new Array('tim','kim','jim')",
      "D": "var txt = new Array='tim','kim','jim'",
      "Ans": "C"},
    {"Question": "What does the <noscript> tag do?",
      "A":"Enclose text to be displayed by non-JavaScript browsers.",
      "B":"Prevents scripts on the page from executing.",
      "C":"Describes certain low-budget movies.",
      "D": "None of the above",
      "Ans": "A"},
    {"Question": "If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?",
      "A":"'New Text'?",
      "B":"para1.value='New Text';",
      "C":"para1.firstChild.nodeValue= 'New Text';",
      "D": " para1.nodeValue='New Text';",
      "Ans": "B"},
    {"Question": "JavaScript entities start with _______ and end with _________.",
      "A":"Semicolon, colon?",
      "B":"Semicolon, Ampersand",
      "C":"Ampersand, colon",
      "D": "Ampersand, semicolon",
      "Ans": "D"},
    {"Question": "Which of the following best describes JavaScript?",
      "A":"a low-level programming language.",
      "B":"a scripting language precompiled in the browser.",
      "C":"a compiled scripting language.",
      "D": "an object-oriented scripting language.",
      "Ans": "D"},
    {"Question": "Choose the server-side JavaScript object?",
      "A":"FileUpLoad",
      "B":"Function",
      "C":"File",
      "D": "Date",
      "Ans": "C"},
    {"Question": "Choose the client-side JavaScript object?",
      "A":"Database",
      "B":"Cursor",
      "C":"Client",
      "D": "FileUpLoad",
      "Ans": "D"},
    {"Question": "Which of the following is not considered a JavaScript operator?",
      "A":"new",
      "B":"this",
      "C":"delete",
      "D": "typeof",
      "Ans": "B"},
    {"Question": "______method evaluates a string of JavaScript code in the context of the specified object.",
      "A":"Eval",
      "B":"ParseInt",
      "C":"ParseFloat",
      "D": "Efloat",
      "Ans": "A"},
    {"Question": "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?",
      "A":"onfocus",
      "B":"onblur",
      "C":"onclick",
      "D": "ondblclick",
      "Ans": "B"},
    {"Question": "The syntax of Eval is ________________",
      "A":"[objectName.]eval(numeriC.",
      "B":"[objectName.]eval(string)",
      "C":"[EvalName.]eval(string)",
      "D": "[EvalName.]eval(numeriC.",
      "Ans": "B"},
    {"Question": "JavaScript is interpreted by _________",
      "A":"Client",
      "B":"Server",
      "C":"Object",
      "D": "None of the above",
      "Ans": "A"},
    {"Question": "Using _______ statement is how you test for a specific condition.",
      "A":"Select",
      "B":"If",
      "C":"Switch",
      "D": "For",
      "Ans": "B"},
    {"Question": "Which of the following is the structure of an if statement?",
      "A":"if (conditional expression is true) thenexecute this codeend if",
      "B":"if (conditional expression is true)execute this codeend if",
      "C":"if (conditional expression is true)   {then execute this code>->}",
      "D": "if (conditional expression is true) then {execute this code}",
      "Ans": "C"},
    {"Question": "How to create a Date object in JavaScript?",
      "A":"dateObjectName = new Date([parameters])",
      "B":"dateObjectName.new Date([parameters])",
      "C":"dateObjectName := new Date([parameters])",
      "D": "dateObjectName Date([parameters])",
      "Ans": "A"},
    {"Question": "The _______ method of an Array object adds and/or removes elements from an array.",
      "A":"Reverse",
      "B":"Shift",
      "C":"Slice",
      "D": "Splice",
      "Ans": "D"},
    {"Question": "To set up the window to capture all Click events, we use which of the following statement?",
      "A":"window.captureEvents(Event.CLICK);",
      "B":"window.handleEvents (Event.CLICK);",
      "C":"window.routeEvents(Event.CLICK );",
      "D": "window.raiseEvents(Event.CLICK );",
      "Ans": "A"},
    {"Question": "Which tag(s) can handle mouse events in Netscape?",
      "A":"<IMG>",
      "B":"<A>",
      "C":"<BR>",
      "D": "None of the above",
      "Ans": "B"},
    {"Question": "____________ is the tainted property of a window object.",
      "A":"Pathname",
      "B":"Protocol",
      "C":"Defaultstatus",
      "D": "Host",
      "Ans": "C"},
    {"Question": "To enable data tainting, the end user sets the _________ environment variable.",
      "A":"ENABLE_TAINT",
      "B":"MS_ENABLE_TAINT",
      "C":"NS_ENABLE_TAINT",
      "D": "ENABLE_TAINT_NS",
      "Ans": "C"},
    {"Question": "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
      "A":"a wrapper",
      "B":"a link",
      "C":"a cursor",
      "D": "a form",
      "Ans": "A"},
    {"Question": "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________",
      "A":"ScriptObject",
      "B":"JSObject",
      "C":"JavaObject",
      "D": "Jobject",
      "Ans": "B"},
    {"Question": "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.",
      "A":"ScriptObject",
      "B":"JSObject",
      "C":"JavaObject",
      "D": "Jobject",
      "Ans": "B"},
    {"Question": "_________ is a wrapped Java array, accessed from within JavaScript code.",
      "A":"JavaArray",
      "B":"JavaClass",
      "C":"JavaObject",
      "D": "JavaPackage",
      "Ans": "A"},
    {"Question": "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript .",
      "A":"JavaArray",
      "B":"JavaClass",
      "C":"JavaObject",
      "D": "JavaPackage",
      "Ans": "B"},
    {"Question": "The JavaScript exception is available to the Java code as an instance of __________",
      "A":"netscape.javascript.JSObject",
      "B":"netscape.javascript.JSException",
      "C":"JavaOnetscape.plugin.JSExceptionbject",
      "D": "None of the above",
      "Ans": "B"},
    {"Question": "To automatically open the console when a JavaScript error occurs which of the following is added to prefs.js?",
      "A":"user_pref('javascript.console.open_on_error', false);",
      "B":"user_pref('javascript.console.open_error', true);",
      "C":"user_pref('javascript.console.open_error', false);",
      "D": "user_pref('javascript.console.open_on_error', true);",
      "Ans": "D"},
    {"Question": "To open a dialog box each time an error occurs, which of the following is added to prefs.js?",
      "A":"user_pref('javascript.classic.error_alerts', true);",
      "B":"user_pref('javascript.classic.error_alerts ', false);",
      "C":"user_pref('javascript.console.open_on_error ', true);",
      "D": "user_pref('javascript.console.open_on_error ', false);",
      "Ans": "A"},
    {"Question": "The syntax of a blur method in a button object is ______________",
      "A":"Blur()",
      "B":"Blur(contrast)",
      "C":"Blur(value)",
      "D": "Blur(depth)",
      "Ans": "A"},
    {"Question": "The syntax of capture events method for document object is ______________",
      "A":"captureEvents()",
      "B":"captureEvents(args eventType)",
      "C":"captureEvents(eventType)",
      "D": "captureEvents(eventVal)",
      "Ans": "C"},
    {"Question": "The syntax of close method for document object is ______________",
      "A":"Close(doC.",
      "B":"Close(object)",
      "C":" Close(val)",
      "D": "Close()",
      "Ans": "D"},
    {"Question": "<script type='text/javascript' x=4+'4': document.write(x)</script> Output------?",
      "A":"44",
      "B":"8",
      "C":"4",
      "D": "Error output",
      "Ans": "A"},
    {"Question": "Is it possible to nest functions in JavaScript?",
      "A":"True",
      "B":"False",
      "Ans": "A"},
    {"Question": "<script>document.write(navigator.appCodeName)</script>",
      "A":"get code name of the browser of a visitor",
      "B":"set code name of the browser of a visitor",
      "C":"None of the above",
      "Ans": "A"},
    {"Question": "Scripting language are",
      "A":"High Level Programming language",
      "B":"Assembly Level programming language",
      "C":"Machine level programming language",
      "Ans": "A"},
    {"Question": "Which best explains getSelection()?",
      "A":"Returns the VALUE of a selected OPTION.",
      "B":"Returns document.URL of the window in focus.",
      "C":"Returns the value of cursor-selected text",
      "D": "Returns the VALUE of a checked radio input.",
      "Ans": "C"},
    {"Question": "Choose the client-side JavaScript object:",
      "A":"Database",
      "B":"Cursor",
      "C":"Client",
      "D": "FileUpLoad",
      "Ans": "D"},
    {"Question": "What is mean by 'this' keyword in javascript?",
      "A":"It refers current object",
      "B":"It referes previous object",
      "C":"It is variable which contains value",
      "D": "None of the above",
      "Ans": "A"},
    {"Question": "In JavaScript, Window.prompt() method return true or false value ?",
      "A":"False",
      "B":"True",
      "Ans": "A"},
    {"Question": "<script language='javascript'>function x(){document.write(2+5+'8')}</script>",
      "A":"258",
      "B":"Error",
      "C":"7",
      "D": "78",
      "Ans": "D"},
    {"Question": "<script type='text/javascript'>var s ='9123456 or 80000?';var pattern = /\d{4}/;var output = s.match(pattern);document.write(output);</script>",
      "A":"9123",
      "B":"91234",
      "C":"80000",
      "D": "None of the above",
      "Ans": "A"}
    ];

module.exports = questions;