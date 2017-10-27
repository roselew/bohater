//show USER MISSIONS

	//appends one STATE missions assigned for this DAY to HTML 



	function appendGifts(stateMissions,stateName){
        
                stateMissions.forEach(function(gift){
                    //finds mission index by missionId
            
                    $('.mission-'+stateName).append($('<li class="circle-big" name='+gift.id+'>'
                        +'<p>'+gift.name+'</p>'
                        +'<img src=' + gift.icon +'>'+starSvg
                        +'<span>'+gift.points+'</span>'
                        + '<div class="progress"> '
                        + '<div class="progress-undone"> </div> '
                        + '<div class="progress-wait"'+'id='+gift.id+'> </div>'
                        + '<div class="progress-done"'+'id='+gift.id+'> </div> '
                        + '</div> </li>'))
                })
            }
        
            //append ALL missions assigned for this DAY to HTML 
            function showUserGifts(){
        
                // get from database mission type assigned for this day and appends to HTML
                appendGifts(userGifts,'neutral')

                showProgress()

            }
   
            var totalDonePoints = 30;
            var totalWaitPoints = 40;

            function showProgress(){

                $('li.circle-big').each(function(index,element){
                    var giftPoints=userGifts[findUserGift($(element).attr('name'))].points;

                    if (totalWaitPoints<=giftPoints) {
                        $(element).find('.progress-wait').width(100*totalWaitPoints/giftPoints + '%');
                    } else {
                        $(element).find('.progress-wait').width('100%')
                    }

                    if (totalDonePoints<=giftPoints) {
                        $(element).find('.progress-done').width(100*totalDonePoints/giftPoints + '%');
                    } else {
                        $(element).find('.progress-done').width('100%')
                        $(element).find('.progress-done').css("background-color","#45BE23");
                        $(element).css("border-color","#45BE23");
                        $(element).find('.star').css("fill","#45BE23");
                        $(element).find('.progress').append($('<img src="assets/gift.svg" class="img-right">'))
                    }

                    $(element).find('.progress-done').append($('<p>'+totalDonePoints+' / '+giftPoints+'</p>'))
                 

                })

            }

            $(document).on('showGifts', function (event){
                $('.mission-neutral li').remove()
                showUserGifts();
            })
        

            $(document).trigger('showGifts')