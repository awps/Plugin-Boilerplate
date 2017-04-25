;(function( $ ) {

	"use strict";

	$.fn.ZPB_Plugin_Admin = function( options ) {

		if ( this.length > 1 ){
			this.each( function() {
				$(this).ZPB_Plugin_Admin( options );
			});
			return this;
		}

		// Defaults
		var settings = $.extend( {}, options );

		// Cache current instance
		var plugin = this;

		//Plugin go!
		var init = function() {
			plugin.build();
		}

		// Build plugin
		this.build = function() {
			
			var self = false;

			var _base = {

				exampleProperty: 'example value',

				exampleMethod: function(){
					return self.exampleMethod;
				},

				__construct: function(){
					self = this;

					self.exampleMethod();

					return this;
				}

			};

			/*
			-------------------------------------------------------------------------------
			Rock it!
			-------------------------------------------------------------------------------
			*/
			_base.__construct();

		}

		//Plugin go!
		init();
		return this;

	};


$(document).ready(function(){
	$('body').ZPB_Plugin_Admin();
});

})(jQuery);