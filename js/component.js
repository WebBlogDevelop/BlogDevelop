//require zepto.js
(function(win, doc){
    const Component = {};
    const version = "1.0";
    Component.Tag = function(func){
        var selector = ".be-tag";
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
    Component.Scroll2Top = function(){
        var ele = $(".scroll-top");
        ele.Click = function(){
            ele.on("click",function(){
                win.scrollTo(0,0);
            })
        }
        ele.Click();
        return this;
    };
    Component.ChearUp = function(func){
        var ele = $(".chear-up-btn");
        ele.click(function(){
            var temp = $(this);
            if(!temp.hasClass("pressed")){
                temp.addClass("pressed");
            }
           // func();
        });
        return this;
    };
    Component.Button = function(selector){
        var ele = $(selector);
        const CLICKED = "clicked";
        Button.Click = function(func){
            ele.click(function(){
                var temp = $(this);
                if(temp.hasClass(CLICKED)){

                }
            })
        }
    }
    Component.init = function(){
        window.Component = {
            "button":new Component.Scroll2Top(),
            "ChearUp":new Component.ChearUp(),
            "BeTag":new Component.Tag()
        };
    }
    $(document).ready(function(){
        Component.init();
    })
})(window,document)