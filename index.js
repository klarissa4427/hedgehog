//var content = '';
var dataText = '';
var dataBg = '';
var dataCrt = '';
var dataCg = '';
var dataAudio = '';
var dataSelect = '';

var i = 0;
var typingText = '';
var timer = '';

var textDataArr = [
  {
    text: '안녕, 좋은 아침!',
    bg: 'img/bg_park.png',
    crt: '',
    cg: '',
    audio: '<audio><source src=""></audio>',
    select: ['AAA', 'BBB'],
  },
];

$(document).ready(function(){
  //content = $('.ch_wrapper[data-ch="1"] .talk_box .text');

  dataText = textDataArr[0].text;
  dataBg = textDataArr[0].bg;
  dataCrt = textDataArr[0].crt;
  dataCg = textDataArr[0].cg;
  dataAudio = textDataArr[0].audio;
  dataSelect = textDataArr[0].select;

  i = 0;
  typingText = '';
  //timer = setInterval(typing, 30);

  $('.button_prev').click(function(){
    
    

  //   clearInterval(timer);
  //   $('.typing_text').text('');

  //   var dataCh = $(this).closest('.ch_wrapper').data('ch');
  //   dataCh = dataCh - 1;
  //   $(this).closest('.ch_wrapper').addClass('off').removeClass('on');
  //   $('.ch_wrapper[data-ch="'+dataCh+'"]').addClass('on');

  //   content = $('.ch_wrapper[data-ch="'+dataCh+'"] .talk_box .text');
  //   i = 0;
  //   typingText = '';
  //   timer = setInterval(typing, 30);
  // });

  // $('.button_next').click(function(){
  //   clearInterval(timer);
  //   $('.typing_text').text('');

  //   var dataCh = $(this).closest('.ch_wrapper').data('ch');
  //   dataCh = dataCh + 1;
  //   $(this).closest('.ch_wrapper').addClass('off').removeClass('on');
  //   $('.ch_wrapper[data-ch="'+dataCh+'"]').addClass('on');

  //   content = $('.ch_wrapper[data-ch="'+dataCh+'"] .talk_box .text');
  //   i = 0;
  //   typingText = '';
  //   timer = setInterval(typing, 60);
  });


  
});

function typing(){
  if (i < content.text().length) {
    var txt = content.text().charAt(i);
    typingText += txt;
    content.next('.typing_text').text(typingText);
    i++;
  }else{
    clearInterval(timer);
  };
};