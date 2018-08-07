import {component} from 'doz'

function getRandomColor() {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}


component('app-logo', {
    props: {
        backgroundColor: '#1f0c70',
        textColor: '#fff'
    },
    template() {
        return `
            <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="256px" height="256px" viewBox="0 0 6550 4660" preserveAspectRatio="xMidYMid meet">
                <g fill="${this.props.backgroundColor}" stroke="none">
                    <path d="M0 2330 l0 -2330 3275 0 3275 0 0 2330 0 2330 -3275 0 -3275 0 0 -2330z"/>
                </g>
                <g fill="${this.props.textColor}" stroke="none">
                    <path d="M1900 3093 c-87 -7 -186 -24 -257 -45 l-73 -21 0 -41 c0 -75 30 -288 65 -461 32 -159 71 -302 128 -470 23 -67 25 -70 68 -83 127 -38 246 -54 410 -55 l166 -2 53 -254 54 -253 66 6 c84 9 193 34 213 49 14 11 3 73 -103 567 -65 305 -128 593 -140 640 -31 124 -100 333 -114 348 -29 30 -364 88 -468 80 -13 -1 -43 -3 -68 -5z m241 -273 c29 -6 56 -15 60 -22 15 -23 61 -203 103 -395 42 -197 42 -198 22 -207 -33 -13 -258 -12 -282 1 -16 9 -29 40 -52 130 -52 197 -101 467 -88 481 19 19 161 26 237 12z"/>
                    <path d="M3040 3094 c-93 -9 -187 -25 -257 -46 l-73 -21 0 -46 c0 -183 85 -610 173 -871 l42 -124 45 -14 c126 -37 247 -54 400 -54 85 -1 184 5 220 11 83 15 197 49 204 60 9 14 -13 209 -40 371 -37 215 -113 506 -164 624 -18 42 -20 44 -97 64 -130 35 -340 56 -453 46z m277 -280 c18 -5 27 -21 42 -73 52 -175 101 -420 101 -502 0 -34 -4 -40 -27 -46 -42 -12 -225 -8 -249 5 -23 12 -48 88 -89 267 -29 131 -60 333 -51 342 20 21 207 25 273 7z"/>
                    <path d="M3775 3005 c73 -195 209 -368 488 -620 91 -82 166 -153 166 -157 1 -5 -107 -8 -239 -8 l-240 0 24 -62 c13 -35 40 -96 60 -135 l36 -73 445 0 c245 0 445 2 445 5 0 15 -75 187 -98 225 -15 26 -138 151 -287 292 -143 135 -278 264 -300 287 l-39 41 271 0 272 0 -20 58 c-11 31 -37 91 -57 132 l-38 75 -457 3 -457 2 25 -65z"/>
                </g>
            </svg>        
        `
    },
    onCreate() {
        this.$timer = null;
    },
    onMount() {
        setInterval(() => {
            this.props.backgroundColor = getRandomColor();
        }, 200)
    },
    onDestroy() {
        setInterval(this.$timer);
    }
});