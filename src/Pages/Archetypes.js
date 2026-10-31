import react from "react";
import WindowEffect from "../Componentes/WindowEffect";
import "../Styles/ArchetypesPage.css"
import Archetype from "../Componentes/Archetypes";
import ConjuradorIcon from "../Images/Icons/Pentagram.svg"
import CombatenteIcon from "../Images/Icons/DualSword.svg"
import AtiradorIcon from "../Images/Icons/Gun.svg"
import DefensorIcon from "../Images/Icons/Shield.svg"
import SuporteIcon from "../Images/Icons/Suport.svg"


export default function ArchetypesPage() {

    function SelecionarArquetipo(arquetipo, event) {
        const ContainerArquetipos = Array.from(document.getElementsByClassName("ArchetypeContainer"))
        const arquetiposbutton = Array.from(document.getElementsByClassName("archetypebutton"))
        const ArquetipoButton = event.target

        arquetiposbutton.map((element) => {
            element.style.backgroundColor = "transparent"
        })

        ArquetipoButton.style.backgroundColor = "white"

        ContainerArquetipos.map((arquetipoElement) => {
            if (arquetipoElement.id == arquetipo) {
                arquetipoElement.style.display = "flex"

                if(arquetipoElement.id == "Defensor")
                {
                    Array.from(document.getElementsByTagName("td")).map((td)=>{
                        td.style.width = "100%"
                    })
                }
                else
                {
                    Array.from(document.getElementsByTagName("td")).map((td)=>{
                        td.style.width = "10%"
                    })
                }
            }
            else {
                arquetipoElement.style.display = "none"
            }
        })
    }

    const ArchetypeList = {

        Conjurador: [
            { nivel: 2, reward: ["2 primeiro circulo", "1 segundo circulo"] },
            { nivel: 3, reward: ["3 primeiro circulo", "2 segundo circulo"] },
            { nivel: 4, reward: ["4 primeiro circulo", "3 segundo circulo", "1 terceiro circulo"] },
            { nivel: 5, reward: ["4 primeiro circulo", "4 segundo circulo", "3 terceiro circulo", "1 quarto circulo"] },
            { nivel: 6, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "2 quarto circulo", "1 quinto circulo"] },
            { nivel: 7, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo"] },
            { nivel: 8, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo"] },
            { nivel: 9, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo"] },
            { nivel: 10, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo", "1 nono circulo"] }
        ],

        Suporte: [
            { nivel: 2, reward: ["1 primeiro circulo", "1 segundo circulo"] },
            { nivel: 3, reward: ["2 primeiro circulo", "2 segundo circulo"] },
            { nivel: 4, reward: ["3 primeiro circulo", "3 segundo circulo", "1 terceiro circulo"] },
            { nivel: 5, reward: ["4 primeiro circulo", "4 segundo circulo", "2 terceiro circulo", "1 quarto circulo"] },
            { nivel: 6, reward: ["4 primeiro circulo", "4 segundo circulo", "3 terceiro circulo", "2 quarto circulo", "1 quinto circulo"] },
            { nivel: 7, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo"] },
            { nivel: 8, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo"] },
            { nivel: 9, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo"] },
            { nivel: 10, reward: ["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo", "1 nono circulo"] }
        ],

        Combatente: [
            { nivel: 2, reward: ["1 ataque extra"] },
            { nivel: 4, reward: ["2 ataques extras"] },
            { nivel: 6, reward: ["3 ataques extras"] },
            { nivel: 8, reward: ["4 ataques extras"] },
            { nivel: 10, reward: ["5 ataques extras"] }
        ],

        Atirador: [
            { nivel: 2, reward: ["2d6 Energia"] },
            { nivel: 4, reward: ["3d8 Energia"] },
            { nivel: 7, reward: ["4d10 Energia"] },
            { nivel: 9, reward: ["4d12 Energia"] },
        ],

        Defensor: [
            { nivel: "Nivel", reward: ["Reações por turno", "Opções", "Pontos de reação"] },
            { nivel: "2", reward: ["2", "2", "5", ] },
            { nivel: "3", reward: ["2", "3", "7"] },
            { nivel: "4", reward: ["3", "3", "7"] },
            { nivel: "5", reward: ["3", "4", "9"] },
            { nivel: "6", reward: ["4", "4", "9"] },
            { nivel: "7", reward: ["4", "5", "11"] },
            { nivel: "8", reward: ["5", "6", "11"] },
            { nivel: "9", reward: ["5", "6", "13"] },
            { nivel: "10", reward: ["6", "7", "15"] },
            { nivel: "-", reward: ["-", "-", "-"] },
            { nivel: "Nome da Reação", reward: ["Pontos gastos", "Distancia de Reação", "Duração da reação", "Descrição"] },
            { nivel: "Provocar", reward: ["2 pontos", "9 metros", "2 turnos", "Você tenta compelir as criaturas a duelar com você. Todas as criaturas que você possa ver, dentro do alcance, devem realizar um teste de resistência de Sabedoria. Se falhar, a criatura é atraída por você, compelida pela sua exigência divina. Pela duração, ela tem desvantagem nas jogadas de ataque contra criaturas diferentes de você e deve realizar um teste de resistência de Sabedoria cada vez que tentar se mover para um espaço que esteja a mais de 9 metros de você; se ela passar no teste de resistência, essa magia não restringirá o movimento do alvo nesse turno. A magia termina após 2 turnos."] },
            { nivel: "Sacrificar", reward: ["1 ponto", "4,5 metros", "", "Você se joga na frente de um ataque que atingiria uma criatura à sua vista até 4,5 metros de você. Você toma o dano completo ao invés da pessoa."] },
            { nivel: "Vínculo", reward: ["2 pontos", "9 metros", "", "Você se teleporta automaticamente, trocando de lugar com uma criatura que seria atingida à sua escolha. A criatura aparece no seu lugar anterior, e você aparece no lugar dela. Você receberá o dano completo do ataque."] },
            { nivel: "Contra Ataque", reward: ["1 ponto", "Pessoal", "", "Ao ser alvo de um ataque corpo a corpo e seu agressor errar o ataque, você pode usar sua reação pra contra atacar o alvo com sua arma equipada ou um truque. Seu ataque é feito com vantagem."] },
            { nivel: "Sentinela", reward: ["3 pontos", "1,5 metro", "Resto do turno atual", "Imediatamente após uma criatura em até 1,5 metro de você executar a ação Desengajar ou atingir um alvo diferente de você com um ataque, você pode realizar um Ataque de Oportunidade contra essa criatura. Ao atingir uma criatura com um Ataque de Oportunidade, o Deslocamento da criatura se torna 0 pelo resto do turno atual."] },
            { nivel: "Oportunista", reward: ["2 pontos", "Pessoal (aliado a até 3 metros)", "", "Se uma criatura sair do seu alcance pessoal, você ou um aliado escolhido a até 3 metros de você fazem um ataque de oportunidade contra essa criatura. O ataque tem vantagem e um bônus de +2 de dano."] },
            { nivel: "Derrubar", reward: ["2 pontos", "Pessoal", "Até o turno da criatura", "Ao executar um ataque de oportunidade, você pode adicionalmente fazer com que a criatura caia no chão até o turno da criatura. A criatura faz um teste de resistência Agilidade ou Resiliência contra a sua DT. O teste é escolhido com base na sua narração."] },
            { nivel: "Defletir Ataques", reward: ["1 ponto", "Pessoal (redirecionamento: 1,5 metro corpo a corpo ou 18 metros à distância)", "Instantânea", "Ao ser atingido devido uma jogada de ataque e o dano dessa jogada incluir dano Contundente, Cortante ou Perfurante, você pode executar uma Reação para reduzir o dano total do ataque. A redução é igual a 1d10 + sua Resiliência. Ao reduzir o dano a 0, você pode redirecionar o ataque. Para isso, escolha uma criatura à vista a até 1,5 metro de você se o ataque for corpo a corpo, ou a até 18 metros se for à distância e sem Cobertura Total. Faça um ataque com arma contra a criatura, redirecionando todo o dano à ela."] },
            { nivel: "Campeão dos Deuses", reward: ["0 pontos (passiva)", "Pessoal", "Até um Descanso Longo", "Uma entidade divina assegura que você possa continuar lutando. Você tem uma reserva de 4d12s que pode gastar para se curar. Como uma Reação, você pode gastar dados da reserva, jogá-los e recuperar uma quantidade de Pontos de Vida igual ao total do resultado. Sua reserva restaura todos os dados gastos quando você completa um Descanso Longo. O número máximo de dados na reserva aumenta em um quando você atinge os níveis 4 (5 dados), 6 (6 dados) e 8 (7 dados)."] },
            { nivel: "Protetor", reward: ["2 pontos (+1 ponto adicional por alvo)", "27 metros", "Instantânea", "Ao ser alvo de um ataque em área, você pode escolher uma criatura pra negar completamente o dano que ela receberia. Você, em troca, recebe o dano dobrado. Se receberia metade do dano por uma salvaguarda bem sucedida, você recebe completo. Se receberia total, recebe dobrado. Pra cada criatura adicional que você desejar salvar com essa dádiva, reduza 1 ponto e adicione +50% do dano total ao que você receberá."] },
            { nivel: "Antimago", reward: ["4 pontos", "3 metros", "Até o início do próximo turno da criatura", "Quando uma criatura ao seu alcance conjura uma magia, você pode escolher atrapalhar a sua conjuração, fazendo um teste de Força contra o atributo de conjuração da criatura. O dado maior ganha. Em caso de empate, o atacante ganhará. Caso você tenha sucesso, a magia é impedida e a criatura deverá repetir o teste caso queira conjurar uma magia até o início do próximo turno da criatura."] },
            { nivel: "Incentivo", reward: ["2 pontos", "9 metros", "Até o final da luta atual", "Você pode incentivar até no máximo 5 criaturas aliadas, você incluso. Essas criaturas ganham pontos de vida temporários iguais a 2d20. Esses pontos permanecem até o final da luta atual."] },
            { nivel: "Adrenalina", reward: ["3 pontos", "Pessoal", "1 turno (+1 turno por d12 adicional gasto)", "Você pode sacrificar 1d12 de vida pra ganhar resistência a todos os danos por 1 turno. Você pode sacrificar 1d12 adicional pra estender essa resistência pra 1 turno adicional por d12 gastos."] },
        ]

    }

    return (
        <div className="ArchetypePage">
            <WindowEffect />

            <div>
                <h1>Arquétipos</h1>
                <h2>Ao Alcançar nivel 2, você deve escolher um dos 5 arquétipos disponiveis.</h2>
            </div>

            <div className="ArchetypesButtons">
                <button className="archetypebutton" onClick={(event) => { SelecionarArquetipo("Conjurador", event) }}><img src={ConjuradorIcon}></img></button>
                <button className="archetypebutton" onClick={(event) => { SelecionarArquetipo("Suporte", event) }}><img src={SuporteIcon}></img></button>
                <button className="archetypebutton" onClick={(event) => { SelecionarArquetipo("Defensor", event) }}><img src={DefensorIcon}></img></button>
                <button className="archetypebutton" onClick={(event) => { SelecionarArquetipo("Combatente", event) }}><img src={CombatenteIcon}></img></button>
                <button className="archetypebutton" onClick={(event) => { SelecionarArquetipo("Atirador", event) }}><img src={AtiradorIcon}></img></button>
            </div>


            <div className="ArchetypesList">
                <Archetype archetypelist={ArchetypeList.Conjurador} name="Conjurador" img={ConjuradorIcon} description="Você recebe o poder da conjuração como dádiva. Ao escolher esse arquétipo, você ganha imediatamente poder arcano, além de ganhar +1 em Sabedoria. O seu atributo de ataque mágico é o seu valor de Sabedoria. A DT pra resistir as suas magias são 10 + Sabedoria. Assim que você escolhe o arquétipo, escolha 4 magias de primeiro e/ou segundo circulo (da lista de magias de mago e feiticeiro), assim como 3 truques. Você tem essas magias preparadas, e seus espaços de magia com base no seu nível são:" />
                <Archetype style={{ display: "none" }} archetypelist={ArchetypeList.Atirador} name="Atirador" img={AtiradorIcon} description="Você recebe o poder do combate à distância como dádiva. Ao escolher esse arquétipo, você ganha imediatamente +1 de Agilidade, além de ganhar proficiência com todas as armas marciais e simples à distancia, e todas as armas de fogo. Todos os seus tiros tem vantagem se os alvos não tiverem agido ainda no turno. Sua margem de crítico pra tiros com vantagem é 19. Ao ter vantagem contra um alvo e acertar um ataque no mesmo, adicione dados conforme a tabela no dano. Adicione sua metade de Agilidade + Pontaria ao dano ao invés de apenas Agilidade.  " />
                <Archetype style={{ display: "none" }} archetypelist={ArchetypeList.Combatente} name="Combatente" img={CombatenteIcon} description="Você recebe o poder do combate físico como dádiva. Ao escolher esse arquétipo, você ganha imediatamente +1 de Força ou +1 de Agilidade, além de ganhar proficiência com todas as armas marciais e simples corpo a corpo. Você pode fazer um ataque extra no seu turno um número de vezes conforme apresentado na tabela. Ao atacar uma criatura com uma arma corpo a corpo, some metade de seu atributo de Força ou Agilidade + Combate ao dano, ao invés de somente força/agilidade. Seus ataques desarmados agora são 1d8 + Força ao invés de 1." />
                <Archetype style={{ display: "none" }} archetypelist={ArchetypeList.Suporte} name="Suporte" img={SuporteIcon} description="Você recebe o poder da assistência como dádiva. Ao escolher esse arquétipo, você ganha imediatamente poder arcano, além de ganhar +1 de Empatia.  O seu atributo de ataque mágico é o seu valor de Empatia. A DT pra resistir as suas magias são 10 + Empatia. Assim que você escolhe o arquétipo, escolha 3 magias de primeiro e/ou segundo circulo (da lista de magias de clérigo e paladino), assim como 2 truques. Você tem essas magias preparadas, e seus espaços de magia com base no seu nível são:" />
                <Archetype style={{ display: "none" }} archetypelist={ArchetypeList.Defensor} name="Defensor" img={DefensorIcon} description="Você recebe o poder da defesa como dádiva. Ao escolher esse arquétipo, você ganha imediatamente +1 de HP, além de ganhar +1 de Força. Sua CA base agora é 12, além de ter proficiência com todas as armaduras e escudos. O bonus de CA se aplicará a todas as armaduras que você vestir, sendo assim, +2 na CA.; Você imediatamente ganha a agilidade de reagir no momento certo pra defender quem você considera importante. ; Você ganha reações por turno vide a tabela, tal qual suas opções de reação, e pontos de reação. Seus pontos de reação são recuperados totalmente com descanso longo, e metade deles com um descanso curto. Arredonda pra baixo.; Sua DT para essas habilidades é 10 + FOR" />
            </div>
        </div>
    )
}