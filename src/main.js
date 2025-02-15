import './style.css'

const urlInput = document.getElementById('url-input');
const obfuscateInput = document.getElementById('obfuscate-input');

const listener = () => {
    const val = urlInput.value;
    if (val === '' || val == null) return;
    if (!val.startsWith('https://pbs.twimg.com/')) alert('Invalid URL! The URL must begin with https://pbs.twimg.com/');

    const obfuscate = !!obfuscateInput.checked;


    let url;
    if (obfuscate) {
        url = [...val].map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
    } else {
        url = encodeURIComponent(val);
    }

    const result = `https://doge.gov/_next/image?url=${url}&w=1920&q=100`;
    document.getElementById('result').textContent = result;
    document.getElementById('result-img').src = result;
}

urlInput.addEventListener('input', listener)
urlInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        listener(e);
    }
});
obfuscateInput.addEventListener('change', listener);