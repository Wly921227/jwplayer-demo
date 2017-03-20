jwplayer.key = '27g9qMfyccqvwSg2obTuX1dqFt8voF44IV6mLQ=='
var player = jwplayer('player')
var file = '1b02B03R'

player.setup({
    file: '//content.jwplatform.com/videos/xJ7Wcodt-cIp6U8lV.mp4',
    image: '//content.jwplatform.com/thumbs/xJ7Wcodt-720.jpg',
    autostart: false,
    width: '600px',
    height: '400px',
    skin: {
        name: 'custom',
        url: 'css/style.css'
    }
})