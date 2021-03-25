Prism.languages.lsf = {
	'comment': {
		pattern: /(^|[^\\])(?:\/\/).*/,
		lookbehind: true
	},
	'string': {
		pattern: /'(\\'|\\\\|[^\n\r'])*'/,
		greedy: true,
	},
	'keyword': /\b(?:BOOLEAN|BPISTRING|BPSTRING|COLOR|CSVFILE|CSVLINK|DATE|DATETIME|DOUBLE|EXCELFILE|EXCELLINK|FILE|HTMLFILE|HTMLLINK|IMAGEFILE|IMAGELINK|INTEGER|ISTRING|JSONFILE|JSONLINK|LINK|LONG|NUMERIC|PDFFILE|PDFLINK|RAWFILE|RAWLINK|RICHTEXT|STRING|TABLEFILE|TABLELINK|TEXT|TIME|WORDFILE|WORDLINK|XMLFILE|XMLLINK|YEAR|ABSTRACT|ACTION|ACTIVATE|ACTIVE|AFTER|AGGR|ALL|AND|APPEND|APPLY|AS|ASK|ASON|ASYNCUPDATE|ATTACH|ATTR|AUTOREFRESH|AUTOSET|BACKGROUND|BCC|BEFORE|BODY|BODYURL|BOTTOM|BOX|BREAK|BY|CANCEL|CANONICALNAME|CASE|CATCH|CC|CENTER|CHANGE|CHANGEABLE|CHANGECLASS|CHANGED|CHANGEKEY|CHANGEWYS|CHARSET|CHARWIDTH|CHECK|CHECKED|CLASS|CLASSCHOOSER|CLIENT|CLOSE|COLUMNS|COMPLEX|CONCAT|CONFIRM|CONNECTION|CONSTRAINT|CONSTRAINTFILTER|CONTAINERH|CONTAINERV|CONTEXTMENU|COOKIES|COOKIESTO|CSV|CUSTOM|CYCLES|DATA|DBF|DEFAULT|DEFAULTCOMPARE|DELAY|DELETE|DESC|DESIGN|DIALOG|DO|DOC|DOCKED|DOCX|DRAW|DRAWROOT|DRILLDOWN|DROP|DROPCHANGED|DROPPED|ECHO|EDIT|ELSE|EMAIL|END|EQUAL|ESCAPE|EVAL|EVENTID|EVENTS|EXCEPTLAST|EXCLUSIVE|EXEC|EXPORT|EXTEND|EXTERNAL|EXTID|EXTKEY|FALSE|FIELDS|FILTER|FILTERGROUP|FILTERGROUPS|FILTERS|FINALLY|FIRST|FIXED|FLEX|FLOAT|FOLDER|FOOTER|FOR|FOREGROUND|FORM|FORMEXTID|FORMS|FORMULA|FROM|FULL|GET|GLOBAL|GOAFTER|GRID|GRIDBOX|GROUP|GROUPCHANGE|HALIGN|HEADER|HEADERS|HEADERSTO|HIDE|HIDESCROLLBARS|HIDETITLE|HINTNOUPDATE|HINTTABLE|HORIZONTAL|HTML|HTTP|IF|IMAGE|IMPORT|IMPOSSIBLE|IN|INDEX|INDEXED|INIT|INLINE|INPUT|INTERNAL|IS|JAVA|JOIN|JSON|KEYPRESS|LAST|LEFT|LIKE|LIMIT|LIST|LOCAL|LOGGABLE|LSF|MANAGESESSION|MATERIALIZED|MAX|MEMO|MENU|MESSAGE|META|MIN|MODULE|MOVE|MS|MULTI|NAGGR|NAME|NAMESPACE|NATIVE|NAVIGATOR|NESTED|NESTEDSESSION|NEW|NEWEDIT|NEWEXECUTOR|NEWSESSION|NEWSQL|NEWTHREAD|NO|NOCANCEL|NOCHANGE|NOCONSTRAINTFILTER|NODEFAULT|NOESCAPE|NOFLEX|NOHEADER|NOHINT|NOINLINE|NOMANAGESESSION|NONULL|NOPREVIEW|NOT|NOWAIT|NULL|OBJECT|OBJECTS|OK|ON|OPTIMISTICASYNC|OR|ORDER|OVERRIDE|PAGESIZE|PANEL|PARAMS|PARENT|PARTITION|PASSWORD|PDF|PERIOD|PG|POSITION|POST|PREV|PREVIEW|PRINT|PRIORITY|PROPERTIES|PROPERTY|PROPORTION|PUT|QUERYCLOSE|QUERYOK|QUICKFILTER|READ|READONLY|READONLYIF|RECURSION|REFLECTION|REGEXP|REMOVE|REPORT|REPORTFILES|REQUEST|REQUIRE|RESOLVE|RETURN|RGB|RIGHT|ROOT|ROUND|RTF|SCHEDULE|SCROLL|SEEK|SELECTOR|SERIALIZABLE|SET|SETCHANGED|SETDROPPED|SHEET|SHOW|SHOWDEP|SHOWIF|SHOWTYPE|SINGLE|SPLITH|SPLITV|SQL|START|STEP|STRETCH|STRICT|STRUCT|SUBJECT|SUBREPORT|SUM|TAB|TABBED|TABLE|TAG|TEXTHALIGN|TEXTVALIGN|THEN|THREADS|TO|TOOLBAR|TOOLBARBOX|TOOLBARLEFT|TOOLBARRIGHT|TOOLBARSYSTEM|TOP|TREE|TRUE|TRY|UNGROUP|USERFILTER|VALIGN|VALUE|VERTICAL|VIEW|WAIT|WHEN|WHERE|WHILE|WINDOW|WRITE|XLS|XLSX|XML|XOR|YES|YESNO)\b/,
	'number': /\b\d+\.(?:\d*D?\b)?|\b\d\d:\d\d\b|\b\d{4}_\d\d_\d\d(?:_\d\d:\d\d)?\b|\b\d+L?\b|\b#[0-9a-f]{6}\b/i,
	'operator': /[-+*\/=<>]|!=|<=|==|>=|<-|=>|\+=|###?|\(\+\)|\(-\)/,
	'punctuation': /[;\[\](){},.]/,
	'function': /@[a-zA-Z]\w*\b/,
};