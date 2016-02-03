function render(html, parametros)
{
    var variables = html.match(/[^\{\}]+(?=\})/g);

    for (var i = 0; i < variables.length; i++) {
        var variable = variables[i];
        html =  html.replace("{"+variables[i]+"}", parametros[variable]);
    }

    return html;
}

module.exports.render = render;
