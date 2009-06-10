/* jQuery split a list into multiple columns
* 
* usage: 
*    $(".dropdown ul").splitList(3);
*    $(".dropdown ul").splitList(3, { wrapClass: "div_class_name" });
*
* by default, wrapClass is set to ""
*/


jQuery.fn.splitList = function(cols, options){		
    
    settings = jQuery.extend({
        wrapClass: ""
    }, options);
    
    return this.each(function(){
        $lis = jQuery(this).find("> li");		
        $inc = parseInt(($lis.length/cols) + ($lis.length % cols > 0 ));
        for(var i=0; i<cols; i++)
            $lis.slice($inc*i, $inc*(i+1)).wrapAll("<div class='" + settings['wrapClass'] + "'></div>");
    });
};
