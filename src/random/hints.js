// list of tips
// const hints = [
//     'Você pode fixar participantes na tela clicando na imagem deles',
//     'Você pode usar o botão "Levantar a mão" para que os outros saibam que você quer falar',
//     'You can learn about key shortcuts by pressing Shift+?',

//     'You can learn more about the state of everyone\'s connection by hovering '
//         + 'on the bars in their thumbnail',
//     'You can hide all thumbnails by using the button in the bottom right corner'
// ];

const hints = [
    'Você pode fixar participantes na tela clicando na imagem deles',
    'Você pode usar o botão "Levantar a mão" para que os outros saibam que você quer falar',
    'Você pode ver os atalhos de teclado pressionando Shift+?',
    'Você pode ver como está a conexão de alguém, passando o mouse nas barras na imagem deles',
    'Você pode deixar a sala mais segura ativando a sala de espera. Clique nos três pontos, e vá em Opções de Segurança. Se quiser também pode colocar uma senha.',
    'Você pode convidar qualquer pessoa para a sala, é só compartilhar o link',
];
/**
 * Get a random hint message from hint array.
 *
 * @return {string} the hint message.
 */
function getHint() {
    const l = hints.length - 1;
    const n = Math.round(Math.random() * l);

    return hints[n];
}

export { getHint };