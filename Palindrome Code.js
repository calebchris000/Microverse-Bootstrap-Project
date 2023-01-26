str = str.toLowerCase().replace(/[-() ,._]/g, '');

    let reversed = str.split('').reverse().join('')

    return str == reversed
