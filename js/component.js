//require zepto.js
(function(win, doc){
    const Component = {};
    const version = "1.0";
    Component.Tag = function(selector, func){
        var ele = $(selector);
        var btn = $(".tag-btn",ele);
        this.Close = function(func){
            var that = this;
            btn.on("click", function(){
                var target = $(this).parent(selector)
                that.tagId = target.data("id");
                target.animate({"opacity":0},500,"ease-in-out",function(){target.remove()});
                func();
            });
        };
        this.Close(func);
        return this;
    };
    Component.Scroll2Top = function(selector){
        var ele = $(selector);
        ele.Click = function(){
            ele.on("click",function(){
                win.scrollTo(0,0);
            })
        }
        ele.Click();
        return this;
    };
    Component.ClearUp = function(selector){

    };
    window.Component = Component;
})(window,document)