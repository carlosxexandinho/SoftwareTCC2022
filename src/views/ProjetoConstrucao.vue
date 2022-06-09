<script setup>
import { computed, reactive, ref } from "vue";
import calculoSedop, {data_terreno, caract_projeto} from '../db_and_func/calc_total_sedop'
import { ambientes, resultTotalAmb, deleteAmbiente, addAmbiente } from '../db_and_func/calculo_total_ambiente'
//import CUB_EQUIV from '../db_and_func/CubEquiv'

//------------ Components --------------- //
import TotalParcial from '../components/TotalParcial.vue'


const CUB_ATUAL = 2025.71; // cub para mes de abril 2022

const resumo = computed(()=>{
    var final = []
    var filtrado = (calculoSedop.value[4]).forEach((e)=>{
        if(e.length > 0){
            e.forEach((item)=>{
                final.push(item)
            })
        }
    })

    return final
})

const resultTotalCubPA = computed(() => {
    var dados = resultTotalAmb.value.areaequivalente;
    return (dados * CUB_ATUAL).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
})
</script>

<template>
  <div class="main">
    <h1>Composição de dados do Projeto</h1>

    <!-- <table border="1">
        <tr>
            <td><b>Banco</b></td>
            <td><b>Descrição</b></td>
            <td><b>Und</b></td>
            <td><b>Quant.</b></td>
            <td><b>Valor Unit</b></td>
            <td><b>Total</b></td>
        </tr>
        <tr v-for="(insumo, i) in resumo" :key="i">
            <td>{{insumo.banco}}</td>
            <td style="text-align:left">{{insumo.descricao}}</td>
            <td>{{insumo.und}}</td>
            <td>{{insumo.quant}}</td>
            <td>{{insumo.valorUnit}}</td>
            <td>{{insumo.total}}</td>
        </tr>
    </table> -->

        <!-- <pre>-- {{ calculoSedop[3] }} --</pre> -->
        <div class="sign">
            <div class="align">
                <div style="text-align: left">Cliente:</div>
                <div> 
                    <select name="" id="">
                        <option value="">CARLOS ALEXANDRE DIAS SILVA </option>
                    </select>
                </div>
            </div>
            <div class="align">
                <div style="text-align: left">Area do Terreno (m²):</div>
                <div> <input type="text" placeholder="0,00" v-model="data_terreno.area"> </div>
            </div>
            <div class="align">
                <div style="text-align: left">Perimetro do Terreno (m):</div>
                <div> <input type="text" placeholder="0,00" v-model="data_terreno.perimetro"> </div>
            </div>

        <fieldset>
            <div class="title">Configuração dos Ambientes:</div>
           
            <div class="align2" v-for="amb in ambientes" :key="amb.id">
                <div style="text-align: left">Ambiente {{amb.id}}:</div>
                <div> 
                    <select name="" id="" v-model="amb.nome">
                        <option disabled>--Selecione--</option>
                        <option>Dormitorio</option>
                        <option>Suite</option>
                        <option>Suite Master</option>
                        <option>Area de Serviço</option>
                        <option>Cozinha</option>
                        <option>Sala de Estar</option>
                        <option>Sala de Jantar</option>
                        <option>Banheiro</option>
                        <option>Banheiro Social</option>
                        <option>Hall</option>
                        <option>Depósito</option>
                        <option>Area Livre</option>
                        <option>Garagem Coberta</option>
                        <option>Garagem Descoberta</option>
                    </select>
                </div>
                <div style="text-align: left">Dimensões:</div>
                <div> <input type="text" placeholder="0.00" v-model="amb.ladoA"> </div>
                <div> <input type="text" placeholder="0.00" v-model="amb.ladoB"> </div>
                <div>  <button type="submit" @click="deleteAmbiente(amb.id)">X</button> </div>
            </div>
            
            <h3><a id="addambiente" href="javascript: ;" @click="addAmbiente">+ Adicionar Ambiente <i class="bi bi-node-plus"></i> </a></h3>
        </fieldset>
            <h3><span id="areatotal">Área Total: {{resultTotalAmb.areatotal }}m²</span> | <span id="areatotalequivalent">Área Equivalente: {{ resultTotalAmb.areaequivalente }}m²</span></h3>


            
            <div id="custototal">
                <div>
                    <span><b>CUB-PA</b></span>
                    <span>{{ resultTotalCubPA }}</span>
                    <span style="font-size: 15px;">{{CUB_ATUAL.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL',  })}}/m²</span>
                </div>
                <div>
                    <span><b>SEDOP</b></span>
                    <span>{{ calculoSedop[1] }}</span>
                    <span style="font-size: 15px;">CUB: R$ {{ (calculoSedop[2] / resultTotalAmb.areatotal).toFixed(2) }} /m²</span>
                </div>
            </div>


            <!-- ---------------------- -->
            <div class="title">Custos básicos:</div>
            <!-- ---------------------- -->

            <div class="align" style="grid-template-columns: 5.5fr 2fr;">
                <div style="text-align: left"> 
                    Custo parcial de serviços preliminares, movimento de terra, estruturas, <br> paredes e painéis, revestimentos (reboco), pisos e limpeza final da obra. 
                </div>
                <TotalParcial :total="(calculoSedop[3][0])" />
            </div>

            <!-- ---------------------- -->
            <div class="title">Projetos:</div>
            <!-- ---------------------- -->

            <div class="align">
                <div style="text-align: left">Projeto:</div>
                <div> 
                    <select name="" id="" v-model="caract_projeto.projeto">
                        <option value="0">Selecione</option>
                        <option  disabled="disabled">----------------------</option>
                        <option value="1">Arquitetonico</option>
                        <option value="2">Elétrico</option>
                        <option value="3">Hidrossanitário</option>
                        <option value="4">Arquitetonico + Elétrico</option>
                        <option value="5">Arquitetonico + Hidrossanitário</option>
                        <option value="6">Elétrico + Hidrossanitário</option>
                        <option value="7">Elétrico + Hidrossanitário + Arquitetonico</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][1])" />
            </div>

            <!-- ---------------------- -->
            <div class="title">Fundações:</div>
            <!-- ---------------------- -->
            
            <div class="align">
                <div style="text-align: left">Fundação Superficial:</div>
                <div> 
                    <select name="" id="" v-model="caract_projeto.fundacoes">
                        <option value="0">Selecione</option>
                        <option  disabled="disabled">----------------------</option>
                        <option value="0">Não Considerar</option>
                        <option value="1">Baldrame de concreto simples</option>
                        <option value="2">Baldrame de concreto armado</option>
                        <option value="3">Fundação corrida com seixo</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][2])" />
            </div>



            <div class="title">Acabamentos do projeto:</div>
            <!-- *************************************************** -->

            
            <div class="align">
                <div style="text-align: left">Cobertura:</div>
                <div> 
                    <select name="" id="" v-model="caract_projeto.cobertura">
                        <option value="0">Selecione</option>
                        <option  disabled="disabled">----------------------</option>
                        <option value="1">Telha Cerâmica</option>
                        <option value="2">Telha Fibrocimento</option>
                        <option value="3">Telha Zinco</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][3])" />
            </div>
            <div class="align">
                <div style="text-align: left">Piso:</div>
                <div> 
                    <select name="" aria-label="select" class="form-control" v-model="caract_projeto.pisos">
                        <option value="0">Selecione</option>
                        <option  disabled="disabled">----------------------</option>
                        <option value="1">Cerâmica Simples (Padrão Médio)</option>
                        <option value="2">Porcelanato (Padrão Alto)</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][4])" />
            </div>
            <div class="align">
                <div style="text-align: left">Esquadrias:</div>
                <div> 
                    <select name="" id="" v-model="caract_projeto.esquadrias">
                        <option value="0">Selecione</option>
                        <option disabled="disabled">----------------------</option>
                        <option value="1">Esquadrias de Madeira e MDF</option>
                        <option value="2">Esquadrias - porta madeira / janela aluminio anodizado</option>
                        <option value="3">Esquadrias Vidro</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][5])" />
            </div>
            <div class="align">
                <div style="text-align: left">Forro:</div>
                <div> 
                    <select name="" v-model="caract_projeto.forro">
                        <option value="0">Selecione</option>
                        <option  disabled="disabled">----------------------</option>
                        <option value="0">Sem Forro</option>
                        <option value="1">Em Lambri de PVC</option>
                        <option value="2">Em Gesso Acartonado - Aramado</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][6])" />
            </div>
            <div class="align">
                <div style="text-align: left">Pintura:</div>
                <div> 
                    <select name="" id="" v-model="caract_projeto.pintura">
                        <option value="0">Selecione</option>
                        <option  disabled="disabled">----------------------</option>
                        <option value="0">Sem Pintura</option>
                        <option value="1">Pintura PVA simples sem Emassamento</option>
                        <option value="2">Pintura PVA simples com Emassamento</option>
                        <option value="3">Pintura Acrilica com Emassamento</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][7])" />
            </div>
            <div class="align">
                <div style="text-align: left">Muro:</div>
                <div> 
                    <select name="" id="" v-model="caract_projeto.muro">
                        <option value="0">Selecione</option>
                        <option  disabled="disabled">----------------------</option>
                        <option value="0">Nao considerar</option>
                        <option value="1">Considerar muro em alvenaria rebocado e pintado (h=2.50m)</option>
                        <option value="2">Considerar muro em alvenaria rebocado e pintado (h=2.00m)</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][8])" />
            </div>

            <div class="title">Instalações:</div>
            <!-- *************************************************** -->

            <div class="align">
                <div style="text-align: left">Instalação Elétrica:</div>
                <div> 
                    <select v-model="caract_projeto.inst_eletrica">
                        <option value="1">Considerar</option>
                        <option value="0">Não Considerar</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][9])" />
            </div>
            <div class="align">
                <div style="text-align: left">Instalação Hidrossanitário:</div>
                <div> 
                    <select v-model="caract_projeto.inst_hidros">
                        <option value="1">Considerar (Padrão Médio)</option>
                        <option value="2">Considerar (Padrão Alto)</option>
                        <option value="0">Não considerar</option>
                    </select>
                </div>
                <TotalParcial :total="(calculoSedop[3][10])" />
            </div>

        <!--
            <div class="title">Profissionais:</div>

            <div class="align">
                <div style="text-align: left">Engenheiro:</div>
                <div> 
                    <select name="" id="">
                        <option>Sim</option>
                        <option selected>Não</option>
                    </select>
                </div>
            </div>
            <div class="align">
                <div style="text-align: left">Arquiteto:</div>
                <div> 
                    <select name="" id="">
                        <option>Sim</option>
                        <option selected>Não</option>
                    </select>
                </div>
            </div>
        -->

            <div class="title">Remunerações:</div>
            <!-- *************************************************** -->
            <div class="align">
                <div style="text-align: left">Benefícios e Despesas Indiretas (BDI):</div>
                <div> 
                    <input type="text" name="" id="" v-model="caract_projeto.BDI" placeholder="BDI em % Ex. 29.00%">
                </div>
            </div>


            <div class="">
                <button type="submit" style="margin: 15px 0">Gerar Orçamento Discriminado</button>
            </div>

            <div>
                <b>Custo final de construção (Preço base maio de 2022):</b>
            </div>
            <div id="custototal">
                <div>
                    <span><b>CUB-PA</b></span>
                    <span>{{ resultTotalCubPA }}</span>
                    <span style="font-size: 15px;">{{CUB_ATUAL.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL',  })}}/m²</span>
                </div>
                <div>
                    <span><b>SEDOP</b></span>
                    <span>{{ calculoSedop[1] }}</span>
                    <span style="font-size: 15px;">CUB: R$ {{ (calculoSedop[2] / resultTotalAmb.areatotal).toFixed(2) }} /m²</span>
                </div>
            </div>

        </div>

        <div style="margin: 40px 0 20px; font-size: 13px;">
            Software desenvolvido por <b>CARLOS ALEXANDRE DIAS SILVA</b> <br />
            Maio 2022 - Santarém / PA <br>
            <img src="../assets/CarlosAssinatura.jpg" alt="" width="200">
        </div>


</div>
</template>

<style scoped>
    button{
        cursor: pointer;
    }
    table{
        margin: 30px 0;
    }
    td{
        padding: 4px;
    }
    fieldset{
        margin: 15px 0 2px;
        border-radius: 10px;
        border: solid 1px #c9c9c9;
    }
    div.title{
        font-size: 14px;
        text-align: left;
        margin: 15px 0;
        color: #b94812;
    }
    div.main{
        width: 70%;
        margin: 0 auto;
        border: solid 1px #3caf7b;
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 80px;
    }
    .align2{
        grid-template-columns: 1fr 2fr 1fr 1fr 1fr 0.5fr;
        display: grid;
        align-items: center;
        grid-gap: 5px;
    }
    #addambiente{
        padding: 7px;
        background: #3bae7a;
        color: white;
        border-radius: 5px;
    }
    #areatotal{
        padding: 7px;
        background: #1e5ca3;
        color: white;
        border-radius: 5px;
    }
    #areatotalequivalent{
        padding: 7px;
        background: #7e6341;
        color: white;
        border-radius: 5px;
    }
    #custototal{
        padding: 15px;
        font-size: 25px;
        display: grid;
        grid-gap: 15px;
        justify-content: space-evenly;
        grid-template-columns: 1fr 1fr;
    }

    #custototal div{
        background: #dbeaef;
        border-radius: 10px;
        padding: 8px;
        display: flex;
        flex-direction: column;
    }
</style>
