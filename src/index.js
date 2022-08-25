import convert from 'convert-units'

// console.log(convert(1).from('sss').to('kg'));

const regex = /([0-9]+(\.[0-9]+)?)(\s*)(\w{1,4})/ig;

document.querySelectorAll('*').forEach(function(node) {
    const style = window.getComputedStyle(node);
    if (!((style.display === 'none') || (style.visibility === 'hidden') || (node.children.length > 0))) {
        node.innerText = tryConvert(node.innerText);
    }
})

// for testing
// const arg = process.argv[2];
// console.log(regex.test(arg));
// console.log(tryConvert(arg));

function tryConvert(text) {
    return text.replaceAll(regex, (_, b, __, s, c) => {
        try {
            // note: this is a hacky workaround to the library's api.
            // it assumes that possibilities() has a metric unit at its head [0].
            let d = convert(Number(b)).from(c);
            const m = d.possibilities()[0];
            d = convert(d.to(m)).from(m).toBest();
            console.log('Best:', d);
            return d.val + s + d.unit;
        } catch (error) {
            // console.error(error);
            return _;
        }
    });
}

