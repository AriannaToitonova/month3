const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convert = (elem, target1, target2, isTrue) => {
    elem.addEventListener('input', () => {
        console.log(`elem: ${elem.value}`);
        console.log(`target1: ${target1.value}`);
        console.log(`target2: ${target2.value}`);
        console.log(`isTrue: ${isTrue}`);

        console.log('convert function called');
        const request = new XMLHttpRequest();
        request.open('GET', 'data.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();
        request.addEventListener('load', () => {
            console.log('load event listener called');
            const data = JSON.parse(request.response);
            console.log(`data: ${JSON.stringify(data)}`);

            target1.value = (isTrue === 'usd'
                ?
                (elem.value / data.usd).toFixed(2)
                : isTrue === 'eur'
                    ?
                    (elem.value * data.usd).toFixed(2)
                    : (elem.value * data.eur).toFixed(2));
            target2.value = (isTrue === 'usd'
                ?
                (elem.value / data.eur * data.usd).toFixed(2)
                : isTrue === 'eur'
                    ? (elem.value * data.eur / data.usd).toFixed(2)
                    : (elem.value * data.usd / data.eur).toFixed(2));
            elem.value === '' && (target1.value = target2.value = '');
            console.log('data:', data);
            console.log(`target1: ${target1.value}`);
            console.log(`target2: ${target2.value}`);


        });
    });
    console.log('elem:', elem);
    console.log('target1:', target1);
    console.log('target2:', target2);
    console.log('isTrue:', isTrue);
    console.log('target1:', target1.value);
    console.log('target2:', target2.value);

};

const arr = [
    {
        elem: som,
        target1: usd,
        target2: eur,
        isTrue: ''
    },
    {
        elem: usd,
        target1: som,
        target2: eur,
        isTrue: 'usd'
    },
    {
        elem: eur,
        target1: som,
        target2: usd,
        isTrue: 'eur'
    }
];





arr.forEach((item) => {
    convert(item.elem, item.target1, item.target2, item.isTrue);
});
