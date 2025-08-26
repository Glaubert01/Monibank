export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    const maiorDeIdade = validaIdade(dataNascimento);

    if (maiorDeIdade) {
        console.log("É maior de idade");
    } else {
        console.log("É menor de idade");
    }

    return maiorDeIdade; // Agora a função também retorna algo útil
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(
        data.getUTCFullYear() + 18,
        data.getUTCMonth(),
        data.getUTCDate()
    );

    return dataAtual >= dataMais18;
}
