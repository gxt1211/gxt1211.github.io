// JavaScript Document
function styleJs(){
	var num = $('.page').length;
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	

	
	 //控制音乐
  var audioDiv = document.getElementById('audio');
  
  $('.audio').tap(function(){
	 // alert(1);
		$(this).toggleClass('audioOff');
		if($(this).hasClass('audioOff')){
			audioDiv.pause();
			//$(this).removeClass('audioon');
			
		}else{
			audioDiv.play();
			//$(this).addClass('audioon');
		
		}
  });

	var W_h = $(window).height();
	
	var pingKuan=$(window).width(),//m_wrapper是最外层div的类名
			bili = function(mun){
				var oScale = mun/640;	//480是psd宽度
				return oScale.toFixed(6);
	};
	$('.page,.main').css('height',W_h);
	//style
	$('.arrow').css({
		"width":pingKuan * bili(66),
		"height":pingKuan * bili(39),
		"margin-left":pingKuan * bili(-33),
	});
	$('.audio').css({
		"width":pingKuan * bili(123),
		"height":pingKuan * bili(140),
		
	});
	
	
	
	

	$('.blue1').css({
		"width":pingKuan * bili(360),
		"height":pingKuan * bili(112),
		"left":pingKuan * bili(139),
		"top":pingKuan * bili(26),
	});
	$('.green1').css({
		"width":pingKuan * bili(360),
		"height":pingKuan * bili(134),
		"left":pingKuan * bili(112),
		"top":pingKuan * bili(22),
	});
	$('.blue2').css({
		"width":pingKuan * bili(498),
		"height":pingKuan * bili(155),
		"top":pingKuan * bili(335),
		"left":pingKuan * bili(46)
	});
	$('.green2').css({
		"width":pingKuan * bili(498),
		"height":pingKuan * bili(178),
		"top":pingKuan * bili(335),
		"left":pingKuan * bili(105)
	});
	$('.page1 .title1').css({
		"width":pingKuan * bili(336),
		"height":pingKuan * bili(69),
		"left":pingKuan * bili(135),
		"top":pingKuan * bili(55)
	})
	$('.page1 .title2').css({
		"width":pingKuan * bili(361),
		"height":pingKuan * bili(118),
		"left":pingKuan * bili(153),
		"top":pingKuan * bili(354)
	})
	$('.home-title').css({
		"width":pingKuan * bili(452),
		"height":pingKuan * bili(285),
		"left":pingKuan * bili(94),
		"top":pingKuan * bili(92)
	})
	$('.c308s').css({
		"width":pingKuan * bili(608),
		"height":pingKuan * bili(344),
		"top":pingKuan * bili(569)
	})
	
	//第二屏
	$('.text1').css({
		"width":pingKuan * bili(365),
		"height":pingKuan * bili(106),
		"left":pingKuan * bili(138),
		"top":pingKuan * bili(82)
	})
	$('.text2').css({
		"width":pingKuan * bili(365),
		"height":pingKuan * bili(144),
		"left":pingKuan * bili(138),
		"top":pingKuan * bili(176),
		"background-position":"0px "+pingKuan * bili(-122)+"px"
	})
	$('.page5 .text1,.page5 .text2').css({
		"width":pingKuan * bili(403),
	})
	$('.page2 .star1').css({
		"width":pingKuan * bili(349),
		"height":pingKuan * bili(343),
		"top":pingKuan * bili(326),
		"margin-left":pingKuan * bili(-175),
	})
	$('.page2 .star2').css({
		"width":pingKuan * bili(345),
		"height":pingKuan * bili(344),
		"left":pingKuan * bili(315),
		"top":pingKuan * bili(670)
	})
	$('.page2 .star3').css({
		"width":pingKuan * bili(80),
		"height":pingKuan * bili(100),
		"left":pingKuan * bili(40),
		"top":pingKuan * bili(424)
	})
	$('.page2 .star4').css({
		"width":pingKuan * bili(39),
		"height":pingKuan * bili(38),
		"left":pingKuan * bili(532),
		"top":pingKuan * bili(576),
		"margin-left":pingKuan * bili(-20)
	})
	$('.car').css({
		"width":pingKuan * bili(640),
		"height":pingKuan * bili(475)
	})
	
	$('.page2 .heart1,.heart1Div').css({
		"width":pingKuan * bili(85),
		"height":pingKuan * bili(79),
	})
	$('.heart1Div').css({
		"top":pingKuan * bili(310),
		"left":pingKuan * bili(64)
	})
	$('.page2 .heart2,.heart2Div').css({
		"width":pingKuan * bili(63),
		"height":pingKuan * bili(58),
	})
	$('.heart2Div').css({
		"top":pingKuan * bili(292),
		"left":pingKuan * bili(468)
	})
	$('.page2 .heart3,.heart3Div').css({
		"width":pingKuan * bili(56),
		"height":pingKuan * bili(36),
	})
	$('.heart3Div').css({
		"top":pingKuan * bili(352),
		"left":pingKuan * bili(524)
	})
	$('.page2 .heart4').css({
		"width":pingKuan * bili(349),
		"height":pingKuan * bili(193),
		"top":pingKuan * bili(480),
		"margin-left":pingKuan * bili(-175)
	})

	$('.page2 .smile').css({
		"width":pingKuan * bili(165),
		"height":pingKuan * bili(94),
		"top":pingKuan * bili(378),
		"left":pingKuan * bili(236)
	})
	$('.cheding,.shareImg').css({
		"width":pingKuan * bili(640),
		"min-height":pingKuan * bili(800)
	})
	
	//第三屏
	$('.page3 .water,.page5 .wall').css({
		"min-height":pingKuan * bili(765)
	})
	$('.page5 .wall').css({
		"top":pingKuan * bili(144)
	})
	$('.page3 .fish1').css({
		"width":pingKuan * bili(136),
		"height":pingKuan * bili(179),
		"top":pingKuan * bili(473),
		"left":pingKuan * bili(122)
	})
	$('.page3 .fish2').css({
		"width":pingKuan * bili(227),
		"height":pingKuan * bili(118),
		"top":pingKuan * bili(424),
		"left":pingKuan * bili(303)
	})
	$('.page3 .fish3').css({
		"width":pingKuan * bili(80),
		"height":pingKuan * bili(103),
		"top":pingKuan * bili(397),
		"left":pingKuan * bili(36)
	})
	$('.page3 .fish4').css({
		"width":pingKuan * bili(90),
		"height":pingKuan * bili(48),
		"top":pingKuan * bili(546),
		"left":pingKuan * bili(488)
	})
	$('.page3 .yinfu').css({
		"width":pingKuan * bili(405),
		"height":pingKuan * bili(335),
	})
	$('.yinfuDiv').css({
		"top":pingKuan * bili(334),
		"left":pingKuan * bili(198)
	})
	
	//第四屏
	$('.page4 .voiceBoxDiv').css({
		"height":pingKuan * bili(438),
		"top":pingKuan * bili(322)
	})
	$('.page4 .voiceBox').css({
		"height":pingKuan * bili(438),
	})
	$('.page4 .lightning,.lightDiv').css({
		"height":pingKuan * bili(181),
	})
	$('.lightDiv').css({
		"top":pingKuan * bili(282)
	})
	
	//第五屏
	$('.page5 .man').css({
		"width":pingKuan * bili(461),
		"height":pingKuan * bili(525),
		"top":pingKuan * bili(312),
		"left":pingKuan * bili(64)
	})
	$('.page5 .roadSign').css({
		"width":pingKuan * bili(112),
		"height":pingKuan * bili(306),
		"top":pingKuan * bili(246),
	})
	
	$('.page5-tuya,.tuyaDiv').css({
		"width":pingKuan * bili(461),
		"height":pingKuan * bili(357),
	})
	$('.tuyaDiv').css({
		"top":pingKuan * bili(322),
		"left":pingKuan * bili(96)
	})
	
	//第六屏
	$('.page6-title').css({
		"width":pingKuan * bili(410),
		"height":pingKuan * bili(236),
		"top":pingKuan * bili(20),
		"left":pingKuan * bili(116)
	})
	$('.page6 .detail').css({
		"width":pingKuan * bili(160),
		"height":pingKuan * bili(58),
		"top":pingKuan * bili(20),
		"left":pingKuan * bili(20)
	})
	
	$('.form-title').css({
		"width":pingKuan * bili(504),
		"height":pingKuan * bili(147),
		"top":pingKuan * bili(234),
		"left":pingKuan * bili(70)
	})
	$('.page6 .inp').css({
		"width":pingKuan * bili(396),
		"height":pingKuan * bili(46),
		"margin-left":pingKuan * bili(98),
		"margin-top":pingKuan * bili(12)
	})
	
	
	
	$('.page6 .inpDiv').css({
		"width":pingKuan * bili(510),
		"height":pingKuan * bili(64),
		"left":pingKuan * bili(68)
	})
	$('.page6 .inpDiv1').css({
		"top":pingKuan * bili(346),
	})
	$('.page6 .inpDiv2').css({
		"top":pingKuan * bili(424),
		"background-position":"0px "+pingKuan * bili(-76)+"px"
	})
	$('.page6 .inpDiv3').css({
		"top":pingKuan * bili(498),
		"background-position":"0px "+pingKuan * bili(-152)+"px"
	})
	$('.page6 .inpDiv4').css({
		"top":pingKuan * bili(583),
		"background-position":"0px "+pingKuan * bili(-234)+"px"
	})
	
	
	$('.QR-title').css({
		"width":pingKuan * bili(493),
		"height":pingKuan * bili(123),
		"top":pingKuan * bili(134),
		"left":pingKuan * bili(72)
	})
	$('.QR-code').css({
		"width":pingKuan * bili(280),
		"height":pingKuan * bili(273),
		"top":pingKuan * bili(252),
		"left":pingKuan * bili(180)
	})
	$('.yuyueDiv,.shareDiv,.btn-yuyue,.btn-share,.btn-submit,.btn-detail,.detailDiv').css({
		"width":pingKuan * bili(202),
		"height":pingKuan * bili(86)
	})

	$('.yuyueDiv,.shareDiv,.submitDiv,.detailDiv').css({
		"top":pingKuan * bili(596),
	})
	$('.submitDiv,.detailDiv').css({
		"top":pingKuan * bili(650),
	})
	$('.yuyueDiv,.submitDiv').css({
		"left":pingKuan * bili(112),
	})
	$('.shareDiv,.detailDiv').css({
		"left":pingKuan * bili(332)
	})
	
	$('.btn-back,.backDiv').css({
		"width":pingKuan * bili(126),
		"height":pingKuan * bili(86),
	})
	$('.backDiv').css({
		"top":pingKuan * bili(40),
		"right":pingKuan * bili(26),		
		"width":pingKuan * bili(126),
		"height":pingKuan * bili(86),
	})
	$('#scroller').css({
		//"top":pingKuan * bili(374),
		"height":pingKuan * bili(400),
	})
	//$('#wrapper').css({
//		"top":pingKuan * bili(374),
//		"bottom":pingKuan * bili(418),
//	})
	
	
	

	
	
	
	
	//style end
	
	//滑屏
	var i = 0,index,sEnd = 'webkitAnimationEnd';
	$('.page').swipeUp(function(){
		index = $(this).index();
				
		
		if( i < num-1){
			$('.page').removeClass('anim');
			i++;
			//console.log(index+'+'+i);
			$('.wrap').animate({
						translate:'0,-'+W_h*i+'px',
						},
						300,
						'linear',
						function(){
							$('.page'+(index+1)).next('.page').addClass('anim');
							console.log('.page'+(index+2)+'.anim .cheding');
							
							$('.page'+(index+2)+'.anim .cheding').on("webkitAnimationEnd", function(){ 
								$(this).next('.page-con').animate({
									'display':'block'
									});
							}, false);
							$('.page'+(index+1)+' .page-con').animate({
									'display':'none'
							});
							
						//donghua();	
			});
			
			if(index==num-2){
				$('.arrow').hide();
			}
		}
	});
	
	$('.page').swipeDown(function(){
		index = $(this).index();
		console.log(index)	
		
		if( i > 0){
			$('.page').removeClass('anim');
			i--;
			//console.log(index+'+'+i);
			$('.wrap').animate({
						translate:'0,-'+W_h*i+'px',
						},
						300,
						'linear',
						function(){
							$('.page'+(index+1)).prev('.page').addClass('anim');
							console.log('.page'+(index+2)+'.anim .cheding');
							$('.page'+(index+2)+'.anim .cheding').on("webkitAnimationEnd", function(){ 
								$(this).next('.page-con').animate({
									'display':'block'
									});
							}, false);
							$('.page'+(index+1)+' .page-con').animate({
									'display':'none'
							});
							//donghua();
			});
			if(index<=num-1){
				$('.arrow').show();
			}
		}
		
	});
	
	//动画
donghua();
  function donghua(){	
    
	
	/*$('.anim .cheding').on("webkitAnimationEnd", function(){ 
			$(this).next('.page-con').animate({
				'display':'block',
				});
		}, false); 
	*/
	

	
	setTimeout(function(){
		$('').animate({
					translate:'0,0',
					opacity:1
					},
					800,
					'linear ',
					function(){
		});
		
	},800)
	setTimeout(function(){
		$('.anim .formDiv').animate({
					top:'31%',
					opacity:1
					},
					1500,
					'linear',
					function(){
		});
		
		
	},900)
	
	
	setTimeout(function(){
		$('').animate({
					translate:'0,0',
					opacity:1
					},
					800,
					'linear ',
					function(){
		});
	},1200)
	
	setTimeout(function(){
		$('').animate({
					translate:'0,0',
					opacity:1
					},
					1200,
					'ease',
					function(){
		});
		
	},5000)
	
  }
  
 
	  ///获取querystring
              function getQueryStringByName2(name) {
                var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
                if (result == null || result.length < 1) {
                    return "";
                }
                return result[1];
            }
 
	//提交后隐藏表单
	$('#submit').tap(function(){

                    var name = $("#name").val().trim();
                if (name.length <= 0) {
                    alert("请输入姓名");
                    return false;
                }
                var mobile = $("#mobile").val().trim();
                if (mobile.length != 11 || !Number(mobile)) {
                    alert("请输入手机号码");
                    return false;
                }
                var address = $("#address").val();
                 //当前url
                var url = document.URL;
                //渠道
                var src = getQueryStringByName2("src");
                var paras = $.param({
                    name: name,
                    mobile: mobile,
                    address: address
                });

                $.ajax({
                    type: "post",
                    data: paras,
                    url: "Handler1.ashx?src=" + src + "&m=" + Math.random(),
                    beforeSend: function () {


		            $('.formDiv').hide();
		            $('.QR-Div').show();

                    },
                    success: function (result) {

                        //alert(result);
                    }
                });
                //ajax请求结束
		
	});	

	$('#share').tap(function(){
		$('.Pop-share').show();
	});	
	$('#detail').tap(function(){
		$('.Pop-detail').show();
		$('#wrapper').css({
			"z-index":"14",
			"opacity":"1"
		});
	});	
	$('.Pop-share').tap(function(){
		$(this).hide();
	});	
	
	$('#back').tap(function(){
		$('.Pop-detail').hide();
		$('#wrapper').css({
			"z-index":"-1",
			"opacity":"0"
		});
	});
	
	//样式重置完成之后
	$(".Load1").hide();
	$(".main").css({
		"display": "block"
	});
}

loaded();

//页面loading
function loaded(){
//图片预加载
	var interval = setInterval(increment,100);
   var current = 0;
   function increment(){
    current+=5;
    $('#counter').html(current+'%'); 
    if(current == 105) { clearInterval(interval);styleJs(); }
  }
  
  var pingKuan=$(window).width(),//m_wrapper是最外层div的类名
			bili = function(mun){
				var oScale = mun/640;	//480是psd宽度
				return oScale.toFixed(6);
	};

}

