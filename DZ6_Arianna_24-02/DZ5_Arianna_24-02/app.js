const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convert = (elem, target, isTrue) => {
    elem.addEventListener('input', () => {
        console.log(`elem: ${elem.value}`);
        console.log(`target: ${target.value}`);
        console.log(`isTrue: ${isTrue}`);

        console.log('convert function called');
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                console.log(`data: ${JSON.stringify(data)}`);

                if (isTrue === 'usd-som') {
                    target.value = (elem.value * data.usd).toFixed(2);
                } else if (isTrue === 'som-usd') {
                    target.value = (elem.value / data.usd).toFixed(2);
                } else if (isTrue === 'eur-som') {
                    target.value = (elem.value * data.eur).toFixed(2);
                } else if (isTrue === 'som-eur') {
                    target.value = (elem.value / data.eur).toFixed(2);
                } else if (isTrue === 'usd-eur') {
                    target.value = (elem.value * data.usd / data.eur).toFixed(2);
                } else if (isTrue === 'eur-usd') {
                    target.value = (elem.value * data.eur / data.usd).toFixed(2);
                }

                elem.value === '' && (target.value = '');
                console.log('data:', data);
                console.log(`target: ${target.value}`);
            })
            .catch(error => console.log(error));
    });
    console.log('elem:', elem);
    console.log('target:', target);
    console.log('isTrue:', isTrue);
    console.log('target:', target.value);
};

const arr = [
    {
        elem: som,
        target: usd,
        isTrue: 'som-usd'
    },
    {
        elem: usd,
        target: som,
        isTrue: 'usd-som'
    },
    {
        elem: eur,
        target: som,
        isTrue: 'eur-som'
    },
    {
        elem: som,
        target: eur,
        isTrue: 'som-eur'
    },
    {
        elem: usd,
        target: eur,
        isTrue: 'usd-eur'
    },
    {
        elem: eur,
        target: usd,
        isTrue: 'eur-usd'
    }
];

arr.forEach(item => {
    convert(item.elem, item.target, item.isTrue);
});
