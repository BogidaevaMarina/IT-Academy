function openVideo() {
    $.fancybox.open({
        src: 'https://www.youtube.com/watch?v=HbiE0HweWS4',
        type: 'iframe',
        opts: {
            iframe: {
                preload: false
            }
        }
    });
}
