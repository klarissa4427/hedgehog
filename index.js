//var content = '';
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

var textDataArr = [
  {
    text: '안녕하세요. 개발자입니다.',
    bg: 'img/bg_park2.png',
    crt: '',
    cg: '',
    audio: '',
    select: [],
  },
  {
    text: '1000일 기념으로 클라님과 함께 클헤 웹미연시를 만들어 보았습니다.',
    bg: '',
    crt: '',
    cg: '',
    audio: '',
    select: [],
  },
  {
    text: '시간상 편의성을 개선하지 못한 부분도 많고 최적화도 제대로 되어있지 않지만 모쪼록 즐겨운 경험이 되셨으면 좋겠습니다. ^_^b',
    bg: '',
    crt: '',
    cg: '',
    audio: '',
    select: [],
  },
  {
    text: '(버그 발견하시면... 클라님을 통하여 말씀 부탁드립니다. 꼭... 버그는 고치고 싶어요...)',
    bg: '',
    crt: '',
    cg: '',
    audio: '',
    select: [],
  },
  {
    text: '대화창 좌측을 클릭하시면 이전 대화로 넘어가며, 우측을 클릭하시면 다음 대화로 넘어갑니다.',
    bg: '',
    crt: '',
    cg: '',
    audio: '',
    select: [],
  },
  {
    text: '그럼 재밌는 미연시(를 가장한 그냥 스토리북) 되세요!',
    bg: '',
    crt: '',
    cg: '',
    audio: '',
    select: [],
  },
  {
    text: '2023.02.25',
    bg: '',
    crt: 'img/cr2_s.png',
    cg: '',
    audio: '',
    select: ['선택지 첫번째거', '이건 두번째~'],
  },
  {
    text: '짹짹… 새소리가 귀에 깊게 파고드는 아침입니다.',
    bg: '',
    crt: '',
    cg: '',
    audio: 'audio/MP_Flapping_Wings_3.mp3',
    select: [],
  },
  {
    text: '오늘은 간만의 휴일. 저번 900일 때도 그랬던 것 같은데… 이번 기념일도 가까스로 휴일을 냈습니다.',
    bg: '',
    crt: '',
    cg: '',
    audio: '',
    select: [],
  },
];

$(document).ready(function(){
  $('.button_prev').addClass('displaynone');
  stageFunc();

  $('.button_prev').click(function(){
    chapt = chapt - 1;

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
  });

  $(document).on('click', '.button_next', function(){
    chapt = chapt + 1;

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
  }else{
    clearInterval(timer);

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

  dataText = textDataArr[chapt].text;
  dataBg = textDataArr[chapt].bg;
  dataCrt = textDataArr[chapt].crt;
  dataCg = textDataArr[chapt].cg;
  dataAudio = textDataArr[chapt].audio;
  dataSelect = textDataArr[chapt].select;

  $('.typing_text').text(''); // 타이핑 된 텍스트 초기화
  $('.talk_box .text').text(dataText); // 타이핑 될 텍스트 넣어주기

  if(!!dataCg){ // 일러스트 화면인 경우
    $('.crt_box').addClass('off');
  }else{
    if(!!dataBg){ // 배경이미지
      $('.ch_wrapper').css({'background-image': 'url(' + dataBg + ')'});
    };
    if(!!dataCrt){ // 스탠딩 캐릭터
      $('.crt_box img').attr('src', dataCrt);
    };
    if(!!dataAudio){ // 효과음
      $('#audio source').attr('src', dataAudio);
      document.getElementById('audio').load();
      document.getElementById('audio').play();
    };
    if(!!dataSelect.length){ // 선택지(typing 함수에 나머지 이벤트 있음)
      $('.talk_box .button_next').addClass('off');
    }else{
      $('.select_box').html('');
      $('.talk_box .button_next').removeClass('off');
      $('.select_box').addClass('off');
    };
  };

  i = 0;
  typingText = '';
  timer = setInterval(typing, 25);
};