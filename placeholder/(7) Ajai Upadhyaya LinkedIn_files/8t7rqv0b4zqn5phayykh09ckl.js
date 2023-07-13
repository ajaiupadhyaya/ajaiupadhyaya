define("@linkedin/xmessageformat-js",["exports","@linkedin/jsecure"],(function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.PossessiveFormatter=e.PluralFormatter=e.NumberFormatter=e.NameFormatter=e.NAME_STYLES=e.DateFormatter=e.DEFAULT_TIME_PATTERN=e.DEFAULT_NAME_STYLE=e.DEFAULT_DATE_PATTERN=e.DATE_FORMAT_MAP=e.ChooserFormatter=void 0
e.Rtl=function(){return{isRtl:(n=" \n\r\t\f \u2028\u2029".split(""),i="~!@#$%^&*()_+`1234567890-={}|[]\\:\";'<>?,./".split(""),o=n.concat(i),"֐","ۿ",t=(e=/&(?:(lt|gt|amp|quot|nbsp)|#x([\da-f]{1,4})|#(\d{1,5}));/gi,function(n){return null==n?null:"".concat(n).replace(e,ai)}),a=ri(o,"֐","ۿ"),function(e){return-1!==a(t(e))})}
var e
var n,i,o,t,a}
e.TruncationFormatter=e.TimeFormatter=e.TIME_FORMAT_MAP=void 0
e.default=Ii
e.formatCurrency=function(e,n,i){return ei({amount:e,currencyCode:n},i)}
e.formatDate=Tn
e.formatInteger=function(e,n){return ni(e,n,{parameters:{integer:{key:"integer",value:[],delimiter:"",order:-1}}})}
e.formatName=Qn
e.formatNumber=function(e,n){return ni(e,n)}
e.formatTime=mi
e.fromString=function(e,n){return Ri(Ni(e),n)}
e.getOutputFilter=function(){return Ei}
e.getRules=Ln
e.getSantizeUrl=ue
e.getUserDataFilter=function(){return le()}
e.isRule=An
e.makeInterpolator=Ri
e.render=function(e,n,i){if(1===e.length&&"string"==typeof e[0])return Ei(e[0])
return Ei(Di(e,n,i))}
e.setOutputFilter=function(e){Ei=e}
e.setSanitizeUrl=function(e){me=e}
e.setUserDataFilter=function(e){ce(e)}
e.toAst=Ni
function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}})
Object.defineProperty(e,"prototype",{writable:!1})
n&&o(e,n)}function o(e,n){o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){e.__proto__=n
return e}
return o(e,n)}function t(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))
return!0}catch(e){return!1}}()
return function(){var i,o=r(e)
if(n){var t=r(this).constructor
i=Reflect.construct(o,arguments,t)}else i=o.apply(this,arguments)
return a(this,i)}}function a(e,n){if(n&&("object"===u(n)||"function"==typeof n))return n
if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function r(e){r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)}
return r(e)}function _(){_=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n]
for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e}
return _.apply(this,arguments)}function s(e,n){var i=Object.keys(e)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{}
n%2?s(Object(i),!0).forEach((function(n){c(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function c(e,n,i){(n=b(n))in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i
return e}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=i){var o,t,a,r,_=[],s=!0,l=!1
try{if(a=(i=i.call(e)).next,0===n){if(Object(i)!==i)return
s=!1}else for(;!(s=(o=a.call(i)).done)&&(_.push(o.value),_.length!==n);s=!0);}catch(e){l=!0,t=e}finally{try{if(!s&&null!=i.return&&(r=i.return(),Object(r)!==r))return}finally{if(l)throw t}}return _}}(e,n)||function(e,n){if(!e)return
if("string"==typeof e)return m(e,n)
var i=Object.prototype.toString.call(e).slice(8,-1)
"Object"===i&&e.constructor&&(i=e.constructor.name)
if("Map"===i||"Set"===i)return Array.from(e)
if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return m(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length)
for(var i=0,o=new Array(n);i<n;i++)o[i]=e[i]
return o}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function g(e,n){for(var i=0;i<n.length;i++){var o=n[i]
o.enumerable=o.enumerable||!1
o.configurable=!0
"value"in o&&(o.writable=!0)
Object.defineProperty(e,b(o.key),o)}}function h(e,n,i){n&&g(e.prototype,n)
i&&g(e,i)
Object.defineProperty(e,"prototype",{writable:!1})
return e}function b(e){var n=function(e,n){if("object"!==u(e)||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var o=i.call(e,n||"default")
if("object"!==u(o))return o
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string")
return"symbol"===u(n)?n:String(n)}var y=function(){function e(n){p(this,e)
this.source=n
this.index=0
this.cursor=n.charCodeAt(0)
this.previousCharCode=0
0===n.length&&(this.cursor=0)}h(e,[{key:"isEscaped",get:function(){return 92===this.previousCharCode}},{key:"hasNext",get:function(){return 0!==this.cursor}},{key:"currentChar",get:function(){return this.index<this.source.length?this.source.charAt(this.index):""}},{key:"currentCharCode",get:function(){return this.cursor}},{key:"next",value:function(){this.previousCharCode=this.cursor
this.index++
this.index<this.source.length?this.cursor=this.source.charCodeAt(this.index):this.cursor=0}},{key:"toString",value:function(){return"index ".concat(this.index,' in string "').concat(this.source,'"')}}])
return e}(),f="",w=/[a-zA-Z]/,v=/[1-9]/,k=/[0-9]/,x=/[a-zA-Z0-9]/,S=/[a-zA-Z0-9_\-~.|\[\]\/]/,j=/[#]/,C=/[#+<]/,T=/[#+<]/,L={number:-1,keyword:f},A="simple"
function P(e,n){throw new SyntaxError("XMessage parsing error: ".concat(e," at ").concat(n.toString()))}function I(e,n,i){var o={},t=function(e){for(var n=[],i=[],o=[];e.hasNext;){123===e.currentCharCode?n.push(e.currentChar):125===e.currentCharCode&&n.pop()
if(0===n.length&&124===e.currentCharCode){0===o.length&&P('Unexpected "|" in style list.',e)
i.push(o.join(f))
o.length=0
e.next()}else{o.push(e.currentChar)
e.next()}}if(o.length>0){i.push(o.join(f))
o.length=0}return i}(e)
t.map((function(e,o){return function(e,n,i){var o=j
"choice"===n&&(o=C)
"plural"===n&&(o=T)
for(var t=[],a="",r="",_=[];e.hasNext;){if(o.test(e.currentChar))if(0===t.length)P('Error parsing style key/value. Found delimiter "'.concat(e.currentChar,'" but expected key.'),e)
else if(""===r){r=t.join(f)
t.length=0
a=e.currentChar
e.next()}t.push(e.currentChar)
e.next()}if(""===a){r=t.join(f)
t.length=0}else{if(t.length>0){var s=t.join(f)
void 0!==s&&(_=D(s))}t.length=0}(r.startsWith(" ")||r.endsWith(" "))&&P("leading/trailing spaces not allowed in keys",e)
"map"===n&&""!==r&&void 0===_&&P('missing style value for "'.concat(r,'"'),e)
return{key:r,value:_,delimiter:a,order:i}}(new y(e),n,o+i)})).forEach((function(n,t){n.order=t+i
Object.prototype.hasOwnProperty.call(o,n.key)?P('Found duplicate style key "'.concat(n.key,'". Styles must have unique names.'),e):o[n.key]=n}))
return o}function N(e,n){switch(n){case"date":case"number":return function(e){for(var n={};e.hasNext;){for(var i=[];e.hasNext&&124!==e.currentCharCode;){i.push(e.currentChar)
e.next()}var o=i.join(f);(o.startsWith(" ")||o.endsWith(" "))&&P("leading/trailing spaces not allowed in values",e)
n[o]={key:o,value:null,delimiter:"",order:0}
e.hasNext&&e.next()}return n}(e)
default:return I(e,n,0)}}function E(e){var n=L,i=A,o=f,t={}
if(e.hasNext){n=function(e){var n=[],i=[],o=-1,t=f,a=!1
if(48===e.currentCharCode){n.push(e.currentChar)
e.next()
a=!0}a&&e.hasNext&&44!==e.currentCharCode&&58!==e.currentCharCode&&P('Could not parse index; expected ":" or end of identifier but found "'.concat(e.currentChar,'"'),e)
if(v.test(e.currentChar))for(;e.currentChar&&k.test(e.currentChar);){n.push(e.currentChar)
e.next()}if(58===e.currentCharCode){e.next()
if(e.currentChar&&x.test(e.currentChar)){i.push(e.currentChar)
e.next()}else P('Expected letter (a-zA-Z) or number (0-9) but found "'.concat(e.currentChar,'"'),e)
for(;e.currentChar&&S.test(e.currentChar);){i.push(e.currentChar)
e.next()}}else 0===n.length&&e.hasNext&&P('Unexpected character; expected ":" but found "'.concat(e.currentChar,'"'),e)
if(44===e.currentCharCode||0===e.currentCharCode){o=parseInt(n.join(f),10)
isNaN(o)&&(o=-1)
t=i.join(f)}else P('Unexpected character; expected "," or end of identifier but found "'.concat(e.currentChar,'"'),e)
return{number:o,keyword:t}}(e)
if(44===e.currentCharCode){e.next()
i=function(e){var n=[]
if(0===e.currentCharCode)P('Unable to parse type. Expected letter (a-zA-Z) but found end of identifier after ","',e)
else for(;e.currentChar&&w.test(e.currentChar);){n.push(e.currentChar)
e.next()}return n.join(f)}(e)
if(44===e.currentCharCode){e.next()
o=function(e,n){var i=f
if("list"===n){for(var o=[];e.hasNext&&44!==e.currentCharCode;){o.push(e.currentChar)
e.next()}i=o.join(f)}return i}(e,i)
44!==e.currentCharCode&&124!==e.currentCharCode||e.next()
e.currentCharCode&&(t=N(e,i))}}else i=A}else P("Error parsing placeholder. Unexpected end of input.",e)
e.currentCharCode&&P('Unexpected character "'.concat(e.currentChar,'".'),e)
return"list"===i?{type:"list",parameters:t,subType:o,index:n}:{type:i,parameters:t,index:n}}function R(e){return"string"==typeof e?e:(n=e.text,E(new y(n)))
var n}function D(e){if(-1===e.indexOf("{")&&-1===e.indexOf("'"))return[e]
for(var n=function(e){for(var n=[],i=[],o=[],t=new y(e),a=!1;t.hasNext;)if(92!==t.currentCharCode||t.isEscaped)if(t.isEscaped){o.push(t.currentChar)
t.next()}else{if(0===i.length&&39===t.currentCharCode){t.next()
if(39===t.currentCharCode){o.push("'")
t.next()
continue}a=!a
if(o.length>0){n.push(o.join(f))
o.length=0}}if(a){t.hasNext&&o.push(t.currentChar)
t.next()}else if(125!==t.currentCharCode||t.isEscaped||0!==i.length)if(123===t.currentCharCode){if(0===i.length){if(o.length>0){n.push(o.join(f))
o.length=0}}else o.push(t.currentChar)
i.push(t.currentChar)
t.next()}else if(125===t.currentCharCode){i.pop()
if(0===i.length)if(o.length>0){n.push({text:o.join(f)})
o.length=0}else P("Unexpected end of placeholder (found no content)",t)
else o.push(t.currentChar)
t.next()}else{t.hasNext&&o.push(t.currentChar)
t.next()}else P('Unexpected "}"',t)}else t.next()
0!==i.length&&P('Unexpected end of placeholder (unmatched "{")',t)
if(o.length>0){n.push(o.join(f))
o.length=0}return n}(e),i=[],o=0;o<n.length;++o){var t=n[o]
t&&(i[o]=R(t))}return i}var z=function(){function e(n){p(this,e)
this.value=q(n)}h(e,[{key:"toString",value:function(){switch(u(this.value)){case"object":case"function":break
default:return String(this.value)}return""}}])
return e}()
function q(e){return e instanceof z?e.value:e}function M(e){return e instanceof z?e:new z(e)}function Y(e,n){var i=e.parameters
return Object.prototype.hasOwnProperty.call(i,n)}var O={eq:function(e,n){return e===n},gt:function(e,n){return e>n},gte:function(e,n){return e>=n},endsWith:function(e,n){return"".concat(e).endsWith("".concat(n))}}
function F(e,n,i){var o=""
if(e.parameters){var t=e.parameters
for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&!n.test(a)){o='Invalid style "'.concat(a,'"')
i&&(o+=" ".concat(i))
break}}return o}function U(e,n,i){var o,t="Placeholder must have exactly ".concat(n," style(s)"),a="Placeholder must have at least ".concat(n," style(s)"),r=Object.keys(e.parameters)
r.length>0?"eq"===i&&r.length!==n?o=t:"gte"===i&&r.length<n&&(o=a):n>0&&(o="Placeholder must have styles")
return o}function W(e,n){return U(e,n,"eq")}function G(e,n,i){var o
n.forEach((function(n){var t=e[n]
t&&("without"===i?(!t.value||t.value.length>0)&&(o='Invalid value for style "'.concat(n,'"')):"with"===i&&(t.value||(o='Style "'.concat(n,'" must have a value'))))}))
return o}function V(e,n){return G(e.parameters,n,"with")}var B=new RegExp("^(".concat(["text","title"].join("|"),")$"))
function H(e){var n=function(e,n){var i
if(e.parameters)for(var o=e.parameters,t=0;t<n.length;t++){var a=n[t]
a&&!Object.prototype.hasOwnProperty.call(o,a)&&(i='Missing required style key "'.concat(String(a),'"'))}else i="Placeholder must have styles"
return i}(e,["text"])
n||(n=F(e,B,'The anchor placeholder only supports "text" and "title" styles.'))
return n}var J=new RegExp("^(true|false)$")
function K(e){var n=function(e,n){return U(e,n,"gte")}(e,1)
n||(n=F(e,J,'The key must be either "true" or "false".'))
return n}var X=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,Q=/^(zero|singular|dual|few|many|plural|other)$/
var Z=["name","text"],$=/^(?:familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix)$/
var ee=/^(familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix|compact)$/
var ne=new RegExp("^(".concat(["sep","nosep"].join("|"),")$"))
function ie(e){var n=W(e,1)
n||(n=F(e,ne,"Invalid style for suffix placeholder."))
n||(n=function(e,n){return G(e.parameters,n,"without")}(e,["nosep","sep"]))
return n}var oe=new RegExp("prefix|possessive|suffix")
function te(e){switch(e.type){case"anchor":return H(e)
case"boolean":return K(e)
case"choice":return function(e){var n,i,o,t,a=e.parameters,r=!1,_=[]
for(t in a){var s=a[t]
s&&(_[s.order]=s)
Q.test(t)&&(r=!0)}for(var l=0;l<_.length;l++){var c=_[l]
if(c&&X.test(c.key)){o=parseInt(c.key,10)
if(void 0===i)i=o
else{if(!(i<o)){n="Invalid number order. Cannot list ".concat(o," after ").concat(i,". Numbers must be ascending.")
break}i=o}}else if(c&&Q.test(c.key))r=!0
else if(c){n='Invalid category key "'.concat(c.key,'".')
break}}r&&(a.singular?a.plural||(n='Missing required category "plural"'):n='Missing required category "singular"')
return n}(e)
case"list":return function(e){var n
""!==e.subType&&-1===Z.indexOf(e.subType)&&(n='Invalid list subtype "'.concat(e.subType,'"'))
n||(n=F(e,$,"Invalid style for list placeholder."))
n||(n=V(e,["prefix","suffix"]))
return n}(e)
case"map":case"select":return function(e){var n
e.parameters?0===Object.keys(e.parameters).length&&(n="MapPlaceholder must have at least one style argument."):n="MapPlaceholder must have parameters."
return n}(e)
case"name":return function(e){var n=F(e,ee,"Invalid style for name placeholder.")
n||(n=V(e,["prefix","suffix"]))
return n}(e)
case"suffix":return ie(e)
case"text":return function(e){return F(e,oe,"Invalid style for text placeholder.")}(e)
case"possessive":return function(e){return W(e,0)}(e)
default:return}}function ae(e){var n
if("string"!=typeof e){n=function(e){return e?e.index?void 0:"Placeholder must have an index.":"Placeholder is invalid."}(e)
n||(n=te(e))
if(n)throw new Error("".concat(n))
for(var i in e.parameters)if(re(e.parameters,i)){var o=e.parameters[i]
o&&o.value&&o.value instanceof Array&&o.value.forEach(ae)}}}function re(e,n){return n in e}var _e,se=/{(\d+)}/g
function le(){return _e}function ce(e){_e=function(n){if(n instanceof z)return n
var i=e(n)
return new z(i)}}function de(e){return n.default.htmlEncode(e)}ce(de)
var me=function(e){return n.default.sanitizeUrl(null!==e?e:void 0)}
function ue(){return me}function pe(e){console.warn(e)}function ge(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return e.replace(se,(function(e,i){if(i){var o=n[i]
if(o)return o}return e||""}))}function he(e,n){for(var i=e.length,o=0;o<i;++o){var t=e[o]
if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null}function be(e,n){var i=e.parameters[n]
if(i)return i.value}function ye(e,n){var i=e.parameters
if(i)for(var o=Object.keys(i),t=0;t<o.length;t++){var a=i[o[t]]
if(a.order===n)return a}}function fe(e,n,i,o,t){var a=be(n,i),r=le()
if("string"==typeof a&&""===a)return a
if(void 0!==a){for(var _="",s=0;s<a.length;++s){var l=a[s]
l&&(_+="string"==typeof l?l:q(r(e(l,o,t))))}return M(_)}return""}var we=/['"<>]/
function ve(e){if(null==e)return""
var n=String(q(e)),i=we.test(n)?de(n):n
return null!==i?i:""}function ke(e){return null===e||"string"==typeof e}var xe="true",Se="false"
var je={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},Ce={month:"long"},Te={month:"short",day:"numeric"},Le={year:"2-digit"},Ae={month:"short"},Pe={month:"numeric"},Ie={weekday:"long"},Ne={year:"numeric"},Ee={year:"numeric",month:"short",day:"numeric"},Re={weekday:"short"},De={day:"numeric"},ze={year:"numeric",month:"numeric",day:"numeric"},qe=Ae,Me={month:"long"},Ye=Ie,Oe=Re,Fe=De,Ue=Ne,We=l(l({},Ce),Fe),Ge=l(l({},qe),Fe),Ve=l(l(l({},Ce),Fe),Ue),Be=l(l(l({},qe),Fe),Ue),He=l(l(l({},Me),Fe),Ue),Je=l(l({},Ce),Ue),Ke=l(l({},qe),Ue),Xe={mdy:Ve,"mdy.long":Ve,"mdy.medium":Be,"mdy.short":He,my:Je,"my.long":Je,"my.medium":Ke,"my.short":Ke,md:We,"md.long":We,"md.medium":Ge,"md.short":Ge,m:Ce,"m.long":Ce,"m.medium":qe,"m.short":Pe,d:Ye,"d.long":Ye,"d.medium":Oe,"d.short":Fe,y:Ue,"y.long":Ue,"y.medium":Ue,"y.short":Ue},Qe={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},Ze={year:"numeric",month:"long",day:"numeric"},$e={year:"numeric",month:"long"},en={year:"numeric",month:"short"},nn={month:"long",day:"numeric"},on={en_US:{intlLocale:"en",date:{intlOptions:{time:Qe,"time.long":Qe,"time.medium":Qe,"time.short":{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},mdy:Ze,"mdy.long":Ze,"mdy.medium":Ee,"mdy.short":ze,my:$e,"my.long":$e,"my.medium":en,"my.short":en,md:nn,"md.long":nn,"md.medium":Te,"md.short":Te,m:Me,"m.long":Me,"m.medium":Ae,"m.short":Pe,d:Ie,"d.long":Ie,"d.medium":Re,"d.short":De,"d.narrow":{weekday:"narrow"},y:Ne,"y.long":Ne,"y.medium":Ne,"y.short":Le}},possessive:{fallback:"’s",rules:{".*[Ss]$":"’",".*[A-RT-Z]$":"’s",".*[a-rt-z]$":"’s"}},list:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, and {1}",2:"{0} and {1}"}}}
function tn(e){return on[e]}var an=1,rn=[0,1,2,3,4,5],_n=["SINGULAR","PLURAL","DUAL","FEW","MANY","ZERO"],sn={equals:{1:0},endsWith:{0:an,1:an,2:an,3:an,4:an,5:an,6:an,7:an,8:an,9:an}}
function ln(e,n,i){var o=Math.floor(e),t=function(e,n){var i
n.forEach((function(n){void 0!==n.arg&&null!==n.arg&&"gte"===n.comparison?(0,O.eq)(e,n.arg)&&(!i||n.arg>i.arg)&&(i=n):n.comparison&&(0,O[n.comparison])(e,n.arg)&&(!i||n.arg>i.arg)&&(i=n)}))
return i}(o,n)
if(t)return t
var a=function(e,n){if(e&&null!=n){var i="".concat(n)
if(e.equals&&void 0!==e.equals[i])return e.equals[i]
if(e.endsWith)for(var o=Math.min(2,i.length);o>0;o--){var t=i.slice(-1*o)
if(void 0!==e.endsWith[t])return e.endsWith[t]}}}(i,o)
if(void 0!==a){var r,_,s=rn.indexOf(a)
if(-1!==s){var l
r=null===(l=_n[s])||void 0===l?void 0:l.toLowerCase()}for(var c=0;c<n.length;c++){var d=n[c]
if((null==d?void 0:d.category)===r)return d
"plural"===(null==d?void 0:d.category)&&(_=d)}if(_)return _}}var cn=function(){function e(){p(this,e)}h(e,[{key:"format",value:function(e,n,i){var o,t,a=tn(i),r=a.chooser?a.chooser:sn
n.some((function(e){return!!e.category}))?o=ln(e,n,r):n.forEach((function(n){if(n.comparison){(0,O[n.comparison])(e,n.arg)&&(!o||void 0!==n.arg&&void 0!==o.arg&&n.arg>o.arg)&&(o=n)}}))
return o?"function"==typeof(t=o.text)?t():t:""}}])
return e}()
e.ChooserFormatter=cn
var dn=function(){function e(){p(this,e)
this._formatters=new Map}h(e,[{key:"getWithDefault",value:function(e,n){return function(e,n,i){if(e.has(n))return e.get(n)
var o=i()
e.set(n,o)
return o}(this._formatters,e,n)}}])
return e}()
function mn(e){var n=new Date(e.getTime())
n.setMinutes(e.getMinutes()-e.getTimezoneOffset())
return n}function un(e){return e instanceof Date}function pn(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(un(e)){if(n)return mn(e)}else{if("number"==typeof e)return new Date(e)
if("string"==typeof e){var i=Date.parse(e)
return isNaN(i)?new Date(Number(e)):new Date(i)}}return e}function gn(e,n){var i=e[n]
return i?_(Object.create(null),i):void 0}var hn={time:je,"time.long":je,"time.medium":je,"time.short":{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}},bn={intlOptions:l(l({},Xe),hn)},yn={fmt_d:Ie,fmt_d_short:De,fmt_d_medium:Re,fmt_d_long:Ie,fmt_m:Me,fmt_m_short:Pe,fmt_m_medium:Ae,fmt_m_long:Me,fmt_y:Ne,fmt_y_short:Le,fmt_md_medium:Te,fmt_md_long:{month:"long",day:"numeric"},fmt_my_medium:{year:"numeric",month:"short"},fmt_my_long:{year:"numeric",month:"long"},fmt_mdy_short:ze,fmt_mdy_medium:Ee,fmt_mdy_long:{year:"numeric",month:"long",day:"numeric"},fmt_mdy_hm_short:{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},fmt_mdy_hm_long:je},fn={hm:{hour:"numeric",minute:"numeric"},hms:{hour:"numeric",minute:"numeric",second:"numeric"}}
function wn(e){return e<10?"0".concat(e):e}var vn,kn=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"format",value:function(e,n,i,o){var t=tn(n).intlLocale,a=(tn(n).date||bn).calendar
if("fmt_mdy_iso"===i)return function(e){return"".concat(e.getUTCFullYear(),"-").concat(wn(e.getUTCMonth()+1),"-").concat(wn(e.getUTCDate()))}(pn(e,o))
var r=gn(yn,i)
if(!r)throw new Error("[XMessage] Unsupported date format")
o||(r.timeZone="UTC")
return this.getWithDefault("".concat(t,"-").concat(i,"-").concat(!!r.timeZone),(function(){r.calendar=a
return new Intl.DateTimeFormat(t,r)})).format(pn(e))}}])
return o}(dn)
e.DateFormatter=kn
var xn={fmt_d:"d",fmt_d_short:"d.short",fmt_d_narrow:"d.narrow",fmt_d_medium:"d.medium",fmt_d_long:"d.long",fmt_m:"m",fmt_m_short:"m.short",fmt_m_medium:"m.medium",fmt_m_long:"m.long",fmt_y:"y",fmt_y_short:"y.short",fmt_md_medium:"md.medium",fmt_md_long:"md.long",fmt_my_medium:"my.medium",fmt_my_long:"my.long",fmt_mdy_short:"mdy.short",fmt_mdy_medium:"mdy.medium",fmt_mdy_long:"mdy.long",fmt_mdy_hm_short:"time.short",fmt_mdy_hm_long:"time.long",fmt_mdy_iso:"iso",iso:"iso"}
e.DATE_FORMAT_MAP=xn
var Sn,jn={short:"fmt_mdy_short",medium:"fmt_mdy_medium",long:"fmt_mdy_long",full:"fmt_mdy_long"},Cn="fmt_mdy_medium"
e.DEFAULT_DATE_PATTERN=Cn
function Tn(e,n,i,o){if(!xn[n])if(function(e){return!!jn[e]}(n)){console.log('The date pattern "'.concat(n,'" is deprecated, falling back to "').concat(jn[n],'".'))
n=jn[n]}else{console.log('Unknown date pattern "'.concat(n,'", falling back to "').concat(Cn,'". Note: custom date patterns are not supported.'))
n=Cn}vn||(vn=new kn)
return vn.format(e,i,n,o)}function Ln(e,n){var i=tn(e),o=i[n]
return o||i}function An(e){return"object"===u(e)&&!("intlLocale"in e)}!function(e){e[e.FAMILIAR_NAME=0]="FAMILIAR_NAME"
e[e.FULL_NAME=1]="FULL_NAME"
e[e.LIST_VIEW=2]="LIST_VIEW"
e[e.MICROFORMAT=3]="MICROFORMAT"}(Sn||(Sn={}))
var Pn="familiar"
e.DEFAULT_NAME_STYLE=Pn
var In,Nn=["familiar","family","full","given","list","maiden","micro","salutation"]
e.NAME_STYLES=Nn
var En=function(e,n){return"".concat(e," ").concat(n)},Rn=function(e,n){return"".concat(n," ").concat(e)},Dn=function(e,n){return"".concat(n).concat(e)},zn=function(e,n,i){return"".concat(i?" (".concat(i,")"):""," ")},qn=function(e){return"".concat(e?" ".concat(e):"")},Mn=function(e){return function(n){return n?'<span class="'.concat(e,'">').concat(n,"</span>"):""}},Yn=Mn("given-name"),On=Mn("family-name"),Fn=Mn("additional-name"),Un=function(e,n,i){return"".concat(e).concat(qn(i)).concat(qn(n))},Wn=function(e){return function(n,i,o){return"".concat(n).concat(qn(i)).concat(o?" ".concat(e," ").concat(o):"")}},Gn=/(^\s+|\s+$)/g
function Vn(e,n){if(!e)return""
var i,o=e.replace(Gn,"")
n&&(o="".concat(null==(i=o)?null:i.toString().replace(/(.)/g,(function(e){return"<"===e?"&lt;":">"===e?"&gt;":"&"===e?"&amp;":'"'===e?"&quot;":"'"===e?"&#39;":"\\"===e?"&#92;":"="===e?"&#61;":"\0"===e?"�;":e}))))
return o}var Bn=[19968,40895,12448,12543,65377,65439,12352,12447]
function Hn(e,n){return function(e){if(!e)return!1
var n=e.charCodeAt(0)
return n>=44032&&n<=55215}(e.lastName)?"CJK":function(e){if(!e)return!1
for(var n=e.charCodeAt(0),i=0;i<Bn.length;i+=2){var o=Bn[i],t=Bn[i+1]
if(o&&t&&n>=o&&n<=t)return!0}return!1}(e.lastName)?"ja_JP"===n?"CJK-ja_JP":"CJK":n}var Jn=function(){function e(){p(this,e)
this.templates=[]}h(e,[{key:"preprocess",value:function(e,n,i){return[Yn(e),On(n),Fn(i)]}},{key:"add",value:function(e,n,i){var o=this.templates.indexOf(e)
if(-1===o)this.templates.push(e,[n,i])
else{this.templates[o+1].push(n,i)}}},{key:"run",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",i=arguments.length>2?arguments[2]:void 0,o=this.templates.indexOf(e)
if(o>-1){var t=this.templates[o+1],a=t.indexOf(n);-1===a&&(a=t.indexOf("default"))
var r=t[a+1]
return r(i[0]||"",i[1]||"",i[2]||"")}throw new Error("Could not find template function for ".concat(e," with ").concat(n," locale."))}}])
return e}(),Kn=new Jn
Kn.add(Sn.FAMILIAR_NAME,"default",(function(e){return e}))
Kn.add(Sn.FAMILIAR_NAME,"de_DE",En)
Kn.add(Sn.FAMILIAR_NAME,"pl_PL",En)
Kn.add(Sn.FAMILIAR_NAME,"hi_IN",En)
Kn.add(Sn.FAMILIAR_NAME,"ro_RO",En)
Kn.add(Sn.FAMILIAR_NAME,"tr_TR",En)
Kn.add(Sn.FAMILIAR_NAME,"CJK",Dn)
Kn.add(Sn.FAMILIAR_NAME,"CJK-ja_JP",Rn)
Kn.add(Sn.FULL_NAME,"default",(function(e,n,i){return"".concat(e).concat(zn(0,0,i)).concat(n)}))
Kn.add(Sn.FULL_NAME,"ar_AE",Un)
Kn.add(Sn.FULL_NAME,"hi_IN",Un)
Kn.add(Sn.FULL_NAME,"th_TH",Un)
Kn.add(Sn.FULL_NAME,"cs_CZ",(function(e,n,i){return"".concat(e).concat(qn(n)).concat(i?" (roz. ".concat(i,")"):"")}))
Kn.add(Sn.FULL_NAME,"de_DE",Wn("geb."))
Kn.add(Sn.FULL_NAME,"CJK-ja_JP",(function(e,n,i){return"".concat(n).concat(qn(e)).concat(zn(0,0,i))}))
Kn.add(Sn.FULL_NAME,"CJK",(function(e,n,i){return"".concat(Dn(e,n)).concat(zn(0,0,i))}))
Kn.add(Sn.FULL_NAME,"ms_MY",(function(e,n,i){return"".concat(e).concat(qn(n)).concat(zn(0,0,i))}))
Kn.add(Sn.FULL_NAME,"nl_NL",(function(e,n,i){return"".concat(e," ").concat(n).concat(i?"-".concat(i):"")}))
Kn.add(Sn.FULL_NAME,"pl_PL",Wn("z d."))
Kn.add(Sn.LIST_VIEW,"default",(function(e,n){return"".concat(n?"".concat(n,", "):"").concat(e)}))
Kn.add(Sn.LIST_VIEW,"CJK",Dn)
Kn.add(Sn.LIST_VIEW,"CJK-ja_JP",Rn)
Kn.add(Sn.LIST_VIEW,"ar_AE",En)
Kn.add(Sn.LIST_VIEW,"hi_IN",En)
Kn.add(Sn.LIST_VIEW,"in_ID",En)
Kn.add(Sn.LIST_VIEW,"ms_MY",En)
Kn.add(Sn.LIST_VIEW,"th_TH",En)
var Xn=function(){function e(){p(this,e)}h(e,[{key:"format",value:function(e,n,i){var o=function(e){var n="MICROFORMAT"
if(e){if(Array.isArray(e))return e.indexOf(n)>-1
if("string"==typeof e)return e===n}return!1}(n),t=o||!!e.lastNameWithHighlight,a=Vn(e.firstName,t),r=e.lastNameWithHighlight?Vn(e.lastNameWithHighlight,!1):Vn(e.lastName,t),_=Vn(e.maidenName,t),s=Hn(e,i)
if(o){var l=d(Kn.preprocess(a,r,_),3)
a=l[0]
r=l[1]
_=l[2]}var c=Kn.run(function(e){if(!e)return Sn.FAMILIAR_NAME
var n="string"==typeof e?[e]:e
return Array.isArray(n)?n.indexOf("FULL_NAME")>-1?Sn.FULL_NAME:n.indexOf("LIST_VIEW")>-1?Sn.LIST_VIEW:Sn.FAMILIAR_NAME:Sn.FAMILIAR_NAME}(n),s,[a,r,_])
return c.replace(Gn,"")}}])
return e}()
e.NameFormatter=Xn
function Qn(e,n,i){var o=""
if(void 0!==e){var t={firstName:e.givenName||e.firstName,lastName:e.familyName||e.lastName,maidenName:e.maidenName},a=n||Pn
if(-1===Nn.indexOf(a)){console.log('Unrecognized name format "'.concat(a,'", falling back to "').concat(Pn,'".'))
a=Pn}switch(a){case"given":o=t.firstName||""
break
case"family":o=t.lastName||""
break
case"maiden":o=t.maidenName||""
break
default:var r="full"===a?"FULL_NAME":"familiar"===a?"FAMILIAR_NAME":"list"===a?"LIST_VIEW":"FULL_NAME"
In||(In=new Xn)
o=In.format(t,r,i)}}return o}var Zn,$n=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"formatNumber",value:function(e,n,i){var o=tn(n),t=i?Object.keys(i):[]
if(t.length>0&&t[0]&&!["integer","percent"].includes(t[0]))throw new Error("[XMessage] Unsupported number argument")
var a=t.length>1&&"compact"===t[1]?"compact":void 0,r=t.length>0&&"percent"===t[0]?t[0]:"decimal",_=t.length>0&&"integer"===t[0]?0:void 0
return this.getWithDefault("".concat(n,"-").concat(r,"-").concat(a,"-").concat(_),(function(){var e={style:r,maximumFractionDigits:_,notation:a}
return new Intl.NumberFormat(o.intlLocale,e)})).format(e)}},{key:"formatCurrency",value:function(e,n,i){var o=i?Object.keys(i.parameters):[],t=o.length>1?o[1]:"symbol",a=tn(n),r=o.length>2?o[2]:void 0
return this.getWithDefault("".concat(n,"-").concat(e.currencyCode,"-").concat(t,"-").concat(r),(function(){var n={style:"currency",currency:e.currencyCode,currencyDisplay:t,notation:r}
return new Intl.NumberFormat(a.intlLocale,n)})).format(e.amount)}}])
return o}(dn)
e.NumberFormatter=$n
function ei(e,n,i){Zn||(Zn=new $n)
return Zn.formatCurrency(e,n,i)}function ni(e,n,i){Zn||(Zn=new $n)
return Zn.formatNumber(e,n,i?i.parameters:void 0)}var ii=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"format",value:function(e,n){var i=tn(n).intlLocale,o={}
return this.getWithDefault(i,(function(){return new Intl.PluralRules(i,o)})).select(e)}}])
return o}(dn)
e.PluralFormatter=ii
var oi=function(){function e(){p(this,e)}h(e,[{key:"format",value:function(e,n){var i,o=tn(n).possessive
if(o){i=o.fallback
for(var t=Object.keys(o.rules),a=0;a<t.length;a++){var r=t[a]
if(r&&new RegExp(r).test(e)){i=o.rules[r]
break}}return i||""}return""}}])
return e}()
e.PossessiveFormatter=oi
var ti=["nbsp"," ","lt","<","gt",">","amp","&","quot",'"'],ai=function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o]
var t=i[0],a=i[1],r=i[2]
return t?ti[ti.indexOf(t)+1]||"":a?String.fromCharCode(parseInt(a,16)||65533):r?String.fromCharCode(parseInt(r,10)||65533):"�"}
function ri(e,n,i){return function(o){if(null==o)return-1
var t=0,a="\0",r=o.length
for(t=0;t<r;t++){a=o.charAt(t)
if(e.indexOf(a)<0)break}return t>=r?-1:a>=n&&a<=i?t:-1}}var _i,si=function(e){i(o,e)
var n=t(o)
function o(){p(this,o)
return n.apply(this,arguments)}h(o,[{key:"format",value:function(e,n,i,o){var t=tn(n).intlLocale,a=gn(fn,i)
o||(a.timeZone="UTC")
return this.getWithDefault("".concat(t,"-").concat(i,"-").concat(!!a.timeZone),(function(){return new Intl.DateTimeFormat(t,a)})).format(e)}}])
return o}(dn)
e.TimeFormatter=si
var li={fmt_hm:"hm",fmt_hms:"hms"}
e.TIME_FORMAT_MAP=li
var ci={short:"fmt_hm",medium:"fmt_hms",long:"fmt_hms",full:"fmt_hms"},di="fmt_hms"
e.DEFAULT_TIME_PATTERN=di
function mi(e,n,i,o){var t=n
if(!li[n])if(ci[n]){console.log('The time pattern "'.concat(n,'" is deprecated, falling back to "').concat(ci[n],'".'))
var a=ci[n]
a&&(t=a)}else{console.log('Unknown time pattern "'.concat(n,'", falling back to "').concat(di,'". Note: custom time patterns are not supported.'))
t=di}var r=li[t]||"hm"
_i||(_i=new si)
return _i.format(e,i,r,o)}var ui=function(){function e(n){p(this,e)
this.ellipsis="..."
void 0!==n&&(this.ellipsis=n)}h(e,[{key:"format",value:function(e,n){if(!e||"string"!=typeof e)return""
if(void 0===n)return"..."
if(!n||"number"!=typeof n||n>=e.length||n<0)return e
for(var i=e.substr(0,n),o=i.split(""),t=n-1,a="",r=/\s|\?|!|\.|,|;|:/g;t>=0;){var _=o[t]
if(void 0===_||r.test(_))break
t--}a=t>0?i.substr(0,t):i
return a+=this.ellipsis}}])
return e}()
e.TruncationFormatter=ui
var pi,gi=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?/,hi=/^(zero|singular|dual|few|many|plural|other)$/
function bi(e,n){var i=n instanceof z,o=i?q(n):n
if(e){var t=e.prefix,a=e.suffix
t&&"string"==typeof t.value[0]&&(o=t.value[0]+o)
a&&"string"==typeof a.value[0]&&(o+=a.value[0])}return i?M(o):o}var yi="list",fi="start"
function wi(e,n,i,o){var t
"name"===e?i&&"object"===u(i)&&(t=function(e,n,i){var o=he(Nn,n)
return Qn(e,o?o.key:Pn,i)}(i,n,o)):"string"!=typeof i&&"number"!=typeof i||(t=i)
if(void 0===t)throw new Error("Malformed list section of list placeholder")
return bi(n,le()(t))}var vi="DEFAULT_TEXT"
var ki,xi=new oi
function Si(e,n,i,o,t){var a,r=n.parameters
if(void 0!==i)if(r.currency&&"object"===u(i))a=ei(i,t,n)
else if("number"==typeof i)a=ni(i,t,n)
else if("string"==typeof i){var _=Number(i)
isNaN(_)||(a=ni(_,t,n))}return le()(a)}function ji(e,n,i,o){return n?"string"==typeof n?n:e(n,i,o):""}function Ci(e,n,i,o){return n?n.map((function(n){return ji(e,n,i,o)})).join(""):""}function Ti(e,n,i,o){return"string"==typeof n?function(e,n){return"string"==typeof e?e:"function"==typeof n?n(e.index.number,e.index.keyword):n[e.index.number]}(n,i):e(n,i,o)}function Li(e,n,i,o,t){var a=n.parameters[i]
!function(e){for(var n=Object.keys(e.parameters),i=0;i<n.length;i++){var o=n[i]
if(o&&n.indexOf(o,i+1)>0)throw new Error("[XMessage] duplicate ".concat(o," keys in select placeholder"))
if(o){var t=e.parameters[o]
if(!t||0===t.value.length)throw new Error("[XMessage] select key ".concat(o," without a value"))}}}(n)
if(a&&a.value){for(var r="",_=0;_<a.value.length;_++){var s=a.value[_];(s||"string"==typeof s)&&(r+=Ti(e,s,o,t))}return r}if(n.parameters.default&&("string"==typeof n.parameters.default.value[0]||"object"===u(n.parameters.default.value[0])))return Ti(e,n.parameters.default.value[0],o,t)
throw new Error("[XMessage] No value resolved for select placeholder")}function Ai(e,n,i){var o=""
o=void 0===i?"{".concat(-1!==n.index.number?n.index.number:"").concat(""!==n.index.keyword?":".concat(n.index.keyword):"","}"):String(i)
return le()(o)}var Pi=new oi
function Ii(e,n,i){if(e&&n&&i){var o=function(e,n){if(e&&e.index&&n){var i=e.index,o=i.number,t=i.keyword
if("function"==typeof n)return n(o,t)
var a=n[o>-1?o:0]
if(null!=a)return"string"==typeof t&&""!==t?a[t]:a
if("string"==typeof t&&""!==t&&n&&"object"===u(n)&&!Array.isArray(n))return n[t]}}(e,n)
if(null==o)return M((t=e.index,a=t.number,r=t.keyword,_=-1!==a?a.toString():"",s=""!==r?":".concat(r):"","{".concat(_).concat(s,"}")))
switch(e.type){case"anchor":return function(e,n,i,o,t){var a=ue(),r=le(),_=i,s=ve(a(ke(_)?_:_.href)),l=ve(ke(_)?null:r(_.id)),c=ve(ke(_)?null:r(_.class)),m=q(fe(e,n,"text",o,t)),u=ve(fe(e,n,"title",o,t)),p={}
if(ke(_)){c&&(p.class=c)
l&&(p.id=l)}else Object.keys(_).forEach((function(e){"href"!==e&&"title"!==e&&(p[ve(r(e))]=ve(r(_[e])))}))
var g="<a"
s&&(g+=' href="'.concat(s,'"'))
Object.entries(p).forEach((function(e){var n=d(e,2),i=n[0],o=n[1]
g+=" ".concat(i,'="').concat(o,'"')}))
u&&(g+=' title="'.concat(u,'"'))
return M(g+=">".concat(m,"</a>"))}(Ii,e,o,n,i)
case"boolean":return function(e,n,i,o,t){var a=i,r=""
if(!0===a||a===xe)Y(n,xe)&&(r=fe(e,n,xe,o,t))
else{if(!1!==a&&a!==Se)throw new Error('Invalid argument for BooleanPlaceholder. Expected boolean or "true" or "false" but found "'.concat(a,'"'))
Y(n,Se)&&(r=fe(e,n,Se,o,t))}return r}(Ii,e,o,n,i)
case"choice":return function(e,n,i,o,t){for(var a,r=i,_=[],s=n.parameters,l=0,c=Object.keys(s),d=0;d<c.length;d++)(a=s[c[d]])&&(_[a.order]=a)
var m,p=u(r)
if("number"!=typeof r||isNaN(r))if("string"==typeof r)if(gi.test(r))l=parseFloat(r)
else{pe("Invalid value for 'choice' placeholder. \"".concat(r,'" is not a number. Defaulting to 0.'))
l=0}else"object"===p&&(l=Array.isArray(r)?r.length:Object.keys(r).length)
else l=r
var g=_.map((function(e,n){var i={text:n.toString(),comparison:"eq",arg:-1}
if(hi.test(e.key)){i.text=n.toString()
i.comparison="eq"
i.category=e.key}else{i.text=n.toString()
switch(e.delimiter){case"<":i.comparison="gt"
break
case"+":case"#":i.comparison="gte"
break
default:i.comparison="eq"}i.arg=parseFloat(e.key)
m||(m=i)}return i}))
pi||(pi=new cn)
var h=pi.format(l,g,t)
return void 0!==h&&""!==h?fe(e,n,_[parseInt(h,10)].key,o,t):m?fe(e,n,"".concat(m.arg),o,t):""}(Ii,e,o,n,i)
case"date":return function(e,n,i,o,t){var a=ye(n,0),r=Cn
a&&(r=a.key)
if("fmt_d_narrow"===r){pe('The pattern "'.concat(r,'" is not to be used in XMessage strings. Falling back to "').concat(Cn,'".'))
r=Cn}return Tn(i,r,t,!1)}(0,e,o,0,i)
case"list":return function(e,n,i,o,t){var a,r,_,s,l,c=n.subType||"text",d="",m=Ln(t,yi)||Ln("default",yi)
if(i&&i instanceof Array){r=(a=i.length)-1
if(a>0&&"object"===u(m)&&"start"in m)switch(a){case 1:d="".concat(wi(c,n.parameters,i[0],t))
break
case 2:d=ge(m[2],["".concat(wi(c,n.parameters,i[0],t)),"".concat(wi(c,n.parameters,i[1],t))])
break
default:s=0
l=1
do{d=ge(m[_=0===s?fi:l<r?"middle":"end"],_===fi?["".concat(wi(c,n.parameters,i[s],t)),"".concat(wi(c,n.parameters,i[l],t))]:[d,"".concat(wi(c,n.parameters,i[l],t))])
s++
l++}while("end"!==_)}}return d}(0,e,o,0,i)
case"map":return function(e,n,i,o,t){var a=i
return fe(e,n,void 0!==a&&be(n,a=a.toString())?a:vi,o,t)}(Ii,e,o,n,i)
case"name":return function(e,n,i,o,t){var a,r=he(Nn,n.parameters)
a=Qn(i,r?r.key:void 0,t)
n.parameters.possessive&&(a+=xi.format(a,t))
var _=le()(a)
return bi(n.parameters,_)}(0,e,o,0,i)
case"number":return Si(0,e,o,0,i)
case"plural":return function(e,n,i,o,t){var a
ki||(ki=new ii)
var r,_=n.parameters[i]
if(_&&"#"===_.delimiter)r=_
else if("number"==typeof i)r=n.parameters[ki.format(i,t)]
else if("string"==typeof i){var s=Number(i)
isNaN(s)||(r=n.parameters[ki.format(s,t)])}for(var c=n.parameters,d=[],m=Object.keys(c),u=0;u<m.length;u++){var p=m[u]
if(p){var g=c[p]
"number"==typeof(null==g?void 0:g.order)&&(d[g.order]=g)}}var h=d.map((function(e,n){var i={text:n.toString(),comparison:"eq",arg:parseFloat(e.key)}
switch(e.delimiter){case"<":i.comparison="gt"
break
case"+":case"#":i.comparison="gte"
break
default:i.comparison="eq"}if(isNaN(i.arg)&&!e.key.match(/zero|one|two|few|many|other/))throw new Error("Invalid plural key: ".concat(e.key))
return i}))
if(r&&r.value){var b=n.index.number
if(!(b>-1))return Ci(e,r.value,o,t)
var y=r.value[b]
if(y)return ji(e,y,o,t)}if("number"==typeof i){var f
h.forEach((function(e){e.comparison&&(0,O[e.comparison])(i,e.arg)&&(!f||void 0!==e.arg&&e.arg>f.arg)&&(f=e)}))
if(f){var w=d[parseInt(f.text,10)]
if(!w)throw new Error("No plural style found from ".concat(f.text))
return w.value&&"string"!=typeof w.value&&"string"!=typeof w.value[0]?ni(i,t,{parameters:{integer:l(l({},w),{},{key:"integer",delimiter:"#"})}}):Ci(e,w.value,o,t)}}var v=d[null!=h&&null!==(a=h[0])&&void 0!==a&&a.arg&&("number"!=typeof i||i<=h[0].arg)?0:h.length-1]
if(v)return Ci(e,v.value,o,t)
throw new Error("Malformed plural placeholder. Please open an issue with the following info:\n\n  Placeholder:\n  ".concat(JSON.stringify(n,null,2),"\n\n  Resolved Value:\n  ").concat(JSON.stringify(i,null,2),"\n\n  Locale:\n  ").concat(t,"\n\n  Context:\n  ").concat(JSON.stringify(o,null,2),"\n  "))}(Ii,e,o,n,i)
case"possessive":return function(e,n,i,o,t){var a="",r=new oi
void 0!==i&&(a=r.format(i,t))
return a}(0,0,o,0,i)
case"select":return Li(Ii,e,o,n,i)
case"simple":return Ai(0,e,o)
case"suffix":return function(e,n,i,o,t){var a,r,_,s,l,c,d,m,u="",p=!1,g=n.parameters
if(void 0!==i){g&&(p=!!g.sep)
var h=Ln(t,"suffix")
if(An(h)&&"hardVowels"in h){d=(h.hardVowels||"")+(h.softVowels||"")
switch(h.strategy){case"reverseSearchForVowel":if(i.length>0){for(l=c=i.length-1;l>=0&&" "!==s&&"\t"!==s;l--){s=i.charAt(l)
if(-1!==d.indexOf(s)){m=l===c
_=h.hardVowels&&h.hardVowels.indexOf(s)>-1?h.hardVowelSuffix:h.fallbackSuffix
u=String(m?h.bufferChar:"")+_
return p?h.separator+u:u}}for(a in h.nonVowelToSuffix)if(Object.prototype.hasOwnProperty.call(h.nonVowelToSuffix,a)){r=h.nonVowelToSuffix[a]
if(new RegExp(a).test(i.charAt(c))){_=r
break}}_||(_=h.defaultBufferChar)
u=p?h.separator+_:_
break}}}}return u}(0,e,o,0,i)
case"text":return function(e,n,i,o,t){var a=Ai(0,n,i)
void 0!==a&&n.parameters.possessive&&(a=M("".concat(a).concat(Pi.format(a,t))))
return bi(n.parameters,a)}(0,e,o,0,i)
case"time":return function(e,n,i,o,t){var a=ye(n,0),r=di
a&&(r=a.key)
return mi(i,r,t,!1)}(0,e,o,0,i)}}var t,a,r,_,s
return""}function Ni(e){var n=D(e)
n.forEach((function(e){return ae(e)}))
return n}var Ei=function(e){return n.default.sanitizeHTML(e)}
function Ri(e,n){if(e&&1===e.length&&"string"==typeof e[0]){var i=e[0]
return function(){return Ei(i)}}return function(i){return Ei(Di(e,n,i))}}function Di(e,n,i){for(var o="",t=0;t<e.length;++t){var a=e[t]
a&&(o+="string"==typeof a?a:Ii(a,i,n))}return o}}))
define("@linkedin/ember-cli-pemberly-i18n/app-strings",["exports"],(function(e){"use strict"
define("@linkedin/ember-cli-pemberly-i18n/root-dir",["exports"],(function(e){"use strict"
e.default="/export/content/data/multiproduct-post-commit/i001/workspace/voyager-web_ddf33864d5dacccd7e9623ec35ec48a2df3d3220/packages/voyager-web"}))

//# sourceMappingURL=support_en_US.map