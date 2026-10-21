import react from "react";
import "../../Styles/RulesPage.css"
import Atributos from "../../Images/Atributos.png"
import WindowEffect from "../../Componentes/WindowEffect"

export default function CharacterRules()
{
    return (
        <div className="RulePage">
            <WindowEffect/>
            <h1>Criando seu personagem</h1>
        <ul>
            <li>Atributos</li>
            <li>Calculo de vida</li>
            <li>Niveis</li>
            <li>Classes</li>
            <li>Origem</li>
        </ul>

        <div className="Rule">
            <h1>Atributos</h1>

            <p>
                Os atributos em Mythos são divididos em 4: Força, Sabedoria, Empatia e Agilidade. Jogadores começam no nivel 0 e recebem 6 pontos para distribuir entre esses 4.
                Cada um desses atributos possuem pericias, no qual são usadas para realizar testes para lidar com alguma situação ou realizar uma ação. Cada Atributo tem 5 pericias para testes, sendo elas:
                <br/>
                <br/>
                FORÇA: [Resiliencia, Combate, Stamina, Desempenho, Intimidação]<br/>
                SABEDORIA: [Percepção, Memória, Tecnologia, Natureza, Ocultismo]<br/>
                EMPATIA: [Intuição, Medicina, Manipulação, Diplomacia, Sedução]<br/>
                AGILIDADE: [Pontaria, Furtividade, Pilotagem, Acrobacia, Crime]<br/>
                <br/>
                Cada atributo começa em 0 e cada pericia começa em 1. Jogadores recebem pontos para distribuir na pericia igual ao nivel + valor do atributo, o que significa
                que se um jogador tiver no nivel 2 e tem 2 no atributo de FORÇA, ele pode distribuir 4 pontos entre as pericias de Força. 
                Sempre que um jogador sobe de nivel, ele recebe +1 para distribuir em pericias em todos os atributos. Além disso, nos niveis impares [1, 3, 5, 7, 9], os jogadores
                RECEBEM +2 para distribuir entre os ATRIBUTOS
            </p>
           
           <div style={{width: "100%", textAlign: "center"}}>
             <img src={Atributos}></img>
           </div>
        </div>

        <div className="Rule">
            <h1>Niveis de Yog-Sothoteria</h1>

            <p>
               Nivel de Yog-Sothoteria represente o nivel do personagem, mas também representa o quão próximo de Mythos esse personagem está. Sempre que um personagem sobe de nivel,
                ele recebe recompensas como mais pontos de atributos e pericias para distribuir, além dos talentos gerais.

                O que determina seu nível é sua exposição ao Alienígena. Você pode ou não entender sua experiência, e pode ter sido induzida por outras pessoas ou não. Porém, quanto maior seu nível, mais suscetível você é a Mythos. Seus pontos de Estresse passam a ser GARANTIDOS no nível 6 em diante, então você não faz nenhum teste de resistência mais. A cada nível a partir do 0, seu teste aumenta pra passar em situações que você não compreende. Pra cada nível além do 0 a dificuldade aumenta em +2. (0=10, 1=12, 2=14, 3=16, 4=18, 5=20, 6=garantido)
                O Mestre determina quanto de exposição você precisa pra passar de nível, e o quanto você já vivenciou. Nem sempre você ou seu personagem sabem que estão sendo expostos ao alienígena. 
                Se o seu personagem não sabe o quanto de exposição já teve ou porquê têm seus poderes, sinta-se livre pra determinar como o personagem acha que conseguiu os mesmos.

                A cada nivel, seu personagem recebe recompensas de acordo com a tabela.

                <table border={true}>
                    <tr>
                        <td>Nivel 0</td>
                        <td>+1d10 de vida e 0 HP</td>
                        <td>Escolha 1 talento de origem</td>
                        <td>6 pontos de atributos</td>
                    </tr>
                    <tr>
                        <td>Nivel 1</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                        <td>+2 pontos para distribuir entre seus atributos</td>
                    </tr>
                     <tr>
                        <td>Nivel 2</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                        <td>Escolha de arquétipo</td>
                    </tr>
                    <tr>
                        <td>Nivel 3</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                        <td>+2 pontos para distribuir entre seus atributos</td>
                    </tr>
                    <tr>
                        <td>Nivel 4</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                    </tr>
                    <tr>
                        <td>Nivel 5</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                        <td>+2 pontos para distribuir entre seus atributos</td>
                    </tr>
                    <tr>
                        <td>Nivel 6</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                    </tr>
                     <tr>
                        <td>Nivel 7</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                        <td>+2 pontos para distribuir entre seus atributos</td>
                    </tr>
                     <tr>
                        <td>Nivel 8</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                    </tr>
                     <tr>
                        <td>Nivel 9</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                        <td>+2 pontos para distribuir entre seus atributos</td>
                    </tr>
                     <tr>
                        <td>Nivel 10</td>
                        <td>+1d20 de vida e 1 HP</td>
                        <td>Escolha 1 talento geral</td>
                        <td>+1 ponto para distribuir entre suas pericias de cada atributo</td>
                    </tr>
                </table>
            </p>
        </div>

        <div className="Rule">
            <h1>Calculo de Vida</h1>

            <p>
                No sistema de Mythos, a vida é calculado com base nos pontos de HP [Health Points], sempre que um personagem sobe de nivel, ele recebe um HP, o que significa que ele
                deve rodar 1d20 e somar a sua vida maxima. No nivel 0, a vida maxima dos personagens é 1d10. a partir do primeiro nivel subsequente, ele passa a rodar 1d20 e somar a sua vida maxima.
                Além disso, os HP determinam quantos dados você pode usar para se recuperar em um descanso curto.
                <br/>

                Supondo então que um personagem está criando um personagem nivel 4, sua vida será 1d10+4d20 de vida.
                <br/><br/>Como é 1 por nivel, os pontos de HP vão até no máximo 10.
            </p>
        </div>

        <div className="Rule">
            <h1>Arquétipos</h1>

            <p>A partir do nivel 2, você deve escolher um arquétipo para seu personagem, que seria basicamente sua classe, a forma como ele luta e resolve conflitos. Temos 5 opções de
                Arquétipos: Conjurador, Suporte, Combatente, Atirador e Defensor.
                <br/>
                <br/>
                Conjurador: Esse arquétipo são usuários de magia e poderes ocultos. Eles conseguem utilizar poderes além da compreensão humana e são extremamente versáteis.<br/>
                Suporte: Esse arquétipo também são usuários de magia, porém utilizam seus poderes voltados para ajudar os outros, seja com cura, melhorias ou até outras formas de resolver um conflito.<br/>
                Combatente: Aptos no combate corpo a corpo, Combatentes são voltados para causar grande dano e ainda se manter em um combate a curta distancia. <br/>
                Atirador: Perfeito para causar grande dano, porém mais voltados a combates de longa distancia. <br/>
                Defensor: O tanque do grupo, aquele que ficará na linha de frente e irá se encarregar que ninguem passe para ferir seus aliados.
                <br/>
                <br/>
                
                alguns talentos gerais exigem que o jogador tenha um determinado arquétipo para obte-lo. Além disso, cada arquétipo dá uma habilidade de grande valor ao personagem.
                Para melhor informação, consulte a página de Arquétipos do Catálogo Geral de Mythos. Além disso, a partir do nivel 6, é possivel o jogador escolher um novo arquétipo ao inves do
                talento geral

            </p>
        </div>

        <div className="Rule">
            <h1>Origem/Profissão</h1>

            <p>
                No nivel 0, cada personagem deve escolher uma origem/profissão, que remete aquilo que ele faz durante seu momento atual. Talvez ele seja um palhaço, ou talvez um alquimista, temos diversas possibilidades para escolher.
                As origens beneficiam o jogador com itens, bonus de pericia e habilidades unicas, que podem auxiliar em sua jornada. Alguns talentos gerais também requerem origens especificas como requisito.
                Os talentos de profissão podem ser encontrados na página de Talentos

                 
            </p>
        </div>

        </div>
    )
    
}