import react from "react";

export default function StressLevel() {
    return (
        <div className="RulePage">
            <h1>Niveis de Estresse</h1>

            <div className="Rule">
                <h1>O que é Nivel de Estresse</h1>

                <p>O nivel de estresse represente o seu nivel de exposição a Mythos, algo que vai além da compreensão de qualquer ser. Você sente sua presença se manifestar aos poucos,
                    enquanto te consome como um parasita. Sempre que você descobre ou tenta saber mais sobre esse ser, você deve fazer um teste de estresse, jogando 1d20. Caso falhe, você recebe 1 ponto (ou mais a critério do mestre)
                    pontos de estresse. Para cada nível além do 0 a dificuldade aumenta em +2. (0=10, 1=12, 2=14, 3=16, 4=18, 5=20), a partir do nivel 6 do seu personagem, você recebe os pontos de estresse automaticamente, sem o direito de quaisquer teste.
                    O nivel de estresse começa em 0 e vai até o nivel 7. Cada nive que passa, a presença do desconhecido fica mais forte em você, até que seja tarde demais.
                </p>

                <h1>Niveis de Estresse</h1>
                <p>
                    Os niveis de estresse são divididos em 7: <br />

                    <table>
                        <tr><td>Nível 0 - Sem Estresse</td><td>Você está saudável e dentro da realidade.</td></tr>
                        <tr><td>Nível 1 - Perturbado</td><td>Você apresenta alucinações visuais, auditivas e olfativas. Você tem desvantagem em testes perceptivos.</td></tr>
                        <tr><td>Nível 2 - Incomodado</td><td>Você não consegue comer normalmente e não dorme o suficiente. Seus descansos longos não te recuperam mais completamente, passando a ser tratado como descanso curto. (Espaços de magia e talentos são recuperados pela metade. Talentos com 1 uso passam a ser tratados como recarga 4-6. Se já é tratado como recarga, aumenta em 1 a sua dificuldade.)</td></tr>
                        <tr><td>Nível 4 - Atormentado</td><td>Todas as criaturas pra você passam a não ser mais distinguidas entre aliados e inimigos, como todas agora têm uma aparência alienígena pra você. Toda vez que um combate se iniciar, gire um dado de Resiliência. Sua DT é 10 + seu nível de Estresse (mínimo 14). Se falhar, numere as criaturas da cena (incluindo inimigos e aliados) e role um dado com um número de lados igual ao número de criaturas. Acerte seu próximo golpe na criatura do valor tirado no dado.</td></tr>
                        <tr><td>Nível 5 - Louco</td><td>Mythos começa a ter influência nas suas ações, tanto em combate quanto na sua vida cotidiana. Mythos pode interferir nas suas ações, escolhas ou socialização. Mythos dará uma ordem, na qual você pode tentar resistir com um teste de Resiliência. A DT é 10 + seu nível de estresse (mínimo 15). Se falhar, você é obrigado a concluir a ordem. Caso não consiga concluir a ordem, você automaticamente passa no teste.</td></tr>
                        <tr><td>Nível 6 - Insano</td><td>Você começa a se transformar em uma cria de Mythos. Role na tabela de Mutações pra adquirir sua nova forma. A mutação é permanente, mesmo que o estresse seja estabilizado.</td></tr>
                        <tr><td>Nível 7 - Transformado</td><td>Você não é mais você mesmo, se tornando uma aberração sem controle — você agora é uma máquina de matar do Adormecido.</td></tr>
                    </table>
                </p>
            </div>

            <div className="Rule">
                <h1>Tabela de Mutações</h1>

                <table>
                    <tr><td>1 - Crescimento de Tentáculos</td><td>Você passa a ter vantagem em testes de intimidação, e começa a ser temido. Suas atividades cotidianas podem ser afetadas com base no local de crescimento.</td></tr>
                    <tr><td>2 - Olho de Lodo</td><td>Você perde sua visão, tudo que você vê é alienígena. Você enxerga segredos, ocultos e nem tudo você compreende.</td></tr>
                    <tr><td>3 - Múltiplos Olhos</td><td>Você tem vantagem em testes de percepção, mas desvantagem em ataques que mirem em um único alvo.</td></tr>
                    <tr><td>4 - Ossos Protrudentes</td><td>Você não consegue mais usar armaduras, mas sua CA aumenta em +2.</td></tr>
                    <tr><td>5 - Altura Exagerada</td><td>Menor: você tem seu deslocamento reduzido pela metade, mas pode realizar 2 ações bônus. Maior: você tem seu deslocamento aumentado pela metade, mas não pode realizar mais do que 1 ação principal.</td></tr>
                    <tr><td>6 - Simbionte</td><td>Você ganha vulnerabilidade a dois tipos de dano aleatórios. Essas são as fraquezas e medos do seu simbionte, portanto, são as suas. Faça um teste de Resiliência (DT 10 + nível de Estresse) ou se afaste da fonte com pavor.</td></tr>
                    <tr><td>7 - Toque Mortal</td><td>Seu toque causa 1d10 necrótico a qualquer criatura, ignorando resistências e imunidades.</td></tr>
                    <tr><td>8 - Boca Alienígena</td><td>Alimentos comuns não te sustentam mais, você precisa comer carne humana pra sobreviver.</td></tr>
                    <tr><td>9 - Mãos Monstruosas</td><td>Ataques desarmados causam 1d10 extra. Suas mãos são grandes demais pra trabalhos manuais ou utilizar armas.</td></tr>
                    <tr><td>10 - Aura do Cthulhu</td><td>Toda vez que você e aliados ganharem 1 ponto de Estresse, todos ganham 2 pontos de Estresse ao invés disso.</td></tr>
                </table>
            </div>

            <div className="Rule">
                <h1>A Morte em Mythos</h1>

                <p>
                    Cair em morrendo no Mythos não é tão simples quanto em DnD. No DnD, a morte não é tão temida quanto deveria. Aqui, a morte é uma oportunidade pro desconhecido.
                    Ao cair em morrendo pela primeira vez, você imediatamente ganha 2 pontos de Estresse, e rola na tabela de TRAUMA.
                    Se você sobreviver ao encontro, na sua próxima vez em morrendo adiciona +1 no Estresse, até você ser levado completamente por Mythos.
                    Na primeira vez em morrendo, seus testes contra morte são DT 8. nas próximas, aumenta em 2 a DT pra cada queda.
                    Falhas críticas são 2 fracassos automáticos. Acertos críticos são 2 sucessos automáticos. Todos os dados são girados pelo mestre. Ao ter 3 sucessos, você está estabilizado, e voltará depois de 2 turnos. Os pontos de Estresse e trauma permanecem. Ao ter 3 fracassos, você morre.
                    Estar estabilizado significa estar vulnerável a ataques de finalização. Ataques de finalização têm vantagem contra criaturas incapacitadas e com 1 ponto de vida. Um ataque de finalização é morte garantida pra criatura alvo.
                    Se o seu personagem morrer e for trago de volta a vida por qualquer meio, 4 pontos de Estresse serão atribuídos ao seu personagem, alem do TRAUMA. Role na tabela 2 vezes ao invés de apenas uma. Sua mente esteve em um lugar que não deveria estar, e você se lembra de tudo. Você sabe que não tem volta. Curandeiro, traga alguém de volta com sabedoria. Repense se vale a pena fazer essa alma sofrer o peso da mortalidade novamente. Se você a ama, não faça. Se a odeia, a traga de volta mais vezes.
                    SEMPRE ROLE NA TABELA DEPOIS DE SABER SE MORREU DEFINITIVAMENTE OU NÃO. Adicione os pontos depois de levantar também.
                    Traumas só podem ser removidos com efeitos que acabem com maldições.
                </p>
            </div>

            <div className="Rule">
                <h1>Tabela de Traumas</h1>


                <table>
                    <tr><td>01</td><td>Pesadelos</td></tr>
                    <tr><td>02</td><td>O afetado não se sente seguro sozinho e entra em pânico se não estiver acompanhado de outro personagem.</td></tr>
                    <tr><td>03</td><td>O afetado acredita que tudo é uma conspiração - essa cidade é controlada por doppelgängers, o rei é um dragão disfarçado, os Deuses não existem, etc.</td></tr>
                    <tr><td>04</td><td>O afetado desenvolve um problema com bebida.</td></tr>
                    <tr><td>05</td><td>O afetado ouve a voz da avó (ou personagem familiar parecido) de vez em quando mandando ele matar pessoas.</td></tr>
                    <tr><td>06</td><td>Ataques de Pânico</td></tr>
                    <tr><td>07</td><td>O personagem desenvolve narcolepsia. A cada 1d20 horas, joga 1d8. Se o resultado for 3 ou menos, o personagem dorme por 1 hora e anda dormindo 1d4 x 3 metros em uma direção aleatória a qualquer momento durante essa hora.</td></tr>
                    <tr><td>08</td><td>Depois de sofrer dano, o afetado se comporta como se estivesse sob a magia de confusão na rodada seguinte.</td></tr>
                    <tr><td>09</td><td>A pessoa afetada acredita sinceramente que pode lançar a magia Desejo à vontade e tenta lançá-la com frequência.</td></tr>
                    <tr><td>10</td><td>O afetado passa a acreditar que sua pele é incrivelmente resistente e se recusa a usar qualquer tipo de armadura.</td></tr>
                    <tr><td>11</td><td>Delírios</td></tr>
                    <tr><td>12</td><td>O personagem agora só fala na terceira pessoa.</td></tr>
                    <tr><td>13</td><td>O afetado acha tudo absolutamente delicioso.</td></tr>
                    <tr><td>14</td><td>Você começa a ter pesadelos de cães carniceiros te pegando e rasgando sua carne. Ao acordar, você ainda pode ouvi-los rosnando e respirando atrás de você. Os sintomas ficam tão graves que você alucina sendo atacado pelos cães e pode sentir dor (1d6 de dano psíquico) quando eles mordem.</td></tr>
                    <tr><td>15</td><td>Seu personagem desenvolve a ilusão paranoica de que um membro aleatório do grupo está sempre observando-o.</td></tr>
                    <tr><td>16</td><td>Tremores corporais</td></tr>
                    <tr><td>17</td><td>Seu personagem está convencido de que é um licantropo e vai procurar uma cura. Em uma lua cheia, ele vai tirar a roupa e tentar morder as pessoas. Se seu personagem É um licantropo, ele acredita que não é.</td></tr>
                    <tr><td>18</td><td>Seu personagem ocasionalmente 'fala para a câmera', faz narração em off para eventos que estão acontecendo e às vezes fala seus pensamentos em voz alta, exatamente como se fosse um personagem de um programa de TV... ele acredita que os Deuses estão assistindo suas aventuras para entretenimento.</td></tr>
                    <tr><td>19</td><td>O afetado está incrivelmente aterrorizado com o escuro por causa das criaturas indizíveis e dos sons horríveis que existem lá, então ele sempre carrega alguma forma de luz e provavelmente vai surtar se ela acabar.</td></tr>
                    <tr><td>20</td><td>O afetado sabe, sem dúvida, que é o verdadeiro pai biológico de outra pessoa (NPC ou PC); e ele quer compensar seu filho por nunca ter percebido isso antes.</td></tr>
                    <tr><td>21</td><td>Depressão Profunda</td></tr>
                    <tr><td>22</td><td>Você terá uma obsessão em jogar uma moeda de ouro para cada decisão que tomar.</td></tr>
                    <tr><td>23</td><td>Quando você dorme, você sonha com um lago de fogo. É o mesmo sonho todas as noites. Você sabe que ele existe em algum lugar do mundo. Quando você acorda, você pode sentir ele te puxando, te chamando. Você faz tudo ao seu alcance para viajar para este lago. O Mestre decide o quão longe ele está. Você sabe que é o lago certo quando chega lá. Depois de chegar, você descobre que ele não está pegando fogo. Receba 3d10 de dano psíquico enquanto luta para conciliar isso, e a loucura termina.</td></tr>
                    <tr><td>24</td><td>Agora você acredita que é a encarnação física da divindade à qual você dedicou sua vida. Alternativamente, para classes não dedicadas a uma divindade, agora você acredita que é uma divindade digna de devoção, ganha a capacidade de lançar prestidigitação para provar sua divindade para aqueles tolos o suficiente para questionar seu poder!</td></tr>
                    <tr><td>25</td><td>O afetado acha que os membros do grupo são parentes próximos (pai, mãe, irmão, etc.)</td></tr>
                    <tr><td>26</td><td>Desmaios constantes</td></tr>
                    <tr><td>27</td><td>O afetado se torna excessivamente crítico com os membros do grupo e zomba e os insulta mesmo pelo menor erro.</td></tr>
                    <tr><td>28</td><td>O afetado começa a pensar que o egoísmo é a única maneira de voltar para casa vivo e sempre escolherá o que é melhor para ele e não para todo o grupo. Ele sempre se recusará a compartilhar coisas.</td></tr>
                    <tr><td>29</td><td>O personagem se torna extremamente sádico. As mortes provocam mais risos - quanto mais sangrento, mais felicidade é alcançada.</td></tr>
                    <tr><td>30</td><td>Você deve salvar todos! Quando perguntado "do que", a resposta é "do mal!" antes de tentar assassinar todos.</td></tr>
                    <tr><td>31</td><td>Acessos de Fúria</td></tr>
                    <tr><td>32</td><td>O afetado desenvolve um medo incontrolável de água, incluindo gelo e água engarrafada. Ele pode até se deixar morrer de sede.</td></tr>
                    <tr><td>33</td><td>O personagem desenvolve uma compulsão por alimentar qualquer criatura que vê, com o que estiver à mão.</td></tr>
                    <tr><td>34</td><td>O afetado está convencido de que é um vampiro e procurará sangue humanoide. Também recebe 1d4 de dano psíquico por minuto de exposição ao sol e acredita que a imagem de si mesmo em espelhos é uma ilusão.</td></tr>
                    <tr><td>35</td><td>A pessoa decide criar um enorme tesouro de saque, não muito diferente dos de um covil de dragão vermelho. A pessoa pegará qualquer ouro e objetos de valor que vir, por qualquer meio que achar adequado, e então os levará para sua casa.</td></tr>
                    <tr><td>36</td><td>Catatonia</td></tr>
                    <tr><td>37</td><td>O personagem afetado verbaliza todos os seus processos de pensamento internos, a menos que faça um esforço concentrado para não fazê-lo. Ao suprimir a verbalização de seus pensamentos, eles têm desvantagem em testes de habilidade e salvamentos, não podem lançar magias de Concentração e falam em frases tensas e quebradas.</td></tr>
                    <tr><td>38</td><td>O afetado acredita que suas partes do corpo têm personalidades separadas e passa a maior parte do tempo tentando negociar a paz entre elas.</td></tr>
                    <tr><td>39</td><td>O PC afetado adota a personalidade de outro personagem e acredita totalmente que é aquele personagem.</td></tr>
                    <tr><td>40</td><td>O afetado acredita que pode conversar com sua arma. Se o afetado não tiver uma arma, ele acredita ser capaz de se comunicar com a arma de outro membro do grupo.</td></tr>
                    <tr><td>41</td><td>Cegueira</td></tr>
                    <tr><td>42</td><td>O afetado acha as coisas mais inconvenientes absolutamente hilárias, explodindo em gargalhadas cacofônicas nos piores momentos.</td></tr>
                    <tr><td>43</td><td>O afetado nunca deixa um de seus sentidos funcionar corretamente porque acredita falsamente que está melhor sem aquele sentido. Sua desvantagem autoimposta se tornou seu amuleto da sorte e cobertor de segurança, embora na verdade o torne pior, então ele luta com unhas e dentes para nunca usar o sentido que rejeitou.</td></tr>
                    <tr><td>44</td><td>O afetado está convencido de que possui múltiplas personalidades em sua psique, exceto que todas as personalidades agem exatamente da mesma forma em todos os aspectos e a única diferença é que o nome de cada personalidade difere em uma letra.</td></tr>
                    <tr><td>45</td><td>O afetado teme que mentir de alguma forma signifique seu fim e se tornou genuíno e honesto a ponto da falha. Eles dizem o que está em suas mentes, embora com terror, vergonha ou hesitação óbvios.</td></tr>
                    <tr><td>46</td><td>Esquizofrenia</td></tr>
                    <tr><td>47</td><td>O afetado percebeu que o destino rege tudo e nada não está predestinado. Eles são incrivelmente melancólicos e fatalistas e devem ser impulsionados e instigados à ação para fazer qualquer coisa além de suspirar e aceitar seu destino.</td></tr>
                    <tr><td>48</td><td>O afetado assume obsessivamente a ambição de ser escritor e escreve neuroticamente tudo para alguma crônica ambígua em que está sempre trabalhando.</td></tr>
                    <tr><td>49</td><td>O personagem perde parcialmente o senso de fome. A cada 1d20 horas, ele tem que fazer um teste de DT 8 Sabedoria. Em uma falha, ele acredita estar extremamente faminto e fará tudo o que puder para conseguir uma refeição.</td></tr>
                    <tr><td>50</td><td>O afetado tem um sonho, no qual vê sua própria morte, de uma forma bastante específica. O Mestre decide como é o sonho, então é exatamente como uma situação que o grupo passará. O afetado então reconhece a cena e entra em pânico. Esse trauma passa automaticamente quando a situação acontecer, e não pode ser curado de maneira nenhuma até ser concretizado.</td></tr>
                    <tr><td>51</td><td>Psicose</td></tr>
                    <tr><td>52</td><td>O personagem acha que de repente mudou de gênero.</td></tr>
                    <tr><td>53</td><td>O afetado acha que é rude beber ou comer em público e se esconderá de qualquer outra pessoa antes de fazer uma dessas coisas.</td></tr>
                    <tr><td>54</td><td>O afetado de repente "se lembra" que é um agente duplo, destinado a derrubar quem o grupo está trabalhando, e que os membros do grupo fazem parte do esquema, só não se lembram disso.</td></tr>
                    <tr><td>55</td><td>A pessoa acredita que é um dragão metálico polimorfado, preso na forma humana. Ela parte para consertar sua "maldição".</td></tr>
                    <tr><td>56</td><td>Múltiplas Personalidades</td></tr>
                    <tr><td>57</td><td>O personagem vê tudo em preto e branco.</td></tr>
                    <tr><td>58</td><td>O personagem tem uma visão do fim do mundo, com criaturas gigantescas saindo dos mares e devorando a todos.</td></tr>
                    <tr><td>59</td><td>Tudo que o personagem vê fica com cores fortíssimas e ele não consegue mais ficar com os olhos abertos.</td></tr>
                    <tr><td>60</td><td>Tem amnésia e esquece quem é e o que está fazendo ali.</td></tr>
                    <tr><td>61</td><td>Perde a audição.</td></tr>
                    <tr><td>62</td><td>Auto-Mutilação</td></tr>
                    <tr><td>63</td><td>Perde a visão.</td></tr>
                    <tr><td>64</td><td>Perde a fala.</td></tr>
                    <tr><td>65</td><td>Começa a comer algo estranho, terra, morde a própria mão, etc.</td></tr>
                    <tr><td>66-70</td><td>Auto-canibalismo</td></tr>
                    <tr><td>71-75</td><td>Canibalismo</td></tr>
                    <tr><td>76-80</td><td>Maníaco-Depressivo Grave</td></tr>
                    <tr><td>81-85</td><td>Piromania</td></tr>
                    <tr><td>86-90</td><td>Fobia Gravíssima (a escolha do jogador)</td></tr>
                    <tr><td>91-95</td><td>O afetado tem problemas de memória. Sempre que precisa lembrar de algo, joga um d4. Se o resultado for 1, a pessoa esquece tudo sobre aquilo.</td></tr>
                    <tr><td>96-100</td><td>O afetado é bipolar. A cada 1d20 horas, joga 1d10. Se o resultado for par, a pessoa age de forma exageradamente amigável. Se for ímpar, a pessoa tende a ser agressiva.</td></tr>
                </table>
            </div>
        </div>
    )
}