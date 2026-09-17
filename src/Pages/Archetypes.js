import react from "react";
import WindowEffect from "../Componentes/WindowEffect";
import "../Styles/ArchetypesPage.css"
import Archetype from "../Componentes/Archetypes";
import ConjuradorIcon from "../Images/Icons/Pentagram.svg"
import CombatenteIcon from "../Images/Icons/DualSword.svg"
import AtiradorIcon from "../Images/Icons/Gun.svg"
import DefensorIcon from "../Images/Icons/Shield.svg"
import SuporteIcon from "../Images/Icons/Suport.svg"


export default function ArchetypesPage()
{

    function SelecionarArquetipo(arquetipo, event)
    {
        const ContainerArquetipos = Array.from(document.getElementsByClassName("ArchetypeContainer"))
        const arquetiposbutton = Array.from(document.getElementsByClassName("archetypebutton"))
        const ArquetipoButton = event.target

        arquetiposbutton.map((element)=>{
            element.style.backgroundColor = "transparent"
        })
       
         ArquetipoButton.style.backgroundColor = "white"

        ContainerArquetipos.map((arquetipoElement)=>{
            if(arquetipoElement.id == arquetipo)
            {
               arquetipoElement.style.display = "flex"
            }
            else {
                arquetipoElement.style.display = "none"
            }
        })
    }

  const ArchetypeList = {

    Conjurador: [
        {nivel: 2, reward:["2 primeiro circulo", "1 segundo circulo"]},
        {nivel: 3, reward:["3 primeiro circulo", "2 segundo circulo"]},
        {nivel: 4, reward:["4 primeiro circulo", "3 segundo circulo", "1 terceiro circulo"]},
        {nivel: 5, reward:["4 primeiro circulo", "4 segundo circulo", "3 terceiro circulo", "1 quarto circulo"]},
        {nivel: 6, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "2 quarto circulo", "1 quinto circulo"]},
        {nivel: 7, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo"]},
        {nivel: 8, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo"]},
        {nivel: 9, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo"]},
        {nivel: 10, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo", "1 nono circulo"]}
    ],

    Suporte: [
        {nivel: 2, reward:["1 primeiro circulo", "1 segundo circulo"]},
        {nivel: 3, reward:["2 primeiro circulo", "2 segundo circulo"]},
        {nivel: 4, reward:["3 primeiro circulo", "3 segundo circulo", "1 terceiro circulo"]},
        {nivel: 5, reward:["4 primeiro circulo", "4 segundo circulo", "2 terceiro circulo", "1 quarto circulo"]},
        {nivel: 6, reward:["4 primeiro circulo", "4 segundo circulo", "3 terceiro circulo", "2 quarto circulo", "1 quinto circulo"]},
        {nivel: 7, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo"]},
        {nivel: 8, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo"]},
        {nivel: 9, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo"]},
        {nivel: 10, reward:["4 primeiro circulo", "4 segundo circulo", "4 terceiro circulo", "3 quarto circulo", "2 quinto circulo", "1 sexto circulo", "1 setimo circulo", "1 oitavo circulo", "1 nono circulo"]}
    ],

    Combatente: [
        {nivel: 2, reward:["1 ataque extra"]},
        {nivel: 4, reward:["2 ataques extras"]},
        {nivel: 6, reward:["3 ataques extras"]},
        {nivel: 8, reward:["4 ataques extras"]},
        {nivel: 10, reward:["5 ataques extras"]}
    ],

    Atirador: [
        {nivel: 2, reward:["2d6 Energia"]},
        {nivel: 4, reward:["3d8 Energia"]},
        {nivel: 7, reward:["4d10 Energia"]},
        {nivel: 9, reward:["4d12 Energia"]},
    ]

}

    return (
        <div className="ArchetypePage">
            <WindowEffect/>

            <div>
               <h1>Arquétipos</h1>
                <h2>Ao Alcançar nivel 2, você deve escolher um dos 5 arquétipos disponiveis.</h2>
            </div>

            <div className="ArchetypesButtons">
                <button className="archetypebutton" onClick={(event)=>{SelecionarArquetipo("Conjurador", event)}}><img src={ConjuradorIcon}></img></button>
                <button className="archetypebutton"  onClick={(event)=>{SelecionarArquetipo("Suporte", event)}}><img src={SuporteIcon}></img></button>
                <button className="archetypebutton"  onClick={(event)=>{SelecionarArquetipo("Defensor", event)}}><img src={DefensorIcon}></img></button>
                <button className="archetypebutton"  onClick={(event)=>{SelecionarArquetipo("Combatente", event)}}><img src={CombatenteIcon}></img></button>
                <button className="archetypebutton"  onClick={(event)=>{SelecionarArquetipo("Atirador", event)}}><img src={AtiradorIcon}></img></button>
            </div>
            

            <div className="ArchetypesList">
                <Archetype archetypelist={ArchetypeList.Conjurador} name="Conjurador" img={ConjuradorIcon}  description="Você recebe o poder da conjuração como dádiva. Ao escolher esse arquétipo, você ganha imediatamente poder arcano, além de ganhar +1 em Sabedoria. O seu atributo de ataque mágico é o seu valor de Sabedoria. A DT pra resistir as suas magias são 10 + Sabedoria. Assim que você escolhe o arquétipo, escolha 4 magias de primeiro e/ou segundo circulo (da lista de magias de mago e feiticeiro), assim como 3 truques. Você tem essas magias preparadas, e seus espaços de magia com base no seu nível são:"/>
                <Archetype style={{display: "none"}}  archetypelist={ArchetypeList.Atirador} name="Atirador" img={AtiradorIcon}  description="Você recebe o poder do combate à distância como dádiva. Ao escolher esse arquétipo, você ganha imediatamente +1 de Agilidade, além de ganhar proficiência com todas as armas marciais e simples à distancia, e todas as armas de fogo. Todos os seus tiros tem vantagem se os alvos não tiverem agido ainda no turno. Sua margem de crítico pra tiros com vantagem é 19. Ao ter vantagem contra um alvo e acertar um ataque no mesmo, adicione dados conforme a tabela no dano. Adicione sua metade de Agilidade + Pontaria ao dano ao invés de apenas Agilidade. "/>
                <Archetype style={{display: "none"}} archetypelist={ArchetypeList.Combatente} name="Combatente" img={CombatenteIcon}  description="Você recebe o poder do combate físico como dádiva. Ao escolher esse arquétipo, você ganha imediatamente +1 de Força ou +1 de Agilidade, além de ganhar proficiência com todas as armas marciais e simples corpo a corpo. Você pode fazer um ataque extra no seu turno um número de vezes conforme apresentado na tabela. Ao atacar uma criatura com uma arma corpo a corpo, some metade de seu atributo de Força ou Agilidade + Combate ao dano, ao invés de somente força/agilidade. Seus ataques desarmados agora são 1d8 + Força ao invés de 1."/>
                <Archetype style={{display: "none"}} archetypelist={ArchetypeList.Suporte} name="Suporte" img={SuporteIcon}  description="Você recebe o poder da assistência como dádiva. Ao escolher esse arquétipo, você ganha imediatamente poder arcano, além de ganhar +1 de Empatia.  O seu atributo de ataque mágico é o seu valor de Empatia. A DT pra resistir as suas magias são 10 + Empatia. Assim que você escolhe o arquétipo, escolha 3 magias de primeiro e/ou segundo circulo (da lista de magias de clérigo e paladino), assim como 2 truques. Você tem essas magias preparadas, e seus espaços de magia com base no seu nível são:"/>
                <Archetype style={{display: "none"}} archetypelist={[]} name="Defensor" img={DefensorIcon}  description="Você recebe o poder da defesa como dádiva. Ao escolher esse arquétipo, você ganha imediatamente +1 de HP, além de ganhar +1 de Força. Sua CA base agora é 12, além de ter proficiência com todas as armaduras e escudos. O bonus de CA se aplicará a todas as armaduras que você vestir, sendo assim, +2 na CA.Você imediatamente aprende a habilidade 'Provocar' (como na magia 'Duelo Compelido') A sua DT é 10 + Força."/>
            </div>
        </div>
    )
}