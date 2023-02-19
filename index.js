var dataName = '';
var dataText = '';
var dataBg = '';
var dataCrt = '';
var dataCg = '';
var dataAudio = '';
var dataSelect = '';

// 텍스트 타이핑 효과 관련
var i = 0;
var typingText = '';
var timer = '';

// 순서 관련
var chapt = 0;

$(document).ready(function(){
  $('.button_prev').addClass('displaynone');
  $('.talk_box .button_next').addClass('off');
  stageFunc();

  $('.button_prev').click(function(){
    chapt = chapt - 1;

    $('.talk_box .button_next').addClass('off');

    if(!!textDataArr[chapt - 1]){
      $('.button_prev').removeClass('displaynone');
    }else{
      $('.button_prev').addClass('displaynone');
    };

    if(!!textDataArr[chapt + 1]){
      $('.button_next').removeClass('displaynone');
    }else{
      $('.button_next').addClass('displaynone');
    };

    stageFunc();
  });

  $(document).on('click', '.button_next', function(){
    chapt = chapt + 1;

    $('.talk_box .button_next').addClass('off');

    if(!!textDataArr[chapt - 1]){
      $('.button_prev').removeClass('displaynone');
    }else{
      $('.button_prev').addClass('displaynone');
    };

    if(!!textDataArr[chapt + 1]){
      $('.button_next').removeClass('displaynone');
    }else{
      $('.button_next').addClass('displaynone');
    };

    stageFunc();
  });

});

function typing(){
  if (i < dataText.length) {
    var txt = dataText.charAt(i);
    typingText += txt;
    $('.typing_text').text(typingText);
    i++;

    $('.all_text_button').click(function(){
      i = 99999;
      $('.typing_text').text(dataText);
    });
  }else{
    clearInterval(timer);
    $('.talk_box .button_next').removeClass('off');

    if(!!dataSelect.length){ // 선택지가 있는 경우
      $.each(dataSelect, function(idx, item){
        $('.select_box').append('<button type="button" class="button_next">' + item + '</button>');
      });
      $('.select_box').removeClass('off');
    };
  };
};

function stageFunc(){
  clearInterval(timer);

  dataName = textDataArr[chapt].name;
  dataText = textDataArr[chapt].text;
  dataBg = textDataArr[chapt].bg;
  dataCrt = textDataArr[chapt].crt;
  dataCg = textDataArr[chapt].cg;
  dataAudio = textDataArr[chapt].audio;
  dataSelect = textDataArr[chapt].select;

  $('.typing_text').text(''); // 타이핑 된 텍스트 초기화
  $('.talk_box .text').text(dataText); // 타이핑 될 텍스트 넣어주기

  if(!!dataName){
    if(dataName == 'xx'){
      $('.talk_name .name').text('');
    }else{
      $('.talk_name .name').text(dataName);
    };
  };
  if(!!dataCg){ // 일러스트 화면인 경우
    //$('.crt_box').addClass('off');
    if(dataCg == 'xx'){
      $('.ch_container').attr('style', '');
    }else{
      if(dataCg.indexOf('cg_') > -1){
        $('.talk_box').addClass('all_cg');
      };
      $('.ch_container').css({'background-image' : 'url(' + dataCg + ')'});
    };
  }else{
    $('.talk_box').removeClass('all_cg');
  };
  if(!!dataBg){ // 배경이미지
    if(dataBg == 'xx'){
      $('.ch_wrapper').css({'background-image': 'none'});
    }else{
      $('.ch_wrapper').css({'background-image': 'url(' + dataBg + ')'});
    };
  };
  if(!!dataCrt){ // 스탠딩 캐릭터
    if(dataCrt == 'xx'){
      $('.crt_box img').attr('src', '');
    }else{
      $('.crt_box img').attr('src', dataCrt);
    };
  };
  if(!!dataAudio){ // 효과음
    $('#audio source').attr('src', dataAudio);
    document.getElementById('audio').load();
    document.getElementById('audio').play();
  };
  if(!!dataSelect.length){ // 선택지(typing 함수에 나머지 이벤트 있음)
    $('.select_box').html('');
    $('.select_box').addClass('off');
    $('.talk_box .button_next').addClass('displaynone');
  }else{
    $('.select_box').html('');
    $('.select_box').addClass('off');
  };

  i = 0;
  typingText = '';
  timer = setInterval(typing, 25);
};