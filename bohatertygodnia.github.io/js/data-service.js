//list of predefined missions
var expertMissions = [
	{ id:'1',	name: 'Zęby rano',				icon: 'assets/toothbrush.svg'	},
	{ id:'2',	name: 'Zęby wieczór',			icon: 'assets/toothbrush.svg'	},
	{ id:'3',	name: 'Posprzątać pokój',		icon: 'assets/room.svg'			},	
	{ id:'4',	name: 'Poskładać zabawki',		icon: 'assets/block.svg'		},
	{ id:'5',	name: 'Opróżnić zmywarkę',		icon: 'assets/dishwasher.svg'	},	
	{ id:'6',	name: 'Wstawić pranie',			icon: 'assets/laundry.svg'		},
	{ id:'7',	name: 'Pościelić łóżko',		icon: 'assets/bed.svg'			},
	{ id:'8',	name: 'Odkurzyć podłogę',		icon: 'assets/vacuum.svg'		},
	{ id:'9',	name: 'Umyć podłogę',			icon: 'assets/cleaning.svg'		},	
	{ id:'10',	name: 'Nakryć stół',			icon: 'assets/cutlery.svg'		},
	{ id:'11',	name: 'Posprzątać ze stołu',	icon: 'assets/table.svg'		},	
	{ id:'12',	name: 'Wynieść śmieci',			icon: 'assets/garbage.svg'		},	
	{ id:'13',	name: 'Posprzątać po zwierzątku',icon: 'assets/kennel.svg'		},	
	{ id:'14',	name: 'Umyć auto',				icon: 'assets/car.svg'			},	
	{ id:'15',	name: 'Zetrzeć kurze',			icon: 'assets/clean.svg'		},	
	{ id:'16',	name: 'Nakarmić zwierzątko',	icon: 'assets/dog-food.svg'		},	
	{ id:'17',	name: 'Wyprowadzić zwierzątko',	icon: 'assets/pet.svg'			},	
	{ id:'18',	name: 'Rozpakować zakupy',		icon: 'assets/basket.svg'		},	
	{ id:'19',	name: 'Pomoc w ogródku',		icon: 'assets/tree.svg'			},	
	{ id:'20',	name: 'Umyć naczynia',			icon: 'assets/wash.svg'			},	
	{ id:'21',	name: 'Odrobić pracę domową',	icon: 'assets/carpentry.svg'	},	
	{ id:'22',	name: 'Przeczytać książkę',		icon: 'assets/book.svg'			},		
	{ id:'23',	name: 'Poskładać ubrania',		icon: 'assets/shirt.svg'		},
	{ id:'24',	name: 'Ubrać się samemu',		icon: 'assets/shirt.svg'		}	
]

//list of predefined gifts
var expertGifts = [
	{ id:'1',	name: 'Wyjście na lody', icon: 'assets/icecream.svg'},
	{ id:'2',	name: 'Wyjście do kina', icon: 'assets/tickets.svg'	},
	{ id:'3',	name: 'Wycieczka na weekend', icon: 'assets/walk.svg'},
	{ id:'4',	name: 'Aquapark ', icon: 'assets/swimming-pool.svg'},
	{ id:'5',	name: '15 min na gry', icon: 'assets/15-minutes.svg'},
	{ id:'6',	name: '30 min na gry', icon: 'assets/30-minutes.svg'},
	{ id:'7',	name: '45 min na gry', icon: 'assets/45-minutes.svg'},
	{ id:'8',	name: 'Nowa gra', icon: 'assets/remote-control.svg'},
	{ id:'9',	name: 'Nowa zabawka', icon: 'assets/gift2.svg'},
	{ id:'10',	name: 'Wieczór gier', icon: 'assets/dice.svg'},
	{ id:'11',	name: 'Deser', icon: 'assets/piece-of-cake.svg'},
	{ id:'12',	name: 'Późniejszy powrót do domu', icon: 'assets/history.svg'},
	{ id:'13',	name: 'Deskorolka', icon: 'assets/skateboard.svg'},
	{ id:'14',	name: 'Niespodzianka', icon: 'assets/gift2.svg'},
	{ id:'15',	name: 'Klocki LEGO', icon: 'assets/lego.svg'}
]

// list of users
var users = [
    {   
        id:'1', 
        email:'anna.kowalska@gmail.com',    
        password:'annakowalska', 
        nick:'mama',
        kids: [
            {   
            id:'1', 
            name:'Kacper', 
            birth:'2010', 
            login: 'kacperek', 
            password: 'kacperek',
            userMissions: [
                {
                id:'1', 
                name: 'Pościelić łóżko',
                icon: 'assets/bed.svg',
                points: 1,
                days:[0,1,2,3,4,5,6],
                confirm: true,
                start: new Date("2015/12/31 00:00:00")	,
                },
                {
                id:'2',
                name: 'Odrobić pracę domową',
                icon: 'assets/carpentry.svg',
                points: 2,
                days: [0,1,3,5],
                confirm: true,
                start: new Date("2015/12/31 00:00:00"),
                },
                {
                id:'3',
                name:'Zetrzeć kurze',
                icon:'assets/clean.svg',
                points: 1,
                days:[0,2,4,6],
                confirm: true,
                start: new Date("2015/12/31 00:00:00"),
                },
                {
                id:'4',
                name:'Rozpakować zakupy',
                icon:'assets/basket.svg',
                points: 3,
                days:[1,4],
                confirm: true,
                start: new Date("2015/12/31 00:00:00"),
                }
            ],
            waitMissions: [
                { missionId: '3', doneDate: new Date('2017/08/07 00:00:00')},
                { missionId: '2', doneDate: new Date('2017/08/05 00:00:00')},
                { missionId: '3', doneDate: new Date('2017/08/04 00:00:00')},
                { missionId: '4', doneDate: new Date('2017/08/04 00:00:00')},
                { missionId: '2', doneDate: new Date('2017/08/03 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/02 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/07/31 00:00:00')},
            ],
            doneMissions: [
                { missionId: '8', doneDate: new Date('2017/08/07 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/07 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/06 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/05 00:00:00')},
                { missionId: '7', doneDate: new Date('2017/08/04 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/04 00:00:00')},
                { missionId: '6', doneDate: new Date('2017/08/03 00:00:00')},
                { missionId: '8', doneDate: new Date('2017/08/02 00:00:00')},
                { missionId: '3', doneDate: new Date('2017/07/31 00:00:00')},
                { missionId: '2', doneDate: new Date('2017/07/31 00:00:00')},
            ],
            userGifts: [
                {
                id:'1',
                name: 'Wyjście na lody',
                icon: 'assets/icecream.svg',
                points: 10,
                },
                {
                id:'2',
                name: 'Wieczór gier',
                icon: 'assets/dice.svg',
                points: 50,		
                }
            ]
        },
        {   
            id:'2', 
            name:'Zosia', 
            birth:'2012', 
            login: 'zosienka', 
            password: 'zosienka',
            userMissions: [
                {
                id:'1', 
                name: 'Pościelić łóżko',
                icon: 'assets/bed.svg',
                points: 1,
                days:[0,1,2,3,4,5,6],
                confirm: true,
                start: new Date("2015/12/31 00:00:00")	,
                }
            ],
            waitMissions: [
                { missionId: '1', doneDate: new Date('2017/08/02 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/07/31 00:00:00')},
            ],
            doneMissions: [
                { missionId: '1', doneDate: new Date('2017/08/07 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/06 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/05 00:00:00')},
                { missionId: '1', doneDate: new Date('2017/08/04 00:00:00')},
            ],
            userGifts: [
                { id:'1', name: 'Wyjście na lody', icon: 'assets/icecream.svg', points: 10} 
            ]
        }           
        ]
    },
    {   
        id:'2', 
        email:'danuta.nowak@gmail.com',    
        password:'danutanowak', 
        nick:'mama',
        kids: [
            {   
            id:'1', 
            name:'Bartek', 
            birth:'2006', 
            login: 'bartek2006', 
            password: 'bartek2006',
            userMissions: [ 
                {
                id:'4',
                name:'Rozpakować zakupy',
                icon:'assets/basket.svg',
                points: 3,
                days:[1,4],
                confirm: true,
                start: new Date("2015/12/31 00:00:00"),
                }
            ],
            waitMissions: [
                { missionId: '4', doneDate: new Date('2017/08/04 00:00:00')},
            ],
            doneMissions: [
            ],
            userGifts: [
                {
                id:'2',
                name: 'Wieczór gier',
                icon: 'assets/dice.svg',
                points: 50,		
                }
            ]
        } 
        ]
    }
]

