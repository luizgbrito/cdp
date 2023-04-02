'use strict';
var names = [   'Al\xEDcia da Costa',
'Alexandre da Mata',
'Amanda da Cunha',
'Ant\xF4nio da Cruz',
'Arthur da Luz',
'Augusto da Luz',
'Ben\xEDcio da Cruz',
'Benjamin da Luz',
'Bernardo da Concei\xE7\xE3o',
'Bernardo da Cruz',
'Bernardo da Cruz',
'Bernardo da Rosa',
'Breno da Luz',
'Bruna da Rocha',
'Bruno da Mata',
'Bruno da Rocha',
'Bryan da Concei\xE7\xE3o',
'Caio das Neves',
'Carlos Eduardo Cardoso,',
'Carlos Eduardo Cunha',
'Carlos Eduardo da Cruz',
'Carlos Eduardo da Paz',
'Carlos Eduardo FariasFernandes',
'Carlos Eduardo Lima',
'Cau\xEA da Costa',
'Cau\xEA da Rocha',
'Danilo da Costa',
'Danilo da Cunha',
'Danilo da Paz',
'Davi da Rosa',
'Davi Lucas Barbosa',
'Davi Lucas Costela',
'Davi Lucas da Costa',
'Davi Lucas Martins',
'Davi Lucas Moraes',
'Davi Lucas Moreira',
'Davi Lucas Novaes',
'Davi Lucas Nunes',
'Davi Lucca Costela',   
'Davi Lucca da Luz',
'Davi Lucca Duarte',
'Davi Lucca Martins',
'Davi Lucca Monteiro',
'Davi Lucca Moraes',
'Davi Lucca Ramos',
'Davi Lucca Sales',
'Davi Luiz Almeida',
'Davi Luiz Arag\xE3o',
'Davi Luiz Azevedo',
'Davi Luiz da Costa',
'Davi Luiz da Costa',
'Davi Luiz da Costa',
'Davi Luiz Dias',
'Davi Luiz Duarte',
'Davi Luiz Pires',
'Davi Luiz Teixeira',
'Diego da Cruz',
'Diogo da Concei\xE7\xE3o',
'Enzo Gabriel Alves',
'Enzo Gabriel Caldeira',
'Enzo Gabriel das Neves',
'Enzo Gabriel FariasFernandes',
'Enzo Gabriel Monteiro',
'Enzo Gabriel Moreira',
'Felipe da Cunha',
'Fernando da Luz',
'Fernando das Neves',
'Gabriel da Rosa',
'Gustavo da Cruz',
'Gustavo Henrique Alves',
'Gustavo Henrique Azevedo',
'Gustavo Henrique da Cunha',
'Gustavo Henrique Jesus',
'Gustavo Henrique Moura',
'Gustavo Henrique Oliveira',
'Gustavo Henrique Viana',
'Heitor da Paz',
'Ian da Mata',
'Ian da Paz',
'Jo\xE3o da Rocha',
'Jo\xE3o Felipe Cavalcanti',
'Jo\xE3o Felipe da Luz',
'Jo\xE3o Felipe das Neves',
'Jo\xE3o Felipe das Neves',
'Jo\xE3o Felipe Mendes',
'Jo\xE3o Felipe Porto',
'Jo\xE3o Felipe Rocha',
'Jo\xE3o Felipe Souza',
'Jo\xE3o Felipe Vieira',
'Jo\xE3o Gabriel Almeida',
'Jo\xE3o Gabriel da Cunha',
'Jo\xE3o Gabriel da Mota',
'Jo\xE3o Gabriel Gon\xE7alves',
'Jo\xE3o Gabriel Viana',
'Jo\xE3o Gabriel Viana',
'Jo\xE3o Guilherme Ara\xFAjo',
'Jo\xE3o Guilherme Barbosa',
'Jo\xE3o Guilherme Caldeira',
'Jo\xE3o Guilherme da Luz',
'Jo\xE3o Guilherme Gomes',
'Jo\xE3o Lucas Lima',
'Jo\xE3o Lucas Moraes',
'Jo\xE3o Miguel Campos',
'Jo\xE3o Miguel Cavalcanti',
'Jo\xE3o Miguel Correia',
'Jo\xE3o Miguel Costela',
'Jo\xE3o Miguel da Mata',
'Jo\xE3o Miguel das Neves',
'Jo\xE3o Miguel FariasFernandes',
'Jo\xE3o Miguel Freitas',
'Jo\xE3o Miguel Jesus',
'Jo\xE3o Miguel Pires',
'Jo\xE3o Miguel Porto',
'Jo\xE3o Miguel Silveira',
'Jo\xE3o Pedro Almeida',
'Jo\xE3o Pedro Lima',
'Jo\xE3o Pedro Melo',
'Jo\xE3o Pedro Nogueira',
'Jo\xE3o Vitor Almeida',
'Jo\xE3o Vitor daLuz',
'Jo\xE3o Vitor Martins',
'Joaquim da Costa',
'Joaquim da Mata',
'Joaquim da Mota',
'Joaquim da Paz',
'Juan da Concei\xE7\xE3o',
'Kaique da Cunha',
'Kevin da Paz',
'Leandro da Mata',
'Leonardo da Concei\xE7\xE3o',
'Lucas da Rosa',
'Lucas Gabriel Cardoso',
'Lucas Gabriel Freitas',
'Lucas Gabriel Martins',
'Lucas Gabriel Moura',
'Lucas Gabriel Nogueira',
'Lucas Gabriel Oliveira',
'Lucca da Luz',
'Lucca da Mota',
'Luigi da Luz',
'Luiz Felipe da Rocha',
'Luiz Felipe da Rosa',
'Luiz Felipe Farias',
'Luiz Felipe Ferreira',
'Luiz Felipe Lima',
'Luiz Felipe Lopes',
'Luiz Felipe Monteiro',
'Luiz Felipe Pires',
'Luiz Fernando Castro',
'Luiz Fernando da Rosa',
'Luiz Fernando da Rosa',
'Luiz Fernando Nogueira',
'Luiz Fernando Pereira', 
'Luiz Fernando Porto',
'Luiz Fernando Sales',
'Luiz Gustavo Arag\xE3o',
'Luiz Gustavo Carvalho',
'Luiz Gustavo da Mota',
'Luiz Gustavo Duarte',
'Luiz Gustavo Freitas',
'Luiz Gustavo Moraes',
'Luiz Gustavo Ribeiro',
'Luiz Henrique da Paz',
'Luiz Henrique FariasFernandes',
'Luiz Henrique Mendes',
'Luiz Henrique Peixoto',
'Luiz Henrique Peixoto',
'Luiz Miguel',
'Luiz Miguel Castro',
'Luiz Miguel Lima',
'Luiz Miguel Nogueira',
'Luiz Miguel Pinto',
'Luiz Miguel Pires',
'Luiz Miguel Santos',
'Luiz Miguel Souza',
'Luiz Miguel Vieira',
'Luiz Miguel Vieira',
'Luiz Ot\xE1vio Barros',
'Luiz Ot\xE1vio da Cruz', 
'Luiz Ot\xE1vio Freitas',
'Luiz Ot\xE1vio Vieira',
'Luiza da Concei\xE7\xE3o',
'Marcelo da Concei\xE7\xE3o',
'Marcelo das Neves',
'Marcos Vinicius Carvalho',
'Marcos Vinicius da Rocha',
'Marcos Vinicius Gomes',
'Marcos Vinicius Jesus',
'Marcos Vinicius Lima',
'Marcos Vinicius Moraes',
'Marcos Vinicius Moreira',
'Marcos Vinicius Viana',
'Matheus da Costa',
'Matheus da Paz',
'Miguel da Cruz', 
'Nathan da Cunha',
'Nathan da Paz',
'Nicolas das Neves',
'Noah da Luz',
'Noah da Rosa',
'Ot\xE1vio da Concei\xE7\xE3o',
'Paulo da Mota',
'Pedro da Cunha',
'Pedro Henrique Campos',
'Pedro Henrique da Mata',
'Pedro Henrique Freitas',
'Pedro Henrique Gon\xE7alves',
'Pedro Henrique Nascimento',
'Pedro Henrique Pereira',
'Pedro Henrique Viana',
'Pedro Lucas Castro',
'Pedro Lucas Costela',
'Pedro Lucas das Neves',
'Pedro Lucas Farias',
'Pedro Lucas Novaes',
'Pedro Miguel da Costa',
'Pedro Miguel Duarte',
'Pedro Miguel Martins',
'Pedro Miguel Oliveira',
'Pedro Miguel Pires',
'Pedro Miguel Rezende',
'Pedro Miguel Ribeiro',
'Pedro Miguel Rocha',
'Pedro MiguelArag\xE3o',
'Rafael da Cunha',
'Renan da Rosa',
'Rodrigo da Costa',
'Ryan da Rocha',
'Thales da Cunha',
'Thales da Rocha',
'Thales da Rocha',
'Thales das Neves',
'Thiago da Luz',
'Thiago da Mata',
'Vicente da Costa',
'Vinicius da Mata',
'Vitor da Luz',
'Vitor Gabriel Caldeira',
'Vitor Gabriel Costela',
'Vitor Gabriel da Concei\xE7\xE3o',
'Vitor Gabriel da Luz',
'Vitor Gabriel Lopes',
'Vitor Gabriel Nunes',
'Vitor Gabriel Oliveira',
'Vitor Hugo Cunha',
'Vitor Hugo da Cruz',
'Vitor Hugo Moraes',
'Vitor Hugo Moreira',
'Vitor Hugo Santos',
'Vitor Hugo Vieira',
'Vitor HugoMoura',
'Yuri da Concei\xE7\xE3o',
'Yuri da Rosa',];
window.addEventListener('load', function () {
    (function () {
        function d(D) {
            return '<p style="font-family: \'Exo\', sans-serif; color: #fff !important; margin: 3px; font-size: 16px; line-height: 140%;">' + D + '</p>'
        }

        function e(D, E) {
            return Math.random() * (E - D) + D
        }

        function f(D, E, F) {
            return (p - 0) / (E - D) * (F - E) + p
        }

        function g() {
            return new Date().getHours()
        }

        function h(D, E) {
            var F = document.getElementsByTagName('head')[0],
                G = document.createElement('script');
            G.type = 'text/javascript', G.src = D, G.onreadystatechange = E, G.onload = E, F.appendChild(G)
        }

        function i(D, E) {
            var F = document.getElementsByTagName('head')[0],
                G = document.createElement('link');
            G.rel = 'stylesheet', G.href = D, G.onreadystatechange = E, G.onload = E, F.appendChild(G)
        }

        function k(D) {
            document.getElementById(D).style.backgroundColor = 'rgba(0, 181, 26, 0.93) !important'
        }

        function l() {
            
            function D() {
                var I = g(),
                    J = e(y[I] * (1 - m), y[I] * (1 + m)) * 1.6,
                    K = new Noty({
                        theme: v,
                        layout: 'topRight',
                        timeout: r,
                        text: d('<b>' + Math.floor(J) + '</b> homens assistindo esse vídeo agora.'),
                        killer: !0
                    }),
                    L = K.id;
                K.show(), k(L)
            }

            function E() {
                var I = g(),
                    J = f(64, 1600, y[I]),
                    K = e(J * (1 - 0.5), J * (1 + .5));
                if (0 != Math.floor(K)) {
                    var L = new Noty({
                        theme: v,
                        layout: 'topRight',
                        timeout: r,
                        text: d('<b>' + Math.floor(K) + '</b> homens acabam de participar do Caixa de Pandora!'),
                        killer: !0
                    }),
                        M = L.id;
                    L.show(), k(M)
                }
            }

            function G() {
                var I = '37ryh92dj',
                    J = function () {
                        var T = localStorage.getItem(I);
                        return null == T && (localStorage.setItem(I, ','), J()), T
                    },
                    K = function (T) {
                        var U = J().split(',');
                        U.push(T), localStorage.setItem(I, U)
                    },
                    M = function (T) {
                        var U = J();
                        if (null == U) return !1;
                        var V = U.split(',');
                        return !(V.find(function (W) {
                            return W === T
                        }) !== T)
                    },
                    O = function N() {
                        for (var T = names[Math.floor(Math.random() * names.length)], U = 0; M(T);)
                            if (T = names[Math.floor(Math.random() * names.length)], U += 1, U == names.length) {
                                T = null;
                                break
                            } return null !== T && K(T), T
                    }();
                if (null !== O) {
                    var R = new Noty({
                        theme: v,
                        layout: 'topRight',
                        timeout: r,
                        text: d('\uD83D\uDCB8 <b>' + O + '</b>' + ' acabou de se inscrever no Caixa de Pandora.'),
                        killer: !0
                    }),
                        S = R.id;
                    R.show(), k(S)
                }
            }

            function H(I, J, K, L) {
                setInterval(function () {
                    0 == new Date().getMinutes() % Math.floor(e(J, K)) && I()
                }, L)
            }
            setTimeout(D, 3e3), setTimeout(G, 17000), setTimeout(E, 3e4), H(D, 1, 4, 3e4), H(E, 3, 6, 3e4), H(G, 3, 6, 3e4)
        }
        var m = 0.065,
            p = 8,
            r = 8000,
            t = new Date(2018, 2, 5),
            u = new Date(2018, 2, 12),
            v = 'relax',
            w = 5.2,
            y = {
                0: 3500 / w,
                1: 2e3 / w,
                2: 1e3 / w,
                3: 650 / w,
                4: 488 / w,
                5: 668 / w,
                6: 1400 / w,
                7: 2100 / w,
                8: 4200 / w,
                9: 5400 / w,
                10: 5400 / w,
                11: 5100 / w,
                12: 5e3 / w,
                13: 4800 / w,
                14: 4500 / w,
                15: 4200 / w,
                16: 4e3 / w,
                17: 4100 / w,
                18: 4500 / w,
                19: 5600 / w,
                20: 5900 / w,
                21: 5300 / w,
                22: 4800 / w,
                23: 4200 / w
            };
        h('https://code.jquery.com/jquery-3.3.1.min.js', function () {
            h('https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.js', function () {
                i('https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css', function () {
                    i('https://fonts.googleapis.com/css?family=Amatic+SC:700&amp;subset=latin-ext', l);
                    var D = document.createElement('style');
                    D.type = 'text/css', D.innerHTML = '#noty_layout__topRight { width: 180px !important; } .noty_body { margin-top: 44px !important; background-color: #FFC400 !important; font-size: 16px !important} .noty_theme__relax.noty_type__alert, .noty_theme__relax.noty_type__notification { border: 0px; background-color: transparent; }', document.body.appendChild(D), Noty.setMaxVisible(3)
                })
            })
        })
    })()
});