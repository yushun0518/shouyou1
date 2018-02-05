$(function(){
	$('.index_nav >li >a:contains(登录)').addClass('sele1');
	$('.index_nav >li >a:contains(注册)').addClass('sele1');
	(function(){
		$('#nav-ico').click(function(){
        		$('.navbar-collapse').toggle();
    	});
    	
    	$('.index_nav >li >a').click(function(){
    		$('.navbar-collapse').hide();
    	});
    	
	})();
	
	(function(){
		var _txt;
		$('section.m_game .link').hover(
			function(){
				_txt  = $(this).text();
				$(this).text('点击下载')
			},
			function(){
				$(this).text(_txt)
			}
		);
	})();
	
	(function(){
		//全部游戏菜单切换
		$('.g_nav >ul >li').click(function(){
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('#game_box').find('.g_list').eq(_index).addClass('show').siblings().removeClass('show');
		});
		
		$('.p_game_nav >li').click(function(){
			var _index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('#p_game_box').find('.p_game_list').eq(_index).addClass('show').siblings().removeClass('show');
		});
		
		$('#game_nav').click(function(){
			$(this).next().toggle();
		})
		
		if(!IsPC()){
			$('.g_nav >ul >li').click(function(){
				$('.g_nav').hide();
			});
		}
		
		$(window).resize(function(){
			if(IsPC()){
				$('.g_nav').show();
			}else{
				$('.g_nav').hide();
			}
			if(!IsPC()){
				$('.g_nav >ul >li').click(function(){
					$('.g_nav').hide();
				});
			}
		})
		
		
		
	})();
	
	
	(function(){
		//删除已输入文字
		$('button.cancel').click(function(){
			$(this).closest('.button').prev('.input').val('')[0].focus();
		});
		var _txt;
		$('.tl_gbox >a').hover(
			function(){
				_txt  = $(this).text();
				$(this).find('>p').text('点击下载');
			},
			function(){
				$(this).find('>p').text(_txt);
			}
		);
		
		
	})();
	
	
	(function(){
		$('.order_l .t_ul >li').click(function(){
			$('.order_l >ul >li').removeClass('active');
			$(this).addClass('active');
			$('.order').find('.order_r').removeClass('show');
			$('#order_box_t').find('.order_r').eq($(this).index()).addClass('show');
		});
		
		$('.order_l .b_ul >li').click(function(){
			$('.order_l >ul >li').removeClass('active');
			$(this).addClass('active');
			$('.order').find('.order_r').removeClass('show');
			$('#order_box_b').find('.order_r').eq($(this).index()).addClass('show');
		});
		
		$('.order_r .page >a').click(function(){
			$('.order_r .page >a').removeClass('active');
			$(this).addClass('active');
		});
		
		$('h3.h_tip >i').click(function(){
			$(this).next('.tips').toggle();
		});
		
		$('i.wh_icons,i.wh_icons1').click(function(){
			$(this).next('.tip').toggleClass('show');
		});
		
		$('i.wh_icons1').click(function(){
			$(this).next().toggleClass('show');
		});
		
		$('#loadEmail').click(function(){
			$(this).closest('.e_box').hide().next().show();
		});
		
		$('.confirm >button').click(function(){
			$(this).closest('.e_box').hide().next().show();
			
			//var oDiv = '<div class="tips"><p>1 如果密码遗失，您可通过手机号找回密码</p><p>2 每个玩家只能注册和使用一个账号，一个手机号也只能认证一个账号。</p><p>3 更改手机号则需重新进行认证</p><i></i></div>';
			$(this).closest('.e_box').next().find('>h3').addClass('h_tip');
			
		});
		
		$('.p1 .emails >button').click(function(){
			$('.p1').hide().next('.p2').show();
		});
		
		$('.order .list_tab tr.ok td a.detail').click(function(){
			$('body,html').addClass('h100');
			$(document).scrollt
			var oDiv = $(this).next().clone();
			$('.lv').show().append(oDiv).find('.l_detail').show();
			
			
			$('span.close').click(function(){
				$('html,body').removeClass('h100');
				$('.lv').hide();
			})
		})
		
	})();
	
	
	(function(){
		$('.operat #all').click(function(){
			$('.hf_list >li').each(function(){
				$(this).find('input').attr('checked','true');
			})
		});
		
		$('.operat #delete').click(function(){
			$('.hf_list >li').each(function(){
				//alert($(this).find('input').prop('checked'))
				if($(this).find('input').prop('checked')){
					$(this).remove();
				}
			});
		})
		
		
	})();
	
	
	(function(){
		//轮播图
		var num = 0;
		$('span.next').click(function(){
			num++;
			if(num>2){
				num = 0;
			}
			$('.w_box >ul >li').eq(num).fadeIn(1000).siblings().hide();
			$(this).closest('.w_banner').find('>ol >li').eq(num).addClass('active').siblings().removeClass('active');
		});
		
		$('span.prev').click(function(){
			num--;
			if(num==-1){
				num = 2;
			}
			$('.w_box >ul >li').eq(num).fadeIn(1000).siblings().hide();
			$(this).closest('.w_banner').find('>ol >li').eq(num).addClass('active').siblings().removeClass('active');
		});
		
		function autoPlay(){
			num++;
			if(num>2){
				num = 0;
			}
			$('.w_box >ul >li').eq(num).fadeIn(2000).siblings().hide();
			$('.w_banner').find('>ol >li').eq(num).addClass('active').siblings().removeClass('active');
		}
		
		timer = setInterval(autoPlay,2000);
		
		/*$('.w_banner').hover(
			function(){
				clearInterval(timer);
			},
			function(){
				clearInterval(timer);
				setInterval(autoPlay,2000);
			}
		)*/
		
	})();
	
	
	(function(){
		$('.sign_ul >li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$('#sign_box').find('form').eq($(this).index()).addClass('show').siblings().removeClass('show');
		});
	})();
	
	(function(){
		$('.buy_box .m_info .num .bor').click(function(){
			alert('限时抢购,不可更改');
		});
		
		//支付选择
		$('.m_info >a.paybtn').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
		
	})();
	
	
	(function(){
		//手机个人中心菜单切换
		$('.order_s .order_l ul >li').click(function(){
			$('#tab').hide();
			$('#view').show();
			$('#view').find('.'+$(this).attr('data-link')).show();
		})
		
		$('#view #loadEmail').click(function(){
			$('.e1').hide().next().show();
		})
		
		$('.order_r .click').click(function(){
			$('#view,.order_r').hide();
			$('#tab').show();
		})
	})();
	
	
	
	
});
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}