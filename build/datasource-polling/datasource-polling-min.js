YUI.add("datasource-polling",function(b){function a(){this._intervals={};}a.prototype={_intervals:null,setInterval:function(d,e){var c=b.later(d,this,this.sendRequest,[e],true);this._intervals[c.id]=c;b.later(0,this,this.sendRequest,[e]);return c.id;},clearInterval:function(d,c){d=c||d;if(this._intervals[d]){this._intervals[d].cancel();delete this._intervals[d];}},clearAllIntervals:function(){b.each(this._intervals,this.clearInterval,this);}};b.augment(b.DataSource.Local,a);},"@VERSION@",{requires:["datasource-local"]});