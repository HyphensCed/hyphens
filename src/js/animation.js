document.addEventListener('DOMContentLoaded', function (){
    
    showTypo();
    showHyphen();

    //spreadPurple();

    setTimeout(function(){
        spreadColor('#d980fa', '.dot--purple')
    },3000);

        // red
    setTimeout(function(){
        spreadColor('#ed4c67', '.dot--red')
    },4700);

        // yellow
    setTimeout(function(){
        spreadColor('#FFC312', '.dot--yellow')
    },6400);

    

    setTimeout(bumpLittleDots, 8500);

    setTimeout(showMask, 9500);

    setTimeout(function(){
        window.location = 'home.html';
    }, 13500)

});

// show typo  duration = 1200ms
const showTypo = function () {

    anime({
        targets: '.typo .letter',
        translateY: [
            {value:['-50%', 0]}
        ],
        opacity: [
            {value: [0, 1]}
        ],
        
        delay: anime.stagger(200)
        
    })
};

// show hyphen after 2000ms , duration = 1000ms. Total duration = 3000ms
const showHyphen = function() {
    
    anime({
        targets: '.hyphen',
        opacity:[
            
            {
                value: 0,
                delay: 0,
                duration:0
            },
            {
                value: 1,
                delay:2000,
                duration:1000
            }
        ]
    })
};

// duration 500ms
const bump = function(){
    anime({
        targets: '.hyphen',
        translateY: [
            {
                value: '2%',
                duration:500,
                
            },
            {
                value: '-4%',
            },
            {
                value: 0
            }
        ],
        easing: 'easeInOutBack'
    }),

    // anime typo
    anime({
        targets: '.typo',
        translateY: [
            {
                value:'-2%',
                delay:800
            },
            {
                value: 0
            }
        ]
    })

};


// duration 1200ms + 500ms marge after next pattern
const spreadColor = function (color, target){
    // 500ms
    bump();

    anime({
        targets: '.hyphen',
        fill: [
            
            {
                value: color,
                duration:500,
                delay:200
        
            },
            {
                value: '#FFFFFF',
            }
        ],
    }),

    anime({

        targets: '.letter',
        fill: [
            
            {
                value: color,
                duration:500,
                delay:700
        
            },
            {
                value: '#FFFFFF',
            }
        ],
    }),

    anime({
        targets: target,
        opacity: [
            {
                value: 0,
                delay:0
            },
            {
                value: 1,
                delay: 500,
                
            }
        ],
        translateY: [
            {
                value: '-4%',
                delay: 1050,
                duration: 500,
                
            },
            {
                value: 0,
                duration: 500
            },
        
        ]
        
    })
};

const showMask = function(){

    anime({
        targets: '.dots',
        opacity: [
            {
                value:0,
                delay:0
            },
            {
                value: 1,
                duration: 1000,
                easing: 'linear',
                delay: anime.stagger(400)
            }
        ],
        

    });
};


const bumpLittleDots = function(){

    anime({
        targets: '.little-dots .circle',
        
        opacity: [
            {value: 1, delay:0, duration: 500},
            {value: 0, delay:anime.stagger(200), duration: 300, easing: 'linear'}
        ],
        translateY: [
            {value: '2%'},
            {value:0, delay: 2000}
        ],
        opacity: [
            {value:0},
            {value:1, delay: 2000}
        ],
        delay: anime.stagger(200)
    })
};






