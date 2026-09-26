import react from "react";
import "../Styles/ItemPage.css"
import IconTeste from '../Images/Icons/DualSword.svg'
import SearchBar from "../Componentes/SearchBar";
import Item from "../Componentes/Item";
import Coin from '../Images/Icons/Coin.svg'
import Category from "../Images/Icons/Category.svg"
import ItemDatabase from "../database/Item.json"
import { useState } from "react";

export default function ItemPage()
{

    const [ItemSelected, UseItemSelected] = useState(
        {"Nome": "[Selecione um item]",
        "Categoria": "",
        "Valor do item": "",
        "Arma": {},
        "Classe de armadura": "",
        "Descrição": "",
        "Categoria da Armadura": "",
        "Força": "",
        "Furtividade": ""}
    )

    function SelecionarItem(event) {
        
        const ItemClicked = event.target.id
        const AllItens = Array.from(document.getElementsByClassName("Item"))
        const ArmorInfo = document.getElementById("armorInfo")
        const WeaponInfo = document.getElementById("weaponInfo")

        AllItens.map((data)=>{
            data.style.backgroundColor = "transparent"
        })

         event.target.style.backgroundColor = "#00d5ffad"
        
        ItemDatabase.map((data)=>{
            if(data.Nome == ItemClicked)
            {

                UseItemSelected(data)
                
                if(Object.keys(data.Arma).length == 0)
                {
                    WeaponInfo.style.display = "none"
                }
                else
                {
                    WeaponInfo.style.display = "block"
                }

                if(data["classe de armadura"] == "")
                {
                    ArmorInfo.style.display = "none"
                }
                else
                {
                    ArmorInfo.style.display = "flex"
                }
            }
        })

        console.log(ItemSelected)
    }

    return (
        <div className="ItemPage">
            <div className="ItemCategory">
                <button><img src={IconTeste}/></button>
                <button><img src={IconTeste}/></button>
                <button><img src={IconTeste}/></button>
                <button><img src={IconTeste}/></button>
                <button><img src={IconTeste}/></button>
                <button><img src={IconTeste}/></button>
            </div>
            <div className="Itens">
               <SearchBar width="99%"/>
                
                <div className="Itens-Container">
                   {
                    ItemDatabase.map((data)=>(
                        <Item click={(event)=>{SelecionarItem(event)}} Nome={data.Nome} Categoria={data.Categoria} Valor={data["Valor do item"]}/>
                    ))
                   }
                </div>
            </div>
            <div className="ItensInfo">
                <div className="ItemInfo1">
                    <h1>{ItemSelected["Nome"]}</h1>
                    <textarea readOnly value={ItemSelected["descrição"]}/>
                </div>
                <div className="ItemInfo2">
                    <h2><img src={Category}/>{"Categoria do item: " + ItemSelected["Categoria"]}</h2>
                    <h2><img src={Coin}/>{"Valor do item: " + ItemSelected["Valor do item"]}</h2>
                </div>
                <div className="ItemInfo3">
                    
                    <div className="weaponInfo" id="weaponInfo">
                        <div className="wpInfo2">
                            <h2>{"Propriedades: " + ItemSelected["Arma"]["Propriedades"]}</h2>
                        </div>
                        <div className="wpInfo1">
                            <h2>{"Bonus de Ataque: " + "+" + ItemSelected["Arma"]["Bônus de Ataque"]}</h2>
                            <h2>{"Dano da arma: " + ItemSelected["Arma"]["Dano da arma"]}</h2>
                        </div>
                    </div>

                    <div className="armorInfo" id="armorInfo">
                        <h2>{"Classe de Armadura: " + ItemSelected["Classe de armadura"]}</h2>
                    </div>
                </div>
                <button className="BuyItemButton">Comprar</button>
            </div>
        </div>
    )
}