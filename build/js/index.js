//   Modal
$('[data-fancybox="test-share-url"]').fancybox({
    buttons: ['share', 'close'],
    hash: false,
    share: {
        url: function(instance, item) {
            if (item.type === 'inline' && item.contentType === 'video') {
                return item.$content.find('source:first').attr('src');
            }

            return item.src;
        }
    }
});



//  Hamburger
$(document).ready(function() {
    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('.menu').slideToggle(300, function() {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
});