$(document).ready(function(){
    let lis=["#Antibiotics", '#Agriculture', "#Cleaning", '#Prevention', '#Sources'];
    $("ul#navu li").click(function(){
        for(i=0; i<lis.length; i++){
            $(`${lis[i]}`).css({
                'position':'absolute',
                'visibility':'hidden'
            });
        };
        $(`#${$(this).data('para')}`).css({
            'position': 'relative',
            'visibility': 'visible',
        });
    });
});