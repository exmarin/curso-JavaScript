let videoJuegos =  ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Exequiel',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',
        ['Dr. Willy', 'Woodman']
    ]
];

console.log({arregloCosas});
console.log(arregloCosas[7][4][0]); // Dr. Light