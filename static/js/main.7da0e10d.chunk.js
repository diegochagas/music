(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/noimage.1260c83f.jpg"},30:function(e,t,a){e.exports=a(67)},35:function(e,t,a){},36:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),i=(a(35),a(1)),l=a(2),u=a(5),o=a(3),m=a(4),p=(a(36),a(7)),f=a(8),h=a.n(f),d=a(12),b=a(28),v=a.n(b),y=window.location.href,E=y.substr(0,y.length-1),k=function(){var e=window.location.hash;if(""!==e)return g(e.replace("#","")).find(function(e){return void 0!==e.access_token}).access_token;window.location="".concat("https://accounts.spotify.com/authorize","?response_type=token&client_id=").concat("70358d9ae7f84e6a83754104c6a91319","&redirect_uri=").concat(E)},g=function(e){return e.split("&").map(function(e){var t=e.split("="),a=t[0],n=t[1],r={};return r[a]=n,r})},j=function(){var e=k();return v.a.create({baseURL:"https://api.spotify.com/v1",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})},T=function(e){var t=localStorage.getItem(e);if(null===t)return localStorage.setItem(e,"false"),!1;var a=Boolean(t);return localStorage.setItem(e,'"'.concat(!a,'"')),a},O="artist",A="album",w="track",N=(a(61),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).onSearchTermSubmit=function(e){e.preventDefault();var t=a.refs.selectType.value;a.props.fetchSearchTermType(t);var n=a.refs.searchTerm.value;if(""===n)alert("Type a serch term");else switch(t){case O:a.props.fetchArtists(n);break;case A:a.props.fetchAlbums(n);break;case w:a.props.fetchTracks(n);break;default:alert("Select type value")}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"search-bar",onSubmit:this.onSearchTermSubmit},r.a.createElement("input",{type:"text",placeholder:"Search",ref:"searchTerm"}),r.a.createElement("select",{defaultValue:"default",name:"type",ref:"selectType"},r.a.createElement("option",{disabled:"disabled",value:"default"},"Search option"),r.a.createElement("option",{value:O},"Artist"),r.a.createElement("option",{value:A},"Album"),r.a.createElement("option",{value:w},"Track")),r.a.createElement("button",null,"Search"))}}]),t}(r.a.Component)),C=Object(p.b)(function(e){return{searchTermType:e.searchTermType}},{fetchArtists:function(e){return function(){var t=Object(d.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j().get("/search",{params:{q:e,type:O}});case 2:n=t.sent,a({type:O,payload:n.data.artists.items});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchAlbums:function(e){return function(){var t=Object(d.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j().get("/search",{params:{q:e,type:A}});case 3:n=t.sent,a({type:A,payload:n.data.albums.items}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),401===t.t0.response.data.error.status&&(window.location.hash="",k());case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},fetchTracks:function(e){return function(){var t=Object(d.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j().get("/search",{params:{q:e,type:w}});case 2:n=t.sent,a({type:w,payload:n.data.tracks.items});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},fetchSearchTermType:function(e){return{type:"FETCH_SEARCH_TERM_TYPE",payload:e}}})(N),S=(a(62),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).toggleClass=function(){return a.setState({active:!a.state.active})},a.state={active:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"artist-latest-albums",onClick:this.toggleClass},r.a.createElement("h4",null,"Artist's latest albums"),r.a.createElement("ul",{className:"albums-list ".concat(this.state.active?"":"hide")},this.props.albums.map(function(e){var t=e.images,a=e.name;return r.a.createElement("li",{className:"album",key:e.id},r.a.createElement("img",{className:"folder",src:t.length?t[0].url:"",alt:"Album folder"}),r.a.createElement("span",{className:"name"},a))})))}}]),t}(r.a.Component)),_=(a(63),a(64),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).onFavoriteClick=function(e){a.props.fetchIsFavorite(a.props.itemId)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchIsFavorite(this.props.itemId)}},{key:"render",value:function(){return r.a.createElement("div",{className:"FavoriteItems"},r.a.createElement("span",null,"Favorite: "),r.a.createElement("i",{className:"".concat(this.props.isFavorite?"fas":"far"," fa-star"),onClick:this.onFavoriteClick}))}}]),t}(r.a.Component)),F=Object(p.b)(function(e){return{iFavorite:e.isFavorite}},{fetchIsFavorite:function(e){return{type:"FETCH_IS_FAVORITE",payload:T(e)}}})(_),I=a(11),M=a.n(I),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).renderGenres=function(e){return e.map(function(e){return r.a.createElement("span",{key:e},e,", ")})},a.renderPopularity=function(e){return e>80?"Hot":e>=60&&e<=79?"Cool":e>=30&&e<=59?"Regular":e<30?"Underground":""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchLatestAlbums(this.props.item.id)}},{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.images,n=e.name,c=e.genres,s=e.popularity;return r.a.createElement("div",{className:"artist-list-item"},r.a.createElement("img",{className:"album-image",src:a.length?a[0].url:M.a,alt:"Song"}),r.a.createElement("div",{className:"description"},r.a.createElement("span",null,"Name: ",n),r.a.createElement("div",null,"Genres: ",this.renderGenres(c)),r.a.createElement("span",null,"Popularity: ",this.renderPopularity(s)),r.a.createElement(F,{itemId:t})),r.a.createElement(S,{albums:this.props.albums}))}}]),t}(r.a.Component),L=Object(p.b)(function(e){return{albums:e.artistLatestAlbums}},{fetchLatestAlbums:function(e){return function(){var t=Object(d.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j().get("/artists/".concat(e,"/albums"));case 3:n=t.sent,a({type:"FETCH_LATEST_ALBUMS",payload:n.data.items}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()}})(x),H=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).renderDuration=function(e){var t=a.millisecondsToSeconds(e),n=a.millisecondsToMinutes(e);return"".concat(a.buildNumberTime(n),":").concat(a.buildNumberTime(t))},a.millisecondsToSeconds=function(e){return Math.floor(e/1e3%60)},a.millisecondsToMinutes=function(e){return Math.floor(e/6e4%60)},a.buildNumberTime=function(e){return e<10?"0".concat(e):e},a.toggleClass=function(){return a.setState({active:!a.state.active})},a.state={active:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"album-tracks ".concat(this.state.active?"spread":""),onClick:this.toggleClass},r.a.createElement("h4",null,"Tracks"),r.a.createElement("ul",{className:"tracks ".concat(this.state.active?"":"hide")},this.props.tracks.map(function(t){return r.a.createElement("li",{className:"track",key:t.id},r.a.createElement("span",null,t.track_number),r.a.createElement("span",null,t.name),r.a.createElement("span",null,e.renderDuration(t.duration_ms)))})))}}]),t}(r.a.Component),R=(a(65),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).renderArtists=function(e){var t="";return 0===e.length&&(t=""),1===e.length&&(t=e[0].name),e.length>1&&(t="Various artists"),r.a.createElement("span",{className:"available-market"},t)},a.renderAvailability=function(e){return e.map(function(e){return r.a.createElement("span",{key:e},e,", ")})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAlbumTracks(this.props.item.id)}},{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.images,n=e.name,c=e.artists,s=e.available_markets;return r.a.createElement("div",{className:"album-list-item"},r.a.createElement("img",{className:"album-image",src:a.length?a[0].url:M.a,alt:"Album folder"}),r.a.createElement("div",{className:"description"},r.a.createElement("span",null,"Name: ",n),r.a.createElement("div",null,"Artist(s): ",this.renderArtists(c)),r.a.createElement("div",{className:"availability"},"Availability: ",this.renderAvailability(s)),r.a.createElement(F,{itemId:t})),r.a.createElement(H,{tracks:this.props.tracks}))}}]),t}(r.a.Component)),D=Object(p.b)(function(e){return{tracks:e.albumTracks}},{fetchAlbumTracks:function(e){return function(){var t=Object(d.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j().get("/albums/".concat(e,"/tracks"));case 2:n=t.sent,a({type:"FETCH_ALBUM_TRACKS",payload:n.data.items});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(R),B=(a(66),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).renderDuration=function(e){var t=a.millisecondsToSeconds(e),n=a.millisecondsToMinutes(e);return"".concat(a.buildNumberTime(n),":").concat(a.buildNumberTime(t))},a.millisecondsToSeconds=function(e){return Math.floor(e/1e3%60)},a.millisecondsToMinutes=function(e){return Math.floor(e/6e4%60)},a.buildNumberTime=function(e){return e<10?"0".concat(e):e},a.toggleClass=function(){return a.setState({active:!a.state.active})},a.renderArtists=function(e){return e.map(function(e){return r.a.createElement("span",{key:e.id},e.name,", ")})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.name,n=e.artists,c=e.duration_ms,s=this.props.item.album,i=s.images,l=s.albumName;return r.a.createElement("div",{className:"track-list-item"},r.a.createElement("img",{className:"album-image",src:i.length?i[0].url:M.a,alt:"Album folder"}),r.a.createElement("span",null,a),r.a.createElement("div",null,this.renderArtists(n)),r.a.createElement("span",null,l),r.a.createElement("span",null,this.renderDuration(c)),r.a.createElement(F,{itemId:t}))}}]),t}(r.a.Component)),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).selectListItem=function(){var e=a.props,t=e.item;switch(e.type){case O:return r.a.createElement(L,{item:t});case A:return r.a.createElement(D,{item:t});case w:return r.a.createElement(B,{item:t});default:return r.a.createElement("div",null,"Not found")}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"music-list-item"},this.selectListItem())}}]),t}(r.a.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).renderMusicList=function(e){var t=e.artists,n=e.albums,c=e.tracks,s=[],i="";switch(a.props.searchTermType){case O:s=t,i=O;break;case A:s=n,i=A;break;case w:s=c,i=w;break;default:return r.a.createElement("div",{className:"loading"},r.a.createElement("span",null,"Search for an artist, album or track"))}return s.map(function(e){return r.a.createElement(U,{key:e.id,item:e,type:i})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"music-list"},this.renderMusicList(this.props))}}]),t}(r.a.Component),V=Object(p.b)(function(e){return{artists:e.artists,albums:e.albums,tracks:e.tracks,searchTermType:e.searchTermType}})(P),q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(C,null)),r.a.createElement(V,null))}}]),t}(r.a.Component),G=a(9),z=a(29),J=Object(G.c)({artists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;default:return e}},albums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return t.payload;default:return e}},tracks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;default:return e}},artistLatestAlbums:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LATEST_ALBUMS":return t.payload;default:return e}},albumTracks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALBUM_TRACKS":return t.payload;default:return e}},isFavorite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_IS_FAVORITE":return t.payload;default:return e}},searchTermType:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SEARCH_TERM_TYPE":return t.payload;default:return e}}}),K=Object(G.d)(J,Object(G.a)(z.a));s.a.render(r.a.createElement(p.a,{store:K},r.a.createElement(q,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7da0e10d.chunk.js.map