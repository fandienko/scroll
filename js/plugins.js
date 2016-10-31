$(document).ready(function(){
   
var inmain = new $.parallax({
    parent: 'body',
    //parent: '.paralax-layers',
    //pointer: '.slide.slide-1.paralax-layers',
    subLayers: [
                    [".parallax-1",0.02],
                    [".parallax-2",0.025],
                    [".parallax-3",0.01],
                    [".parallax-4",0.025],
                    [".parallax-5",0.015],
                    [".parallax-6",0.06],
                    [".parallax-7",0.05],
                    [".parallax-9",0.05]
               ]
    });
inmain.init();
});

