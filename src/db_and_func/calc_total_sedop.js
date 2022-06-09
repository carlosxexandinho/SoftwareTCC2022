import { computed, reactive, ref } from "vue";
import db_insumos_basicos from "./db_insumos_basicos";
import { ambientes, resultTotalAmb } from './calculo_total_ambiente'

// funções e composições das caracteristicas dos projetos
/*------------------------------------------------------------*/
import carac_projetos from './caracteristica/projeto'
import carac_fundacoes from './caracteristica/fundacoes'
import carac_cobertura from './caracteristica/cobertura'
import carac_pisos from './caracteristica/pisos'
import carac_muro from './caracteristica/muro'
import carac_pintura from './caracteristica/pintura'
import carac_esquadrias from './caracteristica/esquadrias'
import carac_forro from './caracteristica/forro'
import carac_inst_eletrica from './caracteristica/inst_eletrica'
import carac_inst_hidros from './caracteristica/inst_hidros'
/*------------------------------------------------------------*/

const db_insumos = db_insumos_basicos()

const data_terreno = reactive({
     area: '300.00',
     perimetro: '80.00'
})

/*
     os elementos sao selecionados por numeros
     onde 0 represenha nenhuma seleção
     - verificar o arquivo ProjetoConstrucao.vue nos selects dos projetos para saber o
     - significado de cada select
*/
const caract_projeto = reactive({
     projeto: '0',
     fundacoes: '0',
     cobertura: '0',
     pisos: '0',
     muro: '0',
     pintura: '0',
     esquadrias: '0',
     forro: '0',
     inst_eletrica: '1',
     inst_hidros: '1',
     BDI: '',
})


const calcSedop = computed(()=>{
     
     const params = {
          areaTerreno: data_terreno.area, // area do terreno
          perimetro: data_terreno.perimetro, // perimetro do terro
          perimetroVirtual: (resultTotalAmb.value.areatotal * 0.1) / 0.12 , // perimetro virutal | Parede 12cm
          areaProjetoTotal: resultTotalAmb.value.areatotal,
          quantAmbientes: ambientes.value.length,
          nomesAmbientes: (ambientes.value).map( i => i.nome ),
     }
     console.log('-- Paramentros Usados --- \n', params);


     function map_normalize(insumos){
          var quantidade = insumos.calc(params)
          return {
               banco: insumos.banco,
               descricao: insumos.descricao,
               und: insumos.und,
               valorUnit: parseFloat(insumos.valorUnit),
               quant: parseFloat(quantidade.toFixed(2)),
               total: parseFloat((insumos.valorUnit * quantidade).toFixed(2))
          }
     }

     const final_insumos_basicos = db_insumos.map(map_normalize)
     const final_insumos_projetos = carac_projetos(caract_projeto.projeto).map(map_normalize)
     
     const custo_final = [
          db_insumos.map(map_normalize),
          carac_projetos(caract_projeto.projeto).map(map_normalize),
          carac_fundacoes(caract_projeto.fundacoes).map(map_normalize),
          carac_cobertura(caract_projeto.cobertura).map(map_normalize),
          carac_pisos(caract_projeto.pisos).map(map_normalize),
          carac_esquadrias(caract_projeto.esquadrias).map(map_normalize),
          carac_forro(caract_projeto.forro).map(map_normalize),
          carac_pintura(caract_projeto.pintura).map(map_normalize),
          carac_muro(caract_projeto.muro).map(map_normalize),
          carac_inst_eletrica(caract_projeto.inst_eletrica).map(map_normalize),
          carac_inst_hidros(caract_projeto.inst_hidros).map(map_normalize),
     ]

     //console.log(custo_final);

     const soma_mapeado = custo_final.map((elem)=>{
          return elem.reduce((acc, elem)=>{
               return acc += elem.total
          }, 0)
     })
     console.log('Total de cada Grupo:', soma_mapeado);

     // variavel que armazena o custo final somando todos os
     // custos e variações de composições de insumos
     // - se houver BDI inserido , faz-se a multiplicação pelo BDI
     const BDI = caract_projeto.BDI;
     const custo_total_final = (soma_mapeado.reduce((acc, elem) => acc += elem , 0)) * ((BDI/100)+1)
     
     /*
          - final: objeto completo sem tratamento
          - custo_total_final.toLocaleString : com formatação para moeda BRL
          - custo_total_final: valor total sem tratamento
     */
     return [
          final_insumos_basicos,
          (custo_total_final).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL',  }),
          custo_total_final,
          soma_mapeado,
          custo_final,
     ]

})




export default calcSedop 

export { data_terreno, caract_projeto }