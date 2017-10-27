// -------READ FROM DATABASE ---------------

//get from database ALL missions assigned for this DAY
function getAllMissions(day){
	var dayAllMissions = [];
	userMissions.forEach(function(mission){
		var startDate = new Date(mission.start)
		//if Mission is started
		if (day>=startDate) {
			// if Mission is not finished
			if (mission.finish == null || day<mission.finish){
				dayAllMissions.push(mission.id)
			}
		}	 
	})
	return dayAllMissions;
}

//get from database ALL missions assigned for this DAY
function getDayMissions(day){
	var dayAllMissions = [];
	userMissions.forEach(function(mission){
	//if Mission is started
	if (day>=mission.start) {
		// if Mission is not finished
		if (mission.finish == null || day<mission.finish){
			//if day of the week ok
			if (mission.days.indexOf(day.getUTCDay())!==-1){
				dayAllMissions.push(mission.id)
			}			
		}

	}
	})
	return dayAllMissions;
}

//get from database all missions DONE this DAY
function getDoneMissions(day){
	var dayDoneMissions = [];
	doneMissions.forEach(function(mission){
		// compare doneDate with day
		var doneDate = new Date(mission.doneDate);
		if (day.getTime()==doneDate.getTime()) {
			dayDoneMissions.push(mission.missionId);
		}
	})
	return dayDoneMissions;
}

//get from database all missions done this DAY but WAIT for acceptance
function getWaitMissions(day){
	var dayWaitMissions = [];
	waitMissions.forEach(function(mission){
		// compare doneDate with day
		var doneDate = new Date(mission.doneDate);
		if (day.getTime()==doneDate.getTime()) {
			dayWaitMissions.push(mission.missionId);
		}
	})
	return dayWaitMissions;
}

//get from database all UNDON missions assigned for this DAY
function getUndoneMissions(day){
	var dayUndoneMissions=[];
	var dayAllMissions = getDayMissions(day);
	var dayWaitMissions = getWaitMissions(day);
	var dayDoneMissions= getDoneMissions(day);

	//remove from All missions WAIT and DONE
	var toRemove=dayWaitMissions.concat(dayDoneMissions)
	var dayUndoneMissions = $.grep(dayAllMissions, function(value) {
    return $.inArray(value, toRemove) < 0;
	});

	return dayUndoneMissions;
}	


//------WRITE IN DATABASE -----------------


// add new user mission
$(document).on('addUserMission', function (event, name, icon,points,days,confirm,start) {

	var today=new Date();

	start = typeof start !== 'undefined' ? new Date(start) : today;
	start.setHours(0,0,0,0)

	var newId =String(Number(userMissions[userMissions.length-1].id)+1);
		var newUserMission={
				id: newId,
				name: name,
				icon: icon,
				points: points,
				days:days,
				confirm: confirm,
				start: start,
			}
	
	userMissions.push(newUserMission)
	$(document).trigger('showWeek')
})

$(document).on('deleteUserMission',function(event,missionId){

	var index = findUserMission(missionId);
	userMissions.splice(index,1);

	$(document).trigger('showWeek')
})
	

$(document).on('finishUserMission',function(event,missionId,finish){

	var index = findUserMission(missionId);
	userMissions[index].finish = today;
	
	$(document).trigger('showWeek')
})
	

$(document).on('updateUserMission', function (event, missionId, name, icon,points,days,confirm,start) {

	var index = findUserMission(missionId);

	userMissions[index].name=name;
	userMissions[index].icon=icon;
	userMissions[index].points=points;
	userMissions[index].days=days;
	userMissions[index].confirm=confirm;

	$(document).trigger('showWeek')
})

// finds index of WAIT / DONE mission in waitMissions / doneMissions
function findDoneMission(type, missionId, doneDate){
		var index = type.findIndex(function (mission) {
			return (missionId == mission.missionId && doneDate.getTime()==mission.doneDate.getTime())
		});
		return index
}

//finds index of USER mission in userMissions by ID
function findUserMission(missionId){
	var index = userMissions.findIndex(function (mission) {
		return missionId == mission.id
	});
	return index
}

function findExpertMission(missionId){
	var index = expertMissions.findIndex(function (mission) {
		return missionId == mission.id
	});
	return index
}


// add done mission
$(document).on('addDoneMission', function (event, missionId, doneDate){
	var newDoneMission = { missionId: missionId, doneDate: doneDate};
	doneMissions.push(newDoneMission)
	$(document).trigger('showWeek')
})

// add wait mission
$(document).on('addWaitMission', function (event, missionId, doneDate){
	var newWaitMission = { 
		missionId: missionId, 
		doneDate: doneDate
	};
	waitMissions.push(newWaitMission)
	$(document).trigger('showWeek')
})

// delete done mission
$(document).on('deleteDoneMission', function (event, missionId, doneDate){
	var index= findDoneMission(doneMissions,missionId,doneDate)
	if (index>-1){
		doneMissions.splice(index,1)
	}
	$(document).trigger('showWeek')
})

// delete wait mission
$(document).on('deleteWaitMission', function (event, missionId, doneDate){
	var index= findDoneMission(waitMissions,missionId,doneDate)
	if (index>-1){
		waitMissions.splice(index,1)
	}
	$(document).trigger('showWeek')
})


//finds index of USER mission in userMissions by ID
function findUserGift(giftId){
	var index = userGifts.findIndex(function (gift) {
		return giftId == gift.id
	});
	return index
}


function findExpertGift(giftId){
	var index = expertGifts.findIndex(function (gift) {
		return giftId == gift.id
	});
	return index
}



//function checking if we are in the kid mode
function kidMode() { return $('body').hasClass('kid') };

