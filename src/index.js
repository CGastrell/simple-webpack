console.log('eli-boot webpack2 with static')

import $ from 'jquery'

$('body').append('<h1>Hola pungo</h1>')

$('<marquee />').css('font-size','16px').text('the world is yours').appendTo('body')

$('<img src="/images/happy-smile.jpg" />').css('display','block').appendTo('body')
