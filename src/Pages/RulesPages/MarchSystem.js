import react from "react";


export default function MarchSystem() {
    return (
        <div className="RulePage">
            <h1>Sistema de Marchas</h1>

            <div className="Rule">
                <p>
                    Alguns mapas podem apresentar sistema de marcha, sendo parecido com o de DnD. O sistema de marcha engloba viagens longas e encontros aleatórios em áreas grandes, como: cidades, domínios do pavor, continentes e até o mundo inteiro. A escala do seu mapa não importa, sendo assim, você pode utilizar o sistema de marcha sempre que quiser.
                    Quando o mapa exige marcha, ele se apresentará como quadros que podem ser avançados pra desbloquear o mapa. Um grupo de aventureiros tem como base 16 pontos de marcha, 4 desses pontos são contados como "Marcha Forçada".
                    Cada quadrado no mapa demonstra quantos pontos de marcha são gastos pra avançar naquela área. 1 ponto sinaliza uma trilha ou uma estrada de fácil locomoção, 2 pontos pra mais sinalizam uma trilha difícil (como uma floresta ou morros nevados), aumentando os pontos com base na dificuldade do grupo pra explorar aquela área. Por exemplo: uma floresta aberta seria mais fácil de explorar do que uma montanha íngreme e escorregadia. A floresta gastaria menos pontos do que a montanha.
                    Locais especiais como aldeias, cidades ou pontos de interesse podem custar mais pontos do que uma trilha pra ser desbloqueado.
                    O máximo de pontos que podem ser cobrados de um quadrado só é 6. Por isso, monte seus quadros de forma estratégica com base na sua aventura.<br />
                    PERIGOS DA MARCHA FORÇADA: Quando o grupo passa a usar os pontos de "Marcha Forçada", os aventureiros estarão sujeitos a +1 ponto de estresse/exaustão cada vez que escolher fazer isso. Cada ponto gasto resultará em +1 personagem afetado por vez. Por exemplo: caso o grupo escolha gastar 1 ponto de Marcha Forçada, apenas 1 personagem do grupo receberá o ponto. Se escolher gastar 3 pontos, 3 personagens receberão +1 de exaustão/estresse. Esse efeito é cumulativo, e pode resultar em morte. Nenhuma resistência é jogada.<br />
                    COMO RECUPERAR PONTOS: Aventureiros podem recuperar todos seus Pontos de Marcha fazendo um descanso longo. Aventureiros podem escolher gastar seus pacotes de ração, ou fazerem um teste em conjunto pra procurar comida nas proximidades. Aventureiros podem fazer um descanso longo sem preocupação se tiverem tendas e/ou sacos de dormir. Caso não tenham, estarão sujeitos a um teste pra deduzir sua sobrevivência durante a noite.<br />
                    ENCONTROS ALEATÓRIOS: Todos os quadrados explorados estão sujeitos a um encontro aleatório. O mestre jogará um dado determinado pelo livro ou criado por si, e o mesmo o dirá o resultado de um encontro aleatório ou não. Quadrados já explorados ainda assim estão sujeitos a encontros. Nem todos os encontros significam batalha. Os jogadores devem escolher em grupo sua ação de resposta pro encontro, e tudo deve ser meramente narrado, visando fácil compreensão e agilidade no processo. Conversas profundas e investigação a fundo não são possíveis dessa forma. Nenhum personagem deve agir por si só. Os testes, caso hajam, serão rolados pelo personagem com maior contagem de pontos na perícia exigida.<br />
                    ENCONTROS PROGRAMADOS: Estes encontros aparecerão no mapa com um ícone especial e não serão aleatórios. Embaixo de seu ícone, será contado em quantos descansos longos este encontro desaparecerá. Estes encontros prometem maiores recompensas, e, a partir deles, os personagens podem entrar em cenas de roleplay mais detalhadas antes de partir pra viagem novamente. Dentro dos encontros programados, haverão mapas próprios caso disponível e os jogadores estarão livres pra interpretar a cena da forma que desejar, podendo levar sessões dentro do mesmo encontro.<br />
                </p>
            </div>

            <div className="Rule">
                <h1>Regra Adicional Sobre Marchas</h1>
                <p>
                    Alguns lugares podem ser instáveis, confusos e surreais (como faéria), e isso adiciona uma regra nova.
                    Pra retratar instabilidade mágica, um dos resultados de "encontro aleatório" pode ser "teleporte".
                    Adicionalmente, caso prefira, você pode usar o mesmo efeito sendo resultado de "1" (falha crítica) no d20 girado de probabilidade de encontro.
                    Este encontro resultará nos personagens se perdendo, sendo teleportados magicamente ou o se mudando sozinho. Todas essas fazem com que eles parem em outro lugar do mapa completamente aleátorio (a critério do mestre). Como consequência do teleporte, adicionalmente, o mestre tem a opção de eliminar os locais já descobertos do grupo, fazendo com que a contagem resete completamente.
                    Adicionalmente pra regra anterior, caso o grupo porte uma bússola funcional no seu plano de existência, locais de interesse (como cidades, aldeias, cavernas, etc) serão os únicos ainda disponíveis pra consulta dos jogadores. Ou seja, somente locais de trilha serão excluídos, mas cidades ainda aparecerão no tabuleiro.
                    <h2>Tabela de Probabilidade de Encontro</h2>
                    <table>
                        <tr>
                            <td>1-15</td>
                            <td>Sem encontro</td>
                        </tr>
                        <tr>
                            <td>16-20</td>
                            <td>Gire na tabela de encontro aleatorio</td>
                        </tr>
                    </table>

                    <h2>Tabela de Probabilidade de Encontro (Falha Critica = Teleporte)</h2>
                    <table>
                        <tr>
                            <td>1</td>
                            <td>Grupo se teletransporta para um local aleatório do mapa</td>
                        </tr>
                        <tr>
                            <td>2-16</td>
                            <td>Sem encontro</td>
                        </tr>
                        <tr>
                            <td>17-20</td>
                            <td>Gire na tabela de encontro aleatorio</td>
                        </tr>
                    </table>
                </p>
            </div>
        </div>
    )
}