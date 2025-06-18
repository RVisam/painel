/* Get the element you want to display in fullscreen */
var elem = document.getElementById("painel");

/* Execute the openFullscreen() function to open the video in fullscreen. Include prefixes for browsers that do not support the requestFullscreen property */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

const weekday = [
  "Domingo -  ",
  "Segunda-feira -  ",
  "Terça-feira -  ",
  "Quarta-feira -  ",
  "Quinta-feira -  ",
  "Sexta-feira -  ",
  "Sábado -  ",
];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("dia").innerHTML = day;

var drake = dragula(
  [
    document.getElementById("funcionarios"),
    document.getElementById("motoristas"),
    document.getElementById("funcionariosFinalA"),
    document.getElementById("funcionariosFinalB"),
    document.getElementById("funcionariosFinalC"),
    document.getElementById("funcionariosFinalD"),
    document.getElementById("funcionariosFinalE"),
    document.getElementById("funcionariosFinalF"),
    document.getElementById("funcionariosFinalG"),
    document.getElementById("funcionariosFinalH"),
    document.getElementById("funcionariosFinalI"),
    document.getElementById("funcionariosFinalJ"),
    document.getElementById("funcionariosFinalK"),
    document.getElementById("funcionariosFinalL"),
    document.getElementById("funcionariosFinalM"),
    document.getElementById("funcionariosFinalN"),
    document.getElementById("funcionariosFinalO"),
    document.getElementById("funcionariosFinalP"),
    document.getElementById("funcionariosFinalQ"),
    document.getElementById("funcionariosFinalR"),
    document.getElementById("funcionariosFinalS"),
    document.getElementById("funcionariosFinalT"),
    document.getElementById("funcionariosFinalU"),
    document.getElementById("funcionariosFinalV"),
    document.getElementById("funcionariosFinalW"),
    document.getElementById("funcionariosFinalX"),
  ],
  {
    revertOnSpill: true,
  }
);

var drakeatividade = dragula(
  [
    document.getElementById("atividades"),
    document.getElementById("atividadesFinalA"),
    document.getElementById("atividadesFinalB"),
    document.getElementById("atividadesFinalC"),
    document.getElementById("atividadesFinalD"),
    document.getElementById("atividadesFinalE"),
    document.getElementById("atividadesFinalF"),
    document.getElementById("atividadesFinalG"),
    document.getElementById("atividadesFinalH"),
    document.getElementById("atividadesFinalI"),
    document.getElementById("atividadesFinalJ"),
    document.getElementById("atividadesFinalK"),
    document.getElementById("atividadesFinalL"),
    document.getElementById("atividadesFinalM"),
    document.getElementById("atividadesFinalN"),
    document.getElementById("atividadesFinalO"),
    document.getElementById("atividadesFinalP"),
    document.getElementById("atividadesFinalQ"),
    document.getElementById("atividadesFinalR"),
    document.getElementById("atividadesFinalS"),
    document.getElementById("atividadesFinalT"),
    document.getElementById("atividadesFinalU"),
    document.getElementById("atividadesFinalV"),
    document.getElementById("atividadesFinalW"),
    document.getElementById("atividadesFinalX"),
  ],
  {
    copy: function (el, source) {
      return source === document.getElementById("atividades");
    },
    accepts: function (el, target) {
      return target !== document.getElementById("atividades");
    },
    revertOnSpill: true,
    removeOnSpill: true,
  }
);

var drakeveiculo = dragula(
  [
    document.getElementById("veiculos"),
    document.getElementById("veiculosFinalA"),
    document.getElementById("veiculosFinalB"),
    document.getElementById("veiculosFinalC"),
    document.getElementById("veiculosFinalD"),
    document.getElementById("veiculosFinalE"),
    document.getElementById("veiculosFinalF"),
    document.getElementById("veiculosFinalG"),
    document.getElementById("veiculosFinalH"),
    document.getElementById("veiculosFinalI"),
    document.getElementById("veiculosFinalJ"),
    document.getElementById("veiculosFinalK"),
    document.getElementById("veiculosFinalL"),
    document.getElementById("veiculosFinalM"),
    document.getElementById("veiculosFinalN"),
    document.getElementById("veiculosFinalO"),
    document.getElementById("veiculosFinalP"),
    document.getElementById("veiculosFinalQ"),
    document.getElementById("veiculosFinalR"),
    document.getElementById("veiculosFinalS"),
    document.getElementById("veiculosFinalT"),
    document.getElementById("veiculosFinalU"),
    document.getElementById("veiculosFinalV"),
    document.getElementById("veiculosFinalW"),
    document.getElementById("veiculosFinalX"),
  ],
  {
    copy: function (el, source) {
      return source === document.getElementById("veiculos");
    },
    accepts: function (el, target) {
      return target !== document.getElementById("veiculos");
    },
    revertOnSpill: true,
    removeOnSpill: true,
  }
);

const editor = new EditorJS({
  holder: "editorjs",
  autofocus: true,
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: "Título...",
        levels: [2, 3, 4, 5, 6],
        defaultLevel: 2,
      },
      inlineToolbar: true,
    },

    image: SimpleImage,

    embed: {
      class: Embed,
      inlineToolbar: true,
      config: {
        services: {
          youtube: true,
          coub: true,
        },
      },
    },

    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },

    list: {
      class: EditorjsList,
      inlineToolbar: true,
      config: {
        defaultStyle: "unordered",
      },

      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Citação",
          captionPlaceholder: "Cite um autor",
        },
      },
    },
  },
  data: {},
  onReady: () => {},
  onChange: () => {
    saved();
  },
});
function saved() {
  editor
    .save()
    .then((savedData) => {
      console.log("Salvo", savedData);
    })
    .catch((error) => {
      console.log("Falha ao salvar", error);
    });
}
