webpackJsonp([23,31],{319:function(e,t,o){var r=o(1)(o(585),o(734),null,null);e.exports=r.exports},585:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(61),l=r(n),a=o(33);t.default={data:function(){return{role:""}},computed:(0,l.default)({},(0,a.mapGetters)(["roles"])),watch:{role:function(e){this.$store.commit("SET_ROLES",[e]),window.location.reload()}}}},734:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("你的权限： "+e._s(e.roles))]),e._v("\n   切换权限：\n    "),o("el-radio-group",{model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[o("el-radio-button",{attrs:{label:"editor"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=23.37fecacf625054934a7b.js.map