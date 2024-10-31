function conversorTempCtoF (tipoTemp, valorTemp){
    if (tipoTemp === 'C') { 
        let calculTempC = (valorTemp * 1.8) + 32;
        let TempCelsius = calculTempC.toFixed(2);
        let tempConvertida = {Temperatura: `${TempCelsius} F° (Fahrenheit)`};
        return tempConvertida;
    }

    else if (tipoTemp === 'F') { 
        let calculTempF = (valorTemp - 32) / 1.8;
        let TempFredondar = calculTempF.toFixed(2);
        let tempConvertida = {Temperatura: `${TempFredondar} C° (Celsius)`};
        return tempConvertida;
    }

    else {
        return ({Erro: 'Tipo de temperatura inválida. Por favor use "C" para a temperatura "Celsius" e "F" para temperatura "Fahrenheit".'});
    }
}

function validaTemperatura(paramentro) {
    if (isNaN(paramentro)) {
        return false;
    }

    else {
        return true;
    }
}


function validaTipoTemp(tipoTemp) {
    if (tipoTemp === 'C' || tipoTemp === 'F') {
        return true;
    }

    else {
        return false;
    }
}

exports.conversorTempCtoF = conversorTempCtoF;
exports.validaTemperatura = validaTemperatura;
exports.validaTipoTemp = validaTipoTemp;