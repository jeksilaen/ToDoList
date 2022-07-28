
exports.getDate = () => {
    const today = new Date().toLocaleString('en-us', {  weekday: 'long', day: 'numeric', month: 'long' });

    return today;
}

exports.getDay = () => {
    const today = new Date().toLocaleString('en-us', {  weekday: 'long' });

    return today;
}

